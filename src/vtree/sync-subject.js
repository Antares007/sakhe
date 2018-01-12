import {multicast, newStream} from '@most/core'
import {disposeWith} from '@most/disposable'

const noop = () => {}

export default function syncSubject() {
  let event = noop
  let error = noop
  let end = noop
  const subject = multicast(
    newStream((sink, scheduler) => {
      event = e => sink.event(scheduler.currentTime(), e)
      error = err => sink.error(scheduler.currentTime(), err)
      end = () => sink.end(scheduler.currentTime())
      return disposeWith(() => {
        event = noop
        error = noop
        end = noop
      }, null)
    })
  )
  return {
    stream: subject,
    event(e) {
      event(e)
    },
    error(err) {
      error(err)
    },
    end() {
      end()
    },
  }
}
