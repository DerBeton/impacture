import * as THREE from 'three'
import type { Scene } from 'three'
import Experience from '../Experience'
import Environment from './Environment'
import type Resources from '../utils/Resources'
import Tree from './Tree'
import BioVision from './visions/BioVision'
import type VisionType from './visions/VisionType'

export default class World {
  experience: Experience
  scene: Scene
  environment!: Environment
  resources: Resources
  tree?: Tree
  vision?: VisionType

  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources

    this.setVision(BioVision)

    // Listener
    this.resources.on('ready', () => {
      this.vision?.onResourcesLoaded()
      this.environment = new Environment() // after loading objects
    })

    // this.testMesh()
  }

  private testMesh() {
    const testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial(),
    )

    this.scene.add(testMesh)
  }

  private loadTree() {
    this.tree = new Tree()
  }

  private setVision<T extends VisionType>(VisionClass: new () => T): void {
    this.vision = new VisionClass()
  }
}
