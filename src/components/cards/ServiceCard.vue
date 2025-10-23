<template>
  <article class="service-card">
    <div class="service-card__icon">
      <component :is="iconComponent" :size="32" :stroke-width="1.5" />
    </div>
    
    <h3 class="service-card__title">
      {{ service.title }}
    </h3>
    
    <p class="service-card__description">
      {{ service.description }}
    </p>
    
    <!-- TODO: Explore accordion-style expansion for detailed content -->
    <button 
      v-if="service.detailContent"
      class="service-card__link"
      @click="scrollToDetail"
    >
      Learn More
      <ChevronRight :size="16" :stroke-width="2" />
    </button>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import * as LucideIcons from 'lucide-vue-next'
import { ChevronRight } from 'lucide-vue-next'
import type { Service } from '@/types'

interface Props {
  service: Service
}

const props = defineProps<Props>()

const iconComponent = computed(() => {
  const IconComponent = (LucideIcons as any)[props.service.icon]
  return IconComponent || LucideIcons.Circle
})

const scrollToDetail = () => {
  const element = document.querySelector(`#service-${props.service.id}`)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped lang="scss">
.service-card {
  background: var(--color-surface-1);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px var(--color-shadow);
    border-color: var(--color-primary);
  }

  &__icon {
    width: 56px;
    height: 56px;
    background: var(--color-surface-2);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
  }

  &__title {
    font-family: var(--font-heading);
    font-size: var(--text-xl);
    font-weight: var(--font-bold);
    color: var(--color-text);
    margin: 0;
  }

  &__description {
    font-family: var(--font-body);
    font-size: var(--text-base);
    color: var(--color-text-secondary);
    line-height: var(--leading-relaxed);
    margin: 0;
    flex: 1;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--color-primary);
    font-family: var(--font-body);
    font-size: var(--text-sm);
    font-weight: var(--font-semibold);
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: gap 0.2s ease;
    
    &:hover {
      gap: var(--space-3);
    }
  }
}
</style>