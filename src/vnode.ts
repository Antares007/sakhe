import {cons, List} from './list'
// import * as most from './most'
import {runEffects, now, tap, map, periodic, constant} from '@most/core'
import {Stream} from '@most/types'

type Style = {[P in keyof CSSStyleDeclaration]?: string}
type TagNameMap = VHTMLElementTagNameMap & VSVGElementTagNameMap
type Events = HTMLElementEventMap
type Data<Tag extends keyof TagNameMap> = {
  [P in keyof TagNameMap[Tag]]?: TagNameMap[Tag][P]
} & {style?: Style}


type Pith<TagA extends keyof TagNameMap> = (
  ray: {
    node: <TagB extends keyof TagNameMap>(
      tag: TagB,
      data?: Data<TagB> | Stream<Data<TagB>>
    ) => (pith: Pith<TagB>) => void
    text: (text: String | Stream<String>) => void
  }
) => void

var p = (pith: Pith<'div'>) => {}
p(put => {
  put.node('select', now({id: 'a', selectedIndex: 1}))(put => {
    put.node('div', {id: 'aa'})(put => {
      put.text(now('abc'))
    })
  })
  put.node('svg', {})
})

type VNode = {
  type: 'node'
  tag: string
  key: string
  path: List
  data: any
  children: (VNode | {type: 'text', text: string})[]
}

const vn: VNode = <any>{}
const c = vn.children[0]
if (c.type ==='text') {
  c.text
}


// const elmTree = <Tag extends keyof VHTMLElementTagNameMap>(
//   tag: Tag,
//   data?: Data<Tag> | Stream<Data<Tag>>
// ) => (pith: Pith<Tag>) =>
//   mBark<R<A>>(mergeArray)(ring<Ray<A>, mRay<R<A>>>(pith => put => {}))

function isFish(pet: any): pet is Number {
  return pet !== undefined
}

// export interface VNode {
//   sel: string,
//   key: string,
//   path: List,
//   data: any,
//   children: (VNode | {text: string})[]
// }

// export interface Ray0 {
//   node:
//     <P>(pmap: (p: P) => Pith) =>
//     (sel: most.$<string>, data?: most.$<any>) =>
//     (pith: most.$<P>) => void,
//   text: (text: most.$<string>) => void,
//   vnode: (vnode: most.$<VNode>) => void
// }
// export interface Pith {
//   (ray0: Ray0): void,
// }
//
// export const vnodeBark =
// <P> (pmap: (p: P) => Pith) =>
// (sel: most.$<string>, data: most.$<any> = {}, path: List<string> = null) =>
// most.bark(
//   (pith: P) => (put, lift) => {
//     var i = 0
//     put(sel)
//     put(data)
//     pmap(pith)({
//       node: pmap => (sel, data = {}) => pith => put(
//         vnodeBark(pmap)(sel, data, cons(String(i++), path))(pith)
//       ),
//       text: text => put(
//         lift(text).map(text => ({text}))
//       ),
//       vnode: vnode => put(
//         vnode
//       )
//     })
//   }
// )(
//   a$s => M.combineArray<any, VNode>((...args) => {
//     const [sel, data, ...children] = args
//     const key = path === null ? 'root' : path.head
//     return { sel, key, path, data, children }
//   }, a$s)
// )
// // interface ARay0 {
// //   node: (sel: most.$<string>, data: most.$<any>, pith: most.$<APith>) => void,
// // }
// // interface APith {
// //   (ray0: ARay0 & Ray0): void
// // }
// // var a : ARay0 & Ray0 = {
// //   node: (sel: most.$<string>, data: most.$<any>, pith: most.$<APith>): void => {},
// //   text: text => {},
// //   vnode: (t) => {}
// // }
//
// const id = <T>(a: T): T => a
//
// interface DomRing {
// }
//
// const ring = (pith: DomRing): Pith => put => {
// }
//
// vnodeBark<Pith>(ring)('div')(put => {
//   put.node<Pith>(id)('div.a')(put => {
//     put.text('hello!')
//   })
// }).tap(x => console.log(JSON.stringify(x)))
//   .drain()
//
// // vnodeBark()('div.a', {}, nil)((put, select) => {
// //   put.node('button', {on: {click: true}}, put => {
// //     put.node('button', put => {
// //       put.text('hello1')
// //     })
// //     put.text('hello2')
// //   })
// //   put.vnode(vnodeBark()('div.a', {}, Cons('mount1', select.path))(put => {
// //     put.node('li', put => {})
// //     put.node('button', {on: {click: true}}, put => {
// //       put.node('button', put => {
// //         put.text('hello1')
// //       })
// //       put.text('hello2')
// //     })
// //     put.node('li', put => {})
// //   }))
// // }).tap(v => v.log()).drain()
