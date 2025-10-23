<template>
  <div class="home-page">
    <HeroSection />

    <section id="services" class="home-page__section">
      <div class="home-page__container">
        <h2 class="home-page__heading">Our Services</h2>
        <p class="home-page__intro">
          Comprehensive welding inspection and testing services to ensure structural integrity and code compliance.
        </p>

        <div class="home-page__services-grid">
          <ServiceCard
            v-for="service in services"
            :key="service.id"
            :service="service"
          />
        </div>

        <!-- Service details section - scrolled to from ServiceCard "Learn More" -->
        <div class="home-page__service-details">
          <div
            v-for="service in servicesWithDetails"
            :key="`detail-${service.id}`"
            :id="`service-${service.id}`"
            class="home-page__service-detail"
          >
            <h3 class="home-page__detail-title">{{ service.title }}</h3>
            <p class="home-page__detail-content">{{ service.detailContent }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="credentials" class="home-page__section home-page__section--alt">
      <div class="home-page__container">
        <h2 class="home-page__heading">Credentials</h2>
        
        <div class="home-page__credentials">
          <div class="home-page__subsection">
            <h3 class="home-page__subheading">Certifications</h3>
            <div class="home-page__certs-grid">
              <CertificationBadge
                v-for="cert in certifications"
                :key="cert.id"
                :certification="cert"
              />
            </div>
          </div>

          <div class="home-page__subsection">
            <h3 class="home-page__subheading">Service Areas</h3>
            <div class="home-page__areas">
              <div
                v-for="area in serviceAreas"
                :key="area.id"
                class="home-page__area-badge"
              >
                <MapPin :size="16" />
                <div class="home-page__area-info">
                  <span class="home-page__area-name">{{ area.name }}</span>
                  <span class="home-page__area-coverage">{{ area.coverage }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="home-page__section">
      <div class="home-page__container">
        <h2 class="home-page__heading">Recent Work</h2>
        <p class="home-page__intro">
          A selection of recent inspection and testing projects.
        </p>

        <div class="home-page__gallery-preview">
          <div
            v-for="(image, idx) in galleryPreviewImages"
            :key="idx"
            class="home-page__gallery-item"
          >
            <img :src="image.url" :alt="image.alt" />
          </div>
        </div>

        <RouterLink :to="{ name: 'gallery' }" class="home-page__gallery-link">
          <span>View Full Gallery</span>
          <ArrowRight :size="20" />
        </RouterLink>
      </div>
    </section>

    <section id="testimonials" class="home-page__section home-page__section--alt">
      <div class="home-page__container">
        <h2 class="home-page__heading">What Clients Say</h2>
        
        <div class="home-page__testimonials-grid">
          <TestimonialCard
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            :testimonial="testimonial"
          />
        </div>
      </div>
    </section>

    <section id="contact" class="home-page__section">
      <div class="home-page__container">
        <h2 class="home-page__heading">Request a Quote</h2>
        <p class="home-page__intro">
          Tell us about your project and we will get back to you promptly.
        </p>

        <QuoteForm :config="quoteConfig" :services="services" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { MapPin, ArrowRight } from 'lucide-vue-next'
import HeroSection from '@/components/sections/HeroSection.vue'
import ServiceCard from '@/components/cards/ServiceCard.vue'
import CertificationBadge from '@/components/cards/CertificationBadge.vue'
import TestimonialCard from '@/components/cards/TestimonialCard.vue'
import QuoteForm from '@/components/forms/QuoteForm.vue'
import {
  QUOTE_CONFIG,
  SERVICES,
  CERTIFICATIONS,
  SERVICE_AREAS,
  TESTIMONIALS
} from '@/config'

const quoteConfig = QUOTE_CONFIG
const services = SERVICES
const certifications = CERTIFICATIONS
const serviceAreas = SERVICE_AREAS
const testimonials = TESTIMONIALS

const servicesWithDetails = computed(() => 
  services.filter(s => s.detailContent)
)

// Placeholder gallery preview images
// TODO: Replace with actual project images
const galleryPreviewImages = [
  { url: '/assets/gallery/preview-1.jpg', alt: 'Weld inspection project 1' },
  { url: '/assets/gallery/preview-2.jpg', alt: 'Weld inspection project 2' },
  { url: '/assets/gallery/preview-3.jpg', alt: 'Weld inspection project 3' },
  { url: '/assets/gallery/preview-4.jpg', alt: 'Weld inspection project 4' },
  { url: '/assets/gallery/preview-5.jpg', alt: 'Weld inspection project 5' },
  { url: '/assets/gallery/preview-6.jpg', alt: 'Weld inspection project 6' }
]
</script>

<style scoped lang="scss">
.home-page {
  &__section {
    padding: var(--space-12) 0;

    @include mobile {
      padding: var(--space-8) 0;
    }

    &--alt {
      background: var(--color-surface-1);
    }
  }

  &__container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--space-5);
  }

  &__heading {
    font-family: var(--font-heading);
    font-size: var(--text-4xl);
    font-weight: var(--font-bold);
    color: var(--color-text);
    text-align: center;
    margin: 0 0 var(--space-3) 0;

    @include mobile {
      font-size: var(--text-3xl);
    }
  }

  &__subheading {
    font-family: var(--font-heading);
    font-size: var(--text-2xl);
    font-weight: var(--font-semibold);
    color: var(--color-text);
    margin: 0 0 var(--space-4) 0;
  }

  &__intro {
    font-family: var(--font-body);
    font-size: var(--text-lg);
    color: var(--color-text-secondary);
    text-align: center;
    max-width: 700px;
    margin: 0 auto var(--space-8);
    line-height: var(--leading-relaxed);

    @include mobile {
      font-size: var(--text-base);
      margin-bottom: var(--space-6);
    }
  }

  &__services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-6);
    margin-bottom: var(--space-10);

    @include mobile {
      grid-template-columns: 1fr;
      gap: var(--space-4);
    }
  }

  &__service-details {
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
    margin-top: var(--space-8);
    padding-top: var(--space-8);
    border-top: 1px solid var(--color-border);
  }

  &__service-detail {
    max-width: 800px;
    margin: 0 auto;
  }

  &__detail-title {
    font-family: var(--font-heading);
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
    color: var(--color-primary);
    margin: 0 0 var(--space-3) 0;
  }

  &__detail-content {
    font-family: var(--font-body);
    font-size: var(--text-base);
    color: var(--color-text-secondary);
    line-height: var(--leading-relaxed);
    margin: 0;
  }

  &__credentials {
    display: flex;
    flex-direction: column;
    gap: var(--space-10);
  }

  &__subsection {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  &__certs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: var(--space-4);

    @include mobile {
      grid-template-columns: 1fr;
    }
  }

  &__areas {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-4);

    @include mobile {
      grid-template-columns: 1fr;
    }
  }

  &__area-badge {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    background: var(--color-surface-2);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: var(--space-4);
    color: var(--color-primary);
  }

  &__area-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }

  &__area-name {
    font-family: var(--font-heading);
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    color: var(--color-text);
  }

  &__area-coverage {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
  }

  &__gallery-preview {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-4);
    margin-bottom: var(--space-6);

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mobile {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-2);
    }
  }

  &__gallery-item {
    aspect-ratio: 4 / 3;
    border-radius: var(--radius-md);
    overflow: hidden;
    background: var(--color-surface-2);

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

  &__gallery-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    margin: 0 auto;
    padding: var(--space-3) var(--space-5);
    background: var(--color-primary);
    color: var(--color-text-inverse);
    text-decoration: none;
    font-family: var(--font-body);
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    border-radius: var(--radius-sm);
    transition: all 0.3s ease;

    &:hover {
      background: var(--color-primary-dark);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px var(--color-shadow);
      gap: var(--space-3);
    }

    &:active {
      transform: translateY(0);
    }
  }

  &__testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--space-6);

    @include mobile {
      grid-template-columns: 1fr;
      gap: var(--space-4);
    }
  }
}
</style>