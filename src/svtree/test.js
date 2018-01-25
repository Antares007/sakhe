// @flow
/* eslint-disable */
import {now, map, tap, filter} from '@most/core'
import type {SPith, VPith} from './selement'
import Counter2 from '../piths/counter2'
import M from '../m'

import selementTree from './selement'

const elm = document.getElementById('root-node')
if (elm == null) throw new Error('cant find root-node')

const abs = () => ({count: 0, a: 1, b: {}, showHide1: {}})

const rez = selementTree(abs, abs(), elm)((s, onAction, onChange) => {
  s.val(
    'count',
    M.of(onAction)
      .filter(x => x.action === 'p' || x.action === 'm')
      .map(x => s => s + (x.action === 'p' ? +1 : -1))
      .valueOf()
  )
  return put => {
    put.node('div', {}, '0')((put, on) => {
      put.node('button', {on: {click: 'p'}})(put => put.text('+'))
      put.node('button', {on: {click: 'm'}})(put => put.text('-'))
    })
    put.node('div', {}, '1')(
      M.of(onChange)
        .map(x => Counter2(x.count))
        .valueOf()
    )
  }
})

M.of(rez)
  .tap(s => global.console.info(JSON.stringify(s)))
  .drain()

// function shr<T: {+isOpen: boolean}, R>(pith: VPith<R>): SPith<T> {
//   return (s, a, c) => {
//     const isOpenM = M.of(c)
//       .map(s => s.isOpen)
//       .hold()
//       .valueOf()
//     s.val(
//       'isOpen',
//       M.of(a)
//         .filter(x => x.action === isOpenM)
//         .constant(s => !s)
//         .valueOf()
//     )
//     return put => {
//       put.node('button', {on: {click: isOpenM}})(
//         map(show => put => put.text(show ? 'hide' : 'show'), isOpenM)
//       )
//       put.node('div')(map(show => (show ? pith : () => {}), isOpenM))
//     }
//   }
// }
// function showHideRing<
//   Key: string,
//   A: {+[string]: mixed},
//   B: $ElementType<$Exact<A>, Key>
// >(key: Key, pith: VPith<B>): VPith<A> {
//   return (put, select) => {
//     if (typeof put.snode !== 'function') return
//     put.snode(key, () => ({isOpen: true, state: {}}), 'div')(p => {
//       //
//       return p => {}
//     })
//     //   (s, a, c) => {
//     //     const isOpenM = M.of(c)
//     //       .map(s => s.isOpen)
//     //       .hold()
//     //       .valueOf()
//     //     s.val(
//     //       'isOpen',
//     //       M.of(a)
//     //         .filter(x => x.action === isOpenM)
//     //         .constant(s => !s)
//     //         .valueOf()
//     //     )
//     //     return put => {
//     //       put.node('button', {on: {click: isOpenM}})(
//     //         map(show => put => put.text(show ? 'hide' : 'show'), isOpenM)
//     //       )
//     //       put.node('div')(map(show => (show ? pith : () => {}), isOpenM))
//     //     }
//     //   }
//     // )
//   }
// }

// function CounterS<T: {+[key: string]: mixed}>(): VPith<T> {
//   return put => {
//     if (typeof put.snode !== 'function') return
//     put.snode('counter', () => ({count: 0}), 'div')((state, a, c) => {
//       state.val(
//         'count',
//         M.of(a)
//           .filter(x => typeof x.action === 'number')
//           .map(x => s => s + x.action)
//           .valueOf()
//       )
//       return showHideRing(put => {
//         put.node('button', {on: {click: +1}})(put => {
//           put.text('+')
//           put.node('div')(CounterS())
//         })
//         put.node('button', {on: {click: -1}})(put => {
//           put.text('-')
//           put.node('div')(CounterS())
//         })
//         put.text(
//           M.of(c)
//             .map(x => x.count)
//             .map(String)
//             .tap(x => console.log('oeee', x)).$
//         )
//       })
//     })
//   }
// }
