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
  val<Key: $Keys<A>>(
    key: Key,
    r: ($ElementType<$Exact<A>, Key>) => $ElementType<$Exact<A>, Key>
  ): void;
  put(r: ($Exact<A>) => $Exact<A>): void;
}

export interface Bark<A> {
  (pith: Pith<A>): ($Subtype<$Exact<A>>) => $Subtype<$Exact<A>>;
}

declare function tree<A>(absurdA: () => A): Bark<A>

// const absurd = () => ({a: 42, b: {a: 1}, arr: [{a: 20}]})
// tree(absurd)(s => {
//   s.extendA('arr')(sa => {
//     // sa.extend(0, s => ({a: 42}))(sa => {
//     //   sa.val('a', s => s)
//     // })
//
//     sa.val(2, s => ({a: 20}))
//   })
// })(absurd())

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

log(
  mapRb2Ra('a', () => ({a: {z: 1}}), () => ({o: 1, c: 1}))(s => ({
    ...s,
    o: s.o + 1
  }))({a: {z: -1, o: -1, c: -1}})
)

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

//2232772|2237227 mziko
