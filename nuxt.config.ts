// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  srcDir: 'src/',
  modules: ['@nuxt/eslint', '@nuxt/test-utils', '@nuxt/ui', '@nuxt/icon']
})
