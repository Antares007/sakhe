import {Stream} from '@most/types'
import {Pith, Data, VNode, Tags, R, VCharacterData, Patch} from './types'
import {Pith as mostPith, ring as mostRing, $, to$} from '../most'
import {map} from '@most/core'
import {chain} from '../chain'
import * as patcher from './patcher'

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
            const {children} = vnode
            const chld = li < children.length ? children[li] : null
            let movedChld: VNode<any> | undefined
            if (chld === null) {
              patcher.insertBefore(
                r(patcher.createElement(tagB, key), cb),
                null,
                vnode
              )
            } else if (
              chld.type === 'node' &&
              chld.tag === tagB &&
              chld.key === key
            ) {
              patcher.updateChieldState(chld, r(chld, cb), vnode)
            } else if (
              key &&
              typeof (movedChld = <VNode<any> | undefined>children.find(
                (vtree, i) =>
                  i > li &&
                  vtree.type === 'node' &&
                  vtree.tag === tagB &&
                  vtree.key === key
              )) !== 'undefined'
            ) {
              patcher.insertBefore(movedChld, chld, vnode)
              patcher.updateChieldState(movedChld, r(movedChld, cb), vnode)
            } else if (
              chld.type === 'node' &&
              chld.tag === tagB &&
              typeof chld.key === 'undefined'
            ) {
              patcher.updateChieldState(chld, {...r(chld, cb), key}, vnode)
            } else {
              patcher.insertBefore(
                r(patcher.createElement(tagB, key), cb),
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
          ([oText, text]) => (vnode, cb) => {
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
              const charData = patcher.createCharacterData(type, text)
              cb({type: 'created', data: charData})
              patcher.insertBefore(
                charData,
                chld,
                vnode
              )
              cb({type: 'inserted'})
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
