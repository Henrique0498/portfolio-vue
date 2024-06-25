import { mountSuspended } from '@nuxt/test-utils/runtime'

import Welcome from './Welcome.vue'
import { expect, it } from 'vitest'

it('<Welcome />', async () => {

  const component = await mountSuspended(Welcome)
  expect(component).toBeDefined()
})
