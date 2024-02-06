// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/image'],
  css: [
    '@/assets/css/normalize.css',
    '@/assets/css/main.scss',
    '@/assets/css/style.css',
  ],
  image: {
    dir: 'public/img/',
  },
})