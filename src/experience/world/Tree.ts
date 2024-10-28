import * as THREE from 'three'
import type { Scene } from 'three'
import Experience from '../Experience'
import type Resources from '../utils/Resources'
import type { GLTF } from 'three/examples/jsm/Addons.js'
import Tooltip from './Tooltip'

export default class Tree {
  experience: Experience
  scene: Scene
  resources: Resources
  resource: GLTF
  model?: THREE.Object3D

  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources

    this.resource = this.resources.items.treeModel

    this.setModel()
    this.addToolTip()
  }

  private setModel() {
    this.model = this.resource.scene
    this.model.scale.set(0.5, 0.5, 0.5)
    this.scene.add(this.model)
  }

  private addToolTip() {
    if (this.model) {
      const tooltip = new Tooltip(
        this.model,
        'Tree',
        'This is a simple tree. Nothing more.',
        new THREE.Vector3(0, 0, 0),
      )
    }
  }
}
