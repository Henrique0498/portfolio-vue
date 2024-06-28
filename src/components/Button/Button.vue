<template>
  <button
    ref="refButton"
    class="button"
    :class="color"
    @click="handleAnimation"
  >
    <Icon :if="icon" :name="icon" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TyButtonColor } from './types'
const refButton = ref<HTMLButtonElement>()
let timeRemoveClass: NodeJS.Timeout

defineProps({
  icon: {
    type: String,
    default: ''
  },
  color: {
    type: String as () => TyButtonColor,
    default: 'primary'
  }
})

function handleAnimation(event: MouseEvent) {
  removeClass()
  clearTimeout(timeRemoveClass)
  const x = event.offsetX
  const y = event.offsetY

  refButton.value?.style.setProperty('--click-x', `${x}px`)
  refButton.value?.style.setProperty('--click-y', `${y}px`)
  refButton.value?.classList.add('animationCircle')

  timeRemoveClass = setTimeout(removeClass, 400)
}

function removeClass() {
  refButton.value?.classList.remove('animationCircle')
}
</script>

<style lang="scss" scoped src="./styles.scss" />
