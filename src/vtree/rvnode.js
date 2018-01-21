import {
  combineArray,
  map,
  newStream,
  MulticastSource,
  never,
  now
} from '@most/core'

import mostTree from '../most'
import patchData from './patch-data'
import {pmap, toStream} from '../pmap'

export default function tree (tag, data = {}) {
  return pith => {
    const sync = new MulticastSource(never())
    const ring = pith => put => {
      var currentIndex = 0

      const mPut = (tagB, key, r) => {
        const index = currentIndex++
        put(
          map(
            patchVNode =>
              function patchChieldVNode (parentVnode, cb) {
                var {children, node} = parentVnode
                var li = children[index]
                var vnode
                if (li == null) {
                  vnode = createElement(tagB, key)
                  patchVNode(vnode, cb)
                  children.push(vnode)
                  node.insertBefore(vnode.node, null)
                  return
                }
                if (li.type === 'node' && li.tag === tagB && li.key === key) {
                  patchVNode(li, cb)
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
                      patchVNode(vnode, cb)
                      children.splice(index, 0, vnode)
                      node.insertBefore(vnode.node, li.node)
                      return
                    }
                  }
                }
                if (li.type === 'node' && li.tag === tagB && li.key == null) {
                  li.key = key
                  patchVNode(li, cb)
                  return
                }
                vnode = createElement(tagB, key)
                patchVNode(vnode, cb)
                children.splice(index, 0, vnode)
                node.insertBefore(vnode.node, li.node)
              },
            r
          )
        )
      }
      const mNode = (tagB, data = {}, key) => pith => {
        mPut(tagB, key, tree(tagB, data)(pith))
      }
      const mCharacterData = charDataType => text => {
        const index = currentIndex++
        put(
          map(
            text =>
              function patchCharData (parentVnode) {
                var {children, node} = parentVnode
                var li = children[index]
                var charData
                if (li == null) {
                  charData = createCharacterData(charDataType, text)
                  children.push(charData)
                  node.insertBefore(charData.node, null)
                  return
                }
                if (li.type === charDataType) {
                  if (li.data !== text) {
                    li.data = text
                    li.node.textContent = text
                  }
                  return
                }
                charData = createCharacterData(charDataType, text)
                children.splice(index, 0, charData)
                node.insertBefore(charData.node, li.node)
              },
            toStream(text)
          )
        )
      }

      pith(
        {
          node: mNode,
          text: mCharacterData('text'),
          comment: mCharacterData('comment'),
          put: mPut,
          ref: put
        },
        sync
      )

      put(
        // newStream((sink, scheduler) =>
        map(
          data =>
            function patchDataModule (vnode, cb) {
              if (vnode.data === data) return
              patchData(data, vnode, cb)
              vnode.data = data
            },
          toStream(data)
        )
        // .run(sink, scheduler)
        // )
      )

      put(
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

    return mostTree(patches =>
      newStream((sink, scheduler) =>
        combineArray(
          (...patches) =>
            function patchVNode (vnode, cb) {
              if (vnode.pachedBy === patchVNode) return vnode
              if (vnode.tag !== tag) throw new TypeError('tag')
              vnode.cb = e => {
                sync.event(scheduler.currentTime(), e)
                cb(e)
              }
              for (var i = 0; i < patches.length; i++) {
                patches[i](vnode, vnode.cb)
              }
              vnode.pachedBy = patchVNode
            },
          patches
        ).run(sink, scheduler)
      )
    )(pmap(ring, pith))
  }
}

function createElement (tag, key) {
  return {
    type: 'node',
    tag,
    key,
    data: {},
    children: [],
    node: global.document.createElement(tag)
  }
}

function createCharacterData (type, data) {
  return type === 'text'
    ? {type: 'text', data, node: global.document.createTextNode(data)}
    : {type: 'comment', data, node: global.document.createComment(data)}
}
