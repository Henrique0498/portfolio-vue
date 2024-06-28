<template>
  <div :id="id" class="background" :class="data.background">
    <div class="node">
      <div class="icon" :class="data.iconBorderColor">
        <Icon
          v-if="isIconData(data)"
          :name="data.icon.key"
          class="text-4xl"
          :class="data.icon.color"
        />

        <Image
          v-if="!isIconData(data)"
          :src="data.image.src"
          :alt="data.image.alt"
          class="w-10 h-10"
        />
      </div>

      <div class="description">
        <span>{{ data.title }}</span>
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
import { isIconData } from './types'
import type { TyFlowTechData } from './types'
import Image from '~/components/Image/Image.vue'

defineProps<NodeProps<TyFlowTechData>>()
</script>

<style lang="scss" scoped src="./styles.scss" />
