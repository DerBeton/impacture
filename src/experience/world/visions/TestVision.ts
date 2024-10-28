import * as THREE from 'three'
import type { Scene } from 'three'
import Experience from '@/experience/Experience'
import type { GLTF } from 'three/examples/jsm/Addons.js'
import Tooltip from '../Tooltip'
import type { ResourceItem } from '@/experience/utils/Resources'
import Resources from '@/experience/utils/Resources' // Import the Resources class
// @ts-ignore
import scene from '@/assets/models/gltf/portal.glb'
import texture from '@/assets/images/baked.jpg'
import VisionLoader from './VisionLoader'

const RESOURCE_NAME = 'vision'
const RESOURCE_NAME2 = 'vision2'

const sources: ResourceItem[] = [
  {
    name: RESOURCE_NAME,
    type: 'gltfModel',
    path: [scene],
  },
  {
    name: RESOURCE_NAME2,
    type: 'texture',
    path: [texture],
  },
]

export default class TestVision extends VisionLoader {
  resource?: GLTF
  resources: Resources

  constructor() {
    super(RESOURCE_NAME)

    this.resources = new Resources(sources)
    this.resources.on('ready', () => {
      this.onReady()
    })
  }

  public onReady(): void {
    const bakedTexture = this.resources.items[RESOURCE_NAME2]
    bakedTexture.flipY = false
    bakedTexture.colorSpace = THREE.SRGBColorSpace

    const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture })
    const portalLightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })
    const poleLightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffe5 })

    const gltf = this.resources.items[RESOURCE_NAME] as GLTF

    const bakedMesh = gltf.scene.children.find(child => child.name === 'baked')
    const portalLightMesh = gltf.scene.children.find(
      child => child.name === 'portalLight',
    )
    const poleLightAMesh = gltf.scene.children.find(
      child => child.name === 'poleLightA',
    )
    const poleLightBMesh = gltf.scene.children.find(
      child => child.name === 'poleLightB',
    )

    if (bakedMesh) bakedMesh.material = bakedMaterial
    if (portalLightMesh) portalLightMesh.material = portalLightMaterial
    if (poleLightAMesh) poleLightAMesh.material = poleLightMaterial
    if (poleLightBMesh) poleLightBMesh.material = poleLightMaterial

    this.scene.add(gltf.scene)
  }
}
