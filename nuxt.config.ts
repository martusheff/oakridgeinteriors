// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@nuxtjs/turnstile',
    '@nuxt/ui',
    'nuxt-gtag',
    '@formkit/auto-animate',
    '@nuxtjs/color-mode'
  ],

  turnstile: {
    siteKey: process.env.TURNSTYLE_SITEKEY,
  },

  runtimeConfig: {
    turnstile: {
      secretKey: process.env.TURNSTYLE_SECRETKEY,
    },
  },

  css: ['~/assets/css/main.css'],
  gtag: {
    id: 'G-NKXPF3FRL9'
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  }


})