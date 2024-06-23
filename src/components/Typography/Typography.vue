<template>
  <h1 :class><slot /></h1>
</template>

<script setup type="ts">
defineProps({
  class: {
    type: String,
    default: ''
  }
})
</script>
