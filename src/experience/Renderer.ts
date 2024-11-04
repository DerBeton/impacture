import * as THREE from 'three'
import type { Scene } from 'three'
import Experience from './Experience'
import type Sizes from './utils/Sizes'
import type Camera from './Camera'

export default class Renderer {
  instance: THREE.WebGLRenderer | null = null
  experience: Experience
  canvas: HTMLCanvasElement
  sizes: Sizes
  scene: Scene
  camera: Camera

  constructor() {
    this.experience = new Experience()
    this.canvas = this.experience.canvas
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.camera = this.experience.camera

    this.setInstance()
  }

  private setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    })
    // this.instance.physicallyCorrectLights = true
    // this.instance.outputEncoding = THREE.sRGBEncoding
    /* this.instance.toneMapping = THREE.CineonToneMapping
    this.instance.toneMappingExposure = 1.75
    this.instance.shadowMap.enabled = true*
    this.instance.shadowMap.type = THREE.PCFSoftShadowMap
    this.instance.setClearColor('#211d20')*/
    this.instance.setSize(this.sizes.width, this.sizes.height)
    this.instance.setPixelRatio(this.sizes.devicePixelRatio)
  }

  public resize() {
    if (!this.instance) {
      return
    }

    this.instance.setSize(this.sizes.width, this.sizes.height)
    this.instance.setPixelRatio(this.sizes.devicePixelRatio)
  }

  public update() {
    this.instance?.render(this.scene, this.camera.instance)
  }
}
