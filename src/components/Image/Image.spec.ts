import { mountSuspended } from '@nuxt/test-utils/runtime'

import Image from './Image.vue'
import { expect, it } from 'vitest'

it('<Image />', async () => {

  const component = await mountSuspended(Image)
  expect(component).toBeDefined()
})
