import {Stream} from '@most/types'
import {Pith, Data, VNode, Tags, R, VCharacterData, Patch} from './types'
import {Pith as mostPith, ring as mostRing, $, to$} from '../most'
import {map} from '@most/core'
import {chain} from '../chain'
import * as patcher from './patcher'

export const ring = <TagA extends Tags>(data: Stream<Data>) =>
  mostRing<Pith, Patch<TagA>>(pith => put => {
    var gi = 0

    put(
      map<Data, Patch<TagA>>(
        data => vnode => {
          patcher.patchData(data, vnode)
        },
        data
      )
    )

    const mNode = <TagB extends Tags>(
      tagB: TagB,
      r$: $<R<TagB>>,
      key?: string
    ) => (pith: $<Pith>) => {
      const li = gi++
      put(
        map<R<TagB>, Patch<TagA>>(
          r => vnode => {
            const {children} = vnode
            const chld = li < children.length ? children[li] : null
            let movedChld: VNode<any> | undefined
            if (chld === null) {
              patcher.insertBefore(
                r(patcher.createElement(tagB, key)),
                null,
                vnode
              )
            } else if (
              chld.type === 'node' &&
              chld.tag === tagB &&
              chld.key === key
            ) {
              patcher.updateChieldState(chld, r(chld), vnode)
            } else if (
              key &&
              typeof (movedChld = <VNode<any> | undefined>children.find(
                (vtree, i) =>
                  i > li && vtree.type === 'node' && vtree.key === key
              )) !== 'undefined'
            ) {
              patcher.insertBefore(movedChld, chld, vnode)
              patcher.updateChieldState(movedChld, r(movedChld), vnode)
            } else if (
              chld.type === 'node' &&
              chld.tag === tagB &&
              typeof chld.key === 'undefined'
            ) {
              patcher.updateChieldState(chld, {...r(chld), key}, vnode)
            } else {
              patcher.insertBefore(
                r(patcher.createElement(tagB, key)),
                chld,
                vnode
              )
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
          ([oText, text]) => vnode => {
            const {children} = vnode
            const chld = li < children.length ? children[li] : null
            let oldCharData: VCharacterData | undefined
            if (!chld) {
              patcher.insertBefore(
                patcher.createCharacterData(type, text),
                null,
                vnode
              )
            } else if (chld.type === type) {
              patcher.patchText(chld, text, vnode)
            } else if (
              (oldCharData = <VCharacterData | undefined>children.find(
                (vtree, i) =>
                  i > li && vtree.type === type && vtree.data === oText
              ))
            ) {
              patcher.insertBefore(oldCharData, chld, vnode)
              patcher.patchText(oldCharData, text, vnode)
            } else {
              patcher.insertBefore(
                patcher.createCharacterData(type, text),
                chld,
                vnode
              )
            }
          },
          chain(to$(text))
            .pairwise('')
            .valueOf()
        )
      )
    }

    pith({
      node: mNode,
      text: mCharacterData('text'),
      comment: mCharacterData('comment')
    })
  })
