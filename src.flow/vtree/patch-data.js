// @flow
import type {VNode, Data} from './types'
import {booleanAttributes} from './constants'

export default function patchData(
  data: Data,
  vnode: VNode,
  cb: (e: mixed) => void
): void {
  if (vnode.data === data) return
  const {data: oldData, node} = vnode
  const lnode: {listener?: (e: Event) => void} = (vnode: $FlowTODO)
  diffARU(
    ((oldData.on: $FlowTODO): ?{[string]: string}),
    ((data.on: $FlowTODO): ?{[string]: string}),
    k => {
      lnode.listener =
        lnode.listener ||
        function listener(e: Event) {
          cb({
            type: 'on',
            action: (vnode.data: $FlowTODO).on[e.type],
            event: e,
          })
        }
      node.addEventListener(k, lnode.listener)
    },
    k => {
      if (lnode.listener) node.removeEventListener(k, lnode.listener)
    },
    () => {}
  )

  const setAttr = (k: string, v: string | number | boolean) => {
    if (!v && booleanAttributes[k]) {
      node.removeAttribute(k)
    } else if (v && booleanAttributes[k]) {
      node.setAttribute(k, '')
    } else if (typeof v === 'string') {
      node.setAttribute(k, v)
    } else {
      node.setAttribute(k, v.toString())
    }
  }
  diffARU(
    oldData.attrs,
    data.attrs,
    setAttr,
    k => node.removeAttribute(k),
    setAttr
  )

  diffARU(
    oldData.class,
    data.class,
    (k, n) => n && node.classList.add(k),
    (k, o) => o && node.classList.remove(k),
    (k, n) => (n ? node.classList.add(k) : node.classList.remove(k))
  )

  if (node.style != null) {
    const {style}: {style: {[string]: string}} = (node: $FlowTODO)
    const styleSetter = (k: string, v: string) => {
      style[k] = v
    }
    diffARU(
      oldData.style,
      data.style,
      styleSetter,
      k => {
        style[k] = ''
      },
      styleSetter
    )
  }
  vnode.data = data
}

function diffARU<V>(
  oldData: ?{[string]: V},
  newData: ?{[string]: V},
  add: (k: string, n: V) => mixed,
  remove: (k: string, o: V) => mixed,
  update: (k: string, n: V, o: V) => mixed
): void {
  let key: string
  if (oldData === newData) return
  if (oldData) {
    for (key in oldData) {
      if (!newData || typeof newData[key] === 'undefined') {
        remove(key, oldData[key])
      }
    }
  }
  if (newData) {
    for (key in newData) {
      if (!oldData || typeof oldData[key] === 'undefined') {
        add(key, newData[key])
      } else if (newData[key] !== oldData[key]) {
        update(key, newData[key], oldData[key])
      }
    }
  }
}
