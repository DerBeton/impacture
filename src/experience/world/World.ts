import * as THREE from 'three'
import type { Scene } from 'three'
import Experience from '../Experience'
import Environment from './Environment'
import type Resources from '../utils/Resources'
import Tree from './Tree'
import House from './House'

export default class World {
  experience: Experience
  scene: Scene
  environment!: Environment
  resources: Resources
  tree?: Tree
  house?: House

  constructor(VisionClass: new () => VisionType) {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources

    this.setVision(VisionClass)

    // Listener
    this.resources.on('ready', () => {
      //  this.loadTree()
      this.loadHouse()
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
  private loadHouse() {
    this.house = new House()
  }
}
