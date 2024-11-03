import * as THREE from 'three'
import type { Scene } from 'three'
import Experience from '@/experience/Experience'
import type { GLTF } from 'three/examples/jsm/Addons.js'
import Tooltip from '../Tooltip'
import type { ResourceItem } from '@/experience/utils/Resources'
import Resources from '@/experience/utils/Resources' // Import the Resources class
// @ts-ignore

//import scene from '@/assets/models/gltf/scenes/Bio_Scene_opti_merge.glb'

import scene from '@/assets/models/gltf/scenes/bio/Haus.glb'
import scene2 from '@/assets/models/gltf/scenes/bio/Decoration.glb'

import Housetexture from '@/assets/images/haus_baked.png'
import Decorationtexture from '@/assets/images/decoration_baked.png'
import VisionLoader from './VisionLoader'

const RESOURCE_NAME = 'vision'
const RESOURCE_NAME2 = 'vision2'

const RESOURCE_HOUSETEXTURE = 'vision3'
const RESOURCE_DECORATIONTEXTURE = 'vision4'

const sources: ResourceItem[] = [
  {
    name: RESOURCE_NAME,
    type: 'gltfModel',
    path: [scene],
  },
  {
    name: RESOURCE_NAME2,
    type: 'gltfModel',
    path: [scene2],
  },
  {
    name: RESOURCE_HOUSETEXTURE,
    type: 'texture',
    path: [Housetexture],
  },
  {
    name: RESOURCE_DECORATIONTEXTURE,
    type: 'texture',
    path: [Decorationtexture],
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
    const gltf = this.resources.items[RESOURCE_NAME] as GLTF
    const gltf2 = this.resources.items[RESOURCE_NAME2] as GLTF

    const bakedMeshHouse = gltf.scene.children.find(
      child => child.name === 'Haus',
    )

    const meshHouse = this.resources.items[RESOURCE_HOUSETEXTURE]
    meshHouse.flipY = false
    meshHouse.colorSpace = THREE.SRGBColorSpace

    bakedMeshHouse.material = new THREE.MeshBasicMaterial({
      map: meshHouse,
    })
    this.scene.add(gltf.scene)

    const bakedMeshDecoration = gltf2.scene.children.find(
      child => child.name === 'Decoration',
    )
    const meshDecoration = this.resources.items[RESOURCE_DECORATIONTEXTURE]
    meshDecoration.flipY = false
    meshDecoration.colorSpace = THREE.SRGBColorSpace

    if (gltf2) {
      bakedMeshDecoration.material = new THREE.MeshBasicMaterial({
        map: meshDecoration,
      })
    }

    this.scene.add(gltf2.scene)
  }
}
