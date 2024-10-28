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

    switch (future) {
      case '0010':
        this.world = new World(BioVision)
        break
      case '1001':
        this.world = new World(DomeVision)
        break
      default:
        console.log("future doesn't exist")
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
