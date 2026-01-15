import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue'),
    meta: {
      title: 'Certified Welding Inspector in Austin, TX | Hinkle Inspection & Testing',
      description: 'Certified Welding Inspector (CWI) serving Austin and Central Texas. Welding inspection, QA/QC support, welder qualification testing, bend tests, and macro etch testing.'
    }
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('@/views/GalleryPage.vue'),
    meta: {
      title: 'Welding Inspection Project Gallery | Hinkle Inspection & Testing',
      description: 'Photos from welding inspection, welder qualification, bend testing, and QA/QC work in Austin and Central Texas.'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutPage.vue'),
    meta: {
      title: 'About Thomas Hinkle, CWI | Hinkle Inspection & Testing',
      description: 'Learn about Thomas Hinkle, Certified Welding Inspector (CWI) providing welding inspection and testing services in Austin and Central Texas.'
    }
  },
  {
    path: '/tos',
    name: 'tos',
    component: () => import('@/views/PrivacyTermsPage.vue'),
    meta: {
      title: 'Privacy Policy and Terms | Hinkle Inspection & Testing',
      description: 'Privacy policy and terms of service for Hinkle Inspection & Testing.'
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) {
      return saved
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 70,
      }
    }
    
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const title = (to.meta.title as string) || 'Hinkle Inspection & Testing'
  const description = (to.meta.description as string) || ''
  const baseUrl = 'https://www.hinkletesting.com'

  document.title = title

  const upsertMeta = (selector: string, attrs: Record<string, string>) => {
    let el = document.head.querySelector(selector) as HTMLMetaElement | null
    if (!el) {
      el = document.createElement('meta')
      Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v))
      document.head.appendChild(el)
      return
    }
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v))
  }

  // Description
  upsertMeta('meta[name="description"]', { name: 'description', content: description })

  // Canonical for hash routing should point to the base path, with hash for internal routes.
  const canonicalHref = to.path === '/' ? `${baseUrl}/` : `${baseUrl}/#${to.fullPath}`

  let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', canonicalHref)

  // OG tags
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
  upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalHref })
  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
  upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Hinkle Inspection & Testing' })
  upsertMeta('meta[property="og:image"]', {
    property: 'og:image',
    content: `${baseUrl}/assets/og.png`,
  })

  // Twitter tags
  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: `${baseUrl}/assets/og.png` })
})


export default router