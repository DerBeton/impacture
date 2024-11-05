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
// @ts-ignore
import scene12 from '@/assets/models/gltf/scenes/dome/Dome.glb'
// @ts-ignore
import scene13 from '@/assets/models/gltf/scenes/dome/Lift.glb'

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
import Dometexture from '@/assets/images/dome/dome.png'
import Lifttexture from '@/assets/images/dome/lift.png'

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
const RESOURCE_NAME12 = 'vision25'
const RESOURCE_NAME13 = 'vision27'

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
const RESOURCE_DOMETEXTURE = 'vision24'
const RESOURCE_LIFTTEXTURE = 'vision26'

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
    name: RESOURCE_NAME12,
    type: 'gltfModel',
    path: [scene12],
  },
  {
    name: RESOURCE_NAME13,
    type: 'gltfModel',
    path: [scene13],
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
  {
    name: RESOURCE_DOMETEXTURE,
    type: 'texture',
    path: [Dometexture],
  },
  {
    name: RESOURCE_LIFTTEXTURE,
    type: 'texture',
    path: [Lifttexture],
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
    const gltf12 = this.resources.items[RESOURCE_NAME12] as GLTF
    const gltf13 = this.resources.items[RESOURCE_NAME13] as GLTF

    //Haus
    const bakedMeshHouse = gltf.scene.children.find(
      child => child.name === 'Haus',
    )

    const meshHouse = this.resources.items[RESOURCE_HOUSETEXTURE]
    meshHouse.flipY = false
    meshHouse.colorSpace = THREE.SRGBColorSpace

    // @ts-ignore
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

    // @ts-ignore
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

    // @ts-ignore
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

    // @ts-ignore
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

    // @ts-ignore
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

    // @ts-ignore
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

    // @ts-ignore
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

    // @ts-ignore
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

    // @ts-ignore
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

    // @ts-ignore
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

    // @ts-ignore
    bakedMeshContainer.material = new THREE.MeshBasicMaterial({
      map: meshContainer,
    })
    this.scene.add(gltf11.scene)

    //Dome
    const bakedMeshDome = gltf12.scene.children.find(
      child => child.name === 'Sphere',
    )

    const meshDome = this.resources.items[RESOURCE_DOMETEXTURE]
    meshDome.flipY = false
    meshDome.colorSpace = THREE.SRGBColorSpace

    // @ts-ignore
    bakedMeshDome.material = new THREE.MeshBasicMaterial({
      map: meshDome,
    })
    this.scene.add(gltf12.scene)

    //Lift
    const bakedMeshlift = gltf13.scene.children.find(
      child => child.name === 'Lift',
    )

    const meshlift = this.resources.items[RESOURCE_LIFTTEXTURE]
    meshlift.flipY = false
    meshlift.colorSpace = THREE.SRGBColorSpace

    // @ts-ignore
    bakedMeshlift.material = new THREE.MeshBasicMaterial({
      map: meshlift,
    })
    this.scene.add(gltf13.scene)

    this.addToolTips()
  }

  private addToolTips() {
    this.addToolTip(
      this.getObjectByName('Lampen'),
      'Lampe',
      'Licht ist unerlässlich, um nicht in völliger Dunkelheit zu leben. Diese Lampen wurden notfallmässig installiert, da es in den letzten Jahren durch den immer dichter werdenden Smog zunehmend dunkler geworden ist. Aufgrund eingeschränkter Transportmöglichkeiten sind Materialien knapp, und die Lampen bestehen oft aus recycelten oder lokal verfügbaren Teilen.',
      new THREE.Vector3(0, -0.5, 0),
    )

    this.addToolTip(
      this.getObjectByName('Biene'),
      'Bienenstock',
      'Dieses Haus verfügt, wie viele andere auch, über eine unabhängige, private AGI (Künstliche Allgemeine Intelligenz), die nicht nur das Haus, sondern auch das gesamte darin enthaltene Ökosystem steuert. Ein Beispiel dafür sind die Roboterbienen, die dafür sorgen, dass Pflanzen bestäubt werden und die Natur innerhalb der Kuppel überlebt – ironischerweise eine künstliche Nachahmung der Natur, da echte Bienen ausgestorben sind. Die AGI ist jedoch ein enormer Stromverbraucher, doch ohne sie würde das Ökosystem kollabieren. Und ja, diese AGI ist ein riesiger Stromfresser. Aber ohne diese AGI würde alles kollabieren. Strom ist essenziell!',
      new THREE.Vector3(0, 0, 0),
    )
    this.addToolTip(
      this.getObjectByName('Wasserfilter'),
      'Wasserfilter',
      'Regenwasser ist durch die starke Umweltverschmutzung unbrauchbar geworden. Dieser Wasserfilter entzieht dem Bodenwasser, reinigt es und macht es für den Haushalt nutzbar. Zusätzlich ist ein Sauerstofffilter integriert, der die Atemluft im Haus ebenfalls von Schadstoffen befreit. Diese Systeme sind unverzichtbar geworden, da die Außenwelt ungesunde Luft und verseuchtes Wasser bereithält.',
      new THREE.Vector3(0, 0, 0),
    )
    this.addToolTip(
      this.getObjectByName('Tisch'),
      'Bank mit Tisch',
      'Gemeinschaft hat hier einen hohen Stellenwert. Jeden Abend versammeln sich die Bewohner*innen zum gemeinsamen Abendessen an diesem Tisch. Die AGI reguliert die Temperatur und sorgt für ein angenehmes Raumklima, sodass auch bei extremen Außenbedingungen ein gemütliches, ruhiges Zusammensein möglich ist. Solche gemeinschaftlichen Zusammenkünfte sind besonders wichtig geworden, da das Leben außerhalb der Kuppel isoliert und feindlich wirkt, wodurch der soziale Zusammenhalt innerhalb des Hauses noch mehr an Bedeutung gewinnt.',
      new THREE.Vector3(0, 0, 0),
    )

    this.addToolTip(
      this.getObjectByName('Lift'),
      'Lift',
      'Dieser Lift führt die Bewohner*innen des Hauses hinunter zu einem unterirdischen Zugnetz, das für den Transport zwischen Wohnbereichen und Arbeitsstätten verwendet wird. Da die Außenluft aufgrund des Smogs so stark belastet ist, möchte man sie um jeden Preis vermeiden. Die meisten Menschen arbeiten heute in Kohlekraftwerken, da diese als eine der letzten Energiequellen genug Strom für die energiehungrige AGI liefern können. Die starke Luftverschmutzung durch die Kohlekraftwerke hat Solarplatten fast nutzlos gemacht, da kaum genug Sonnenlicht durchdringt, um Solarenergie effizient zu nutzen.',
      new THREE.Vector3(0, 0, 0),
    )
    this.addToolTip(
      this.getObjectByName('Container'),
      'Container',
      'Als die Schutzkuppeln eingeführt wurden, konnte sich nicht jede*r ein eigenes Zuhause innerhalb der Kuppel leisten. Die Eigentümer*innen dieses Hauses schauten, dass vor der Installation mehr Platz geschafft werden konnte, durch eErweiterungen des Hauses für ihre Verwandten, damit alle normal leben können. Da es nach der Installation der Kuppel immer schwieriger wurde, größere Baumaterialien hereinzubringen, war der Container eine improvisierte Lösung, die die Bewohner*innen selbst für einen Cousin gebaut haben. Es war ein echtes Gemeinschaftsprojekt und zeigt, wie Familien zusammenrücken, um die schwierigen Lebensumstände gemeinsam zu bewältigen.',
      new THREE.Vector3(0, 0, 0),
    )

    this.addToolTip(
      this.getObjectByName('Sphere'),
      'Kuppel',
      'Die Kuppel wurde vor etwa 30 Jahren eingeführt, als die Luftverschmutzung so extrem wurde, dass das Leben ausserhalb der Kuppel fast unmöglich war. Die Einführung der AGI benötigte so viel Strom, dass man auf schädliche Energiequellen wie Kohle zurückgriff, da kaum noch Atomkraftwerke verfügbar waren und die erneuerbaren Energien der Belastung nicht standhalten konnten. Durch die massive Luftverschmutzung wurde es unverzichtbar, Kuppeln zum Schutz der Menschen zu errichten. Diese Kuppeln bieten einen abgeschirmten Raum, der die giftige Außenwelt fernhält und eine kontrollierte, lebensfreundliche und sehr angenehme Umgebung ermöglicht.',
      new THREE.Vector3(0, 0, 0),
    )
  }
}
