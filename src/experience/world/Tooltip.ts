import * as THREE from 'three'
import { CSS2DObject } from 'three/examples/jsm/Addons.js'
import Experience from '../Experience'
import TooltipVue from '@/components/ToolTip.vue'
import Camera from '@/experience/Camera'
import { createApp } from 'vue'

export default class Tooltip {
  experience: Experience
  camera: Camera
  raycaster: THREE.Raycaster
  model: THREE.Object3D
  offset: THREE.Vector3
  objectCSS?: CSS2DObject
  domElement?: HTMLElement

  constructor(
    model: THREE.Object3D,
    title: string,
    text: string,
    offset?: THREE.Vector3,
  ) {
    this.experience = new Experience()
    this.camera = this.experience.camera
    this.raycaster = new THREE.Raycaster()
    this.model = model
    this.offset = offset ?? new THREE.Vector3(0, 0, 0)

    this.create(title, text)
  }

  private create(title: string, text: string) {
    const tooltipContainer = document.createElement('div')

    // create new tooltip from vue component
    const tooltipApp = createApp(TooltipVue, { title, text })
    tooltipApp.mount(tooltipContainer)

    this.domElement = tooltipContainer

    this.objectCSS = new CSS2DObject(tooltipContainer)
    this.objectCSS.position.set(this.offset.x, this.offset.y, this.offset.z)

    // add tooltip to model (to mirror position)
    this.model.add(this.objectCSS)

    this.update()
  }

  public update() {
    window.requestAnimationFrame(this.update)
  }

  private checkRaycast() {
    const screenPosition = this.model.position.clone()
    screenPosition.project(this.camera.instance)

    const coordinatesToCheck: THREE.Vector2 = new THREE.Vector2(
      screenPosition.x,
      screenPosition.y,
    )

    this.raycaster.setFromCamera(coordinatesToCheck, this.camera.instance)
    const intersects = this.raycaster.intersectObjects(
      this.experience.scene.children,
      true,
    ) // recursive checking

    if (intersects.length === 0) {
      this.showElement()
    } else {
      this.hideElement()
    }
  }

  private hideElement() {
    this.domElement?.classList.add('-hidden')
  }

  private showElement() {
    this.domElement?.classList.remove('-hidden')
  }
}
