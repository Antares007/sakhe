import {Stream} from '@most/types'
import {
  mergeArray,
  map,
  now,
  scan,
  combineArray,
  MulticastSource,
  newStream,
  multicast
} from '@most/core'
import * as prelude from '@most/prelude'
import {ring as mostRing, tree as mostTree, $, to$, isStream} from '../most'
import {chain} from '../chain'

import {
  VTree,
  VNode,
  Data,
  Tags,
  VText,
  VComment,
  VCharacterData
} from './types'
import {toVNode} from './to-vnode'
import {updateClass} from './update-class'
import {updateAttributes} from './update-attributes'

export interface Pith {
  (
    put: {
      node: <Tag extends Tags>(
        tag: Tag,
        data?: $<Data>,
        key?: string
      ) => (pith: $<Pith>) => void
      text: (text: $<string>) => void
      comment: (text: $<string>) => void
    }
  ): void
}

export interface Bark<Tag extends Tags> {
  (pith: $<Pith>): Stream<R<Tag>>
}

export type R<Tag extends Tags> = (tree: VNode<Tag>) => VNode<Tag>

interface Patch {
  (api: Api): void
}
interface Api {
  getByIndex: (i: number) => VTree<any> | null
  getByKey: (key: string) => VNode<any> | undefined
  find: (f: (vtree: VTree<any>, i: number) => boolean) => VTree<any> | undefined
  createElement: <Tag extends Tags>(tag: Tag) => VNode<Tag>
  createCharacterData: (
    type: 'text' | 'comment',
    data: string
  ) => VCharacterData
  updateNode: (vnode: VNode<any>, nnode: VNode<any>) => void
  updateData: (data: Data) => void
  updateCharacterData: (charData: VCharacterData, text: string) => void
  insertBefore: (v: VTree<any>, ref: VTree<any> | null) => void
}

export const tree = <TagA extends Tags>(
  tag: TagA,
  data: $<Data> = {},
  key?: string
): Bark<TagA> => pith => {
  const ring = mostRing<Pith, Patch>(pith => put => {
    var gi = 0

    put(
      map<Data, Patch>(
        data => api => {
          api.updateData(data)
        },
        to$(data)
      )
    )

    const mNode = <TagB extends Tags>(
      tagB: TagB,
      data: $<Data> = {},
      key?: string
    ) => (pith: $<Pith>) => {
      const li = gi++
      put(
        map<R<TagB>, Patch>(
          r => api => {
            const chld = api.getByIndex(li)
            let onode: VNode<any> | undefined
            if (chld === null) {
              api.insertBefore(r(api.createElement(tagB)), null)
            } else if (
              chld.type === 'node' &&
              chld.tag === tagB &&
              chld.key === key
            ) {
              api.updateNode(chld, r(chld))
            } else if (key && (onode = api.getByKey(key))) {
              api.insertBefore(onode, chld)
              api.updateNode(onode, r(onode))
            } else if (chld.type === 'node' && chld.tag === tagB) {
              api.updateNode(chld, r(chld))
            } else {
              api.insertBefore(r(api.createElement(tagB)), chld)
            }
          },
          tree(tagB, data, key)(pith)
        )
      )
    }

    const mCharacterData = (type: 'text' | 'comment') => (text: $<string>) => {
      const li = gi++
      put(
        map<string[], Patch>(
          ([oText, text]) => api => {
            const chld = api.getByIndex(li)
            let oldCharData: VCharacterData | undefined
            if (!chld) {
              api.insertBefore(api.createCharacterData(type, text), null)
            } else if (chld.type === type) {
              api.updateCharacterData(chld, text)
            } else if (
              (oldCharData = <VCharacterData | undefined>api.find(
                (vtree, i) =>
                  i > li && vtree.type === type && vtree.data === oText
              ))
            ) {
              api.insertBefore(oldCharData, chld)
              api.updateCharacterData(oldCharData, text)
            } else {
              api.insertBefore(api.createCharacterData(type, text), chld)
            }
          },
          chain(to$(text))
            .pairwise('')
            .valueOf()
        )
      )
    }

    pith({
      node: mNode,
      text: mCharacterData('text'),
      comment: mCharacterData('comment')
    })
  })

  return mostTree(
    combineArray<Patch, R<TagA>>(
      (...patches) => ({tag, data, children, node}) => {
        const api = new PatchApi(tag, key, data, children, node)
        patches.forEach(patch => patch(api))
        return api.getVNode()
      }
    )
  )(ring(pith))
}

var rez = tree(
  'div',
  {
    class: {a: true, b: true, o: true},
    style: {width: '100%'}
  },
  'k1'
)(put => {
  put.text('hello')
  put.node('h1', {class: {a: true, b: true, o: true}})(put =>
    put.text('world!')
  )
})

chain(rez)
  .scan((t, r) => r(t), toVNode<'div'>(document.getElementById('root-node')!))
  .tap(console.log.bind(console))
  .drain()

class PatchApi<Tag extends Tags> implements Api {
  private tag: Tag
  private key: string | undefined
  private children: VTree<any>[]
  private data: Data
  private node: Element
  private keyMap: Record<string, VNode<any> | undefined> | undefined

  constructor(
    tag: Tag,
    key: string | undefined,
    data: Data,
    children: VTree<any>[],
    node: Element
  ) {
    this.tag = tag
    this.key = key
    this.data = data
    this.children = children.slice(0)
    this.node = node
  }
  getByIndex(index: number) {
    return -1 < index && index < this.children.length
      ? this.children[index]
      : null
  }
  getByKey(key: string): VNode<any> | undefined {
    if (!this.keyMap) {
      this.keyMap = this.children.reduce(
        (s, t) => {
          if (t.type === 'node' && typeof t.key === 'string') {
            s[t.key] = t
          }
          return s
        },
        {} as Record<string, VNode<any>>
      )
    }
    return this.keyMap[key]
  }
  find(f: (vtree: VTree<any>, i: number) => boolean): VTree<any> | undefined {
    return this.children.find(f)
  }
  updateData(data: Data) {
    const oldClass = this.data.class || {}
    const newClass = data.class || {}

    for (const name in oldClass)
      if (!newClass[name]) this.node.classList.remove(name)

    for (const name in newClass)
      if (newClass[name] !== oldClass[name]) this.node.classList.toggle(name)

    this.data = data
  }
  updateNode(node: VNode<any>, nnode: VNode<any>) {
    const i = prelude.findIndex(node, this.children)
    this.children[i] = nnode
  }
  updateCharacterData(x: VCharacterData, text: string) {
    const i = prelude.findIndex(x, this.children)
    const chld = <VText | VComment>this.children[i]
    chld.node.textContent = text
    this.children[i] = Object.assign({}, chld, {data: text})
  }
  insertBefore(v: VTree<any>, ref: VTree<any> | null) {
    const oi = prelude.findIndex(v, this.children)
    if (oi > -1) this.children.splice(oi, 1)
    if (ref !== null) {
      const i = prelude.findIndex(ref, this.children)
      this.children = [
        ...this.children.slice(0, i),
        v,
        ...this.children.slice(i)
      ]
      this.node.insertBefore(v.node, ref.node)
    } else {
      this.children.push(v)
      this.node.insertBefore(v.node, null)
    }
  }
  createElement<Tag extends Tags>(tag: Tag): VNode<Tag> {
    return {
      type: 'node',
      tag,
      data: {},
      children: [],
      node: document.createElement(tag)
    }
  }
  createCharacterData(type: 'text' | 'comment', data: string): VCharacterData {
    return type === 'text'
      ? {type, data, node: document.createTextNode(data)}
      : {type, data, node: document.createComment(data)}
  }
  getVNode(): VNode<Tag> {
    return {
      type: 'node',
      tag: this.tag,
      key: this.key,
      data: this.data,
      children: this.children,
      node: this.node
    }
  }
}
