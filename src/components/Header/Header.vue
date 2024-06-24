<template>
  <nav ref="header" class="navContainer">
    <header>
      <Logo />

      <nav>
        <ul>
          <li>
            <p title="Em construção" class="line-through cursor-not-allowed">
              Projetos
            </p>
          </li>
          <li>
            <NavLink
              href="https://www.linkedin.com/in/henrique-ls/"
              target="__blank"
              >LinkedIn</NavLink
            >
          </li>
          <li>
            <NavLink href="https://henriquelopes.dev.br" target="__blank"
              >Versão em NextJs</NavLink
            >
          </li>
        </ul>
      </nav>
    </header>
    <slot />
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Logo from '../Logo/Logo.vue'
const header = ref<HTMLHeadingElement | null>(null)

const colorMode = useColorMode()

computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

function handleScroll() {
  const scrollHeight = window.scrollY

  if (
    header.value?.className &&
    scrollHeight &&
    !header.value.className.includes('dark')
  ) {
    header.value.className += ' dark'
  } else if (header.value?.className && !scrollHeight) {
    header.value.className = header.value.className.replace(' dark', '')
  }
}

onMounted(() => {
  handleScroll()

  window.addEventListener('scroll', handleScroll)
})
</script>

<style scoped src="./styles.scss" />
