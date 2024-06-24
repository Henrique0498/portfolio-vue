<template>
  <a class="link" :href :class>
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    required: true
  },
  class: {
    type: String,
    default: ''
  }
})
</script>

<style scoped src="./styles.scss" />
