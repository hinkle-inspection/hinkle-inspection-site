import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue'),
    meta: {
      title: 'Hinkle Inspection & Testing - Certified Welding Inspector',
      description: 'Professional welding inspection and testing services with certified expertise.'
    }
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('@/views/GalleryPage.vue'),
    meta: {
      title: 'Project Gallery - Hinkle Inspection & Testing',
      description: 'View our recent welding inspection and testing projects.'
    }
  }
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
  const title = to.meta.title as string || 'Hinkle Inspection & Testing'
  const description = to.meta.description as string || ''
  
  document.title = title
  
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', description)
  }
})

export default router