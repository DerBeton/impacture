import * as THREE from 'three'
import Camera from '@/experience/Camera'
import Sizes from '@/experience/utils/Sizes'
import Renderer from './Renderer'
import Time from './utils/Time'
import World from './world/World'
import Resources, { type ResourceItem } from './utils/Resources'
import sources from './sources'
import LabelRenderer from './LabelRenderer'
import Controls from './Controls'
import BioVision from './world/visions/BioVision'
import DomeVision from './world/visions/DomeVision'
import { VisionManager } from './world/visions/VisionManager'

let instance: Experience | null = null

export default class Experience {
  private static _instance: Experience
  canvas!: HTMLCanvasElement
  sizes!: Sizes
  camera!: Camera
  scene!: THREE.Scene
  time!: Time
  renderer!: Renderer
  labelRenderer!: LabelRenderer
  controls!: Controls
  world?: World
  resources!: Resources
  selectedFuture?: string

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
    this.labelRenderer = new LabelRenderer()
    this.controls = new Controls()
    this.resources = new Resources(null)
    this.selectedFuture = ''

    // Events
    this.registerEventListeners()
  }

  public setFuture(future: string) {
    this.selectedFuture = future

    const VisionClass = VisionManager.getVisionById(future)

    if (VisionClass) {
      this.world = new World(VisionClass)
    } else {
      console.error('Vision string does not match any existing vision')
    }
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
    this.labelRenderer.resize()
  }

  private update() {
    this.camera.update()
    this.controls.update()
    this.renderer.update()
    this.labelRenderer.update()
  }
}
