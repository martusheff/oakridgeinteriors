<template>
  <div>
    <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    </UApp>
  </div>
</template>

<script setup>
useHead({
  meta: [
    { name: 'color-scheme', content: 'light only' },
    { name: 'theme-color', content: '#ffffff' },
    // This is the key one for Android
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
  ]
})
</script>