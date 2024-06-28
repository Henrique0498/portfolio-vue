import { mountSuspended } from '@nuxt/test-utils/runtime'

import Header from './Header.vue'
import { expect, it } from 'vitest'

it('<Header />', async () => {

  const component = await mountSuspended(Header)
  expect(component).toBeDefined()
})
