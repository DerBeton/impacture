import * as THREE from 'three'
import type { Scene } from 'three'
import Experience from '@/experience/Experience'
import type Resources from '@/experience/utils/Resources'
import type { GLTF } from 'three/examples/jsm/Addons.js'
import Tooltip from '../Tooltip'
import type { ResourceItem } from '@/experience/utils/Resources'

import VisionLoader from './VisionLoader'

// @ts-ignore
import scene from '@/assets/models/gltf/scenes/dome/Haus.glb'
// @ts-ignore
import scene2 from '@/assets/models/gltf/scenes/dome/decoration.glb'
// @ts-ignore
import scene3 from '@/assets/models/gltf/scenes/dome/base.glb'
// @ts-ignore
import scene4 from '@/assets/models/gltf/scenes/dome/AnbauHaus.glb'
// @ts-ignore
import scene5 from '@/assets/models/gltf/scenes/dome/Wassertank.glb'
// @ts-ignore
import scene6 from '@/assets/models/gltf/scenes/dome/Tisch.glb'
// @ts-ignore
import scene7 from '@/assets/models/gltf/scenes/dome/Lampen.glb'
// @ts-ignore
import scene8 from '@/assets/models/gltf/scenes/dome/GemuseBaum.glb'
// @ts-ignore
import scene9 from '@/assets/models/gltf/scenes/dome/Biene.glb'
// @ts-ignore
import scene10 from '@/assets/models/gltf/scenes/dome/Beet.glb'
// @ts-ignore
import scene11 from '@/assets/models/gltf/scenes/dome/Container.glb'

import Housetexture from '@/assets/images/dome/house.jpg'
import Decorationtexture from '@/assets/images/dome/decoration.png'
import Basetexture from '@/assets/images/dome/base.png'
import AnbauHaustexture from '@/assets/images/dome/anbauHaus.png'
import Wassertanktexture from '@/assets/images/dome/wassertank.png'
import Tischtexture from '@/assets/images/dome/tisch.png'
import Lampentexture from '@/assets/images/dome/lampen.png'
import GemuseBaumtexture from '@/assets/images/dome/gemuseBaum.png'
import Bienentexture from '@/assets/images/dome/biene.png'
import Beettexture from '@/assets/images/dome/beet.png'
import Containertexture from '@/assets/images/dome/container.png'

const RESOURCE_NAME = 'vision1'
const RESOURCE_NAME2 = 'vision3'
const RESOURCE_NAME3 = 'vision5'
const RESOURCE_NAME4 = 'vision9'
const RESOURCE_NAME5 = 'vision11'
const RESOURCE_NAME6 = 'vision13'
const RESOURCE_NAME7 = 'vision15'
const RESOURCE_NAME8 = 'vision17'
const RESOURCE_NAME9 = 'vision19'
const RESOURCE_NAME10 = 'vision21'
const RESOURCE_NAME11 = 'vision23'

const RESOURCE_HOUSETEXTURE = 'vision2'
const RESOURCE_DECORATIONTEXTURE = 'vision4'
const RESOURCE_BASETEXTURE = 'vision6'
const RESOURCE_ANBAUHAUSTEXTURE = 'vision8'
const RESOURCE_WASSERTANKTEXTURE = 'vision10'
const RESOURCE_TISCHTEXTURE = 'vision12'
const RESOURCE_LAMPENTEXTURE = 'vision14'
const RESOURCE_GEMUSEBAUMTEXTURE = 'vision16'
const RESOURCE_BIENENTEXTURE = 'vision18'
const RESOURCE_BEETTEXTURE = 'vision20'
const RESOURCE_CONTAINERTEXTURE = 'vision22'

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
    name: RESOURCE_NAME7,
    type: 'gltfModel',
    path: [scene7],
  },
  {
    name: RESOURCE_NAME8,
    type: 'gltfModel',
    path: [scene8],
  },
  {
    name: RESOURCE_NAME9,
    type: 'gltfModel',
    path: [scene9],
  },
  {
    name: RESOURCE_NAME10,
    type: 'gltfModel',
    path: [scene10],
  },
  {
    name: RESOURCE_NAME11,
    type: 'gltfModel',
    path: [scene11],
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
    name: RESOURCE_BASETEXTURE,
    type: 'texture',
    path: [Basetexture],
  },
  {
    name: RESOURCE_ANBAUHAUSTEXTURE,
    type: 'texture',
    path: [AnbauHaustexture],
  },
  {
    name: RESOURCE_WASSERTANKTEXTURE,
    type: 'texture',
    path: [Wassertanktexture],
  },
  {
    name: RESOURCE_TISCHTEXTURE,
    type: 'texture',
    path: [Tischtexture],
  },
  {
    name: RESOURCE_LAMPENTEXTURE,
    type: 'texture',
    path: [Lampentexture],
  },
  {
    name: RESOURCE_GEMUSEBAUMTEXTURE,
    type: 'texture',
    path: [GemuseBaumtexture],
  },
  {
    name: RESOURCE_BIENENTEXTURE,
    type: 'texture',
    path: [Bienentexture],
  },
  {
    name: RESOURCE_BEETTEXTURE,
    type: 'texture',
    path: [Beettexture],
  },
  {
    name: RESOURCE_CONTAINERTEXTURE,
    type: 'texture',
    path: [Containertexture],
  },
]

export default class DomeVision extends VisionLoader {
  resource?: GLTF

  constructor() {
    super(RESOURCE_NAME)

    this.setSources(sources)
  }

  public onReady(): void {
    const gltf = this.resources.items[RESOURCE_NAME] as GLTF
    const gltf2 = this.resources.items[RESOURCE_NAME2] as GLTF
    const gltf3 = this.resources.items[RESOURCE_NAME3] as GLTF
    const gltf4 = this.resources.items[RESOURCE_NAME4] as GLTF
    const gltf5 = this.resources.items[RESOURCE_NAME5] as GLTF
    const gltf6 = this.resources.items[RESOURCE_NAME6] as GLTF
    const gltf7 = this.resources.items[RESOURCE_NAME7] as GLTF
    const gltf8 = this.resources.items[RESOURCE_NAME8] as GLTF
    const gltf9 = this.resources.items[RESOURCE_NAME9] as GLTF
    const gltf10 = this.resources.items[RESOURCE_NAME10] as GLTF
    const gltf11 = this.resources.items[RESOURCE_NAME11] as GLTF

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

    bakedMeshDecoration.material = new THREE.MeshBasicMaterial({
      map: meshDecoration,
    })
    this.scene.add(gltf2.scene)

    //Decoration
    const bakedMeshbase = gltf3.scene.children.find(
      child => child.name === 'Base',
    )

    const meshbase = this.resources.items[RESOURCE_BASETEXTURE]
    meshbase.flipY = false
    meshbase.colorSpace = THREE.SRGBColorSpace

    bakedMeshbase.material = new THREE.MeshBasicMaterial({
      map: meshbase,
    })
    this.scene.add(gltf3.scene)

    //Anbauhaus
    const bakedMeshanbauHaus = gltf4.scene.children.find(
      child => child.name === 'AnbauHaus',
    )

    const meshanbauHaus = this.resources.items[RESOURCE_ANBAUHAUSTEXTURE]
    meshanbauHaus.flipY = false
    meshanbauHaus.colorSpace = THREE.SRGBColorSpace

    bakedMeshanbauHaus.material = new THREE.MeshBasicMaterial({
      map: meshanbauHaus,
    })
    this.scene.add(gltf4.scene)

    //WasserTank
    const bakedMeshwasserTank = gltf5.scene.children.find(
      child => child.name === 'Wasserfilter',
    )

    const meshwasserTank = this.resources.items[RESOURCE_WASSERTANKTEXTURE]
    meshwasserTank.flipY = false
    meshwasserTank.colorSpace = THREE.SRGBColorSpace

    bakedMeshwasserTank.material = new THREE.MeshBasicMaterial({
      map: meshwasserTank,
    })
    this.scene.add(gltf5.scene)

    //Tisch
    const bakedMeshtisch = gltf6.scene.children.find(
      child => child.name === 'Tisch',
    )

    const meshtischs = this.resources.items[RESOURCE_TISCHTEXTURE]
    meshtischs.flipY = false
    meshtischs.colorSpace = THREE.SRGBColorSpace

    bakedMeshtisch.material = new THREE.MeshBasicMaterial({
      map: meshtischs,
    })
    this.scene.add(gltf6.scene)

    //Lampen
    const bakedMeshlampen = gltf7.scene.children.find(
      child => child.name === 'Lampen',
    )

    const meshlampen = this.resources.items[RESOURCE_LAMPENTEXTURE]
    meshlampen.flipY = false
    meshlampen.colorSpace = THREE.SRGBColorSpace

    bakedMeshlampen.material = new THREE.MeshBasicMaterial({
      map: meshlampen,
    })
    this.scene.add(gltf7.scene)

    //GemuseBaum
    const bakedMeshgemuseBaum = gltf8.scene.children.find(
      child => child.name === 'GemueseBaum',
    )

    const meshgemuseBaum = this.resources.items[RESOURCE_GEMUSEBAUMTEXTURE]
    meshgemuseBaum.flipY = false
    meshgemuseBaum.colorSpace = THREE.SRGBColorSpace

    bakedMeshgemuseBaum.material = new THREE.MeshBasicMaterial({
      map: meshgemuseBaum,
    })
    this.scene.add(gltf8.scene)

    //Binen
    const bakedMeshbiene = gltf9.scene.children.find(
      child => child.name === 'Biene',
    )

    const meshbiene = this.resources.items[RESOURCE_BIENENTEXTURE]
    meshbiene.flipY = false
    meshbiene.colorSpace = THREE.SRGBColorSpace

    bakedMeshbiene.material = new THREE.MeshBasicMaterial({
      map: meshbiene,
    })
    this.scene.add(gltf9.scene)

    //Beet
    const bakedMeshBeet = gltf10.scene.children.find(
      child => child.name === 'Beet',
    )

    const meshBeet = this.resources.items[RESOURCE_BEETTEXTURE]
    meshBeet.flipY = false
    meshBeet.colorSpace = THREE.SRGBColorSpace

    bakedMeshBeet.material = new THREE.MeshBasicMaterial({
      map: meshBeet,
    })
    this.scene.add(gltf10.scene)

    //Container
    const bakedMeshContainer = gltf11.scene.children.find(
      child => child.name === 'Container',
    )

    const meshContainer = this.resources.items[RESOURCE_CONTAINERTEXTURE]
    meshContainer.flipY = false
    meshContainer.colorSpace = THREE.SRGBColorSpace

    bakedMeshContainer.material = new THREE.MeshBasicMaterial({
      map: meshContainer,
    })
    this.scene.add(gltf11.scene)
  }
}
