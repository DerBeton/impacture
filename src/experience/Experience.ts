import * as THREE from 'three'
import Camera from '@/experience/Camera'
import Sizes from '@/experience/utils/Sizes'
import Renderer from './Renderer'
import Time from './utils/Time'
import World from './world/World'
import Resources, { type ResourceItem } from './utils/Resources'
import sources from './sources'

let instance: Experience | null = null

export default class Experience {
  private static _instance: Experience
  canvas!: HTMLCanvasElement
  sizes!: Sizes
  camera!: Camera
  scene!: THREE.Scene
  time!: Time
  renderer!: Renderer
  world!: World
  resources!: Resources

  public constructor(canvasElement?: HTMLCanvasElement) {
    if (instance) {
      return instance
    }

    instance = this

    if (!canvasElement) {
      throw new Error('Cannot create experience without canvas')
    }

    this.canvas = canvasElement
    this.sizes = new Sizes(canvasElement)
    this.time = new Time()
    this.scene = new THREE.Scene()
    this.camera = new Camera()
    this.renderer = new Renderer()
    this.resources = new Resources(sources)
    this.world = new World()

    // Events
    this.registerEventListeners()
  }

  private registerEventListeners() {
    this.sizes.on('resize', () => {
      this.resize()
    })

    this.time.on('tick', () => {
      this.update()
    })
  }

  private resize() {
    this.camera.resize()
    this.renderer.resize()
  }

  private update() {
    this.camera.update()
    this.renderer.update()
  }
}
