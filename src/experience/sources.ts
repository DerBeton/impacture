// @ts-ignore
import treeModel from '@/assets/models/gltf/tree.glb'
// @ts-ignore
import houseModel from '@/assets/models/gltf/House_Testing.glb'
import type { ResourceItem } from './utils/Resources'

const resources: ResourceItem[] = [
  {
    name: 'treeModel',
    type: 'gltfModel',
    path: [treeModel],
  },
  {
    name: 'houseModel',
    type: 'gltfModel',
    path: [houseModel],
  },
]

export default resources
