<template>
  <div id="app">
    <NavBar />
    <main class="app__main">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

</script>

<style lang="scss">
#app {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.app__main {
  flex: 1;
  margin-top: var(--nav-bar-height);
}
</style>