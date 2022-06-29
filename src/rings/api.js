const apiRing = pith => (put, select) => {
  pith(
    Object.keys(put).reduce((s, key) => {
      const fn = put[key]
      const chains = fn.toString().split('=>')
      s[key] =
        chains[0].indexOf('pmap') > -1
          ? (...args) =>
            fn(apiRing, apiRing)(...args.slice(0, -1))(args[args.length - 1])
          : fn
      return s
    }, {}),
    select
  )
}

module.exports = apiRing
