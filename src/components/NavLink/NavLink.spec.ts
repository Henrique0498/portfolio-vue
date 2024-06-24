import { mountSuspended } from '@nuxt/test-utils/runtime'

import NavLink from './NavLink.vue'
import { expect, it } from 'vitest'

it('<NavLink />', async () => {

  const component = await mountSuspended(NavLink)
  expect(component).toBeDefined()
})
