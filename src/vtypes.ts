export type BNode = {
  type: 'node'
  tag: string
  key?: string
}

export type Data = Record<string, string>

export type ANode = BNode & {
  data?: Data
  children: ATree[]
}
export type AText = {
  type: 'text'
  data: string
}
export type AComment = {
  type: 'comment'
  data: string
}
export type ATree = ANode | AText | AComment

export type ONode = BNode & {
  data: Data
  children: OTree[]
  node: Element
}
export type OText = AText & {node: Text}
export type OComment = AComment & {node: Comment}
export type OTree = ONode | OText | OComment
