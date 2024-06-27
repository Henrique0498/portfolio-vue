<template>
  <VueFlow
    :nodes="nodesValue"
    :edges="edgesValue"
    fit-view-on-init
    class="flow"
  >
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
  </VueFlow>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Edge } from '@vue-flow/core'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import FlowTechnologyItemDefault from '../FlowTechnologyItemDefault/FlowTechnologyItemDefault.vue'
import FlowTechnologyItemMain from '../FlowTechnologyItemMain/FlowTechnologyItemMain.vue'
import type { InFlowTechItemMain } from '../FlowTechnologyItemMain/types'
import type { InFlowTechItemDefault } from '../FlowTechnologyItemDefault/types'
const { onConnect, addEdges } = useVueFlow()

onConnect(addEdges)

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
</script>

<style>
@import '@vue-flow/core/dist/style.css';
</style>

<style lang="scss" scoped src="./styles.scss" />
