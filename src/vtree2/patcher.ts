import * as prelude from '@most/prelude'
import {EventEmitter} from 'events'
import {
  VTree,
  VNode,
  Data,
  Tags,
  VText,
  VComment,
  VCharacterData
} from './types'

export type EventNameToTypeMap = {
  create: {type: 'create'; data: VTree<any>}
}
export type EventNames = keyof EventNameToTypeMap

const EventNames: EventNames[] = ['create']

export interface Face<Tag extends Tags> {
  state(): VNode<Tag>
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
  on<E extends EventNames>(
    e: E,
    cb: (e: EventNameToTypeMap[E]) => void
  ): Face<Tag>
  eventNames(): EventNames[]
}
export function create<Tag extends Tags>(
  tag: Tag,
  key: string | undefined,
  data: Data,
  children: VTree<any>[],
  node: Element
): Face<Tag> {
  return new PatchApi(tag, key, data, children, node)
}
export class PatchApi<Tag extends Tags> extends EventEmitter
  implements Face<Tag> {
  private tag: Tag
  private key: string | undefined
  private children: VTree<any>[]
  private data: Data
  private node: Element
  private keyMap: Record<string, VNode<any> | undefined> | undefined
  state() {
    return this.getVNode()
  }
  constructor(
    tag: Tag,
    key: string | undefined,
    data: Data,
    children: VTree<any>[],
    node: Element
  ) {
    super()
    super.emit
    this.tag = tag
    this.key = key
    this.data = data
    this.children = children.slice(0)
    this.node = node
  }
  emmit<E extends EventNames>(name: E, e: EventNameToTypeMap[E]): boolean {
    return super.emit(name, e)
  }
  on<E extends EventNames>(e: E, cb: (e: EventNameToTypeMap[E]) => void) {
    return super.on(e, cb)
  }
  eventNames(): EventNames[] {
    return [...EventNames]
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
