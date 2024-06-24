import { mountSuspended } from '@nuxt/test-utils/runtime'

import Footer from './Footer.vue'
import { expect, it } from 'vitest'

it('<Footer />', async () => {

  const component = await mountSuspended(Footer)
  expect(component).toBeDefined()
})
