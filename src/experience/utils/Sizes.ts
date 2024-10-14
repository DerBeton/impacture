import EventEmitter from './EventEmitter'

export default class Sizes extends EventEmitter {
  element: HTMLElement
  width: number
  height: number
  devicePixelRatio: number

  constructor(element: HTMLElement) {
    super() // call event emitter constructor

    this.element = element.parentElement! // use parent for resizing
    this.width = element.clientWidth
    this.height = element.clientHeight
    this.devicePixelRatio = Math.min(window.devicePixelRatio, 2)

    this.registerReziseListener()
  }

  private updateSizes() {
    this.width = this.element.clientWidth
    this.height = this.element.clientHeight
    this.devicePixelRatio = Math.min(window.devicePixelRatio, 2)
  }

  private registerReziseListener() {
    window.addEventListener('resize', () => {
      this.updateSizes()
      this.trigger('resize') // invoke resize event for other classes to listen
    })
  }
}
