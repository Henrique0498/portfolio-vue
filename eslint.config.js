/*import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  modules: ['@nuxt/eslint']
  })
  .prepend
  // ...Prepend some flat configs in front
  ()
  // Override some rules in a specific config, based on their name
  .override('nuxt/typescript', {
    rules: {
      // ...Override rules, for example:
      '@typescript-eslint/ban-types': 'off'
    }
  })

*/

// export default eslint
/*
rules: {
  'vue/no-unused-vars': 'off',
  'no-unused-vars': [
    'error',
    {
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: true,
      },
      ],
      'vue/multi-word-component-names': 'off',
      */
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
