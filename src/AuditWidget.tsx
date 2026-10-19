import { useEffect, useRef, useState, type ComponentType } from 'react'

type AuditProps = { standalone?: boolean }

// Home defers the interactive scanner; its dedicated page loads it immediately.
export function AuditWidget({ eager = false }: { eager?: boolean }) {
  const container = useRef<HTMLDivElement>(null)
  const [requested, setRequested] = useState(eager)
  const [Audit, setAudit] = useState<ComponentType<AuditProps> | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (requested) return
    if (!('IntersectionObserver' in window)) { setRequested(true); return }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setRequested(true)
        observer.disconnect()
      }
    }, { rootMargin: '400px' })
    if (container.current) observer.observe(container.current)
    return () => observer.disconnect()
  }, [requested])

  useEffect(() => {
    if (!requested) return
    let active = true
    setFailed(false)
    import('./AuditModule').then(module => {
      if (active) setAudit(() => module.AuditModule)
    }).catch(() => { if (active) setFailed(true) })
    return () => { active = false }
  }, [requested])

  const Heading = eager ? 'h1' : 'h2'
  return (
    <div ref={container} className={`audit-widget ${Audit ? 'is-ready' : 'is-pending'}`}>
      {Audit ? <Audit standalone={eager} /> : (
        <div className="audit-widget-placeholder">
          <Heading>Yapay Zekâ Görünürlüğünüzü Test Edin</Heading>
          <p>Web siteniz ve hedefleriniz için analiz formunu açın.</p>
          {failed ? (
            <>
              <p role="status">Analiz formu yüklenemedi. Tekrar deneyebilir veya iletişim sayfasından bize ulaşabilirsiniz.</p>
              <button className="button secondary" type="button" onClick={() => location.reload()}>Tekrar dene</button>
              <a className="button primary" href="/iletisim/">İletişime geç</a>
            </>
          ) : requested ? <p role="status">Analiz formu yükleniyor…</p> : (
            <button className="button primary" type="button" onClick={() => setRequested(true)}>Analiz formunu aç</button>
          )}
        </div>
      )}
    </div>
  )
}
