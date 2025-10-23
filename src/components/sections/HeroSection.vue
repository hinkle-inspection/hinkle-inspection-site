<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <h1 class="hero__title">
          {{ title }}
        </h1>
        <p class="hero__subtitle">
          {{ subtitle }}
        </p>
        <div class="hero__actions">
          <RouterLink 
            to="#contact" 
            class="hero__cta hero__cta--primary"
            @click.prevent="scrollToContact"
          >
            {{ primaryCtaText }}
          </RouterLink>
          <RouterLink 
            to="#services" 
            class="hero__cta hero__cta--secondary"
            @click.prevent="scrollToServices"
          >
            {{ secondaryCtaText }}
          </RouterLink>
        </div>
      </div>
    </div>
    <RouterLink 
      to="#services" 
      class="hero__scroll-indicator"
      @click.prevent="scrollToServices"
    >
      <span class="hero__scroll-text">Explore</span>
      <svg class="hero__scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 5v14M19 12l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  primaryCtaText?: string
  secondaryCtaText?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Certified Welding Inspection & Testing Services',
  subtitle: 'Professional expertise ensuring structural integrity and compliance with industry standards.',
  primaryCtaText: 'Request a Quote',
  secondaryCtaText: 'Our Services'
})

const scrollToSection = (hash: string) => {
  const element = document.querySelector(hash)
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

const scrollToContact = () => scrollToSection('#contact')
const scrollToServices = () => scrollToSection('#services')
</script>

<style scoped lang="scss">
.hero {
  color-scheme: dark;

  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  top: calc( -1 * var(--nav-bar-height));
  position: relative;
  background: linear-gradient(
    135deg,
    var(--color-surface-1) 0%,
    var(--color-secondary) 50%,
    var(--color-surface-1) 100%
  );

  &__container {
    max-width: var(--max-width);
    width: 100%;
    margin: 0 auto;
    padding: 0 var(--space-5);
  }

  &__content {
    max-width: 800px;
    text-align: center;
    margin: 0 auto;
  }

  &__title {
    font-family: var(--font-heading);
    font-size: var(--text-5xl);
    font-weight: var(--font-bold);
    color: var(--color-text-inverse);
    line-height: var(--leading-tight);
    margin-bottom: var(--space-6);
    
    @include tablet {
      font-size: var(--text-4xl);
    }
    
    @include mobile {
      font-size: var(--text-3xl);
      margin-bottom: var(--space-4);
    }
  }

  &__subtitle {
    font-family: var(--font-body);
    font-size: var(--text-xl);
    color: var(--color-text);
    line-height: var(--leading-relaxed);
    margin-bottom: var(--space-8);
    
    @include tablet {
      font-size: var(--text-lg);
    }
    
    @include mobile {
      font-size: var(--text-base);
      margin-bottom: var(--space-6);
    }
  }

  &__actions {
    display: flex;
    gap: var(--space-4);
    justify-content: center;
    
    @include mobile {
      width: fit-content;
      margin: auto;
      flex-direction: column;
      gap: var(--space-3);
    }
  }

  &__cta {
    display: inline-block;
    text-decoration: none;
    font-family: var(--font-body);
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    padding: var(--space-4) var(--space-6);
    border-radius: var(--radius-md);
    transition: all 0.3s ease;
    cursor: pointer;
    
    @include mobile {
      width: 100%;
      text-align: center;
    }

    &--primary {
      background: var(--color-bg);
      color: var(--color-primary);
      
      &:hover {
        background: var(--color-surface-1);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px var(--color-shadow);
      }
      
      &:active {
        transform: translateY(0);
      }
    }

    &--secondary {
      background: transparent;
      color: var(--color-text-secondary);
      border: 2px solid var(--color-accent);
      
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.8);
      }
    }
  }

  &__scroll-indicator {
    position: absolute;
    bottom: var(--space-8);
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-2);
    color: var(--color-info);
    animation: bounce 2s infinite;
    cursor: pointer;
    text-decoration: none;

    @include mobile {
      bottom: var(--space-5);
    }
  }

  &__scroll-text {
    font-family: var(--font-ui);
    font-size: var(--text-sm);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.8;
  }

  &__scroll-arrow {
    width: 24px;
    height: 24px;
    opacity: 0.8;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
}

// Respect reduced motion
@media (prefers-reduced-motion: reduce) {
  .photo-hero {
    &__scroll-indicator {
      animation: none;
    }
  }
}
</style>