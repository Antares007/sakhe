const PatchBark = require('../src.old/barks/patch')
const apiRing = require('../src.old/rings/api')
const Knight = put =>
  put.node(
    'span',
    {
      style: {
        color: 'white',
        textShadow: '0px 0px 5px black'
      }
    },
    put => put.text('♘')
  )
const Empty = put => {}
const colors = {
  black: 'rgb(215, 139, 78)',
  white: 'rgb(255, 206, 162)'
}
const squareRing = pith => put =>
  pith({
    square: (x, y, pith) => {
      const black = (x + y) % 2 === 1
      const style = {
        width: '12.5%',
        height: '12.5%',
        backgroundColor: black ? colors.black : colors.white,
        color: !black ? colors.black : colors.white,
        fontSize: '7vw',
        textAlign: 'center'
      }
      const click = [x, y]
      put.node(apiRing)('div.square', {
        style,
        on: {click}
      })(pith)
    }
  })
const boardRing = pith => put =>
  pith({
    board: pith =>
      put.node(squareRing)('div.board', {
        style: {
          width: '90vw',
          height: '90vw',
          backgroundColor: 'black',
          display: 'flex',
          flexWrap: 'wrap',
          padding: '5px'
        }
      })(pith)
  })
const chessRing = pith => put =>
  pith({
    chess: key =>
      put.onode(apiRing, boardRing)(key, 'div.chess')((state, sselect) => {
        state.val(
          'kpos',
          sselect.action$
            .map(({action: [toX, toY]}) => pos => {
              const [x, y] = pos
              const dx = toX - x
              const dy = toY - y
              return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
                (Math.abs(dx) === 1 && Math.abs(dy) === 2)
                ? [toX, toY]
                : pos
            })
            .startWith(s => s || [1, 7])
        )
        return put => {
          put.board(put => {
            for (var i = 0; i < 64; i++) {
              const sx = i % 8
              const sy = Math.floor(i / 8)
              put.square(
                sx,
                sy,
                sselect
                  .path(['kpos'])
                  .filter(Boolean)
                  .map(([px, py]) => px === sx && py === sy)
                  .skipRepeats()
                  .map(show => (show ? Knight : Empty))
              )
            }
          })
        }
      })
  })
const Chess = (state, sselect) => {
  return (put, select) => {
    put.chess('game1')
  }
}

const id = a => a
const mapRaysRing = f =>
  function map (pith) {
    return (...rays) => {
      const [put, ...rest] = f(...rays)
      const node = (pmap = id) => put.node(p => map(pmap(p)))
      const snode = s => (spmap, vpmap = id) => s(spmap, p => map(vpmap(p)))
      pith(
        Object.assign({}, put, {
          node,
          onode: snode(put.onode),
          anode: snode(put.anode)
        }),
        ...rest
      )
    }
  }

PatchBark(apiRing, p =>
  mapRaysRing((put, ...rest) => [
    Object.assign({}, put, {
      node: pmap => (sel, data) => put.node(pmap)(sel + '.n', data),
      onode: (spmap, vpmap) => (key, sel, data) =>
        put.onode(spmap, vpmap)(key, sel + '.o', data),
      anode: (spmap, vpmap) => (key, sel, data) =>
        put.anode(spmap, vpmap)(key, sel + '.a', data)
    }),
    ...rest
  ])(chessRing(p))
)(document.getElementById('root-node'), ...require('./initState')('chess'))(
  Chess
).drain()
