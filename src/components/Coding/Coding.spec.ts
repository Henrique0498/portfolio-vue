import { mountSuspended } from '@nuxt/test-utils/runtime'

import Coding from './Coding.vue'
import { expect, it } from 'vitest'

it('<Coding />', async () => {

  const component = await mountSuspended(Coding)
  expect(component).toBeDefined()
})
