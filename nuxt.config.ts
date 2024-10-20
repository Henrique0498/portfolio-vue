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
          api: 'modern-compiler',
          additionalData: `
            @use "~/assets/styles/utils/_text.scss" as *;
            @use "~/assets/styles/utils/_variables.scss" as *;
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
