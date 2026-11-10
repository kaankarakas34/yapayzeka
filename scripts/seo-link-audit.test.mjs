import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, mkdir, writeFile, rm, readFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { resolve, dirname, basename } from 'node:path'
import { spawnSync } from 'node:child_process'
import { auditLinks } from './seo-link-audit.mjs'

const origin = 'https://www.yapayzekadareklam.com'
async function fixture(t, { home, guide = '<h1 id="ölçüm">Rehber</h1>', files = {}, source = false, extra = {} }) {
  const root = await mkdtemp(resolve(tmpdir(), 'yzr-links-'))
  assert.equal(dirname(root), resolve(tmpdir()))
  assert.match(basename(root), /^yzr-links-[a-z\d]+$/i)
  // Only this exact directory returned by mkdtemp is removed after the test.
  t.after(() => rm(root, { recursive: true, force: true }))
  const pages = { '/': home, '/rehber/': guide, ...extra }
  const sitemap = '<urlset>' + Object.keys(pages).map(path => `<url><loc>${origin}${path}</loc></url>`).join('') + '</urlset>'
  for (const [file, content] of Object.entries({
    [source ? 'public/sitemap.xml' : 'sitemap.xml']: sitemap,
    ...Object.fromEntries(Object.entries(pages).map(([path, html]) => [path.slice(1) + 'index.html', html])),
    ...files,
  })) {
    const target = resolve(root, file)
    await mkdir(dirname(target), { recursive: true })
    await writeFile(target, content)
  }
  return root
}

test('resolves encoded Turkish fragments, relative URLs, legacy anchors and public assets', async t => {
  const root = await fixture(t, {
    source: true,
    home: '<a href="/rehber/#%C3%B6l%C3%A7%C3%BCm">Ölçüm</a><img src="/cover.webp?v=2"><link rel="preload" href="/font.woff2"><script src="/app.js"></script>',
    guide: '<h1 id="ölç&#252;m">Rehber</h1><a href="../#top">Ana sayfa</a><a name="eski"></a><a href="#eski">Arşiv</a><a href="#:~:text=Rehber">Metin</a><a href="#%C3%B6l%C3%A7%C3%BCm:~:text=Rehber">Bölüm ve metin</a>',
    files: { 'public/cover.webp': 'image', 'public/font.woff2': 'font', 'public/app.js': '' },
  })
  const result = await auditLinks({ root })
  assert.deepEqual(result.issues, [])
  assert.equal(result.pages.find(page => page.path === '/rehber/').depthFromHome, 1)
  assert.equal(result.assetCount, 3)
})

test('detects missing cross-page fragments and malformed percent escapes', async t => {
  const root = await fixture(t, { home: '<a href="/rehber/#kayip">Eksik</a><a href="/rehber/#%ZZ">Bozuk</a>' })
  const result = await auditLinks({ root })
  assert.deepEqual(result.issues.map(issue => issue.rule).sort(), ['broken-fragment', 'invalid-fragment'])
})

test('fails for missing srcset, social image, script, font and linked download', async t => {
  const root = await fixture(t, {
    home: '<a href="/rehber/">Rehber</a><a href="/rapor.pdf">PDF</a><img srcset="/small.webp 480w, /large.webp 1200w"><meta property="og:image" content="' + origin + '/social.png"><script src="/missing.js"></script><link rel="preload" href="/missing.woff2">',
    files: { 'small.webp': 'image' },
  })
  const result = await auditLinks({ root })
  assert.deepEqual(result.issues.map(issue => [issue.rule, issue.target]).sort(), [
    ['broken-link', '/rapor.pdf'],
    ['missing-asset', '/large.webp'],
    ['missing-asset', origin + '/social.png'],
    ['missing-asset', '/missing.js'],
    ['missing-asset', '/missing.woff2'],
  ].sort())
})

test('does not treat scripts, comments, escaped examples or external URLs as local links', async t => {
  const root = await fixture(t, {
    home: '<a href="/rehber/">Rehber</a><!-- <a href="/absent/"> --><script>const sample = \'<a href="/fake/">\'</script><pre>&lt;a href="/example/"&gt;</pre><a href="mailto:test@example.com">E-posta</a><a href="https://example.com/#missing">Kaynak</a><img src="https://example.com/image.png"><img src="data:image/png;base64,AAAA">',
  })
  assert.deepEqual((await auditLinks({ root })).issues, [])
})

test('finds duplicate IDs and disconnected page cycles', async t => {
  const root = await fixture(t, {
    home: '<a href="/rehber/">Rehber</a><h2 id="tekrar">A</h2><p id="tekrar">B</p>',
    extra: { '/yetim-a/': '<a href="/yetim-b/">B</a>', '/yetim-b/': '<a href="/yetim-a/">A</a>' },
  })
  const result = await auditLinks({ root })
  assert.deepEqual(result.issues.map(issue => [issue.path, issue.rule]), [
    ['/', 'duplicate-id'], ['/yetim-a/', 'unreachable-from-home'], ['/yetim-b/', 'unreachable-from-home'],
  ])
})

test('CLI exits unsuccessfully and writes evidence when a publish contains a broken link', async t => {
  const root = await fixture(t, { home: '<a href="/rehber/">Rehber</a><a href="/missing/">Kayıp</a>' })
  const output = resolve(root, 'report.json')
  const command = spawnSync(process.execPath, ['scripts/seo-link-audit.mjs', '--root', root, '--output', output], { encoding: 'utf8' })
  assert.equal(command.status, 1, command.stderr)
  assert.equal(JSON.parse(await readFile(output, 'utf8')).issues[0].rule, 'broken-link')
})
