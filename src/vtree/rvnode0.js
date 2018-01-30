import {combineArray, map, now} from '@most/core'

import mostTree from '../most0'

export default function tree (pith) {
  const ring = pith => put => {
    var currentIndex = 0

    const node = (tagB, key, r) => {
      const index = currentIndex++
      put.put(
        map(
          patchVNode =>
            function patchChieldVNode (parentVnode, cb) {
              var {children, node} = parentVnode
              var li = children[index]
              var vnode
              if (li == null) {
                vnode = createElement(tagB, key)
                patchVNode(vnode)
                children.push(vnode)
                node.insertBefore(vnode.node, null)
                return
              }
              if (li.type === 'node' && li.tag === tagB && li.key === key) {
                patchVNode(li)
                return
              }
              if (key != null) {
                for (var i = index + 1, l = children.length; i < l; i++) {
                  vnode = children[i]
                  if (
                    vnode.type === 'node' &&
                    vnode.tag === tagB &&
                    vnode.key === key
                  ) {
                    children.splice(i, 1)
                    patchVNode(vnode)
                    children.splice(index, 0, vnode)
                    node.insertBefore(vnode.node, li.node)
                    return
                  }
                }
              }
              if (li.type === 'node' && li.tag === tagB && li.key == null) {
                li.key = key
                patchVNode(li)
                return
              }
              vnode = createElement(tagB, key)
              patchVNode(vnode)
              children.splice(index, 0, vnode)
              node.insertBefore(vnode.node, li.node)
            },
          r
        )
      )
    }
    const charData = type => r => {
      const index = currentIndex++
      put.put(
        map(
          r =>
            function patchCharData (parentVnode) {
              var {children, node} = parentVnode
              var li = children[index]
              var charData
              if (li == null) {
                charData = createCharData(type)
                children.push(charData)
                node.insertBefore(charData.node, null)
                r(charData)
                return
              }
              if (li.type === type) {
                r(li)
                return
              }
              charData = createCharData(type)
              children.splice(index, 0, charData)
              node.insertBefore(charData.node, li.node)
              r(charData)
            },
          r
        )
      )
    }

    pith({
      ...put,
      node,
      text: charData('text'),
      comment: charData('comment')
    })

    put.put(
      now(function patchRemoveChildren (vnode) {
        const {children, node} = vnode
        for (let i = currentIndex; i < children.length; i++) {
          console.info('removed', children[i].node)
          node.removeChild(children[i].node)
          children.splice(i, 1)
        }
      })
    )
  }

  return mostTree(xs =>
    combineArray(
      (...patches) =>
        function patchVNode (vnode, cb) {
          for (var i = 0; i < patches.length; i++) {
            patches[i](vnode)
          }
        },
      xs
    )
  )(typeof pith === 'function' ? ring(pith) : map(ring, pith))
}

export function toVNode (element) {
  const tag = element.tagName.toLowerCase()

  const children = []
  const elmChildren = element.childNodes
  for (let i = 0, n = elmChildren.length; i < n; i++) {
    children.push(toVTree(elmChildren[i]))
  }
  return {type: 'node', tag, key: undefined, children, node: element}
}

function createElement (tag, key) {
  return {
    type: 'node',
    tag,
    key,
    data: {},
    children: [],
    node: document.createElement(tag)
  }
}

function createCharData (type) {
  return type === 'text'
    ? {type: type, node: document.createTextNode('')}
    : {type: type, node: document.createComment('')}
}

function toVTree (node) {
  if (node instanceof window.Element) {
    return toVNode(node)
  } else if (node instanceof window.Text) {
    return {type: 'text', data: node.textContent || '', node}
  } else if (node instanceof window.Comment) {
    return {type: 'comment', data: node.textContent || '', node}
  }
  throw new Error(`unexpected node type [${node.nodeType}]`)
}
