<template>
  <div class="flowTech-container">
    <div
      class="flowTech-lock flex transition-all"
      :class="[unlock ? 'z-10' : 'opacity-0 z-0']"
    >
      <div class="relative">
        <h3 class="text-2xl m-2">Mapa mental</h3>
        <p class="mb-8 text-center">
          Exemplo de como as tecnologias funcionam.
        </p>

        <UButton
          variant="solid"
          color="blue"
          size="md"
          icon="i-heroicons-lock-open-solid"
          @click="unlock = !unlock"
          >Desbloquear</UButton
        >

        <div
          v-if="loading"
          class="flowTech-loading text-lg flex gap-2 items-center"
        >
          <Icon name="svg-spinners:180-ring-with-bg" />
          Carregando...
        </div>
      </div>
    </div>
    <VueFlow
      :nodes="nodesValue"
      :edges="edgesValue"
      fit-view-on-init
      class="flowTech-flow"
    >
      <div class="absolute p-4 z-10 gap-2 flex">
        <UButton
          variant="solid"
          color="blue"
          icon="i-heroicons-lock-closed-solid"
          size="md"
          @click="unlock = !unlock"
        >
          Bloquear
        </UButton>

        <UButton
          icon="i-heroicons-arrow-path"
          variant="solid"
          size="md"
          color="gray"
          @click="handleResize"
        >
          Restaurar
        </UButton>
      </div>

      <template #node-item="itemNodeProps">
        <FlowTechnologyItemDefault
          v-bind="itemNodeProps"
          :id="itemNodeProps.id"
          fit-view-on-init
        />
      </template>
      <template #node-main="mainNodeProps">
        <FlowTechnologyItemMain
          v-bind="mainNodeProps"
          :id="mainNodeProps.id"
          fit-view-on-init
        />
      </template>

      <Controls
        show-zoom
        show-fit-view
        show-interactive
        class="flowTech-control"
      />
      <MiniMap class="flowTech-map" />
    </VueFlow>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Edge } from '@vue-flow/core'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import FlowTechnologyItemDefault from './Item/Default/FlowTechnologyItemDefault.vue'
import FlowTechnologyItemMain from './Item/Main/FlowTechnologyItemMain.vue'
import type { InFlowTechItemMain } from './Item/Main/types'
import type { InFlowTechItemDefault } from './Item/Default/types'
import { Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
const { onConnect, addEdges } = useVueFlow()
const unlock = ref(true)
const loading = ref(true)

const { nodes, edges } = defineProps({
  nodes: {
    type: Array as () => (InFlowTechItemDefault | InFlowTechItemMain)[],
    required: true
  },
  edges: {
    type: Array as () => Edge[],
    required: true
  }
})

const nodesValue = ref(nodes)
const edgesValue = ref(edges)

function handleResize() {
  nodesValue.value = nodes
  edgesValue.value = edges
}

onConnect(addEdges)

onBeforeMount(() => {
  loading.value = false
})
</script>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/controls/dist/style.css';
@import '@vue-flow/minimap/dist/style.css';
</style>

<style lang="scss" src="./styles.scss" />
