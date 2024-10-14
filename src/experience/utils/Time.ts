import EventEmitter from './EventEmitter'

export default class Time extends EventEmitter {
  start: number
  current: number
  elapsed: number
  delta: number

  constructor() {
    super()

    this.start = Date.now()
    this.current = this.start
    this.elapsed = 0
    this.delta = 16 // about one frame at 60fps

    window.requestAnimationFrame(() => {
      this.tick() // wait one frame until tick is called
    })
  }

  private tick() {
    const currentTime = Date.now()
    this.delta = currentTime - this.current
    this.current = currentTime
    this.elapsed = this.current - this.start

    this.trigger('tick')

    window.requestAnimationFrame(() => {
      this.tick()
    })
  }
}
