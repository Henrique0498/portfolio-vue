<template>
  <span class="badger" :class="color">
    <slot />
  </span>
</template>

<script setup lang="ts">
import type { BadgerColor } from './types'

defineProps({
  color: {
    type: String as () => BadgerColor,
    default: 'violet'
  }
})
</script>

<style lang="scss" scoped src="./styles.scss" />
