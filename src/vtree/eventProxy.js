import {multicast, newStream} from '@most/core'
import {disposeWith} from '@most/disposable'

export default () => {
  let on
  const subject = multicast(
    newStream((sink, scheduler) => {
      on = e => sink.event(scheduler.currentTime(), e)
      return disposeWith(() => {
        on = undefined
      }, null)
    })
  )
  return [
    e => {
      if (on != null) on(e)
    },
    subject,
  ]
}
