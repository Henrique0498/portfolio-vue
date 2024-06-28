import type { InFlowNode } from '~/types/flow'

export interface InFlowTechItemDefault extends InFlowNode<TyFlowTechData> {
  type: 'item'
}

export function isIconData(data: TyFlowTechData): data is InDataIcon {
  return (data as InDataIcon).icon !== undefined
}

export type TyFlowTechData = InDataIcon | InDataImage

interface InDataOrigin {
  title: string
  background: string
  iconBorderColor: string
  buttonLeftColor: string
  buttonRightColor: string
}

interface InDataIcon extends InDataOrigin {
  icon: {
    key: string
    color: string
  }
}

interface InDataImage extends InDataOrigin {
  image: {
    src: string
    alt: string
  }
}
