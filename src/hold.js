import {MulticastSource} from '@most/core'
import {asap, cancelTask} from '@most/scheduler'

class Hold extends MulticastSource {
  constructor(source) {
    super(source)
    this.pendingSinks = []
    this.held = undefined
    this.task = undefined
  }

  run(sink, scheduler) {
    if (this.shouldScheduleFlush()) {
      this.scheduleFlush(sink, scheduler)
    }
    return super.run(sink, scheduler)
  }

  hasValue() {
    return this.held !== undefined
  }

  hasSinks() {
    return this.sinks.length > 0
  }

  shouldScheduleFlush() {
    return this.hasValue() && this.hasSinks()
  }

  dispose() {
    this.cancelTask()
    return super.dispose()
  }

  event(time, value) {
    const pendingSinks = this.flushPending(time)
    this.sinks = this.sinks.concat(pendingSinks)
    this.held = {value}
    super.event(time, value)
  }

  flushPending(time) {
    const {pendingSinks} = this
    this.pendingSinks = []

    if (this.held) {
      for (let i = 0; i < pendingSinks.length; i++) {
        tryEvent(time, this.held.value, pendingSinks[i])
      }
    }

    return pendingSinks
  }

  scheduleFlush(sink, scheduler) {
    this.pendingSinks.push(sink)
    if (this.task) {
      cancelTask(this.task)
      this.task = asap(new HoldTask(this), scheduler)
    }
  }

  cancelTask() {
    if (this.task) {
      cancelTask(this.task)
      this.task = undefined
    }
  }

  end(time) {
    this.flushPending(time)
    super.end(time)
  }

  error(time, err) {
    this.flushPending(time)
    super.error(time, err)
  }
}

class HoldTask {
  constructor(hold) {
    this.hold = hold
  }

  run(t) {
    this.hold.flushPending(t)
  }

  error(t, e) {
    this.hold.error(t, e)
  }

  dispose() {}
}

function tryEvent(t, x, sink) {
  try {
    sink.event(t, x)
  } catch (e) {
    sink.error(t, e)
  }
}

export default function hold(stream) {
  return new Hold(stream)
}
