<template>
  <img :src :alt :class class="container" />
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
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
