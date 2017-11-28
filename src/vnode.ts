import {cons, List} from './list'
// import * as most from './most'
import {Stream} from '@most/types'
export type R<T> = (s: T) => T
export type Pith<T> = {[K in keyof T]: T[K]}
var a: Pith<ElementTagNameMap> = <any>{}

const z = <K extends keyof ElementTagNameMap>(type: K) => {}
z('div')

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
