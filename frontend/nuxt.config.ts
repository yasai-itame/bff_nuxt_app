// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      API_URL: process.env.NUXT_API_URL
    }
  },
  nitro: {
    routeRules: {
      "/api/**": {
        proxy: `${process.env.NUXT_API_URL}/**`
      }
    }
  },
  typescript: {
    strict: false
  }
})