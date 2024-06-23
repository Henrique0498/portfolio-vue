import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  modules: ['@nuxt/eslint']
}).append(
  {},
  {
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'vue/multi-word-component-names': 'off',
      'vue/valid-v-bind': 'off'
    }
  }
)
