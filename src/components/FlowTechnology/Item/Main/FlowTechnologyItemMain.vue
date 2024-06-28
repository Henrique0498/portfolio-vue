<template>
  <div class="background" :class="data.background">
    <div class="node">
      <div class="header">
        <Icon
          :name="data.icon.key"
          class="w-32 h-32"
          :class="data.icon.color"
        />
      </div>

      <div class="description">
        <span>{{ data.title }}</span>
        <p>{{ data.description }}</p>
      </div>
    </div>
    <Handle
      type="target"
      class="handle left"
      :class="data.buttonLeftColor"
      :position="Position.Left"
    />
    <Handle
      type="source"
      class="handle right"
      :class="data.buttonRightColor"
      :position="Position.Right"
    />
  </div>
</template>

<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import type { NodeProps } from '@vue-flow/core'
import type { InDataMain } from './types'

defineProps<NodeProps<InDataMain>>()
</script>

<style lang="scss" scoped src="./styles.scss" />
