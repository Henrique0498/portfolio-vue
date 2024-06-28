import type { InFlowNode } from '~/types/flow'

export interface InFlowTechItemMain extends InFlowNode<InDataMain> {
  type: 'main'
}

export interface InDataMain {
  title: string
  description: string
  background: string
  iconBorderColor: string
  buttonLeftColor: string
  buttonRightColor: string
  icon: {
    key: string
    color: string
  }
}
