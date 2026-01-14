<template>
  <div
    class="cert-badge"
    :class="{ 'cert-badge--open': showTooltip }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @click="onClick"
    @keyup.esc="closeTooltip"
  >
    <div class="cert-badge__content">
      <div v-if="certification.logoUrl" class="cert-badge__logo">
        <img :src="certification.logoUrl" :alt="`${certification.title} logo`" />
      </div>

      <div v-else class="cert-badge__icon" aria-hidden="true">
        <Award :size="24" :stroke-width="2" />
      </div>

      <div class="cert-badge__info">
        <h4 class="cert-badge__title">{{ certification.title }}</h4>
        <p class="cert-badge__issuer">{{ certification.issuer }}</p>
      </div>
    </div>

    <Transition name="tooltip">
      <div v-if="showTooltip && hasDetails" class="cert-badge__tooltip" role="tooltip">
        <p v-if="certification.description" class="cert-badge__description">
          {{ certification.description }}
        </p>

        <ul v-if="certification.highlights?.length" class="cert-badge__highlights">
          <li v-for="item in certification.highlights" :key="item">{{ item }}</li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from 'vue'
import { Award } from 'lucide-vue-next'
import type { Certification } from '@/types'

interface Props {
  certification: Certification
}

const props = defineProps<Props>()
const showTooltip = ref(false)

const hasDetails = computed(() => {
  return !!(props.certification.description || props.certification.highlights?.length)
})

// Treat tablet and smaller as "touch-first" for tooltip behavior
const MOBILE_BREAKPOINT_PX = 900

const isTouchViewport = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT_PX}px)`).matches
}

const openTooltip = () => {
  if (!hasDetails.value) return
  showTooltip.value = true
}

const closeTooltip = () => {
  showTooltip.value = false
}

const toggleTooltip = () => {
  if (!hasDetails.value) return
  showTooltip.value = !showTooltip.value
}

// Desktop behavior: hover opens
const onMouseEnter = () => {
  if (isTouchViewport()) return
  openTooltip()
}

const onMouseLeave = () => {
  if (isTouchViewport()) return
  closeTooltip()
}

// Mobile and tablet behavior: click toggles
const onClick = (e: MouseEvent) => {
  if (!isTouchViewport()) return
  e.preventDefault()
  toggleTooltip()
}

// Close if user taps elsewhere on mobile/tablet
const onDocumentPointerDown = (e: PointerEvent) => {
  if (!isTouchViewport()) return
  const target = e.target as Node | null
  if (!target) return

  const badgeEl = (e.currentTarget as Document).querySelector?.('.cert-badge--open')
  // If there is no open badge, skip
  if (!badgeEl) return

  // If tap is inside the open badge, do nothing
  if (badgeEl.contains(target)) return

  closeTooltip()
}

if (typeof window !== 'undefined') {
  document.addEventListener('pointerdown', onDocumentPointerDown, { passive: true })
}

onBeforeUnmount(() => {
  if (typeof window === 'undefined') return
  document.removeEventListener('pointerdown', onDocumentPointerDown)
})
</script>


<style scoped lang="scss">
.cert-badge {
  position: relative;
  background: var(--color-surface-1);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
    box-shadow: 0 6px 18px var(--color-shadow);
    transform: translateY(-1px);
    z-index: 9;
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
    border: 1px solid var(--color-border);
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
    max-width: 340px;
    background: var(--color-surface-2);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: var(--space-4);
    box-shadow: 0 10px 28px var(--color-shadow);
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

  &__description {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
    line-height: var(--leading-relaxed);
    margin: 0;
  }

  &__highlights {
    margin: var(--space-3) 0 0 0;
    padding-left: 1.1rem;
    display: grid;
    gap: 0.5rem;
    color: var(--color-text-secondary);
    border-top: 1px solid var(--color-border);
    padding-top: var(--space-3);
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
