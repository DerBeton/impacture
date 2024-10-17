import * as THREE from 'three'
import type { Scene } from 'three'
import Experience from '../Experience'
import type Resources from '../utils/Resources'
import type { GLTF } from 'three/examples/jsm/Addons.js'

export default class House {
  experience: Experience
  scene: Scene
  resources: Resources
  resource: GLTF
  model?: THREE.Object3D

  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources

    this.resource = this.resources.items.houseModel

    this.setModel()
  }

  private setModel() {
    this.model = this.resource.scene
    this.model.scale.set(0.5, 0.5, 0.5)
    this.scene.add(this.model)
  }
}
