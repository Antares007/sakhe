import {Stream} from '@most/types'
import {
  mergeArray,
  map,
  now,
  scan,
  combineArray,
  MulticastSource,
  newStream,
  multicast
} from '@most/core'
import {EventEmitter} from 'events'
import * as prelude from '@most/prelude'
import {ring as mostRing, tree as mostTree, $, to$, isStream} from '../most'
import {chain} from '../chain'

import {
  VTree,
  VNode,
  Data,
  Tags,
  VText,
  VComment,
  VCharacterData
} from './types'
import {toVNode} from './to-vnode'
import {updateClass} from './update-class'
import {updateAttributes} from './update-attributes'

type EventTypes = 'create'
const EventNames: EventTypes[] = ['create']

export interface Pith {
  (
    put: {
      node: <Tag extends Tags>(
        tag: Tag,
        data?: $<Data>,
        key?: string
      ) => (pith: $<Pith>) => void
      text: (text: $<string>) => void
      comment: (text: $<string>) => void
    }
  ): void
}

export interface Bark<Tag extends Tags> {
  (pith: $<Pith>): Stream<R<Tag>>
}

export type R<Tag extends Tags> = (tree: VNode<Tag>) => VNode<Tag>
import {Face, create as makePatcher} from './patcher'
interface Patch<Tag extends Tags> {
  (api: Face<Tag>): void
}

export const tree = <TagA extends Tags>(
  tag: TagA,
  data: $<Data> = {},
  key?: string
): Bark<TagA> => pith => {
  const ring = mostRing<Pith, Patch<TagA>>(pith => put => {
    var gi = 0

    put(
      map<Data, Patch<TagA>>(
        data => api => {
          api.updateData(data)
        },
        to$(data)
      )
    )

    const mNode = <TagB extends Tags>(
      tagB: TagB,
      data: $<Data> = {},
      key?: string
    ) => (pith: $<Pith>) => {
      const li = gi++
      put(
        map<R<TagB>, Patch<TagA>>(
          r => api => {
            const chld = api.getByIndex(li)
            let onode: VNode<any> | undefined
            if (chld === null) {
              api.insertBefore(r(api.createElement(tagB)), null)
            } else if (
              chld.type === 'node' &&
              chld.tag === tagB &&
              chld.key === key
            ) {
              api.updateNode(chld, r(chld))
            } else if (key && (onode = api.getByKey(key))) {
              api.insertBefore(onode, chld)
              api.updateNode(onode, r(onode))
            } else if (chld.type === 'node' && chld.tag === tagB) {
              api.updateNode(chld, r(chld))
            } else {
              api.insertBefore(r(api.createElement(tagB)), chld)
            }
          },
          tree(tagB, data, key)(pith)
        )
      )
    }

    const mCharacterData = (type: 'text' | 'comment') => (text: $<string>) => {
      const li = gi++
      put(
        map<string[], Patch<TagA>>(
          ([oText, text]) => api => {
            const chld = api.getByIndex(li)
            let oldCharData: VCharacterData | undefined
            if (!chld) {
              api.insertBefore(api.createCharacterData(type, text), null)
            } else if (chld.type === type) {
              api.updateCharacterData(chld, text)
            } else if (
              (oldCharData = <VCharacterData | undefined>api.find(
                (vtree, i) =>
                  i > li && vtree.type === type && vtree.data === oText
              ))
            ) {
              api.insertBefore(oldCharData, chld)
              api.updateCharacterData(oldCharData, text)
            } else {
              api.insertBefore(api.createCharacterData(type, text), chld)
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

  return mostTree(
    combineArray<Patch<TagA>, R<TagA>>(
      (...patches) => ({tag, data, children, node}) => {
        const api = makePatcher(tag, key, data, children, node)
        patches.forEach(patch => patch(api))
        return api.state()
      }
    )
  )(ring(pith))
}

var rez = tree(
  'div',
  {
    class: {a: true, b: true, o: true},
    style: {width: '100%'}
  },
  'k1'
)(put => {
  put.text('hello')
  put.node('h1', {class: {a: true, b: true, o: true}})(put =>
    put.text('world!')
  )
})

chain(rez)
  .scan((t, r) => r(t), toVNode<'div'>(document.getElementById('root-node')!))
  .tap(console.log.bind(console))
  .drain()
type EventsMap = {
  create: {type: 'create'; data: VTree<any>}
}
type Events = keyof EventsMap

var create: EventsMap['create'] = {type: 'create', data: <any>{}}
