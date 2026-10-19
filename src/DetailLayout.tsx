import { type ReactNode } from 'react'
import { Layout, updated, Arrow } from './SiteChrome'

type DetailProps = { eyebrow: string; title: string; summary: string; children: ReactNode; cta?: string }

function Detail({ eyebrow, title, summary, children, cta = 'Ücretsiz Ön Analiz İsteyin' }: DetailProps) {
  return (
    <Layout>
      <main id="main-content" tabIndex={-1}>
        <section className="detail-hero section-pad">
          <div className="model-badge">
            <i /> {eyebrow} · {updated}
          </div>
          <h1>{title}</h1>
          <p>{summary}</p>
          <a className="button primary" href="/iletisim/">
            {cta} <Arrow />
          </a>
        </section>
        <section className="detail-body section-pad">{children}</section>
      </main>
    </Layout>
  )
}

export { Detail }
export type { DetailProps }
export { Arrow } from './SiteChrome'
