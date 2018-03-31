// @flow
/* eslint-disable */

import type {Stream} from '@most/types'
import {now, combineArray, map, scan} from '@most/core'
import mostTree, {type MostPith} from '../most1'

export opaque type VNode<+T: Element>: {+node: T} = {
  +type: 'node',
  +tag: string,
  +key: ?string,
  +children: VTree[],
  +node: T
}
export opaque type VText: {+node: Text} = {
  +type: 'text',
  +node: Text
}
export opaque type VComment: {+node: Comment} = {
  +type: 'comment',
  +node: Comment
}
export type VTree = VNode<Element> | VText | VComment

export type R<T> = T => mixed
export type NodeFn = {
  (tag: 'a', Stream<R<VNode<HTMLAnchorElement>>>, ?string): void,
  (tag: 'div', Stream<R<VNode<HTMLDivElement>>>, ?string): void,
  (
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    Stream<R<VNode<HTMLHeadingElement>>>,
    ?string
  ): void,
  (tag: string, Stream<R<VNode<Element>>>, ?string): void
}

export interface VNodeRay<T> {
  node: NodeFn;
  text(Stream<R<VText>>): void;
  comment(Stream<R<VComment>>): void;
  put(Stream<R<VNode<T>>>): void;
}

export type Pith<T> = (VNodeRay<T>) => void

export default function tree<T>(
  pith: Pith<T> | Stream<Pith<T>>
): Stream<R<VNode<T>>> {
  const ring: (Pith<T>) => MostPith<R<VNode<T>>> = pith => put => {
    pith({
      put,
      node(a: string, b: Stream<R<VNode<any>>>, c: ?string) {},
      text: (r: Stream<R<VText>>) => {},
      comment: (r: Stream<R<VComment>>) => {}
    })
  }
  return mostTree(xs =>
    combineArray(
      (...patches: Array<R<VNode<T>>>) =>
        function patchVNode(vnode) {
          for (var i = 0, l = patches.length; i < l; i++) {
            patches[i](vnode)
          }
        },
      xs
    )
  )(typeof pith === 'function' ? ring(pith) : map(ring, pith))
}

const rez = tree(put => {
  put.node('div', now(n => {}))
  put.node(
    'h1',
    tree(put => {
      put.node('div', now(n => {}))
      put.node(
        'h2',
        tree(put => {
          put.node('div', now(n => {}))
          put.node('h3', tree(put => {}))
          put.put(now(n => {}))
        })
      )
      put.put(now(n => {}))
    })
  )
  put.put(now(n => {}))
})

declare var rootNode: VNode<HTMLAnchorElement>

scan(
  (n, patch) => {
    patch(n)
    return n
  },
  rootNode,
  rez
)
