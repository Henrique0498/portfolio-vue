<template>
  <NuxtLayout>
    <div class="App">
      <Header />
      <div class="AppBody">
        <NuxtPage />
      </div>
      <Footer />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import Footer from './components/Footer/Footer.vue'
import Header from './components/Header/Header.vue'

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
