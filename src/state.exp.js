// @flow
/* eslint-disable */
import {inspect} from 'util'
const log = o => console.log(inspect(o))

export interface Pith<A> {(state: StateRay<A>): void}
export interface StateRay<A: {+[key: string]: mixed}> {
  extend<Key: $Keys<A>, B: $Subtype<$ElementType<$Exact<A>, Key>>>(
    key: Key,
    absurdB: () => B
  ): (pith: Pith<B>) => void;
  extendA<Key: $Keys<A>, B: $Subtype<$ElementType<$Exact<A>, Key>>>(
    key: Key,
    absurdB: () => B
  ): (pith: PithA<B>) => void;
  val<Key: $Keys<A>>(
    key: Key,
    r: ($ElementType<$Exact<A>, Key>) => $ElementType<$Exact<A>, Key>
  ): void;
  //put(r: RState<$Exact<A>>): void;
}

export interface PithA<A: $ReadOnlyArray<mixed>> {(state: StateRayA<A>): void}
export interface StateRayA<A: $ReadOnlyArray<mixed>> {
  extend<Key: number, B: $Subtype<$ElementType<$Exact<A>, Key>>>(
    key: Key,
    absurdB: () => B
  ): (pith: Pith<B>) => void;
  extendA<Key: number, B: $Subtype<$ElementType<$Exact<A>, Key>>>(
    key: Key,
    absurdB: () => B
  ): (pith: Pith<B>) => void;
  val<Key: number>(
    key: Key,
    r: ($ElementType<A, Key>) => $ElementType<A, Key>
  ): void;
}

export interface Bark<A> {
  (pith: Pith<A>): ($Subtype<$Exact<A>>) => $Subtype<$Exact<A>>;
}

declare function tree<A>(absurdA: () => A): Bark<A>

const absurd = () => ({a: 42, b: {a: 1}, arr: ['']})
tree(absurd)(s => {
  s.extendA('arr', () => ['', 1])(sa => {
    // sa.extend(0, s => ({a: 42}))(sa => {
    //   sa.val('a', s => s)
    // })
    sa.val(0, s => s)
    sa.val(1, s => s)
    sa.val(2, s => ({a: 98}))
    sa.val(2, s => s)
    sa.val(3, s => s)
    sa.val(4, s => s)
  })
})(absurd())

function mapRb2Ra<
  A: {+[string]: mixed},
  Key: $Keys<A>,
  B: $Subtype<$ElementType<$Exact<A>, Key>>
>(
  key: $Keys<A>,
  absurdA: () => A,
  absurdB: () => B
): (rb: (B) => B) => ($Subtype<$Exact<A>>) => $Subtype<$Exact<A>> {
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

function mapRak2Ra<A: {+[string]: mixed}, Key: $Keys<A>>(
  key: Key,
  absurdA: () => A
): (
  rb: ($ElementType<$Exact<A>, Key>) => $ElementType<$Exact<A>, Key>
) => A => A {
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

function aMapRak2Ra<T: *, A: $ReadOnlyArray<T>, Key: number>(
  key: Key,
  absurdA: () => A
): (rb: ($ElementType<A, Key>) => $ElementType<A, Key>) => T => T {
  return r => a => {
    throw new Error()
    // const abs = absurdA()
    // const ak = a[key]
    // const bk = r(ak)
    // if (ak === bk) return a
    // const abs0 = abs[0]
    // const len = Math.max(a.length, abs.length, key + 1)
    // const arr: T[] = Array(len)
    // for (var i = 0; i < len; i++) {
    //   arr[i] = i === key ? bk : a[i] != null ? a[i] : abs0
    // }
    // return arr
  }
}

log(aMapRak2Ra(1, () => [1])(s => s))

//2232772|2237227 mziko
