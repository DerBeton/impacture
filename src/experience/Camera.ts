import * as THREE from 'three'
import Experience from '@/experience/Experience'
import type Sizes from '@/experience/utils/Sizes'
import { PerspectiveCamera, Scene } from 'three'
// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default class Camera {
  instance!: PerspectiveCamera
  experience: Experience
  sizes: Sizes
  scene: Scene
  canvas: HTMLCanvasElement

  constructor() {
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas

    this.setInstance()
  }

  private setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      35,
      this.sizes.width / this.sizes.height,
      0.1,
      100,
    )

    this.instance.position.set(20, 20, 20) // move camera
    this.scene.add(this.instance)
  }

  public resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height
    this.instance.updateProjectionMatrix()
  }

  public update() {}
}
