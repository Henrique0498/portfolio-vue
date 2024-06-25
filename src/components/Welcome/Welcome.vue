<template>
  <section class="welcome mx-auto">
    <div>
      <div className="flex gap-2">
        <Badger color="green">Vue</Badger>
        <Badger>React</Badger>
        <Badger color="blue">Typescript</Badger>
        <Badger color="yellow">Javascript</Badger>
      </div>

      <div class="welcome-text">
        <span>Opa!</span>
        <span>Eu sou um</span>
        <span>Front-End Developer.</span>
      </div>
    </div>

    <Coding :code="code" class="ml-auto shadow-xl" />
  </section>
</template>

<script setup lang="ts">
import Badger from '../Badger/Badger.vue'

const code = `function HomePage(){
  return (
    <>
      <BemVindo>
        Hi! Seja bem vindo ao meu portfólio!
      </BemVindo>
      <Descicao>
        Essa é página inicial, ela vai contar sobre mim
      </Descicao>
    </>
  )
}`
</script>

<style scoped src="./styles.scss" />
