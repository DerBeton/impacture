import * as THREE from 'three'
import { CSS2DObject } from 'three/examples/jsm/Addons.js'
import Experience from '../Experience'
import TooltipVue from '@/components/ToolTip.vue'
import Camera from '@/experience/Camera'
import { createApp } from 'vue'
import type EventEmitter from '../utils/EventEmitter'

export default class Tooltip {
  experience: Experience
  camera: Camera
  raycaster: THREE.Raycaster
  model: THREE.Object3D
  offset: THREE.Vector3
  objectCSS?: CSS2DObject
  domElement?: HTMLElement
  tooltipElement?: HTMLElement
  isHidden: boolean

  constructor(
    model: THREE.Object3D,
    title: string,
    text: string,
    offset?: THREE.Vector3,
    eventEmitter?: EventEmitter,
  ) {
    this.experience = new Experience()
    this.camera = this.experience.camera
    this.raycaster = new THREE.Raycaster()
    this.model = model
    this.offset = offset ?? new THREE.Vector3(0, 0, 0)
    this.isHidden = true

    this.create(title, text, eventEmitter)
  }

  private create(title: string, text: string, eventEmitter?: EventEmitter) {
    const tooltipContainer = document.createElement('div')
    tooltipContainer.classList.add('_level') // same z-index for all tooltips

    // create new tooltip from vue component
    const tooltipApp = createApp(TooltipVue, { title, text, eventEmitter })
    const component = tooltipApp.mount(tooltipContainer)

    this.domElement = tooltipContainer
    this.tooltipElement = component.$refs.toolTipCompElement as HTMLElement // tooltip component root ref

    this.objectCSS = new CSS2DObject(tooltipContainer)
    this.objectCSS.position.set(this.offset.x, this.offset.y, this.offset.z)

    // add tooltip to model (to mirror position)
    this.model?.add(this.objectCSS)
  }

  public update() {
    this.checkRaycast()
  }

  private checkRaycast() {
    if (!this.model) {
      return
    }

    const screenPosition = this.model.position.clone()
    screenPosition.project(this.camera.instance)

    const coordinatesToCheck: THREE.Vector2 = new THREE.Vector2(
      screenPosition.x,
      screenPosition.y,
    )

    // could set raycast threshold to omit thin objects
    this.raycaster.setFromCamera(coordinatesToCheck, this.camera.instance)
    const intersects = this.raycaster.intersectObject(
      this.experience.scene,
      true,
    ) // recursive checking

    let cleanIntersects = this.removeModelFromIntersects(intersects)

    if (cleanIntersects.length === 0) {
      this.showElement()
    } else {
      this.hideElement()
    }
  }

  // remove model itself from objects to check for intersection
  private removeModelFromIntersects(intersects: THREE.Intersection[]) {
    let intersectsWithoutModel: THREE.Intersection[] = []

    if (intersects.length > 0) {
      intersects.forEach(intersect => {
        if (intersect.object !== this.model) {
          intersectsWithoutModel.push(intersect)
        }
      })
    }

    return intersectsWithoutModel
  }

  private hideElement() {
    if (!this.isHidden) {
      this.isHidden = true
      this.tooltipElement?.classList.add('-hidden')
    }
  }

  private showElement() {
    if (this.isHidden) {
      this.isHidden = false
      this.tooltipElement?.classList.remove('-hidden')
    }
  }
}
