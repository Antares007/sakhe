import {Stream} from '@most/types'
import {CSSProperties} from './CSS'
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
import {ring as mostRing, tree as mostTree, $, to$, isStream} from './most'
import {chain} from './chain'

export type Tags = keyof HTMLElementTagNameMap

export interface Data {
  attrs?: Record<string, string>
  class?: Record<string, boolean>
  props?: Record<string, any>
  style?: CSSProperties
}
export type On = {
  [E in keyof HTMLElementEventMap]?: (e: HTMLElementEventMap[E]) => void
}

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
export type VTree<Tag extends Tags> = VNode<Tag> | VText | VComment

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

export const tree = <TagA extends Tags>(
  tag: TagA,
  data: $<Data> = {},
  key?: string
): Bark<TagA> => pith => {
  var keyMap: Record<string, VNode<any> | undefined> = {}

  const combine = (data: Data, ...rs: R<TagA>[]): R<TagA> => node => {
    const nnode = rs.reduce((t, r) => r(t), node)
    keyMap = nnode.children.reduce(
      (s, t) => {
        if (t.type === 'node' && t.key) {
          s[t.key] = t
        }
        return s
      },
      {} as Record<string, VNode<any>>
    )
    return nnode
  }

  const ring = mostRing<Pith, R<TagA>>(pith => put => {
    var gi = 0
    pith({
      node: <TagB extends Tags>(
        tagB: TagB,
        data: $<Data> = {},
        key?: string
      ) => (pith: $<Pith>) => {
        const li = gi++
        put(
          map<R<TagB>, R<TagA>>(
            r => n => {
              const chld = getChieldAt(li, n)
              if (chld && chld.type === 'node') {
                if (chld.tag === tagB) {
                  return replaceChild(r(<VNode<TagB>>chld), li, n)
                } else {
                  if (key) {
                    const onode = keyMap[key]
                    return insertBefore(
                      r(<VNode<TagB>>(onode || createVNode(tagB, key))),
                      chld,
                      n
                    )
                  } else {
                    return insertBefore(r(createVNode(tagB, key)), chld, n)
                  }
                }
              } else {
                return insertBefore(r(createVNode(tagB, key)), chld, n)
              }
            },
            tree(tagB, data, key)(pith)
          )
        )
      },
      text: (text: $<string>) => {
        const li = gi++
        put(
          map<string, R<TagA>>(
            text => n => {
              const chld = getChieldAt(li, n)
              return chld && chld.type === 'text'
                ? replaceChild(setVTextOrComment(text, chld), li, n)
                : insertBefore(createVText(text), chld, n)
            },
            to$(text)
          )
        )
      },
      comment: (text: $<string>) => {
        const li = gi++
        put(
          map<string, R<TagA>>(
            text => n => {
              const chld = getChieldAt(li, n)
              return chld && chld.type === 'comment'
                ? replaceChild(setVTextOrComment(text, chld), li, n)
                : insertBefore(createVComment(text), chld, n)
            },
            to$(text)
          )
        )
      }
    })
  })

  return mostTree<R<TagA>>(r$s =>
    combineArray<any, R<TagA>>(combine, [to$(data), ...r$s])
  )(ring(pith))
}

var rez = tree('div', {
  style: {
    width: '10px',
    display: 'block'
  }
})(put => put.text('hello'))

chain(rez)
  .scan((t, r) => r(t), toVNode<'div'>(document.getElementById('root-node')!))
  .drain()

function getChieldAt(index: number, {children}: VNode<any>): VTree<any> | null {
  return -1 < index && index < children.length ? children[index] : null
}

function setVTextOrComment<T extends VText | VComment>(
  text: string,
  leaf: T
): T {
  leaf.node.textContent = text
  return Object.assign({}, leaf, {data: text})
}

function createVNode<Tag extends Tags>(tag: Tag, key?: string): VNode<Tag> {
  return {
    type: 'node',
    tag,
    key,
    data: {},
    children: [],
    node: document.createElement(tag)
  }
}

function createVText(text: string): VText {
  return {
    type: 'text',
    data: text,
    node: document.createTextNode(text)
  }
}

function createVComment(text: string): VComment {
  return {
    type: 'comment',
    data: text,
    node: document.createComment(text)
  }
}

function insertBefore<Tag extends Tags>(
  child: VTree<any>,
  ref: VTree<any> | null,
  parent: VNode<Tag>
): VNode<Tag> {
  if (child === ref) return parent
  var {children} = parent
  const oi = prelude.findIndex(child, children)
  if (oi > -1) {
    children = prelude.remove(oi, children)
  }
  const ri = prelude.findIndex(ref, children)
  children =
    ri > -1
      ? [...children.slice(0, ri), child, ...children.slice(ri)]
      : [...children, child]
  return Object.assign({}, parent, {children})
}

function replaceChild<Tag extends Tags>(
  chld: VTree<any>,
  index: number,
  vnode: VNode<Tag>
): VNode<Tag> {
  return Object.assign({}, vnode, {
    children: prelude.replace(chld, index, vnode.children)
  })
}

function toVNode<Tag extends Tags>(element: Element): VNode<Tag> {
  const tag = element.tagName.toLowerCase() as Tag
  const data: Record<string, string> = {}
  const children: Array<VTree<any>> = []
  const elmAttrs = element.attributes
  const elmChildren = element.childNodes
  for (var i = 0, n = elmAttrs.length; i < n; i++) {
    const value = elmAttrs[i].nodeValue
    if (value) data[elmAttrs[i].nodeName] = value
  }
  for (var i = 0, n = elmChildren.length; i < n; i++) {
    children.push(toVTree(elmChildren[i]))
  }
  return {type: 'node', tag, data, children, node: element}
}

function toVTree<Tag extends Tags>(node: Node): VTree<Tag> {
  if (isElement(node)) {
    return toVNode(node)
  } else if (isText(node)) {
    return {type: 'text', data: node.textContent || '', node}
  } else if (isComment(node)) {
    return {type: 'comment', data: node.textContent || '', node}
  } else {
    return assertNever()
  }
}

function assertNever(message = 'never'): never {
  throw new Error(message)
}

function isElement(node: Node): node is Element {
  return node.nodeType === 1
}

function isText(node: Node): node is Text {
  return node.nodeType === 3
}

function isComment(node: Node): node is Comment {
  return node.nodeType === 8
}
