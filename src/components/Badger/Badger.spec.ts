import { mountSuspended } from '@nuxt/test-utils/runtime'

import Badger from './Badger.vue'
import { expect, it } from 'vitest'

it('<Badger />', async () => {

  const component = await mountSuspended(Badger)
  expect(component).toBeDefined()
})
