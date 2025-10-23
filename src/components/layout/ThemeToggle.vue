<template>
  <button
    class="theme-toggle"
    @click="toggleTheme"
    :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
    :title="`Switch to ${isDark ? 'light' : 'dark'} mode`"
  >
    <Transition name="icon" mode="out-in">
      <Sun v-if="isDark" :size="20" :stroke-width="2" />
      <Moon v-else :size="20" :stroke-width="2" />
    </Transition>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'

const isDark = ref(false)

const setTheme = (dark: boolean) => {
  isDark.value = dark
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

const toggleTheme = () => {
  setTheme(!isDark.value)
}

onMounted(() => {
  // Check for saved theme preference or default to light
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  const initialTheme = savedTheme === 'dark' || (!savedTheme && prefersDark)
  setTheme(initialTheme)
})
</script>

<style scoped lang="scss">
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--color-surface-1);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-surface-2);
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  &:active {
    transform: scale(0.95);
  }

  @include tablet {
    margin-right: var(--space-2);
  }

  @include mobile {
    width: 36px;
    height: 36px;
  }
}

.icon-enter-active,
.icon-leave-active {
  transition: all 0.2s ease;
}

.icon-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.8);
}

.icon-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
}
</style>