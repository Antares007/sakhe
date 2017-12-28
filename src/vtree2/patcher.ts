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
  VNodeCreated: {type: 'VNodeCreated'; data: VNode<any>}
  VCharacterDataCreated: {type: 'VCharacterDataCreated'; data: VCharacterData}
  StateChanged: {type: 'StateChanged', data: VNode<any>}
  Inserted: {type: 'Inserted', data: VTree<any>}
  Removed: {type: 'Removed', data: VTree<any>}
}
export type EventNames = keyof EventNameToTypeMap

const EventNames: EventNames[] = [
  'VNodeCreated',
  'VCharacterDataCreated',
  'StateChanged',
  'Inserted',
  'Removed'
]

export interface Face<Tag extends Tags> {
  state(): VNode<Tag>
  createElement<Tag extends Tags>(tag: Tag): VNode<Tag>
  createCharacterData(type: 'text' | 'comment', data: string): VCharacterData
  updateChieldState(vnode: VNode<any>, nnode: VNode<any>): void
  removeChild(vtree: VTree<any>): void
  patchData(data: Data): void
  patchText(charData: VCharacterData, text: string): void
  insertBefore(v: VTree<any>, ref: VTree<any> | null): void
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
  state(): VNode<Tag> {
    return {
      type: 'node',
      tag: this.tag,
      key: this.key,
      data: this.data,
      children: this.children,
      node: this.node
    }
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

  patchData(data: Data) {
    const oldClass = this.data.class || {}
    const newClass = data.class || {}

    for (const name in oldClass)
      if (!newClass[name]) this.node.classList.remove(name)

    for (const name in newClass)
      if (newClass[name] !== oldClass[name]) this.node.classList.toggle(name)

    this.data = data
    this.emmit('StateChanged', {type: 'StateChanged', data: this.state()})
  }
  updateChieldState(node: VNode<any>, nnode: VNode<any>) {
    const i = prelude.findIndex(node, this.children)
    this.children[i] = nnode
    this.emmit('StateChanged', {type: 'StateChanged', data: this.state()})
  }
  patchText(x: VCharacterData, text: string) {
    const i = prelude.findIndex(x, this.children)
    const chld = <VText | VComment>this.children[i]
    chld.node.textContent = text
    this.children[i] = {...chld, data: text}
    this.emmit('StateChanged', {type: 'StateChanged', data: this.state()})
  }
  removeChild (vtree: VTree<any>): void {
    const oi = prelude.findIndex(vtree, this.children)
    if (oi > -1) {
      this.node.removeChild(vtree.node)
      this.children.splice(oi, 1)
      this.emmit('Removed', {type: 'Removed', data: vtree})
      this.emmit('StateChanged', {type: 'StateChanged', data: this.state()})
    }
  }
  insertBefore(v: VTree<any>, ref: VTree<any> | null) {
    this.removeChild(v)
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
    this.emmit('Inserted', {type: 'Inserted', data: v})
    this.emmit('StateChanged', {type: 'StateChanged', data: this.state()})
  }
  createElement<Tag extends Tags>(tag: Tag): VNode<Tag> {
    const v: VNode<Tag> = {
      type: 'node',
      tag,
      data: {},
      children: [],
      node: document.createElement(tag)
    }
    this.emmit('VNodeCreated', {type: 'VNodeCreated', data: v})
    return v
  }
  createCharacterData(type: 'text' | 'comment', data: string): VCharacterData {
    const v = type === 'text'
      ? {type, data, node: document.createTextNode(data)}
      : {type, data, node: document.createComment(data)}
    this.emmit('VCharacterDataCreated', {type: 'VCharacterDataCreated', data: v})
    return v
  }
}
