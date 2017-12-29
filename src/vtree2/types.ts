export interface Data {
  attrs?: Record<string, string | boolean | number>
  class?: Record<string, boolean>
  props?: Record<string, any>
  style?: Record<string, string>
}
export type On = {
  [E in keyof HTMLElementEventMap]?: (e: HTMLElementEventMap[E]) => void
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

import {$} from '../most'
export interface Pith {
  (
    put: {
      node: <Tag extends Tags>(tag: Tag, r$: $<R<Tag>>, key?: string) => void
      text: (text: $<string>) => void
      comment: (text: $<string>) => void
    }
  ): void
}
export type R<Tag extends Tags> = (
  tree: VNode<Tag>,
  cb: (event: any) => void
) => VNode<Tag>

import {Stream} from '@most/types'
export interface Bark<Tag extends Tags> {
  (pith: $<Pith>): Stream<R<Tag>>
}
export type Patch<Tag extends Tags> = (
  a: VNode<Tag>,
  cb: (event: any) => void
) => void
