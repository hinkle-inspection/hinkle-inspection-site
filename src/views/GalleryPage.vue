<template>
  <div class="gallery-page">
    <div class="gallery-page__header">
      <h1 class="gallery-page__title">Project Gallery</h1>
      <p class="gallery-page__subtitle">
        Recent welding inspection and testing projects showcasing our expertise and attention to detail.
      </p>
    </div>

    <div class="gallery-page__grid">
      <div
        v-for="(image, idx) in galleryImages"
        :key="idx"
        class="gallery-page__item"
        @click="openLightbox(idx)"
      >
        <img :src="image.url" :alt="image.alt" loading="lazy" />
        <div v-if="image.caption" class="gallery-page__caption">
          {{ image.caption }}
        </div>
      </div>
    </div>

    <Transition name="lightbox">
      <div v-if="lightboxIndex !== null" class="lightbox" @click.self="closeLightbox">
        <button class="lightbox__close" @click="closeLightbox" aria-label="Close lightbox">
          <X :size="32" />
        </button>

        <button
          v-if="lightboxIndex > 0"
          class="lightbox__nav lightbox__nav--prev"
          @click="navigateLightbox(-1)"
          aria-label="Previous image"
        >
          <ChevronLeft :size="32" />
        </button>

        <div class="lightbox__content">
          <img
            :src="galleryImages[lightboxIndex].url"
            :alt="galleryImages[lightboxIndex].alt"
            class="lightbox__image"
          />
          <p v-if="galleryImages[lightboxIndex].caption" class="lightbox__caption">
            {{ galleryImages[lightboxIndex].caption }}
          </p>
        </div>

        <button
          v-if="lightboxIndex < galleryImages.length - 1"
          class="lightbox__nav lightbox__nav--next"
          @click="navigateLightbox(1)"
          aria-label="Next image"
        >
          <ChevronRight :size="32" />
        </button>

        <div class="lightbox__counter">
          {{ lightboxIndex + 1 }} / {{ galleryImages.length }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import type { ImageCard } from '@/types'

// TODO: Replace with actual project images
const galleryImages: ImageCard[] = [
  {
    id: '1',
    url: '/assets/gallery/project-1.jpg',
    alt: 'Structural steel weld inspection',
    caption: 'Structural Steel Framework - Austin, TX',
    category: 'structural'
  },
  {
    id: '2',
    url: '/assets/gallery/project-2.jpg',
    alt: 'Pipeline weld testing',
    caption: 'Pipeline Fabrication - Houston, TX',
    category: 'pipeline'
  },
  {
    id: '3',
    url: '/assets/gallery/project-3.jpg',
    alt: 'Bridge repair inspection',
    caption: 'Bridge Repair - San Antonio, TX',
    category: 'infrastructure'
  },
  {
    id: '4',
    url: '/assets/gallery/project-4.jpg',
    alt: 'Commercial building inspection',
    caption: 'Commercial Building Framework',
    category: 'commercial'
  },
  {
    id: '5',
    url: '/assets/gallery/project-5.jpg',
    alt: 'Industrial equipment testing',
    caption: 'Industrial Equipment Certification',
    category: 'industrial'
  },
  {
    id: '6',
    url: '/assets/gallery/project-6.jpg',
    alt: 'Pressure vessel inspection',
    caption: 'Pressure Vessel Testing',
    category: 'industrial'
  }
]

const lightboxIndex = ref<number | null>(null)

const openLightbox = (index: number) => {
  lightboxIndex.value = index
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxIndex.value = null
  document.body.style.overflow = ''
}

const navigateLightbox = (direction: number) => {
  if (lightboxIndex.value === null) return
  
  const newIndex = lightboxIndex.value + direction
  if (newIndex >= 0 && newIndex < galleryImages.length) {
    lightboxIndex.value = newIndex
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (lightboxIndex.value === null) return
  
  switch (event.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowLeft':
      navigateLightbox(-1)
      break
    case 'ArrowRight':
      navigateLightbox(1)
      break
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped lang="scss">
.gallery-page {
  min-height: calc(100vh - var(--nav-bar-height));
  padding: var(--space-8) var(--space-5);

  @include mobile {
    padding: var(--space-6) var(--space-3);
  }

  &__header {
    max-width: 800px;
    margin: 0 auto var(--space-10);
    text-align: center;
  }

  &__title {
    font-family: var(--font-heading);
    font-size: var(--text-4xl);
    font-weight: var(--font-bold);
    color: var(--color-text);
    margin-bottom: var(--space-4);

    @include mobile {
      font-size: var(--text-3xl);
    }
  }

  &__subtitle {
    font-family: var(--font-body);
    font-size: var(--text-lg);
    color: var(--color-text-secondary);
    line-height: var(--leading-relaxed);

    @include mobile {
      font-size: var(--text-base);
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: var(--space-6);
    max-width: var(--max-width);
    margin: 0 auto;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-4);
    }

    @include mobile {
      grid-template-columns: 1fr;
      gap: var(--space-4);
    }
  }

  &__item {
    position: relative;
    aspect-ratio: 4 / 3;
    border-radius: var(--radius-lg);
    overflow: hidden;
    cursor: pointer;
    background: var(--color-surface-2);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px var(--color-shadow);

      .gallery-page__caption {
        transform: translateY(0);
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  &__caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    color: white;
    padding: var(--space-4);
    font-family: var(--font-body);
    font-size: var(--text-sm);
    transform: translateY(100%);
    transition: transform 0.3s ease;

    @include mobile {
      transform: translateY(0);
    }
  }
}

.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
  padding: var(--space-8);

  @include mobile {
    padding: var(--space-4);
  }

  &__close {
    position: absolute;
    top: var(--space-4);
    right: var(--space-4);
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: var(--radius-sm);
    color: white;
    padding: var(--space-2);
    cursor: pointer;
    transition: all 0.2s ease;
    z-index: 10;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  &__nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: var(--radius-sm);
    color: white;
    padding: var(--space-3);
    cursor: pointer;
    transition: all 0.2s ease;
    z-index: 10;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    &--prev {
      left: var(--space-4);
    }

    &--next {
      right: var(--space-4);
    }

    @include mobile {
      padding: var(--space-2);

      &--prev {
        left: var(--space-2);
      }

      &--next {
        right: var(--space-2);
      }
    }
  }

  &__content {
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-4);
  }

  &__image {
    max-width: 100%;
    max-height: calc(90vh - 100px);
    object-fit: contain;
    border-radius: var(--radius-md);
  }

  &__caption {
    color: white;
    font-family: var(--font-body);
    font-size: var(--text-base);
    text-align: center;
    max-width: 600px;
  }

  &__counter {
    position: absolute;
    bottom: var(--space-4);
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.1);
    color: white;
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-sm);
    font-family: var(--font-mono);
    font-size: var(--text-sm);
  }
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .gallery-page__item,
  .gallery-page__item img {
    transition: none;
    
    &:hover {
      transform: none;
    }
  }
}
</style>