// @flow
/* eslint-disable */
import {inspect} from 'util'
const log = o => console.log(inspect(o))

export type StateO = {+[key: string]: mixed}
export type StateA = $ReadOnlyArray<mixed>

export type Absurd<T> = () => T
export type RState<T> = (state: T) => T

export interface Pith<A> {(state: StateRay<A>): void}
export interface StateRay<A: StateO> {
  extend<Key: $Keys<A>, B: $Subtype<$ElementType<$Exact<A>, Key>>>(
    key: Key,
    absurdB: Absurd<B>
  ): (pith: Pith<B>) => void;
  extendA<Key: $Keys<A>, B: $Subtype<$ElementType<$Exact<A>, Key>>>(
    key: Key,
    absurdB: Absurd<B>
  ): (pith: PithA<B>) => void;
  val<Key: $Keys<A>>(key: Key, r: RState<$ElementType<$Exact<A>, Key>>): void;
  //put(r: RState<$Exact<A>>): void;
}
export interface PithA<A: StateA> {(state: StateRayA<A>): void}
export interface StateRayA<A: StateA> {
  extend<Key: number, B: $Subtype<$ElementType<$Exact<A>, Key>>>(
    key: Key,
    absurdB: Absurd<B>
  ): (pith: Pith<B>) => void;
  extendA<Key: number, B: $Subtype<$ElementType<A, Key>>>(
    key: Key,
    absurdB: Absurd<B>
  ): (pith: Pith<B>) => void;
  val<Key: number>(key: Key, r: RState<$ElementType<A, Key>>): void;
}

export interface Bark<A> {
  (pith: Pith<A>): RState<$Subtype<$Exact<A>>>;
}

declare function tree<A>(absurdA: Absurd<A>): Bark<A>

// const absurd = () => ({a: 42, b: {a: 1}, arr: []})
//
// tree(absurd)(s => {
//   s.extend('b', () => ({a: 1}))(s => {})
//   s.extendA('arr', () => [1, ''])(sa => {
//     // sa.extend(0, s => ({a: 42}))(sa => {
//     //   sa.val('a', s => s)
//     // })
//     sa.val(0, s => s)
//     sa.val(1, s => s)
//     sa.val(2, s => ({a: 98}))
//     sa.val(3, s => s)
//     sa.val(4, s => s)
//   })
//   s.val('a', s2 => s2)
// })(absurd())

function mapRb2Ra<
  A: StateO,
  Key: $Keys<A>,
  B: $Subtype<$ElementType<$Exact<A>, Key>>
>(
  key: $Keys<A>,
  absurdA: Absurd<A>,
  absurdB: Absurd<B>
): (rb: RState<B>) => RState<$Subtype<$Exact<A>>> {
  return r => a => {
    const ak = a[key]
    const bk = r(Object.assign(absurdB(), ak))
    if (ak === bk) return a
    return Object.assign(absurdA(), a, {[key]: bk})
  }
}
// const rmap = mapRb2Ra('a', () => ({a: {z: 1}}), () => ({o: 1, c: 1}))
//
// const rez = rmap(s => ({...s, o: s.o + 1}))({a: {z: 0, o: -1, c: 1}})
// console.log(rez)

function mapRak2Ra<A: StateO, Key: $Keys<A>>(
  key: Key,
  absurdA: Absurd<A>
): (rb: RState<$ElementType<$Exact<A>, Key>>) => RState<A> {
  return r => a => {
    const ak = a[key]
    const bk = r(ak)
    if (ak === bk) return a
    return Object.assign(absurdA(), a, {[key]: bk})
  }
}

// log(
//   mapRak2Ra('arr', () => ({a: 42, b: {o: 'otar'}, arr: ['']}))(s => ['1'])({
//     a: 42,
//     b: {o: ''},
//     arr: []
//   })
// )

function aMapRak2Ra<T, A: $ReadOnlyArray<T>, Key: number>(
  key: Key,
  absurdA: Absurd<A>
): (rb: RState<T>) => RState<Array<T>> {
  return r => a => {
    const abs = absurdA()
    const ak = a[key]
    const bk = r(ak)
    if (ak === bk) return a
    const abs0 = abs[0]
    const len = Math.max(a.length, abs.length, key + 1)
    const arr = Array(len)
    for (var i = 0; i < len; i++) {
      arr[i] = i === key ? bk : a[i] != null ? a[i] : abs0
    }
    return arr
  }
}

log(aMapRak2Ra(42, () => [1, '2', {}])(s => ({}))([1, 2, 3, {}]))
//2232772|2237227 mziko
