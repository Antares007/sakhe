export interface Data {
  attrs?: Record<string, string | boolean | number>
  class?: Record<string, boolean>
  props?: Record<string, any>
  style?: Record<string, string>
}
export type Tags = keyof HTMLElementTagNameMap
export type VNode<Tag extends Tags> = {
  type: 'node'
  tag: Tag
  key?: string
  data: Data
  children: VTree<any>[]
  node: Element
}
export type VText = {
  type: 'text'
  data: string
  node: Text
}
export type VComment = {
  type: 'comment'
  data: string
  node: Comment
}
export type VCharacterData = VComment | VText
export type VTree<Tag extends Tags> = VNode<Tag> | VText | VComment
