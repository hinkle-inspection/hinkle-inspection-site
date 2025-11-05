<template>
  <section class="hero">
    <div class="hero__background">
      <img 
        :src="getAssetUrl(HERO_IMAGE.full!)" 
        alt="Professional welding inspection equipment and testing"
        class="hero__image"
      />
      <div class="hero__overlay"></div>
    </div>
    
    <div class="hero__container">
      <div class="hero__content">
        <h1 class="hero__title">
          {{ title }}
        </h1>
        <p class="hero__subtitle">
          {{ subtitle }}
        </p>
        <div class="hero__actions">
          <a 
            href="#contact" 
            class="hero__cta hero__cta--primary"
            @click.prevent="scrollToContact"
          >
            {{ primaryCtaText }}
          </a>
          <a 
            href="#services" 
            class="hero__cta hero__cta--secondary"
            @click.prevent="scrollToServices"
          >
            {{ secondaryCtaText }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getAssetUrl } from '@/utils/assets'
import { HERO_IMAGE } from '@/assets/images'

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

  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;  
  top: calc( -1 * var(--nav-bar-height));
  position: relative;
  overflow: hidden;
  
  @include mobile {
    min-height: 80vh;
    padding: var(--space-8) 0;
  }

  &__background {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 51, 102, 0.75) 0%,
      rgba(0, 102, 204, 0.35) 50%,
      rgba(0, 51, 102, 0.75) 100%
    );
    
    // Alternative: Solid dark overlay
    // background: rgba(0, 51, 102, 0.8);
  }

  &__container {
    position: relative;
    z-index: 1;
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
    // color-scheme: light;

    font-family: var(--font-heading);
    font-size: var(--text-5xl);
    font-weight: var(--font-bold);
    color: var(--color-text);
    line-height: var(--leading-tight);
    margin-bottom: var(--space-6);
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    // -webkit-text-stroke-width: .1rem;
    // -webkit-text-stroke-color: var(--color-primary);
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
    color: rgba(255, 255, 255, 0.95);
    line-height: var(--leading-relaxed);
    margin-bottom: var(--space-8);
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    
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
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
      }
      
      &:active {
        transform: translateY(0);
      }
    }

    &--secondary {
      background: transparent;
      color: var(--color-text);
      border: 2px solid rgba(255, 255, 255, 0.7);
      
      &:hover {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.9);
      }
    }
  }
}
</style>