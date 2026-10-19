import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { loadPage } from './App'
import './style.css'

loadPage().then(Page => {
  createRoot(document.getElementById('app')!).render(
    <StrictMode>
      <Page />
    </StrictMode>,
  )
}).catch(error => {
  // Keep the pre-rendered article and its links available if a chunk fails.
  console.error('Sayfa etkileşimleri yüklenemedi.', error)
  const notice = document.createElement('div')
  notice.className = 'page-load-error'
  notice.setAttribute('role', 'alert')
  const message = document.createElement('p')
  message.textContent = 'Sayfa etkileşimleri yüklenemedi. İçeriği okuyabilir veya sayfayı yeniden yükleyebilirsiniz.'
  const retry = document.createElement('button')
  retry.type = 'button'
  retry.textContent = 'Yeniden yükle'
  retry.addEventListener('click', () => location.reload())
  notice.append(message, retry)
  document.body.prepend(notice)
})
