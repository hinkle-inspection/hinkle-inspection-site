<template>
  <div class="cert-badge" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
    <div class="cert-badge__content">
      <div v-if="certification.logoUrl" class="cert-badge__logo">
        <img :src="certification.logoUrl" :alt="`${certification.title} logo`" />
      </div>
      <div v-else class="cert-badge__icon">
        <Award :size="24" :stroke-width="2" />
      </div>
      
      <div class="cert-badge__info">
        <h4 class="cert-badge__title">{{ certification.title }}</h4>
        <p class="cert-badge__issuer">{{ certification.issuer }}</p>
      </div>
    </div>

    <Transition name="tooltip">
      <div v-if="showTooltip && hasDetails" class="cert-badge__tooltip">
        <p v-if="certification.number" class="cert-badge__detail">
          <strong>Certification #:</strong> {{ certification.number }}
        </p>
        <p v-if="certification.expiryDate" class="cert-badge__detail">
          <strong>Valid Until:</strong> {{ formatDate(certification.expiryDate) }}
        </p>
        <p v-if="certification.description" class="cert-badge__description">
          {{ certification.description }}
        </p>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Award } from 'lucide-vue-next'
import type { Certification } from '@/types'

interface Props {
  certification: Certification
}

const props = defineProps<Props>()
const showTooltip = ref(false)

const hasDetails = computed(() => {
  return !!(
    props.certification.number ||
    props.certification.expiryDate ||
    props.certification.description
  )
})

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>

<style scoped lang="scss">
.cert-badge {
  position: relative;
  background: var(--color-surface-1);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--color-primary);
    box-shadow: 0 4px 12px var(--color-shadow);
  }

  &__content {
    display: flex;
    align-items: center;
    gap: var(--space-3);
  }

  &__logo {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__icon {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    background: var(--color-surface-2);
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
  }

  &__info {
    flex: 1;
    min-width: 0;
  }

  &__title {
    font-family: var(--font-heading);
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    color: var(--color-text);
    margin: 0 0 var(--space-1) 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__issuer {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__tooltip {
    position: absolute;
    top: calc(100% + var(--space-2));
    left: 50%;
    transform: translateX(-50%);
    min-width: 280px;
    max-width: 320px;
    background: var(--color-surface-2);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: var(--space-4);
    box-shadow: 0 8px 24px var(--color-shadow);
    z-index: var(--z-tooltip);
    pointer-events: none;
    
    @include mobile {
      left: 0;
      right: 0;
      transform: none;
      min-width: auto;
      max-width: none;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: 8px solid transparent;
      border-bottom-color: var(--color-border);
      
      @include mobile {
        left: var(--space-6);
        transform: none;
      }
    }
  }

  &__detail {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    color: var(--color-text);
    margin: 0 0 var(--space-2) 0;
    
    &:last-child {
      margin-bottom: 0;
    }

    strong {
      font-weight: var(--font-semibold);
      color: var(--color-primary);
    }
  }

  &__description {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
    line-height: var(--leading-relaxed);
    margin: var(--space-3) 0 0 0;
    padding-top: var(--space-3);
    border-top: 1px solid var(--color-border);
  }
}

.tooltip-enter-active,
.tooltip-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-8px);
  
  @include mobile {
    transform: translateY(-8px);
  }
}
</style>