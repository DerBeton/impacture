import * as THREE from 'three'
import type { Scene } from 'three'
import Experience from '@/experience/Experience'
import type Resources from '@/experience/utils/Resources'
import type { GLTF } from 'three/examples/jsm/Addons.js'
import Tooltip from '../Tooltip'
import type { ResourceItem } from '@/experience/utils/Resources'
// @ts-ignore
import scene from '@/assets/models/gltf/scenes/bio_scene_3.glb'
// @ts-ignore
import BiogasDachtexture from '@/assets/images/bio2/biogas.dach_baked.hdr'
import BiogasDachtexture2 from '@/assets/images/bio2/biogas.dach_baked.png'
// @ts-ignore
import BiogasGrundrisstexture from '@/assets/images/bio2/biogas.grundriss_baked.hdr'
import VisionLoader from './VisionLoader'
import Biogastexture from '@/assets/images/biogas_baked.png'

const RESOURCE_NAME = 'vision'

const sources: ResourceItem[] = [
  {
    name: RESOURCE_NAME,
    type: 'gltfModel',
    path: [scene],
  },
  {
    name: 'BiogasDachtexture2',
    type: 'texture',
    path: [Biogastexture],
  },
  //   {
  //     name: 'vision18',
  //     type: 'texture',
  //     path: [Biogastexture],
  //   },
  //   {
  //     name: 'BiogasGrundrisstexture',
  //     type: 'texture',
  //     path: [BiogasGrundrisstexture],
  //   },
]

export default class BioVision2 extends VisionLoader {
  resource?: GLTF

  constructor() {
    super(RESOURCE_NAME)

    this.setSources(sources)
  }

  private setLightmap() {
    const biodach = this.getObjectByName('biogasdach')
    if (biodach instanceof THREE.Mesh) {
      console.log(biodach)
      biodach.material.lightmap = this.resources.items['BiogasDachtexture2']
      biodach.material.lightMapIntensity = 1.0
    }
  }

  private setLightingTextures() {
    const biogas = this.getObjectByName('biogas')
    if (biogas instanceof THREE.Mesh) {
      biogas.material = new THREE.MeshBasicMaterial({
        map: this.resources.items['RESOURCE_BIOGASTEXTURE'],
      })
    }
  }

  public onReady(): void {
    // set lightmaps
    this.setLightmap()

    this.addToolTip(
      this.getObjectByName('Antenna'),
      'Antenna',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia dolores sed libero nam quaerat, aperiam perspiciatis fuga, eveniet vero vitae itaque, dicta fugit expedita! Soluta praesentium magni enim eius fugit!',
    )
    this.addToolTip(
      this.getObjectByName('Gardenbedstone1'),
      'Gardenbed',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia dolores sed libero nam quaerat, aperiam perspiciatis fuga, eveniet vero vitae itaque, dicta fugit expedita! Soluta praesentium magni enim eius fugit!',
    )
    this.addToolTip(
      this.getObjectByName('Gardenbedstone2'),
      'Gardenbed',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia dolores sed libero nam quaerat, aperiam perspiciatis fuga, eveniet vero vitae itaque, dicta fugit expedita! Soluta praesentium magni enim eius fugit!',
    )
    this.addToolTip(
      this.getObjectByName('Solarpanel'),
      'Gardenbed',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia dolores sed libero nam quaerat, aperiam perspiciatis fuga, eveniet vero vitae itaque, dicta fugit expedita! Soluta praesentium magni enim eius fugit!',
    )
    this.addToolTip(
      this.getObjectByName('biogasgrundriss'),
      'Gardenbed',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia dolores sed libero nam quaerat, aperiam perspiciatis fuga, eveniet vero vitae itaque, dicta fugit expedita! Soluta praesentium magni enim eius fugit!',
    )
  }
}
