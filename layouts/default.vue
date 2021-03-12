<template>
  <div>
    <AppMenu />
    <Nuxt />
  </div>
</template>

<script>
import AppMenu from '@/components/AppMenu.vue'

export default {
  components: {
    AppMenu,
  },
}
</script>

<style>
html {
  font-family: 'Blinker', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #f5f5f5;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
