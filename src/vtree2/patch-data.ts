import {VNode, Data} from './types'
import {booleanAttributes, NAMESPACE_URIS} from './constants'

export function patchData(
  data: Data,
  vnode: VNode<any>,
  cb: (e: any) => void
): void {
  if (vnode.data === data) return
  const {data: oldData, node} = vnode
  var attrParts: string[] | undefined
  const listener = vnode

  const lnode: VNode<any> & {listener?: (e: Event) => void} = <any>vnode
  patchARU(
    oldData.on,
    data.on,
    (k, n) => {
      lnode.listener =
        lnode.listener ||
        function listener(e: Event) {
          cb({type: 'on', action: (<any>vnode.data.on)[e.type], event: e})
        }
      node.addEventListener(k, lnode.listener)
    },
    (k, o) => {
      if (lnode.listener) node.removeEventListener(k, lnode.listener)
    },
    (k, n, o) => {}
  )

  const setAttr = (k: string, v: string | number | boolean) =>
    (attrParts = k.split(':')) &&
    attrParts.length > 1 &&
    NAMESPACE_URIS[attrParts[0]]
      ? node.setAttributeNS(NAMESPACE_URIS[attrParts[0]], k, <string>v)
      : !v && booleanAttributes[k]
        ? node.removeAttribute(k)
        : v && booleanAttributes[k]
          ? node.setAttribute(k, '')
          : node.setAttribute(k, <string>v)
  patchARU<string | number | boolean>(
    oldData.attrs,
    data.attrs,
    setAttr,
    k => node.removeAttribute(k),
    setAttr
  )

  patchARU<boolean>(
    oldData.class,
    data.class,
    (k, n) => n && node.classList.add(k),
    (k, o) => o && node.classList.remove(k),
    (k, n, o) => (n ? node.classList.add(k) : node.classList.remove(k))
  )

  const style = (<HTMLElement>node).style
  const setStyle = (k: string, n: string) => style.setProperty(k, n)
  patchARU<string>(
    oldData.style,
    data.style,
    setStyle,
    (k, o) => style.removeProperty(k),
    setStyle
  )
  vnode.data = data
}

function patchARU<V = any>(
  oldData: Record<string, V> | undefined,
  newData: Record<string, V> | undefined,
  add: (k: string, n: V) => void,
  remove: (k: string, o: V) => void,
  update: (k: string, n: V, o: V) => void
): void {
  var key: string
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
