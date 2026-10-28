import type { ComponentType } from 'react'
import type { ArticleProps } from './NewArticles'
import newsRoutePaths from './content/news-route-paths.json'
import guideRoutePaths from './content/guide-route-paths.json'

const articleRoutes: Record<string, () => Promise<ComponentType<ArticleProps>>> = {
  '/chatgpt-reklam-verme': () => import('./NewsAndGuides').then(module => module.ChatGPTGuideUpdatedPage),
  '/chatgptde-markam-nasil-cikar': () => import('./NewArticles').then(module => module.ChatGptdeMarkamNasilCikarPage),
  '/openai-ads-manager': () => import('./NewsAndGuides').then(module => module.OpenAIAdsManagerPage),
  '/chatgpt-reklam-fiyatlari': () => import('./NewsAndGuides').then(module => module.ChatGPTPriceUpdatedPage),
  '/haberler/chatgpt-ads-60-ulkeye-ulasti': () => import('./NewsAndGuides').then(module => module.ChatGptAds60UlkePage),
  '/haberler/sponsored-agents-duyuruldu': () => import('./NewsAndGuides').then(module => module.SponsoredAgentsPage),
  '/blog/markam-chatgptde-neden-gorunmuyor': () => import('./NewArticles').then(module => module.MarkamNedenGorunmuyorPage),
  '/blog/chatgptde-kaynak-gosterilmek-icin-site-nasil-hazirlanir': () => import('./NewArticles').then(module => module.KaynakGosterilmekIcinSitePage),
  '/blog/geo-performansi-nasil-olculur': () => import('./NewArticles').then(module => module.GeoPerformansiNasilOlculurPage),
  '/blog/chatgpt-reklam-kampanyasi-nasil-planlanir': () => import('./NewArticles').then(module => module.ChatGptReklamKampanyasiPlanlamaPage),
  '/blog/chatgpt-reklamlari-icin-acilis-sayfasi-kontrol-listesi': () => import('./NewArticles').then(module => module.ChatGptAcilisSayfasiKontrolPage),
  '/blog/chatgpt-reklami-mi-google-ads-mi': () => import('./NewArticles').then(module => module.ChatGptReklamiMiGoogleAdsMiPage),
  '/chatgpt-seo': () => import('./NewArticles').then(module => module.ChatGptSeoPage),
  '/chatgptde-web-sitem-neden-cikmiyor': () => import('./NewArticles').then(module => module.ChatGptdeWebSitemNedenCikmiyorPage),
  '/sozluk': () => import('./NewArticles').then(module => module.SozlukPage),
  '/chatgpt-reklamlari-nerede-gorunur': () => import('./NewArticles').then(module => module.ChatGptReklamlariNeredeGorunurPage),
  '/chatgpt-reklam-verme-sartlari': () => import('./NewArticles').then(module => module.ChatGptReklamVermeSartlariPage),
  '/chatgpt-reklam-ajansi-nasil-secilir': () => import('./NewArticles').then(module => module.ChatGptReklamAjansiNasilSecilirPage),
}

// Resolve the current page before replacing its existing static HTML.
export async function loadPage(): Promise<ComponentType> {
  const path = location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/') return (await import('./Home')).default
  if (path === '/haberler' || path === '/rehber' || newsRoutePaths.includes(path) || guideRoutePaths.includes(path)) return (await import('./NewsPages')).default
  const loadArticle = articleRoutes[path]
  if (loadArticle) {
    const [{ Detail, Arrow }, Article] = await Promise.all([import('./DetailLayout'), loadArticle()])
    return function ArticleRoute() { return <Article Detail={Detail} Arrow={Arrow} /> }
  }
  return (await import('./DetailPages')).default
}
