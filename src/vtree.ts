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
import {ring as mostRing, tree as mostTree, $, isStream} from './most'

export type Tags = HTMLElementTagNameMap

export interface Data {
  attrs?: Record<string, string>
  class?: Record<string, boolean>
  props?: Record<string, any>
  style?: {[K in keyof CSSStyleDeclaration]?: string | undefined}
}
export type On = {
  [E in keyof HTMLElementEventMap]?: (e: HTMLElementEventMap[E]) => void
}

export interface ANode {
  sel: string
  key?: string
  data?: Data & {on?: On}
  children: ATree[]
}
export interface AText {
  text: string
}
export interface AComment {
  sel: '!'
  text: string
}
export type ATree = ANode | AText | AComment

export interface Pith {
  (
    put: {
      node: <Tag extends keyof Tags>(
        tag: Tag,
        data?: $<Data>,
        key?: string
      ) => (pith: $<Pith>) => void
      text: (text: $<string>) => void
      comment: (text: $<string>) => void
      on: <E extends keyof HTMLElementEventMap>(
        eventName: E
      ) => Stream<HTMLElementEventMap[E]>
    }
  ): void
}
export interface Bark {
  (pith: $<Pith>): Stream<ANode>
}

export const tree = <Tag extends keyof Tags>(
  tag: Tag,
  data?: $<Data>,
  key?: string
): Bark => pith => {
  const ons: On = {}
  var hasOns = false
  const eventStreamMap: Record<string, Stream<Event>> = {}
  const combine = (data: Data, ...children: ATree[]): ANode => ({
    sel: tag,
    data: hasOns ? {...data, on: ons} : data,
    key,
    children
  })
  return mostTree<ATree>(
    $s =>
      isStream(data)
        ? combineArray<any, ANode>(combine, [data, ...$s])
        : combineArray<ATree, ANode>(
            (...children) => combine(data || {}, ...children),
            $s
          )
  )(
    mostRing<Pith, ATree>(p => put => {
      p({
        node: (tag, data, key) => pith => put(tree(tag, data, key)(pith)),
        comment: text =>
          put(
            isStream(text)
              ? map(text => <AComment>{sel: '!', text}, text)
              : now(<AComment>{sel: '!', text})
          ),
        text: text =>
          put(
            isStream(text)
              ? map(text => <AText>{text}, text)
              : now(<AText>{text})
          ),
        on: eventName => {
          eventStreamMap[eventName] =
            eventStreamMap[eventName] ||
            multicast(
              newStream<Event>((sink, scheduler) => {
                hasOns = true
                ons[eventName] = (e: Event) => {
                  console.log('aaa')
                  sink.event(scheduler.currentTime(), e)
                }
                return {
                  dispose: () => {
                    delete ons[eventName]
                    hasOns = Object.keys(ons).length > 0
                  }
                }
              })
            )
          return eventStreamMap[eventName]
        }
      })
    })(pith)
  ) as Stream<ANode>
}
