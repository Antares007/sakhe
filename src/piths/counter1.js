// @flow
import type {Pith} from '../vtree/rvnode'
import M from '../m'

export default function Counter1 (d: number = 0): Pith {
  return (put, on) => {
    const sum$ = M.of(on)
      .filter(x => typeof x.action === 'number')
      .map(x => x.action)
      .scan((sum, v) => sum + v, 0)
      .map(String)
    put.node('div', {style: {padding: '5px 10px', textAlign: 'center'}})(
      put => {
        put.node('button', {
          on: {click: +1}
        })(put => {
          put.node('span', {})(put => put.text('+'))
          if (d > 0) put.node('div', {})(Counter1(d - 1))
        })
        put.node('button', {
          on: {click: -1}
        })(put => {
          put.node('span', {})(put => put.text('-'))
          if (d > 0) put.node('div', {})(Counter1(d - 1))
        })
        put.node('h3', {})(put => put.text(sum$.valueOf()))
      }
    )
  }
}
