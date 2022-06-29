const showHideRing = pith => {
  return (put, select) => {
    put.onode('showHide', 'div.show-hide', (state, sselect) => {
      const isOpen$ = sselect.path(['isOpen']).multicast()
      state.val(
        'isOpen',
        select.action$
          .filter(({action}) => action === isOpen$)
          .map(_ => s => !s)
      )
      return put => {
        put.node(
          'button',
          {on: {click: isOpen$}},
          isOpen$.map(show => put => put.text(show ? 'hide' : 'show'))
        )
        put.node('div', isOpen$.map(show => (show ? pith : a => a)))
      }
    })
  }
}

module.exports = showHideRing
