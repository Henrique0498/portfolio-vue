<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="container">
    <div class="header" />
    <div class="body" v-html="sanitizedHtml" />
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { codeToHtml } from 'shiki'
import type { Languages, Theme } from './type'
import DOMPurify from 'dompurify'
import { _backgroundColor } from '#tailwind-config/theme'
const sanitizedHtml = ref('')
const { code, theme, lang } = defineProps({
  code: {
    type: String,
    required: true
  },
  lang: {
    type: String as () => Languages,
    default: 'jsx'
  },
  theme: {
    type: String as () => Theme,
    default: 'one-dark-pro'
  }
})

onBeforeMount(async () => {
  const rawHtml = await codeToHtml(code, {
    lang,
    theme
  })

  sanitizedHtml.value = DOMPurify.sanitize(rawHtml)
})
</script>

<style scoped src="./styles.scss" />
