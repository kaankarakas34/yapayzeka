import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { gzipSync } from 'node:zlib'

const args = process.argv.slice(2)
const option = (flag, fallback) => args.includes(flag) ? args[args.indexOf(flag) + 1] : fallback
const root = resolve(option('--root', 'dist'))
const manifest = JSON.parse(await readFile(resolve(root, '.vite/manifest.json'), 'utf8'))
const initial = new Set()
const visit = key => {
  if (initial.has(key)) return
  const chunk = manifest[key]
  if (!chunk) throw new Error(`Missing bundle manifest entry: ${key}`)
  initial.add(key)
  for (const dependency of chunk.imports ?? []) visit(dependency)
}
const html = await readFile(resolve(root, 'index.html'), 'utf8')
const moduleTag = [...html.matchAll(/<script\b[^>]*>/gi)].map(match => match[0]).find(tag => /\btype=["']module["']/i.test(tag))
const entryFile = moduleTag?.match(/\bsrc=["']([^"']+)["']/i)?.[1].replace(/^\//, '')
const entryKey = Object.keys(manifest).find(key => manifest[key].file === entryFile)
if (!entryKey) throw new Error('Home HTML entry module is missing from the build manifest')
visit(entryKey)
visit('src/Home.tsx')
const deferred = ['src/AuditModule.tsx', 'src/NewArticles.tsx', 'src/NewsAndGuides.tsx', 'src/DetailPages.tsx']
const failures = deferred.filter(key => !manifest[key] || initial.has(key)).map(key => `Expected a separate, deferred chunk: ${key}`)
const files = []
for (const key of initial) {
  const file = manifest[key].file
  if (!file.endsWith('.js')) continue
  const bytes = await readFile(resolve(root, file))
  files.push({ file, bytes: bytes.length, gzipBytes: gzipSync(bytes).length })
}
const homeJsBytes = files.reduce((total, file) => total + file.bytes, 0)
const homeGzipBytes = files.reduce((total, file) => total + file.gzipBytes, 0)
const budgetBytes = 340_000
if (homeJsBytes > budgetBytes) failures.push(`Home JavaScript ${homeJsBytes} exceeds ${budgetBytes} bytes`)
const report = {
  checkedAt: new Date().toISOString(), homeJsBytes, homeGzipBytes, budgetBytes,
  evidence: 'Manifest graph for the entry and home page, following static imports only. Raw and gzip file sizes; not a runtime speed score or a field measurement.',
  files, deferred, failures,
}
const output = resolve(option('--output', 'output/seo/bundle-gate.json'))
await mkdir(dirname(output), { recursive: true })
await writeFile(output, JSON.stringify(report, null, 2) + '\n')
console.log(JSON.stringify({ output, homeJsBytes, homeGzipBytes, budgetBytes, failures }, null, 2))
if (failures.length) process.exitCode = 1
