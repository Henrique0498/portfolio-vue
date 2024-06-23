import { mountSuspended } from '@nuxt/test-utils/runtime'

import Title from './Typography.vue'
import { expect, it } from 'vitest'

it('<Title/>', async () => {
  // ... test with Nuxt environment!

  const component = await mountSuspended(Title)
  expect(component).toBeDefined()
})
