<template>
  <article class="testimonial-card">
    <div class="testimonial-card__quote-icon">
      <Quote :size="32" :stroke-width="1.5" />
    </div>

    <blockquote class="testimonial-card__quote">
      {{ testimonial.quote }}
    </blockquote>

    <div class="testimonial-card__footer">
      <div v-if="testimonial.imageUrl" class="testimonial-card__image">
        <img :src="testimonial.imageUrl" :alt="`${testimonial.author} project`" />
      </div>
      
      <div class="testimonial-card__author">
        <p class="testimonial-card__name">{{ testimonial.author }}</p>
        <p v-if="testimonial.company" class="testimonial-card__company">
          {{ testimonial.company }}
        </p>
        <p v-if="testimonial.project" class="testimonial-card__project">
          {{ testimonial.project }}
        </p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
import type { Testimonial } from '@/types'

interface Props {
  testimonial: Testimonial
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.testimonial-card {
  background: var(--color-surface-1);
  border: 1px solid var(--color-border);
  border-left: 4px solid var(--color-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 24px var(--color-shadow);
    transform: translateY(-2px);
  }

  &__quote-icon {
    width: 48px;
    height: 48px;
    background: var(--color-surface-2);
    border-radius: var(--radius-round);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
  }

  &__quote {
    font-family: var(--font-body);
    font-size: var(--text-lg);
    font-style: italic;
    color: var(--color-text);
    line-height: var(--leading-relaxed);
    margin: 0;
    
    @include mobile {
      font-size: var(--text-base);
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-top: var(--space-2);
  }

  &__image {
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    border-radius: var(--radius-md);
    overflow: hidden;
    background: var(--color-surface-2);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__author {
    flex: 1;
  }

  &__name {
    font-family: var(--font-heading);
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    color: var(--color-text);
    margin: 0 0 var(--space-1) 0;
  }

  &__company,
  &__project {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
    margin: 0;
  }
}
</style>