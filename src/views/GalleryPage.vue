<template>
  <div class="gallery-view">
    <div class="gallery-view__header">
      <h1 class="gallery-view__title">Project Gallery</h1>
      <p class="gallery-view__subtitle">
        Recent welding inspection and testing projects showcasing our expertise and attention to detail.
      </p>
    </div>

    <div class="gallery-view__series">
      <section
        v-for="series in allSeries"
        :key="series.id"
        class="gallery-view__series-section"
      >
        <div class="gallery-view__series-header">
          <h2 class="gallery-view__series-title">{{ series.title }}</h2>
          <p v-if="series.description" class="gallery-view__series-description">
            {{ series.description }}
          </p>
          <div class="gallery-view__series-count">
            {{ series.images.length }} {{ series.images.length === 1 ? 'image' : 'images' }}
          </div>
        </div>

        <div class="gallery-view__grid">
          <div
            v-for="(image, idx) in series.images"
            :key="image.id"
            class="gallery-view__item"
            @click="openSeriesLightbox(series, idx)"
          >
            <img 
              :src="getAssetUrl(image.path)" 
              :alt="image.alt || image.description || ''" 
              loading="lazy" 
            />
            <div class="gallery-view__item-overlay">
              <Maximize2 :size="24" />
            </div>
          </div>
        </div>
      </section>
    </div>

    <Lightbox
      v-if="lightboxOpen"
      :images="currentSeriesImages"
      :current-index="lightboxIndex"
      :series-info="currentSeriesInfo"
      @close="closeLightbox"
      @navigate="navigateLightbox"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Maximize2 } from 'lucide-vue-next'
import Lightbox from '@/components/media/Lightbox.vue'
import { getAssetUrl } from '@/utils/assets'
import { ALL_SERIES } from '@/assets/images'
import type { PhotoSeries } from '@/types/assets'

const allSeries = ref(ALL_SERIES)

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)
const currentSeries = ref<PhotoSeries | null>(null)

const currentSeriesImages = computed(() => {
  return currentSeries.value?.images || []
})

const currentSeriesInfo = computed(() => {
  if (!currentSeries.value) return undefined
  return {
    title: currentSeries.value.title,
    description: currentSeries.value.description,
  }
})

function openSeriesLightbox(series: PhotoSeries, index: number) {
  currentSeries.value = series
  lightboxIndex.value = index
  lightboxOpen.value = true
}

function closeLightbox() {
  lightboxOpen.value = false
  currentSeries.value = null
  lightboxIndex.value = 0
}

function navigateLightbox(index: number) {
  lightboxIndex.value = index
}
</script>

<style scoped lang="scss">
.gallery-view {
  min-height: calc(100vh - var(--nav-bar-height));
  padding: var(--space-8) var(--space-5);

  @include mobile {
    padding: var(--space-6) var(--space-3);
  }

  &__header {
    max-width: 800px;
    margin: 0 auto var(--space-10);
    text-align: center;

    @include mobile {
      margin-bottom: var(--space-8);
    }
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

  &__series {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  &__series-section {
    margin-bottom: var(--space-12);

    &:last-child {
      margin-bottom: 0;
    }

    @include mobile {
      margin-bottom: var(--space-10);
    }
  }

  &__series-header {
    margin-bottom: var(--space-6);
    padding-bottom: var(--space-4);
    border-bottom: 2px solid var(--color-border);

    @include mobile {
      margin-bottom: var(--space-5);
    }
  }

  &__series-title {
    font-family: var(--font-heading);
    font-size: var(--text-3xl);
    font-weight: var(--font-bold);
    color: var(--color-text);
    margin: 0 0 var(--space-2) 0;

    @include mobile {
      font-size: var(--text-2xl);
    }
  }

  &__series-description {
    font-family: var(--font-body);
    font-size: var(--text-base);
    color: var(--color-text-secondary);
    line-height: var(--leading-relaxed);
    margin: 0 0 var(--space-2) 0;

    @include mobile {
      font-size: var(--text-sm);
    }
  }

  &__series-count {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    color: var(--color-primary);
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--space-5);

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
    aspect-ratio: 16 / 9;
    border-radius: var(--radius-lg);
    overflow: hidden;
    cursor: pointer;
    background: var(--color-surface-2);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px var(--color-shadow);

      .gallery-view__item-overlay {
        opacity: 1;
      }

      img {
        transform: scale(1.05);
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  &__item-overlay {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .gallery-view__item,
  .gallery-view__item img,
  .gallery-view__item-overlay {
    transition: none;
    
    &:hover {
      transform: none;
    }
  }
}
</style>