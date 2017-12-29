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
  if (oldData === newData) return
  if (oldData) {
    for (const k in oldData)
      if (!newData || typeof newData[k] === 'undefined') delValue(k)
  }
  if (newData) {
    for (const name in newData)
      if (!oldData || newData[name] !== oldData[name])
        setValue(name, newData[name])
  }
}
