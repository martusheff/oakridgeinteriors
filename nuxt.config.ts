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
    '@nuxt/ui'
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

  

})