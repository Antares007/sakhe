import {Stream} from '@most/types'
import {Pith, Data, VNode, Tags, R, VCharacterData, Patch, VTree} from './types'
import {Pith as mostPith, ring as mostRing, $, to$} from '../most'
import {map} from '@most/core'
import {chain} from '../chain'

export const ring = <O, TagA extends Tags>(pmap: (o: O) => Pith) =>
  mostRing<O, Patch<TagA>>(pith => put => {
    var gi = 0

    const mNode = <TagB extends Tags>(
      tagB: TagB,
      r$: $<R<TagB>>,
      key?: string
    ) => {
      const li = gi++
      put(
        map<R<TagB>, Patch<TagA>>(
          r => (vnode, cb) => {
            const {children, node} = vnode
            const chld = li < children.length ? children[li] : null
            let movedChldIndex: number | undefined

            if (chld === null) {
              const v = r(createElement(tagB, key), cb)
              children.push(v)
              node.insertBefore(v.node, null)
            } else if (
              chld.type === 'node' &&
              chld.tag === tagB &&
              chld.key === key
            ) {
              children[li] = r(chld, cb)
            } else if (
              key &&
              -1 <
                (movedChldIndex = children.findIndex(
                  (vtree, i) =>
                    i > li &&
                    vtree.type === 'node' &&
                    vtree.tag === tagB &&
                    vtree.key === key
                ))
            ) {
              children.splice(
                li,
                0,
                r(<VNode<TagB>>children.splice(movedChldIndex, 1)[0], cb)
              )
            } else if (
              chld.type === 'node' &&
              chld.tag === tagB &&
              typeof chld.key === 'undefined'
            ) {
              children[li] = {...r(chld, cb), key} // ???
            } else {
              const v = r(createElement(tagB, key), cb)
              children.splice(li, 0, v)
              node.insertBefore(v.node, chld.node)
            }
          },
          to$(r$)
        )
      )
    }

    const mCharacterData = (type: 'text' | 'comment') => (text: $<string>) => {
      const li = gi++
      put(
        map<string[], Patch<TagA>>(
          ([oText, text]) => (vnode, cb) => {
            const {children, node} = vnode
            const chld = li < children.length ? children[li] : null
            let oldCharDataIndex: number | undefined
            if (!chld) {
              const c = createCharacterData(type, text)
              children.push(c)
              node.insertBefore(c.node, null)
            } else if (chld.type === type) {
              if (chld.data !== text) {
                chld.node.textContent = text
                chld.data = text
              }
            } else if (
              -1 <
              (oldCharDataIndex = children.findIndex(
                (vtree, i) =>
                  i > li && vtree.type === type && vtree.data === oText
              ))
            ) {
              const c = <VCharacterData>children.splice(oldCharDataIndex, 1)[0]
              children.splice(li, 0, c)
              if (c.data !== text) {
                c.node.textContent = text
                c.data = text
              }
            } else {
              const charData = createCharacterData(type, text)
              children.splice(li, 0, charData)
              node.insertBefore(charData.node, chld.node)
            }
          },
          chain(to$(text))
            .pairwise('')
            .valueOf()
        )
      )
    }

    pmap(pith)({
      node: mNode,
      text: mCharacterData('text'),
      comment: mCharacterData('comment')
    })
  })

function createElement<Tag extends Tags>(tag: Tag, key?: string): VNode<Tag> {
  return {
    type: 'node',
    tag,
    key,
    data: {},
    children: [],
    node: document.createElement(tag)
  }
}

function createCharacterData(
  type: 'text' | 'comment',
  data: string
): VCharacterData {
  return type === 'text'
    ? {type, data, node: document.createTextNode(data)}
    : {type, data, node: document.createComment(data)}
}
