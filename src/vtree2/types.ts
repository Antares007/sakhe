import {CSSProperties} from '../CSS'
export interface Data {
  attrs?: Record<string, string | boolean | number>
  class?: Record<string, boolean>
  props?: Record<string, any>
  style?: CSSProperties
  on?: {[K in keyof HTMLElementEventMap]?: any}
}
export type Tags = keyof HTMLElementTagNameMap
export interface VNode {
  type: 'node'
  tag: string
  key?: string
  data: Data
  children: VTree[]
  node: Element
}
export interface VText {
  type: 'text'
  data: string
  node: Text
}
export interface VComment {
  type: 'comment'
  data: string
  node: Comment
}
export type VCharacterData = VComment | VText
export type VTree = VNode | VText | VComment
