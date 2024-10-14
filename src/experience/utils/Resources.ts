import * as THREE from 'three'
import EventEmitter from './EventEmitter'
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js'

export interface ResourceItem {
  name: string
  type: 'cubeTexture' | 'texture' | 'gltfModel' | string
  path: string[]
}

export default class Resources extends EventEmitter {
  sources: ResourceItem[]
  items: { [key: string]: any }
  toLoad: number
  loaded: number
  loaders!: {
    gltfLoader: GLTFLoader
    textureLoader: THREE.TextureLoader
    cubeTextureLoader: THREE.CubeTextureLoader
    // dracoLoader: DRACOLoader
  }

  constructor(sources: ResourceItem[]) {
    super()

    this.sources = sources

    // @ts-ignore
    this.items = {}
    this.toLoad = this.sources.length
    this.loaded = 0

    this.setLoaders()
    this.startLoading()
  }

  private setLoaders() {
    // @ts-ignore
    this.loaders = {}
    this.loaders.gltfLoader = new GLTFLoader()
    this.loaders.textureLoader = new THREE.TextureLoader()
    this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()
    // this.loaders.dracoLoader = new DRACOLoader()
  }

  private startLoading() {
    // Load each source
    for (const source of this.sources) {
      if (source.type === 'gltfModel') {
        this.loaders.gltfLoader.load(source.path[0], file => {
          // console.log(source, file)
          this.sourceLoaded(source, file)
        })
      } else if (source.type === 'texture') {
        this.loaders.textureLoader.load(source.path[0], file => {
          console.log(source, file)
        })
      } else if (source.type === 'cubeTexture') {
        this.loaders.cubeTextureLoader.load(source.path, file => {
          console.log(source, file)
        })
      }
    }
  }

  private sourceLoaded(source: ResourceItem, file: any) {
    this.items[source.name] = file

    this.loaded++

    if (this.loaded === this.toLoad) {
      this.trigger('ready')
    }
  }
}
