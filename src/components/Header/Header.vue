<template>
  <nav ref="header" class="navContainer" :class="classBackground">
    <header>
      <Logo />

      <button class="bugger md:hidden" @click="isOpen = !isOpen">
        <span class="text">Abrir menu</span>
        <span class="icon" :class="[isOpen ? 'open' : '']"></span>
      </button>

      <nav class="hidden md:block">
        <ul>
          <li>
            <p title="Em construção" class="line-through cursor-not-allowed">
              Projetos
            </p>
          </li>
          <li v-for="link in links" :key="link.id">
            <NavLink :href="link.href" target="__blank">{{
              link.label
            }}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </nav>

  <transition name="sidebar">
    <nav v-if="isOpen" class="sidebar md:hidden" :class="classBackground">
      <ul class="list">
        <li>
          <p title="Em construção" class="line-through cursor-not-allowed">
            Projetos
          </p>
        </li>
        <li v-for="link in links" :key="link.id">
          <NavLink :href="link.href" target="__blank">{{ link.label }}</NavLink>
        </li>
      </ul>
    </nav>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Logo from '../Logo/Logo.vue'
const isOpen = ref(false)
const classBackground = ref('')
const links = ref([
  {
    id: 'linkedIn',
    href: 'https://www.linkedin.com/in/henrique-ls/',
    label: 'LinkedIn'
  },
  {
    id: 'projectNextJS',
    href: 'https://henriquelopes.dev.br',
    label: 'Projeto em NextJS'
  }
])

function handleScroll() {
  const scrollHeight = window.scrollY

  if (scrollHeight) {
    classBackground.value = 'dark'
  } else if (!scrollHeight) {
    classBackground.value = ''
  }
}

function handleResize() {
  if (isOpen.value && window.innerWidth >= 768) {
    isOpen.value = false
  }
}

onMounted(() => {
  handleScroll()

  window.addEventListener('resize', handleResize)

  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)

  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped src="./styles.scss" />
