import {booleanAttributes} from './constants'

export default function patchData(data, vnode) {
  const {data: oldData, node} = vnode
  diffARU(
    oldData.on,
    data.on,
    k => {
      vnode.listener =
        vnode.listener ||
        function listener(event) {
          vnode.cb({
            type: 'on',
            action: vnode.data.on[event.type],
            event,
          })
        }
      node.addEventListener(k, vnode.listener)
    },
    k => {
      if (vnode.listener) node.removeEventListener(k, vnode.listener)
    },
    () => {}
  )

  const setAttr = (k, v) => {
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
    const {style} = node
    const styleSetter = (k, v) => {
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
}

function diffARU(oldData, newData, add, remove, update) {
  let key
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
