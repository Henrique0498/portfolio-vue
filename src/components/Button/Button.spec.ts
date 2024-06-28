import { mountSuspended } from '@nuxt/test-utils/runtime'

import Button from './Button.vue'
import { expect, it } from 'vitest'

it('<Button />', async () => {

  const component = await mountSuspended(Button)
  expect(component).toBeDefined()
})
