import {Stream} from '@most/types'
import {mergeArray, map, now, scan, combineArray} from '@most/core'
import {Pith} from './atree'
import {Pith$, ring, bark as mBark, Ray as mRay} from './most'

export interface ANode {
  type: 'node'
  tag: string
  key?: string
  data?: Record<string, string>
  children: ATree[]
}
export interface AText {
  type: 'text'
  data: string
}
export interface AComment {
  type: 'comment'
  data: string
}
export type ATree = ANode | AText | AComment
export type $<T> = T | Stream<T>
export type Tags = HTMLElementTagNameMap
export type Data = Record<string, string>
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
      ({type: 'node', tag, data, key, children}),
    [data, ...$s]
  )
  : combineArray<ATree, ANode>(
    (...children) =>
      ({type: 'node', tag, data, key, children}),
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
        ? map(text => (<AComment>{type: 'comment', data: text}), text)
        : now({type: 'comment', data: text})
      ),
      text: (text) => put(
        isStream(text)
        ? map(text => (<AText>{type: 'text', data: text}), text)
        : now({type: 'text', data: text})
      )
    })
  })(pith)
) as Stream<ANode>

function isStream<T>(x: any): x is Stream<T> {
  return x && typeof x.run === 'function'
}
