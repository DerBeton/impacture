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
import scene3 from '@/assets/models/gltf/scenes/bio/TradingHouse.glb'
import scene4 from '@/assets/models/gltf/scenes/bio/Ground.glb'
import scene5 from '@/assets/models/gltf/scenes/bio/Dog.glb'
import scene6 from '@/assets/models/gltf/scenes/bio/Antenna.glb'

import Housetexture from '@/assets/images/haus_baked.png'
import Decorationtexture from '@/assets/images/decoration_baked.png'
import TradingHousetexture from '@/assets/images/tradingHouse_baked.jpg'
import Groundtexture from '@/assets/images/ground_baked.jpg'
import Dogtexture from '@/assets/images/dog_baked.png'
import Antennatexture from '@/assets/images/antenna_baked.png'

import VisionLoader from './VisionLoader'

const RESOURCE_NAME = 'vision'
const RESOURCE_NAME2 = 'vision2'
const RESOURCE_NAME3 = 'vision3'
const RESOURCE_NAME4 = 'vision7'
const RESOURCE_NAME5 = 'vision9'
const RESOURCE_NAME6 = 'vision11'

const RESOURCE_HOUSETEXTURE = 'vision4'
const RESOURCE_DECORATIONTEXTURE = 'vision5'
const RESOURCE_TRADINGHOUSETEXTURE = 'vision6'
const RESOURCE_GROUNDTEXTURE = 'vision8'
const RESOURCE_DOGTEXTURE = 'vision10'
const RESOURCE_ANTENNATEXTURE = 'vision12'

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
    name: RESOURCE_NAME3,
    type: 'gltfModel',
    path: [scene3],
  },
  {
    name: RESOURCE_NAME4,
    type: 'gltfModel',
    path: [scene4],
  },
  {
    name: RESOURCE_NAME5,
    type: 'gltfModel',
    path: [scene5],
  },
  {
    name: RESOURCE_NAME6,
    type: 'gltfModel',
    path: [scene6],
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
  {
    name: RESOURCE_TRADINGHOUSETEXTURE,
    type: 'texture',
    path: [TradingHousetexture],
  },
  {
    name: RESOURCE_GROUNDTEXTURE,
    type: 'texture',
    path: [Groundtexture],
  },
  {
    name: RESOURCE_DOGTEXTURE,
    type: 'texture',
    path: [Dogtexture],
  },
  {
    name: RESOURCE_ANTENNATEXTURE,
    type: 'texture',
    path: [Antennatexture],
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
    const gltf3 = this.resources.items[RESOURCE_NAME3] as GLTF
    const gltf4 = this.resources.items[RESOURCE_NAME4] as GLTF
    const gltf5 = this.resources.items[RESOURCE_NAME5] as GLTF
    const gltf6 = this.resources.items[RESOURCE_NAME6] as GLTF

    //Haus
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

    //Decoration
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

    // Trading House
    const bakedMeshTradingHouse = gltf3.scene.children.find(
      child => child.name === 'TradingHouse',
    )

    const meshTradingHouse = this.resources.items[RESOURCE_TRADINGHOUSETEXTURE]
    meshTradingHouse.flipY = false
    meshTradingHouse.colorSpace = THREE.SRGBColorSpace

    if (gltf3) {
      bakedMeshTradingHouse.material = new THREE.MeshBasicMaterial({
        map: meshTradingHouse,
      })
    }

    this.scene.add(gltf3.scene)

    // Ground
    const bakedMeshGround = gltf4.scene.children.find(
      child => child.name === 'Ground',
    )

    const meshGround = this.resources.items[RESOURCE_GROUNDTEXTURE]
    meshGround.flipY = false
    meshGround.colorSpace = THREE.SRGBColorSpace

    if (gltf4) {
      bakedMeshGround.material = new THREE.MeshBasicMaterial({
        map: meshGround,
      })
    }

    this.scene.add(gltf4.scene)

    // Dog
    const bakedMeshDog = gltf5.scene.children.find(
      child => child.name === 'Dog',
    )

    const meshDog = this.resources.items[RESOURCE_DOGTEXTURE]
    meshDog.flipY = false
    meshDog.colorSpace = THREE.SRGBColorSpace

    if (gltf5) {
      bakedMeshDog.material = new THREE.MeshBasicMaterial({
        map: meshDog,
      })
    }

    this.scene.add(gltf6.scene)

    // Antenna
    const bakedMeshAntenna = gltf6.scene.children.find(
      child => child.name === 'Antenna',
    )

    const meshAntenna = this.resources.items[RESOURCE_ANTENNATEXTURE]
    meshAntenna.flipY = false
    meshAntenna.colorSpace = THREE.SRGBColorSpace

    if (gltf6) {
      bakedMeshAntenna.material = new THREE.MeshBasicMaterial({
        map: meshAntenna,
      })
    }

    this.scene.add(gltf6.scene)
  }
}
