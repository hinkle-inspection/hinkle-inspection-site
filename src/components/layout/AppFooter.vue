<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__grid">
        <div class="footer__section">
          <h3 class="footer__heading">Hinkle Inspection & Testing</h3>
          <p class="footer__text">
            Professional welding inspection and testing services with certified expertise.
          </p>
        </div>

        <div class="footer__section">
          <h4 class="footer__subheading">Quick Links</h4>
          <nav class="footer__nav">
            <RouterLink to="#services" class="footer__link">Services</RouterLink>
            <RouterLink to="#credentials" class="footer__link">Credentials</RouterLink>
            <RouterLink to="#testimonials" class="footer__link">Testimonials</RouterLink>
            <RouterLink :to="{ name: 'gallery' }" class="footer__link">Gallery</RouterLink>
          </nav>
        </div>

        <div class="footer__section">
          <h4 class="footer__subheading">Contact</h4>
          <div class="footer__contact">
            <!-- TODO - Resolve contact handling -->
            <!-- <a href="mailto:contact@hinkleinspection.com" class="footer__link"> -->
            <a class="footer__link">
              <Mail :size="16" />
              <span>hinkle.fab@gmail.com</span>
            </a>
            <!-- TODO - change to copy to clipboard maybe? Or bring up phone -->
            <!-- <a href="tel:+15555551234" class="footer__link"> -->
            <a class="footer__link">
              <Phone :size="16" />
              <span>(512) 797-5232</span>
            </a>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">
          &copy; {{ currentYear }} Hinkle Inspection & Testing. All rights reserved.
        </p>
        <div class="footer__legal">
          <a href="#" class="footer__link footer__link--small">Privacy Policy</a>
          <span class="footer__separator">|</span>
          <a href="#" class="footer__link footer__link--small">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Mail, Phone } from 'lucide-vue-next'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped lang="scss">
.footer {
  background: var(--color-surface-1);
  border-top: 1px solid var(--color-border);
  padding: var(--space-12) 0 var(--space-6);
  margin-top: var(--space-12);

  @include mobile {
    padding: var(--space-8) 0 var(--space-5);
    margin-top: var(--space-8);
  }

  &__container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--space-5);

    @include mobile {
      padding: 0 var(--space-4);
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 3fr 2fr 3fr;
    gap: var(--space-8);
    margin-bottom: var(--space-8);

    @include tablet {
      gap: var(--space-6);
      margin-bottom: var(--space-6);
    }

    @include mobile {
      gap: var(--space-5);
    }
  }

  &__section {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  &__heading {
    font-family: var(--font-heading);
    font-size: var(--text-lg);
    font-weight: var(--font-bold);
    color: var(--color-text);
    margin: 0;

    @include mobile {
      font-size: var(--text-base);
    }
  }

  &__subheading {
    font-family: var(--font-heading);
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    color: var(--color-text);
    margin: 0;

    @include mobile {
      font-size: var(--text-sm);
    }
  }

  &__text {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
    line-height: var(--leading-relaxed);
    margin: 0;

    @include mobile {
      font-size: var(--text-xs);
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  &__contact {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);

    @include mobile {
      max-width: 100%;
      overflow: hidden;
    }
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    text-decoration: none;
    color: var(--color-text-secondary);
    font-family: var(--font-body);
    font-size: var(--text-sm);
    transition: color 0.2s ease;
    word-break: break-word;
    overflow-wrap: break-word;
    max-width: 100%;

    @include mobile {
      font-size: var(--text-xs);
      align-items: flex-start;
    }

    &:hover {
      color: var(--color-primary);
    }

    &--small {
      font-size: var(--text-xs);
    }

    span {
      @include mobile {
        word-break: break-all;
      }
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--space-6);
    border-top: 1px solid var(--color-border);

    @include mobile {
      flex-direction: column;
      gap: var(--space-3);
      text-align: center;
    }
  }

  &__copyright {
    font-family: var(--font-body);
    font-size: var(--text-xs);
    color: var(--color-text-secondary);
    margin: 0;
  }

  &__legal {
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }

  &__separator {
    color: var(--color-text-secondary);
    font-size: var(--text-xs);
  }
}
</style>