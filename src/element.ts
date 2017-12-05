import {Stream} from '@most/types'
import {mergeArray, map, now, scan, combineArray} from '@most/core'
import {Pith} from './atree'
import {Pith$, ring, bark as mBark, Ray as mRay} from './most'

export type Data = {
  attrs?: Record<string, string>
  class?: Record<string, boolean>
  on?: Record<string, any>
  props?: Record<string, any>
  style?: { [K in keyof CSSStyleDeclaration]?: string }
}
export interface ANode {
  sel: string
  key?: string
  data?: Data
  children: ATree[]
}
export interface AText {
  text: string
}
export interface AComment {
  sel: '!'
  text: string
}
export type ATree = ANode | AText | AComment
export type $<T> = T | Stream<T>
export type Tags = HTMLElementTagNameMap
export type Ray<TagA extends keyof Tags> = {
  node: <TagB extends keyof Tags>(tag: TagB, data?: $<Data>, key?: string) =>
        (pith: Pith$<Ray<TagB>>) => void
  text: (text: $<string>) => void
  comment: (text: $<string>) => void
}

export const bark =
<TagA extends keyof Tags>(tag: TagA, data?: $<Data>, key?: string) =>
(pith: Pith$<Ray<TagA>>) =>
mBark<ATree>($s =>
  isStream(data)
  ? combineArray<any, ANode>(
    (data: Data, ...children: ATree[]) =>
      ({sel: tag, data, key, children}),
    [data, ...$s]
  )
  : combineArray<ATree, ANode>(
    (...children) =>
      ({sel: tag, data, key, children}),
    $s
  )
)(
  ring<Ray<TagA>, mRay<ATree>>(p => put => {
    p({
      node: (tag, data, key) => (pith) => put(
        bark(tag, data, key)(pith)
      ),
      comment: (text) => put(
        isStream(text)
        ? map(text => (<AComment>{sel: '!', text}), text)
        : now(<AComment>{sel: '!', text})
      ),
      text: (text) => put(
        isStream(text)
        ? map(text => (<AText>{text}), text)
        : now(<AText>{text})
      )
    })
  })(pith)
) as Stream<ANode>

function isStream<T>(x: any): x is Stream<T> {
  return x && typeof x.run === 'function'
}
