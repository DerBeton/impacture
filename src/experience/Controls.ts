import { OrbitControls } from 'three/examples/jsm/Addons.js'
import type Camera from './Camera'
import Experience from './Experience'
import type LabelRenderer from './LabelRenderer'

export default class Controls {
  experience: Experience
  camera: Camera
  canvas: HTMLCanvasElement
  labelRenderer: LabelRenderer
  instance: OrbitControls

  constructor() {
    this.experience = new Experience()
    this.camera = this.experience.camera
    this.canvas = this.experience.canvas
    this.labelRenderer = this.experience.labelRenderer
    // use labelRenderer to enable controls of canvas
    this.instance = new OrbitControls(
      this.camera.instance,
      this.labelRenderer.instance.domElement,
    )

    this.instance.enableDamping = true
    this.enableLabelClick()
  }

  private enableLabelClick() {
    this.labelRenderer.instance.domElement.addEventListener(
      'mousedown',
      event => {
        if (event.target instanceof HTMLElement) {
          if (event.target.classList.contains('-clickable')) {
            event.stopPropagation()
            event.target.click()
          }
        }
      },
    )
  }

  public update() {
    this.instance.update()
  }
}
