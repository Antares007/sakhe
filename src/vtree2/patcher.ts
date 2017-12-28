import * as prelude from '@most/prelude'
import {EventEmitter} from 'events'
import {VTree, VNode, Data, Tags, VCharacterData} from './types'

export function patchData(data: Data, vnode: VNode<any>) {
  const oldClass = vnode.data.class || {}
  const newClass = data.class || {}

  for (const name in oldClass)
    if (!newClass[name]) vnode.node.classList.remove(name)

  for (const name in newClass)
    if (newClass[name] !== oldClass[name]) vnode.node.classList.toggle(name)
  vnode.data = data
}

export function updateChieldState(
  oldVnode: VNode<any>,
  newVnode: VNode<any>,
  vnode: VNode<any>
): void {
  const i = prelude.findIndex(oldVnode, vnode.children)
  vnode.children[i] = newVnode
}

export function patchText(
  vCharData: VCharacterData,
  text: string,
  vnode: VNode<any>
): void {
  const i = prelude.findIndex(vCharData, vnode.children)
  const chld = <VCharacterData>vnode.children[i]
  chld.node.textContent = text
  vnode.children[i] = {...chld, data: text}
}

export function removeChild(vTree: VTree<any>, vnode: VNode<any>): void {
  const oi = prelude.findIndex(vTree, vnode.children)
  if (oi > -1) {
    vnode.node.removeChild(vTree.node)
    vnode.children.splice(oi, 1)
  }
}

export function insertBefore(
  childVnode: VTree<any>,
  refVnode: VTree<any> | null,
  vnode: VNode<any>
): void {
  removeChild(childVnode, vnode)
  if (refVnode !== null) {
    const i = prelude.findIndex(refVnode, vnode.children)
    vnode.children = [
      ...vnode.children.slice(0, i),
      childVnode,
      ...vnode.children.slice(i)
    ]
    vnode.node.insertBefore(childVnode.node, refVnode.node)
  } else {
    vnode.children.push(childVnode)
    vnode.node.insertBefore(childVnode.node, null)
  }
}

export function createElement<Tag extends Tags>(tag: Tag): VNode<Tag> {
  return {
    type: 'node',
    tag,
    data: {},
    children: [],
    node: document.createElement(tag)
  }
}
export function createCharacterData(
  type: 'text' | 'comment',
  data: string
): VCharacterData {
  return type === 'text'
    ? {type, data, node: document.createTextNode(data)}
    : {type, data, node: document.createComment(data)}
}
