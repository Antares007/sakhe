// @flow
import type {
  Stream,
  Sink,
  ScheduledTask,
  Time,
  Scheduler,
  Disposable,
} from '@most/types'
import {MulticastSource} from '@most/core'
import {asap, cancelTask} from '@most/scheduler'

type HeldValue<A> = {value: A}

class Hold<A> extends MulticastSource<A> {
  pendingSinks: Sink<A>[]
  held: ?HeldValue<A>
  task: ?ScheduledTask

  constructor(source: Stream<A>) {
    super(source)
    this.pendingSinks = []
    this.held = undefined
    this.task = undefined
  }

  run(sink: Sink<A>, scheduler: Scheduler): Disposable {
    if (this.shouldScheduleFlush()) {
      this.scheduleFlush(sink, scheduler)
    }

    return super.run(sink, scheduler)
  }

  hasValue(): boolean {
    return this.held !== undefined
  }

  hasSinks(): boolean {
    return this.sinks.length > 0
  }

  shouldScheduleFlush(): boolean {
    return this.hasValue() && this.hasSinks()
  }

  dispose(): void {
    this.cancelTask()
    return super.dispose()
  }

  event(time: Time, value: A): void {
    const pendingSinks = this.flushPending(time)
    this.sinks = this.sinks.concat(pendingSinks)
    this.held = {value}
    super.event(time, value)
  }

  flushPending(time: Time): Sink<A>[] {
    const {pendingSinks} = this
    this.pendingSinks = []

    if (this.held) {
      for (let i = 0; i < pendingSinks.length; i++) {
        tryEvent(time, this.held.value, pendingSinks[i])
      }
    }

    return pendingSinks
  }

  scheduleFlush(sink: Sink<A>, scheduler: Scheduler): void {
    this.pendingSinks.push(sink)
    if (this.task) {
      cancelTask(this.task)
      this.task = asap(new HoldTask(this), scheduler)
    }
  }

  cancelTask(): void {
    if (this.task) {
      cancelTask(this.task)
      this.task = undefined
    }
  }

  end(time: Time): void {
    this.flushPending(time)
    super.end(time)
  }

  error(time: Time, err: Error): void {
    this.flushPending(time)
    super.error(time, err)
  }
}

class HoldTask<A> {
  hold: Hold<A>

  constructor(hold: Hold<A>) {
    this.hold = hold
  }

  run(t: Time): void {
    this.hold.flushPending(t)
  }

  error(t: Time, e: Error): void {
    this.hold.error(t, e)
  }

  dispose(): void {}
}

function tryEvent<A>(t: Time, x: A, sink: Sink<A>): void {
  try {
    sink.event(t, x)
  } catch (e) {
    sink.error(t, e)
  }
}

export default function hold<A>(stream: Stream<A>): MulticastSource<A> {
  return new Hold(stream)
}
