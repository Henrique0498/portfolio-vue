import { mountSuspended } from '@nuxt/test-utils/runtime'

import Logo from './Logo.vue'
import { expect, it } from 'vitest'

it('<Logo />', async () => {

  const component = await mountSuspended(Logo)
  expect(component).toBeDefined()
})
