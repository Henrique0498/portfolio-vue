export interface InFlowNode<T> {
  id: string
  type: string
  data: T
  position: Position
}

interface Position {
  x: number
  y: number
}
