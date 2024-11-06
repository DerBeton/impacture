import * as THREE from 'three'
import Experience from '@/experience/Experience'
import type Resources from '@/experience/utils/Resources'
import type { ResourceItem } from '@/experience/utils/Resources'
import type { GLTF } from 'three/examples/jsm/Addons.js'
import Tooltip from '../Tooltip'
import type VisionType from './VisionType'
import EventEmitter from '@/experience/utils/EventEmitter'

export default abstract class VisionLoader
  extends EventEmitter
  implements VisionType
{
  resourceName: string = ''
  experience: Experience
  scene: THREE.Scene
  resources: Resources
  gltf?: GLTF
  rootObject?: THREE.Object3D

  constructor(name: string) {
    super()

    this.resourceName = name
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
  }

  protected getObjectByName(name: string): THREE.Object3D | undefined {
    return this.rootObject?.getObjectByName(name)
  }

  public onResourcesLoaded() {
    console.debug('onResourcesLoaded')
    this.gltf = this.resources.items[this.resourceName]
    console.log('gltf', this.resources.items[this.resourceName])
    console.log('hihihih')
    this.rootObject = this.gltf?.scene // gltf model
    // this.rootObject = this.scene // scene
    this.setModel()
  }

  protected addToolTip(
    obj: THREE.Object3D | undefined,
    title: string,
    text: string,
    offset?: THREE.Vector3,
  ) {
    if (obj instanceof THREE.Object3D) {
      const tooltip = new Tooltip(
        obj,
        title,
        text,
        offset instanceof THREE.Vector3 ? offset : new THREE.Vector3(0, 0, 0),
        this,
      )

      this.addTooltipClickListener(tooltip)
    }
  }

  private addTooltipClickListener(tooltip: Tooltip) {
    tooltip.domElement?.addEventListener('click', () => {
      this.trigger('closeAllTooltips', [
        this.getToolTipCompElement(tooltip.domElement),
      ])
    })
  }

  // get reference to dom element of tooltip component
  private getToolTipCompElement(parent?: HTMLElement) {
    return parent?.getElementsByClassName('tooltip-comp')[0]
  }

  private setModel() {
    if (this.rootObject) {
      this.scene.add(this.rootObject)
      this.onReady()
    }
  }

  public setSources(resources: ResourceItem[]): void {
    this.experience.resources.setSources(resources)
  }

  /**
   * Gets called after model is loaded and added to scene
   * use it to change scale, add tooltips, ...
   */
  onReady(): void {}
}
