const PatchBark = require('../src/barks/patch')
const hApiRing = require('../src/rings/h-api')
const apiRing = require('../src/rings/api')
const m = require('most')
PatchBark(apiRing, hApiRing)(document.getElementById('root-node'))(
  state => h => {
    h('div.app1', h => {
      h('div', showHideRing(Counter(0)))
      h('div', showHideRing(Counter(1)))
      h('div', showHideRing(Counter(2)))
      h('div', showHideRing(Counter(3)))
    })
  }
).drain()

function Counter (d = 0) {
  return (h, select) => {
    const pi2 = Math.PI * 2
    const cycle$ = m.periodic(20).scan(i => (i >= pi2 ? 0 : i + 0.15), 0)
    const sin$ = cycle$.map(i => Math.sin(i))
    const cos$ = cycle$.map(i => Math.cos(i))

    const sum$ = h.$.map(x => x.action).scan((sum, v) => sum + v, 0)
    const color$ = wave$ => wave$.map(i => 100 + d * 20 + Math.floor(30 * i))
    const r = 10
    h('div', {style: {padding: '5px 10px', textAlign: 'center'}}, h => {
      h(
        'button',
        {
          on: {click: +1},
          style: h.css$`
          position: relative; outline: none
          border-radius: ${sin$.map(i => Math.abs(Math.floor(i * 20)))}px
          left: ${cos$.map(i => Math.floor(r * i))}px
          top: ${sin$.map(i => Math.floor(r * i))}px
          backgroundColor: rgb(255, ${color$(sin$)}, ${color$(cos$)})
        `
        },
        h => {
          h('span', {}, h => h('+'))
          if (d > 0) h('div', {}, Counter(d - 1))
        }
      )
      h(
        'button',
        {
          on: {click: -1},
          style: h.css$`
          position: relative; outline: none
          border-radius: ${cos$.map(i => Math.abs(Math.floor(i * 20)))}px
          left: ${sin$.map(i => Math.floor(r * i))}px
          top: ${cos$.map(i => Math.floor(r * i))}px
          backgroundColor: rgb(${color$(sin$)}, ${color$(cos$)}, 255)
        `
        },
        h => {
          h('span', {}, h => h('-'))
          if (d > 0) h('div', {}, Counter(d - 1))
        }
      )
      h('h3', {}, h => h(sum$.map(n => n.toString())))
    })
  }
}

function showHideRing (pith) {
  return function showHidePith (h) {
    const showHide$ = h.$.filter(({action}) => action === showHide$)
      .scan(b => !b, false)
      .multicast()
    h(
      'button',
      {on: {click: showHide$}},
      showHide$.map(show => h => h(show ? 'hide' : 'show'))
    )
    h('div', showHide$.map(show => (show ? pith : h => {})))
  }
}
