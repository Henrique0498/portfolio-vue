<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="container">
    <div class="header" />
    <div class="body" v-html="rawHtml" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { codeToHtml } from 'shiki'
import type { Languages, Theme } from './type'
import { _backgroundColor } from '#tailwind-config/theme'
const rawHtml = ref<string>()
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

rawHtml.value = await codeToHtml(code, {
  lang,
  theme
})
</script>

<style lang="scss" scoped src="./styles.scss" />
