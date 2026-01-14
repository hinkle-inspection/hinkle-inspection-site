<template>
  <main class="about">
    <section class="about__wrap" aria-labelledby="about-title">
      <div class="about__grid">
        <div class="about__media">
          <img 
              class="about__image"
              :src="getAssetUrl(heroImage.path)" 
              :alt="heroImage.alt || 'Welding inspection project'"
              loading="lazy"
            />
        </div>

        <div class="about__content">
          <h1 id="about-title" class="about__title">Thomas L. Hinkle Sr</h1>
          <p class="about__lead">
            Owner operator providing welder certification, inspection, QA/QC, training, and consulting for commercial and industrial projects.
            Backed by 30+ years of experience and a teaching background that keeps the work practical and code focused.
          </p>

          <ul class="about__highlights" aria-label="Key credentials">
            <li>Certified Welder, CWI, and CWE</li>
            <li>AWS member, 2nd Vice Chair District 17 Central Texas Section</li>
            <li>High purity piping and gas delivery systems experience</li>
            <li>Austin Community College professor, welding and inspection</li>
          </ul>

          <div class="about__cards" aria-label="How I help">
            <article class="about__card">
              <h2 class="about__cardTitle">How I help</h2>
              <p class="about__cardText">
                I help contractors, fabricators, and owners reduce rework and close out projects cleanly with clear documentation and code aligned decisions.
                Support can be ongoing or targeted for critical phases.
              </p>
            </article>

            <article class="about__card">
              <h2 class="about__cardTitle">What you can expect</h2>
              <ul class="about__cardList">
                <li>Direct communication and fast turnaround</li>
                <li>Documentation that stands up to audits and handoff</li>
                <li>Code aware inspection support based on project requirements</li>
                <li>Training and mentoring that improves consistency</li>
              </ul>
            </article>
          </div>

          <div class="about__ctaRow">
            <!-- <RouterLink class="about__cta" to="/#contact">Request a quote</RouterLink> -->
            <RouterLink class="about__ctaSecondary" to="/#services">View services</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { FAB_IMAGES } from '@/assets/images'
import { getAssetUrl } from '@/utils/assets'

onMounted(() => {
  document.title = 'About | Hinkle Inspection & Testing'
})

const heroImage = computed(() => {
  // Pick the first image as a placeholder. Swap the index later.
  // Expected shape: { src: string; alt: string; ... }
  return FAB_IMAGES[1]
})
</script>

<style scoped lang="scss">
.about {
  color: var(--color-text);

  &__wrap {
    padding: 4rem 0;
    background: var(--color-bg);
  }

  &__grid {
    width: min(1100px, calc(100% - 2rem));
    margin: 0 auto;
    display: grid;
    gap: 3rem;
    grid-template-columns: 1fr;
    align-items: start;

    @media (min-width: 900px) {
      grid-template-columns: 1fr 1.1fr;
      align-items: center;
    }
  }

&__media {
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid var(--color-border); /* also fixes the typo you have */
    background: var(--color-surface-1);
    box-shadow: 0 10px 30px var(--color-shadow);

    /* New: define a consistent crop area */
    aspect-ratio: 4 / 5;

    /* Optional: keep it from getting too tall on large screens */
    // max-height: 520px;
  }

  &__image {
    width: 100%;
    height: 100%;
    display: block;

    /* New: fill and crop instead of letterbox */
    object-fit: cover;
    object-position: center;
  }

  &__content {
    min-width: 0;
  }

  &__title {
    margin: 0 0 1rem;
    font-size: 2.25rem;
    line-height: 1.15;
    color: var(--color-text);
  }

  &__lead {
    margin: 0 0 1.5rem;
    max-width: 70ch;
    line-height: 1.7;
    color: var(--color-text-secondary);
  }

  &__highlights {
    margin: 0 0 2rem;
    padding-left: 1.1rem;
    display: grid;
    gap: 0.5rem;
    line-height: 1.6;
    color: var(--color-text-secondary);

    li {
      color: var(--color-text-secondary);
    }
  }

  &__cards {
    display: grid;
    gap: 1.5rem;
    margin-bottom: 2rem;

    @media (min-width: 900px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__card {
    border: 1px solid var(--color-border);
    border-radius: 0.85rem;
    padding: 1.5rem;
    background: var(--color-surface-1);
    box-shadow: 0 6px 18px var(--color-shadow);
  }

  &__cardTitle {
    margin: 0 0 0.5rem;
    font-size: 1.125rem;
    color: var(--color-text);
  }

  &__cardText {
    margin: 0;
    line-height: 1.7;
    color: var(--color-text-secondary);
  }

  &__cardList {
    margin: 0;
    padding-left: 1.1rem;
    display: grid;
    gap: 0.5rem;
    line-height: 1.6;

    li {
      color: var(--color-text-secondary);
    }
  }

  &__ctaRow {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  &__cta,
  &__ctaSecondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    text-decoration: none;
    font-weight: 600;
    border: 1px solid var(--color-border);
    transition: transform 120ms ease, background-color 120ms ease, border-color 120ms ease;
    outline: none;

    &:focus-visible {
      box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-accent) 35%, transparent);
    }
  }

  &__cta {
    background: var(--color-accent);
    color: var(--color-text-inverse);
    border-color: transparent;

    &:hover {
      background: var(--color-primary);
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  &__ctaSecondary {
    background: var(--color-surface-1);
    color: var(--color-text);
    border-color: var(--color-border);

    &:hover {
      background: var(--color-surface-2);
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }
}
</style>
