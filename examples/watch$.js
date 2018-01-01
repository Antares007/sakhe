const m = require('most')
const debug = require('debug')
const dispose = require('most/lib/disposable/dispose')
const fs = require('fs')
const promisify = require('./promisify')

const _stat = promisify(fs.stat.bind(fs))
const _readdir = promisify(fs.readdir.bind(fs))
const {join: pathJoin} = require('path')

const readdir = path =>
  _readdir(path).then(names => {
    const s = {}
    const stats = names.map(name =>
      _stat(pathJoin(path, name)).then(stat => {
        s[name] = stat
      })
    )
    return Promise.all(stats).then(() => s)
  })

class WatchTask {
  constructor(sink, scheduler, path) {
    this.sink = sink
    this.scheduler = scheduler
    this.path = path
  }
  run(t) {
    const path = this.path
    const watcher = fs.watch(path)
    const change$ = m.fromEvent('change', watcher)
    const error$ = m
      .fromEvent('error', watcher)
      .take(1)
      .flatMap(err => m.throwError(err))
    const d = debug('watcher: ' + path)
    d('started')
    this.disposable = dispose.all([
      dispose.create(() => {
        watcher.close()
        d('closed')
      }),
      change$
        .merge(error$)
        .scan(
          (dirp, [_, name]) =>
            dirp.then(dir =>
              _stat(pathJoin(path, name)).then(
                stat => Object.assign({}, dir, {[name]: stat}),
                err => {
                  const rez = Object.assign({}, dir, {[name]: err})
                  if (err.code === 'ENOENT') delete rez[name]
                  return rez
                }
              )
            ),
          readdir(path)
        )
        .awaitPromises()
        .source.run(this.sink, this.scheduler)
    ])
  }
  error(t, err) {
    this.sink.error(t, err)
  }
  dispose() {
    return this.disposable && this.disposable.dispose()
  }
}

class WatchSource {
  constructor(path) {
    this.path = path
  }
  run(sink, scheduler) {
    return scheduler.asap(new WatchTask(sink, scheduler, this.path))
  }
}

const watch$ = path => new m.Stream(new WatchSource(path))

module.exports = watch$
