<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Henrique Lopes',
  htmlAttrs: {
    lang: 'pt-br'
  }
})

useSeoMeta({
  title: 'Henrique Lopes',
  ogTitle: 'Henrique Lopes',
  description: 'Portfólio de Henrique Lopes',
  ogDescription: 'Portfólio de Henrique Lopes'
})
</script>
