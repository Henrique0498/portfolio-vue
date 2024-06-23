<script>
import _Typography from '~/components/Typography/Typography.vue'
</script>

<template>
  <main
    class="w-full h-full flex flex-col p-4 justify-center items-center text-emerald-950 bg-gradient-to-tr from-emerald-500 to-teal-700"
  >
    <Typography class="title">Em construção</Typography>
    <p>Este projeto é feito em NuxtJS</p>
    <UDivider class="max-w-xl">
      <Icon name="ri:tools-line" class="text-emerald-950 w-8 h-8" />
    </UDivider>
    <ULink to="https://henriquelopes.dev.br" class="hover:text-black">
      Ir para o projeto feito em NextJS
    </ULink>
  </main>
</template>
