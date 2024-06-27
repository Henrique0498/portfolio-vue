// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'light'
  },
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  components: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/styles/utils/_text.scss" as *;
          `
        }
      }
    }
  },
  srcDir: 'src/',
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/test-utils',
    '@nuxt/icon'
  ]
})
