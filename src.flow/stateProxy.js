import {propagateEventTask, newStream} from '@most/core'
import {disposeWith, disposeNone, disposeOnce} from '@most/disposable'
import {asap} from '@most/scheduler'
import hold from './hold'

export default () => {
  let disposable = disposeNone()
  let on
  const subject = hold(
    newStream((sink, scheduler) => {
      on = a => {
        const d = disposable
        disposable = asap(propagateEventTask(a, sink), scheduler)
        d.dispose()
      }
      return disposeOnce(
        disposeWith(() => {
          on = undefined
          const d = disposable
          disposable = disposeNone()
          d.dispose()
        }, undefined)
      )
    })
  )
  return [
    e => {
      if (on != null) on(e)
    },
    subject,
  ]
}
