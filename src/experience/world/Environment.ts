import * as THREE from 'three'
import { ExitStatus } from 'typescript'
import Experience from '../Experience'
import type { Scene } from 'three'

export default class Environment {
  experience: Experience
  scene: Scene
  sunLight?: THREE.DirectionalLight

  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene

    this.setSunLight()
  }

  private setSunLight() {
    this.sunLight = new THREE.DirectionalLight('#ffffff', 4)
    this.sunLight.castShadow = true
    this.sunLight.shadow.camera.far = 15
    this.sunLight.shadow.mapSize.set(1024, 1024)
    this.sunLight.shadow.normalBias = 0.05
    this.sunLight.position.set(3, 3, -2.25)
    this.scene.add(this.sunLight)
  }
}
