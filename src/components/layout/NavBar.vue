<template>
  <nav class="navbar" :class="{ 'navbar--mobile-open': isMobileMenuOpen }">
    <div class="navbar__container">
      <RouterLink :to="{ name: 'home' }" class="navbar__logo" @click="closeMobileMenu">
        <span class="navbar__logo-text">Hinkle Inspection & Testing</span>
      </RouterLink>

      <div class="navbar__actions"> 
        <div class="navbar__nav">
          <RouterLink
            v-for="link in navLinks"
            :key="link.id"
            :to="{ name: 'home', hash: link.hash }"
            class="navbar__link"
            :aria-current="isHashActive(link.hash) ? 'page' : undefined"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </RouterLink>
          
          <RouterLink 
            :to="{ name: 'gallery' }" 
            class="navbar__link"
            active-class="navbar__link--active"
            @click="closeMobileMenu"
          >
            Gallery
          </RouterLink>

          <RouterLink
            :to="{ name: 'home', hash: '#contact' }"
            class="navbar__cta"
            @click="closeMobileMenu"
          >
            Request Quote
          </RouterLink>
        </div>

        <ThemeToggle />
      </div>

      <button 
        class="navbar__toggle" 
        @click="toggleMobileMenu" 
        :aria-expanded="isMobileMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <span class="navbar__toggle-line"></span>
        <span class="navbar__toggle-line"></span>
        <span class="navbar__toggle-line"></span>
      </button>
    </div>

    <div class="navbar__mobile" v-show="isMobileMenuOpen">
      <RouterLink
        v-for="link in navLinks"
        :key="`m-${link.id}`"
        :to="{ name: 'home', hash: link.hash }"
        class="navbar__mobile-link"
        @click="closeMobileMenu"
      >
        {{ link.label }}
      </RouterLink>
      
      <RouterLink 
        :to="{ name: 'gallery' }" 
        class="navbar__mobile-link"
        @click="closeMobileMenu"
      >
        Gallery
      </RouterLink>

      <RouterLink
        :to="{ name: 'home', hash: '#contact' }"
        class="navbar__mobile-cta"
        @click="closeMobileMenu"
      >
        Request Quote
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

interface NavLink {
  id: string
  label: string
  hash: string
}

const router = useRouter()

const navLinks: NavLink[] = [
  { id: 'services', label: 'Services', hash: '#services' },
  { id: 'certifications', label: 'Credentials', hash: '#credentials' },
  { id: 'testimonials', label: 'Testimonials', hash: '#testimonials' }
]

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
const route = useRoute()
const isHashActive = (hash: string) => route.hash === hash
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: var(--z-sticky);
  background: transparent;
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(1rem);

  &__container {
    max-width: var(--max-width);
    height: var(--nav-bar-height);
    margin: auto;
    padding: 0 var(--space-5);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    flex: 1;
    justify-content: flex-end;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: var(--space-4);

    @include tablet {
      display: none;
    }
  }

  &__logo {
    text-decoration: none;
    
    &-text {
      font-family: var(--font-heading);
      font-size: var(--text-lg);
      font-weight: var(--font-bold);
      color: var(--color-primary);
      
      @include tablet {
        font-size: var(--text-base);
      }
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: var(--space-4);

    @include tablet {
      display: none;
    }
  }

  &__link {
    text-decoration: none;
    color: var(--color-text-secondary);
    font-family: var(--font-body);
    font-weight: var(--font-medium);
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-sm);
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      color: var(--color-primary);
      background: var(--color-surface-1);
    }

    &--active {
      color: var(--color-primary);
      background: var(--color-surface-2);
    }
  }

  &__cta {
    text-decoration: none;
    color: var(--color-text-inverse);
    background: var(--color-primary);
    font-family: var(--font-body);
    font-weight: var(--font-semibold);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-sm);
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      background: var(--color-primary-dark);
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  &__toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: transparent;
    border: none;
    padding: var(--space-2);
    cursor: pointer;

    @include tablet {
      display: flex;
    }

    &-line {
      width: 24px;
      height: 2px;
      background: var(--color-text);
      transition: all 0.3s ease;
    }
  }

  &--mobile-open &__toggle &__toggle-line {
    &:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }
  }

  &__mobile {
    display: none;

    @include tablet {
      display: block;
      padding: var(--space-5);
      background: var(--color-surface-1);
      border-top: 1px solid var(--color-border);
    }
  }

  &__mobile-link {
    display: block;
    text-decoration: none;
    color: var(--color-text-secondary);
    font-family: var(--font-body);
    font-weight: var(--font-medium);
    padding: var(--space-3);
    border-radius: var(--radius-sm);
    margin-bottom: var(--space-2);
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      color: var(--color-primary);
      background: var(--color-surface-2);
    }
  }

  &__mobile-cta {
    display: block;
    text-align: center;
    text-decoration: none;
    color: var(--color-text-inverse);
    background: var(--color-primary);
    font-family: var(--font-body);
    font-weight: var(--font-semibold);
    padding: var(--space-3);
    border-radius: var(--radius-sm);
    margin-top: var(--space-4);
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      background: var(--color-primary-dark);
    }
  }
}
</style>