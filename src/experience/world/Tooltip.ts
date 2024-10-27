import * as THREE from 'three'
import { CSS2DObject } from 'three/examples/jsm/Addons.js'
import Experience from '../Experience'
import TooltipVue from '@/components/ToolTip.vue'
import { createApp } from 'vue'

export default class Tooltip {
  experience: Experience
  model: THREE.Object3D
  offset: THREE.Vector3
  objectCSS?: CSS2DObject

  constructor(
    model: THREE.Object3D,
    title: string,
    text: string,
    offset?: THREE.Vector3,
  ) {
    this.experience = new Experience()
    this.model = model
    this.offset = offset ?? new THREE.Vector3(0, 0, 0)

    this.create(title, text)
  }

  private create(title: string, text: string) {
    const tooltipContainer = document.createElement('div')

    // create new tooltip from vue component
    const tooltipApp = createApp(TooltipVue, { title, text })
    tooltipApp.mount(tooltipContainer)

    this.objectCSS = new CSS2DObject(tooltipContainer)
    this.objectCSS.position.set(this.offset.x, this.offset.y, this.offset.z)

    // add tooltip to model (to mirror position)
    this.model.add(this.objectCSS)
  }
}
