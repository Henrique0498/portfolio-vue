import { mountSuspended } from '@nuxt/test-utils/runtime'

import Title from './Typography.vue'
import { expect, it } from 'vitest'

it('<Typography/>', async () => {
  const component = await mountSuspended(Title)
  expect(component).toBeDefined()
})
