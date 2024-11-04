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
  controls!: OrbitControls

  constructor() {
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas

    this.setInstance()
    this.setOrbitControls()
  }

  private setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      35,
      this.sizes.width / this.sizes.height,
      0.1,
      100,
    )

    this.instance.position.set(
      11.532979353878366,
      17.04433759987522,
      35.77013708083898,
    ) // move camera
    this.scene.add(this.instance)
  }

  private setOrbitControls() {
    this.controls = new OrbitControls(this.instance, this.canvas)

    this.controls.minDistance = 20 // Minimum zoom
    this.controls.maxDistance = 75 // Maximum zoom

    // Restrict camera
    this.controls.minPolarAngle = Math.PI / 6
    this.controls.maxPolarAngle = Math.PI / 2.1

    // Optionally, enable damping (smooth controls) and set a damping factor
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.05
  }

  public resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height
    this.instance.updateProjectionMatrix()
  }

  public update() {
    if (this.controls.enableDamping) {
      this.controls.update()
    }
  }
}
