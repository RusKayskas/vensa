// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxt/image',
    'vue3-carousel-nuxt',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_variables.scss" as *;',
        },
      },
    },
  },
  css: [
    '@/assets/css/normalize.css',
    '@/assets/css/main.scss',
    '@/assets/css/style.css',
  ],
  image: {
    dir: 'public/img/',
  },
})