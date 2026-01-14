<template>
  <main class="legal">
    <section class="legal__wrap" aria-labelledby="legal-title">
      <div class="legal__container">
        <h1 id="legal-title" class="legal__title">Privacy Policy and Terms of Service</h1>
        <p class="legal__meta">
        </p>

        <article class="legal__section" aria-labelledby="privacy-title">
          <h2 id="privacy-title" class="legal__heading">Privacy policy</h2>

          <p class="legal__text">
            Hinkle Inspection &amp; Testing operates this website to provide information about services and contact details.
            This is a brochure style website and does not require an account to use.
          </p>

          <h3 class="legal__subheading">Information we collect</h3>
          <ul class="legal__list">
            <li>
              <strong>Analytics data:</strong> We may use privacy focused analytics to understand basic site usage such as page views, referring pages, and approximate location.
            </li>
            <li>
              <strong>Information you choose to send:</strong> If you contact us by email or phone, we receive the information you provide in that communication.
            </li>
          </ul>

          <h3 class="legal__subheading">How we use information</h3>
          <ul class="legal__list">
            <li>To operate and improve the site</li>
            <li>To respond to requests and inquiries</li>
            <li>To maintain site security and reliability</li>
          </ul>

          <h3 class="legal__subheading">Cookies</h3>
          <p class="legal__text">
            This website does not intentionally set cookies for advertising.
            Some analytics providers may use limited client side storage to measure traffic.
            You can control cookies through your browser settings.
          </p>

          <h3 class="legal__subheading">Third party services</h3>
          <p class="legal__text">
            We may use third party services such as website hosting, content delivery, and analytics.
            Those providers may process limited technical information such as IP address, user agent, and page requests to deliver the site and measure performance.
          </p>

          <h3 class="legal__subheading">Data retention</h3>
          <p class="legal__text">
            We keep analytics data only as long as needed for reporting and site improvement.
            Email communications are retained as needed to respond and maintain business records.
          </p>

          <h3 class="legal__subheading">Your choices</h3>
          <ul class="legal__list">
            <li>You can disable cookies and client storage in your browser</li>
            <li>You can use privacy tools such as tracker blocking extensions</li>
            <li>You can contact us to request updates or deletion of information you have sent directly</li>
          </ul>

          <h3 class="legal__subheading">Contact</h3>
          <p class="legal__text">
            Questions about this policy can be sent to
            <a class="legal__link" :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>.
          </p>
        </article>

        <article class="legal__section" aria-labelledby="terms-title">
          <h2 id="terms-title" class="legal__heading">Terms of service</h2>

          <p class="legal__text">
            By accessing this website, you agree to the terms below. If you do not agree, do not use the site.
          </p>

          <h3 class="legal__subheading">Informational use</h3>
          <p class="legal__text">
            The content on this website is provided for general informational purposes.
            Service scope, availability, and pricing are provided through direct communication and written agreements.
          </p>

          <h3 class="legal__subheading">No warranties</h3>
          <p class="legal__text">
            We provide the site and its content on an as is basis and make no warranties, express or implied, about accuracy, completeness, or fitness for a particular purpose.
          </p>

          <h3 class="legal__subheading">Limitation of liability</h3>
          <p class="legal__text">
            To the fullest extent permitted by law, Hinkle Inspection &amp; Testing is not liable for any damages arising from use of this website.
          </p>

          <h3 class="legal__subheading">Third party links</h3>
          <p class="legal__text">
            This website may link to third party sites. We are not responsible for their content or privacy practices.
          </p>

          <h3 class="legal__subheading">Changes</h3>
          <p class="legal__text">
            We may update these terms and the privacy policy from time to time by posting an updated version on this page.
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const contactEmail = 'hinkle.fab@gmail.com'

onMounted(() => {
  document.title = 'Privacy Policy & Terms | Hinkle Inspection & Testing'
})
</script>

<style scoped lang="scss">
.legal {
  color: var(--color-text);
  background: var(--color-bg);

  &__wrap {
    padding: 4rem 0;
  }

  &__container {
    width: min(900px, calc(100% - 2rem));
    margin: 0 auto;
  }

  &__title {
    margin: 0 0 0.75rem;
    font-size: 2.25rem;
    line-height: 1.15;
    color: var(--color-text);
  }

  &__meta {
    margin: 0 0 2.5rem;
    color: var(--color-text-muted);
  }

  &__section {
    padding: 2.5rem 0;
    border-top: 1px solid var(--color-divider);
  }

  &__heading {
    margin: 0 0 1rem;
    font-size: 1.5rem;
    color: var(--color-text);
  }

  &__subheading {
    margin: 1.5rem 0 0.75rem;
    font-size: 1.125rem;
    color: var(--color-text);
  }

  &__text {
    margin: 0;
    line-height: 1.7;
    max-width: 80ch;
    color: var(--color-text-secondary);
  }

  &__list {
    margin: 0.75rem 0 0;
    padding-left: 1.1rem;
    display: grid;
    gap: 0.5rem;
    line-height: 1.6;
    max-width: 80ch;

    li {
      color: var(--color-text-secondary);
    }

    strong {
      color: var(--color-text);
      font-weight: 600;
    }
  }

  &__link {
    color: var(--color-text-accent);
    text-decoration: underline;
    text-underline-offset: 3px;

    &:hover {
      color: var(--color-accent);
    }

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-accent) 35%, transparent);
      border-radius: 0.25rem;
    }
  }
}
</style>
