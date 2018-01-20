// @flow
import type {Sink, Scheduler, ScheduledTask} from '@most/types'
import {multicast, newStream} from '@most/core'
import {disposeWith} from '@most/disposable'

import {asap} from '@most/scheduler'

const noop = () => {}

export default function subject<A> (isAsync: boolean = false) {
  let event: (a: A) => void = noop
  let error: (err: Error) => void = noop
  let end = noop
  const subject = multicast(
    newStream((s, scheduler) => {
      const sink = new SafeSink(isAsync ? new AsyncSink(s, scheduler) : s)
      event = e => sink.event(scheduler.currentTime(), e)
      error = err => sink.error(scheduler.currentTime(), err)
      end = () => sink.end(scheduler.currentTime())
      return disposeWith(() => {
        sink.disable()
      }, null)
    })
  )
  return {
    stream: subject,
    event (e: A) {
      event(e)
    },
    error (err: Error) {
      error(err)
    },
    end () {
      end()
    }
  }
}

class AsyncSink<A> {
  sink: Sink<A>
  events: ((t: number) => void)[]
  sendScheduled: boolean
  scheduler: Scheduler
  scheduledTask: ?ScheduledTask

  constructor (sink: Sink<A>, scheduler: Scheduler) {
    this.sink = sink
    this.scheduler = scheduler
    this.events = []
    this.sendScheduled = false
    this.scheduledTask = undefined
  }

  event (t, a: A) {
    this.events.push(t => this.sink.event(t, a))
    this.scheduleSend()
  }

  end () {
    this.events.push(t => this.sink.end(t))
    this.scheduleSend()
  }

  error (t, err: Error) {
    this.events.push(t => this.sink.error(t, err))
    this.scheduleSend()
  }

  scheduleSend () {
    if (this.sendScheduled) return
    this.sendScheduled = true
    this.scheduledTask = asap(new SendTask(this), this.scheduler)
  }

  disable () {
    const {scheduledTask} = this
    if (scheduledTask != null) scheduledTask.dispose()
  }
}

class SendTask<A> {
  sink: AsyncSink<A>
  active: boolean

  constructor (sink: AsyncSink<A>) {
    this.sink = sink
    this.active = true
  }
  run (t) {
    const {sink} = this
    const es = sink.events
    sink.events = []
    sink.sendScheduled = false
    for (let i = 0, l = es.length; i < l; i++) {
      if (!this.active) return
      es[i](t)
    }
  }
  error (t, err) {
    this.sink.error(t, err)
  }
  dispose () {
    this.active = false
  }
}

class SafeSink<A> {
  sink: Sink<A>
  active: boolean

  constructor (sink: Sink<A>) {
    this.sink = sink
    this.active = true
  }

  event (t, a: A) {
    if (!this.active) return
    this.sink.event(t, a)
  }

  end (t) {
    if (!this.active) return
    this.disable()
    this.sink.end(t)
  }

  error (t, e: Error) {
    this.disable()
    this.sink.error(t, e)
  }

  disable () {
    this.active = false
    const {sink} = this
    if (typeof sink.disable === 'function') sink.disable()
  }
}
