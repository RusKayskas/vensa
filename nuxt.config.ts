// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  css: [
    '@/assets/css/normalize.css',
    '@/assets/css/style.css',
  ],
  modules: ['@nuxt/image'],
})