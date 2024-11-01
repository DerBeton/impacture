import * as THREE from 'three'
import type { Scene } from 'three'
import Experience from '@/experience/Experience'
import type Resources from '@/experience/utils/Resources'
import type { GLTF } from 'three/examples/jsm/Addons.js'
import Tooltip from '../Tooltip'
import type { ResourceItem } from '@/experience/utils/Resources'
// @ts-ignore
import scene from '@/assets/models/gltf/scenes/bio_scene_3.glb'
import VisionLoader from './VisionLoader'

const RESOURCE_NAME = 'vision'

const sources: ResourceItem[] = [
  {
    name: RESOURCE_NAME,
    type: 'gltfModel',
    path: [scene],
  },
]

export default class BioVision extends VisionLoader {
  resource?: GLTF

  constructor() {
    super(RESOURCE_NAME)

    this.setSources(sources)
  }

  public onReady(): void {
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
