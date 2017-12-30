import {VNode, Data} from './types'
import {booleanAttributes, NAMESPACE_URIS} from './constants'

export function patchData(data: Data, vnode: VNode<any>): void {
  if (vnode.data === data) return
  const {data: oldData, node} = vnode
  var attrParts: string[] | undefined

  patchDiff(
    oldData.attrs,
    data.attrs,
    (k, v: any) =>
      (attrParts = k.split(':')) &&
      attrParts.length > 1 &&
      NAMESPACE_URIS[attrParts[0]]
        ? node.setAttributeNS(NAMESPACE_URIS[attrParts[0]], k, v)
        : !v && booleanAttributes[k]
          ? node.removeAttribute(k)
          : v && booleanAttributes[k]
            ? node.setAttribute(k, '')
            : node.setAttribute(k, v),
    k => node.removeAttribute(k)
  )

  patchDiff(
    oldData.class,
    data.class,
    (k, v: boolean) => (v ? node.classList.add(k) : node.classList.remove(k)),
    k => node.classList.remove(k)
  )

  const style = (<HTMLElement>node).style
  patchDiff(
    oldData.style,
    data.style,
    style.setProperty.bind(style),
    style.removeProperty.bind(style)
  )
  vnode.data = data
}

function patchDiff(
  oldData: Record<string, any> | undefined,
  newData: Record<string, any> | undefined,
  setValue: (k: string, v: any) => void,
  delValue: (k: string) => void
): void {
  var key: string
  if (oldData === newData) return
  if (oldData) {
    for (key in oldData)
      if (!newData || typeof newData[key] === 'undefined') delValue(key)
  }
  if (newData) {
    for (key in newData)
      if (!oldData || newData[key] !== oldData[key])
        setValue(key, newData[key])
  }
}
