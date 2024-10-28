import * as THREE from 'three'
import Experience from '@/experience/Experience'
import type Resources from '@/experience/utils/Resources'
import type { ResourceItem } from '@/experience/utils/Resources'
import type { GLTF } from 'three/examples/jsm/Addons.js'
import Tooltip from '../Tooltip'
import type VisionType from './VisionType'

export default abstract class VisionLoader implements VisionType {
  resourceName: string = ''
  experience: Experience
  scene: THREE.Scene
  resources: Resources
  gltf?: GLTF
  rootObject?: THREE.Object3D

  constructor(name: string) {
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
    this.rootObject = this.gltf?.scene // gltf model
    this.setModel()
  }

  protected addToolTip(
    obj: THREE.Object3D | undefined,
    title: string,
    text: string,
  ) {
    if (obj instanceof THREE.Object3D) {
      const tooltip = new Tooltip(obj, title, text, new THREE.Vector3(0, 0, 0))
    }
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
