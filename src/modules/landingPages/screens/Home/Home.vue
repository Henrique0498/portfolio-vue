<template>
  <main class="homepage grid gap-x-4 grid-cols-4 lg:grid-cols-12">
    <Welcome class="col-span-4 lg:col-span-12" />

    <section class="description col-span-4 lg:col-span-12">
      <div class="max-w-screen-2xl grid grid-cols-2 py-20">
        <div class="description_header">
          <h2 class="title container_text">Apresentação</h2>
          <p>Uma breve descrição sobre mim.</p>
        </div>

        <div class="description_body shadow-xl">
          <p>
            Sou desenvolvedor <b>Front-end</b> há pouco mais de
            <b> {{ timeExperience }} anos</b>, trabalhei em uma empresa de São
            Paulo utilizando <b>React</b> e <b>Typescript</b> como linguagens
            principais e também sou formado em Gestão da Tecnologia da
            Informação.
            <br />
            Invisto meu tempo livre estudando tecnologias voltadas para
            Front-end além de sempre tentar melhorar minhas <b>soft skills</b>
            . E por que isso?
            <br />
            Porque acho incrível o ecossistema de desenvolvimento web, onde
            tecnologias novas surgem o tempo todo. Então, sempre existe uma
            maneira nova e melhor de fazer algo já existente.
          </p>
        </div>
      </div>
    </section>

    <section class="technologies col-span-4 lg:col-span-12">
      <div class="technologies_main">
        <div class="main_head pb-4">
          <h2 class="title container_text">Tecnologias</h2>
          <p>Estas são as stacks que mais domino nesse momento.</p>
        </div>
        <div class="body">
          <FlowTechnology :nodes="flowTechNodes" :edges="flowTechEdges" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { flowTechNodes, flowTechEdges } from './mock/flowTech'
const timeExperience = new Date().getFullYear() - 2021
</script>

<style lang="scss" scoped src="./styles.scss" />
