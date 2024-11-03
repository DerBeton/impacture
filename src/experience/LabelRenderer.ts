import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/Addons.js'
import Experience from './Experience'
import type Sizes from './utils/Sizes'
import { Vector3, type Scene } from 'three'
import type Camera from './Camera'

export default class LabelRenderer {
  experience: Experience
  sizes: Sizes
  scene: Scene
  camera: Camera
  instance: CSS2DRenderer

  constructor() {
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.camera = this.experience.camera
    // this.instance = new CSS2DRenderer({ element: this.experience.canvas })
    this.instance = new CSS2DRenderer()

    this.instance.domElement.style.position = 'absolute'
    this.instance.domElement.style.top = this.experience.canvas.offsetTop + 'px'
    this.instance.domElement.style.left =
      this.experience.canvas.offsetLeft + 'px'

    document.body.appendChild(this.instance.domElement)

    this.setSize()
  }

  private setSize() {
    this.instance.setSize(this.sizes.width, this.sizes.height)
  }

  public resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height)
  }

  public update() {
    this.instance.render(this.scene, this.camera.instance)
  }
}
