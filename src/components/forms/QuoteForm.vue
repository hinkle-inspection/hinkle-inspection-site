<template>
  <form class="quote-form" @submit.prevent="handleSubmit">
    <div class="quote-form__field">
      <label for="name" class="quote-form__label">
        Name <span class="quote-form__required">*</span>
      </label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        class="quote-form__input"
        :class="{ 'quote-form__input--error': errors.name }"
        required
        autocomplete="name"
      />
      <span v-if="errors.name" class="quote-form__error">{{ errors.name }}</span>
    </div>

    <div class="quote-form__field">
      <label for="email" class="quote-form__label">
        Email <span class="quote-form__required">*</span>
      </label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        class="quote-form__input"
        :class="{ 'quote-form__input--error': errors.email }"
        required
        autocomplete="email"
      />
      <span v-if="errors.email" class="quote-form__error">{{ errors.email }}</span>
    </div>

    <div class="quote-form__field">
      <label for="phone" class="quote-form__label">
        Phone
      </label>
      <input
        id="phone"
        v-model="form.phone"
        type="tel"
        class="quote-form__input"
        autocomplete="tel"
      />
    </div>

    <div class="quote-form__field">
      <label for="service" class="quote-form__label">
        Service Interested In
      </label>
      <select
        id="service"
        v-model="form.service"
        class="quote-form__input quote-form__select"
      >
        <option value="">Select a service</option>
        <option v-for="service in services" :key="service.id" :value="service.title">
          {{ service.title }}
        </option>
      </select>
    </div>

    <div class="quote-form__field">
      <label for="message" class="quote-form__label">
        <!-- TODO - cleanse input -->
        Project Details <span class="quote-form__required">*</span>
      </label>
      <textarea
        id="message"
        v-model="form.message"
        class="quote-form__input quote-form__textarea"
        :class="{ 'quote-form__input--error': errors.message }"
        rows="5"
        required
        placeholder="Tell us about your project requirements..."
      ></textarea>
      <span v-if="errors.message" class="quote-form__error">{{ errors.message }}</span>
    </div>

    <!-- Honeypot field for spam prevention -->
    <input
      v-model="form.honeypot"
      type="text"
      name="website"
      class="quote-form__honeypot"
      tabindex="-1"
      autocomplete="off"
    />

    <button
      type="submit"
      class="quote-form__submit"
      :disabled="isSubmitting"
    >
      <Loader2 v-if="isSubmitting" :size="20" class="quote-form__spinner" />
      <span v-else>{{ isSubmitting ? 'Sending...' : 'Send Request' }}</span>
    </button>

    <Transition name="message">
      <div v-if="submitMessage" class="quote-form__message" :class="`quote-form__message--${submitStatus}`">
        {{ submitMessage }}
      </div>
    </Transition>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Loader2 } from 'lucide-vue-next'
import type { QuotePayload, QuoteConfig, Service } from '@/types'

interface Props {
  config: QuoteConfig
  services: Service[]
}

const props = defineProps<Props>()

const form = reactive<QuotePayload>({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  honeypot: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitStatus = ref<'success' | 'error'>('success')

const validateForm = (): boolean => {
  let isValid = true
  
  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Project details are required'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }
  
  // Honeypot check
  if (form.honeypot) {
    // console.warn('Spam detected')
    return
  }

  isSubmitting.value = true
  submitMessage.value = ''

  try {
    switch (props.config.mode) {
      case 'mailto':
        handleMailtoSubmit()
        break
      case 'hosted':
        await handleHostedSubmit()
        break
      case 'serverless':
        await handleServerlessSubmit()
        break
    }
  } catch (error) {
    submitStatus.value = 'error'
    submitMessage.value = 'Failed to send request. Please try again or contact us directly.'
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}

const handleMailtoSubmit = () => {
  const subject = encodeURIComponent(props.config.subjectLine)
  const body = encodeURIComponent(
    `Name: ${form.name}\n` +
    `Email: ${form.email}\n` +
    `Phone: ${form.phone || 'Not provided'}\n` +
    `Service: ${form.service || 'Not specified'}\n\n` +
    `Message:\n${form.message}`
  )
  
  window.location.href = `mailto:${props.config.recipientEmail}?subject=${subject}&body=${body}`
  
  submitStatus.value = 'success'
  submitMessage.value = 'Opening your email client...'
  
  setTimeout(() => {
    resetForm()
  }, 3000)
}

const handleHostedSubmit = async () => {
  if (!props.config.hostedEndpoint) {
    throw new Error('Hosted endpoint not configured')
  }

  const response = await fetch(props.config.hostedEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...form,
      to: props.config.recipientEmail,
      subject: props.config.subjectLine
    })
  })

  if (!response.ok) {
    throw new Error('Hosted submission failed')
  }

  submitStatus.value = 'success'
  submitMessage.value = 'Request sent successfully. We will contact you soon.'
  
  setTimeout(() => {
    resetForm()
  }, 5000)
}

const handleServerlessSubmit = async () => {
  if (!props.config.serverlessEndpoint) {
    throw new Error('Serverless endpoint not configured')
  }

  const response = await fetch(props.config.serverlessEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...form,
      to: props.config.recipientEmail,
      subject: props.config.subjectLine
    })
  })

  if (!response.ok) {
    throw new Error('Serverless submission failed')
  }

  submitStatus.value = 'success'
  submitMessage.value = 'Request sent successfully. We will contact you soon.'
  
  setTimeout(() => {
    resetForm()
  }, 5000)
}

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.phone = ''
  form.service = ''
  form.message = ''
  submitMessage.value = ''
}
</script>

<style scoped lang="scss">
.quote-form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);

  &__field {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  &__label {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    font-weight: var(--font-semibold);
    color: var(--color-text);
  }

  &__required {
    color: var(--color-error);
  }

  &__input {
    font-family: var(--font-body);
    font-size: var(--text-base);
    color: var(--color-text);
    background: var(--color-surface-1);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    padding: var(--space-3);
    transition: all 0.2s ease;

    &:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px var(--color-primary-light);
    }

    &--error {
      border-color: var(--color-error);
    }
  }

  &__select {
    cursor: pointer;
  }

  &__textarea {
    resize: vertical;
    min-height: 120px;
    line-height: var(--leading-relaxed);
  }

  &__error {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    color: var(--color-error);
  }

  &__honeypot {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    opacity: 0;
  }

  &__submit {
    background: var(--color-primary);
    color: var(--color-text-inverse);
    font-family: var(--font-body);
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    border: none;
    border-radius: var(--radius-sm);
    padding: var(--space-4);
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);

    &:hover:not(:disabled) {
      background: var(--color-info);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px var(--color-shadow);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  &__spinner {
    animation: spin 1s linear infinite;
  }

  &__message {
    padding: var(--space-4);
    border-radius: var(--radius-sm);
    font-family: var(--font-body);
    font-size: var(--text-sm);
    text-align: center;

    &--success {
      background: var(--color-success);
      color: var(--color-success);
      border: 1px solid var(--color-success);
    }

    &--error {
      background: var(--color-error);
      color: var(--color-error);
      border: 1px solid var(--color-error);
    }
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.message-enter-active,
.message-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.message-enter-from,
.message-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>