import * as THREE from 'three'
import type { Scene } from 'three'
import Experience from '@/experience/Experience'
import type Resources from '@/experience/utils/Resources'
import type { GLTF } from 'three/examples/jsm/Addons.js'
import Tooltip from '../Tooltip'
import type { ResourceItem } from '@/experience/utils/Resources'

import VisionLoader from './VisionLoader'
// @ts-ignore
import scene from '@/assets/models/gltf/scenes/bio/Haus.glb'
// @ts-ignore
import scene2 from '@/assets/models/gltf/scenes/bio/Decoration_2.glb'
// @ts-ignore
import scene3 from '@/assets/models/gltf/scenes/bio/TradingHouse.glb'
// @ts-ignore
import scene4 from '@/assets/models/gltf/scenes/bio/Ground.glb'
// @ts-ignore
import scene5 from '@/assets/models/gltf/scenes/bio/Dog.glb'
// @ts-ignore
import scene6 from '@/assets/models/gltf/scenes/bio/Antenna.glb'
// @ts-ignore
import scene7 from '@/assets/models/gltf/scenes/bio/patchwork_others.glb'
// @ts-ignore
import scene8 from '@/assets/models/gltf/scenes/bio/patchworkBlau.glb'
// @ts-ignore
import scene9 from '@/assets/models/gltf/scenes/bio/Biogas.glb'
// @ts-ignore
import scene10 from '@/assets/models/gltf/scenes/bio/Solarpanel_others.glb'
// @ts-ignore
import scene11 from '@/assets/models/gltf/scenes/bio/Solarpanel.glb'
// @ts-ignore
import scene12 from '@/assets/models/gltf/scenes/bio/Gardenbed1.glb'
// @ts-ignore
import scene13 from '@/assets/models/gltf/scenes/bio/Gardenbed2.glb'
// @ts-ignore
import scene14 from '@/assets/models/gltf/scenes/bio/VerticalGardening.glb'

import Housetexture from '@/assets/images/haus_baked.png'
import Decorationtexture from '@/assets/images/decoration_baked_2.png'
import TradingHousetexture from '@/assets/images/tradingHouse_baked.jpg'
import Groundtexture from '@/assets/images/ground_baked.jpg'
import Dogtexture from '@/assets/images/dog_baked.png'
import Antennatexture from '@/assets/images/antenna_baked.png'
import PatchworkOthertexture from '@/assets/images/patchwork_others_baked.png'
import PatchworkBlautexture from '@/assets/images/patchworkblau_baked.png'
import Biogastexture from '@/assets/images/biogas_baked.png'
import SolarpanelOthertexture from '@/assets/images/solarpanel_others_baked.png'
import Solarpaneltexture from '@/assets/images/solarpanel_baked.png'
import Gardenbed1texture from '@/assets/images/gardenbed1_baked.png'
import Gardenbed2texture from '@/assets/images/gardenbed2_baked.png'
import VerticalGardeningtexture from '@/assets/images/verticalgardening_baked.png'

const RESOURCE_NAME = 'vision'
const RESOURCE_NAME2 = 'vision2'
const RESOURCE_NAME3 = 'vision3'
const RESOURCE_NAME4 = 'vision7'
const RESOURCE_NAME5 = 'vision9'
const RESOURCE_NAME6 = 'vision11'
const RESOURCE_NAME7 = 'vision13'
const RESOURCE_NAME8 = 'vision15'
const RESOURCE_NAME9 = 'vision17'
const RESOURCE_NAME10 = 'vision19'
const RESOURCE_NAME11 = 'vision21'
const RESOURCE_NAME12 = 'vision23'
const RESOURCE_NAME13 = 'vision25'
const RESOURCE_NAME14 = 'vision27'

const RESOURCE_HOUSETEXTURE = 'vision4'
const RESOURCE_DECORATIONTEXTURE = 'vision5'
const RESOURCE_TRADINGHOUSETEXTURE = 'vision6'
const RESOURCE_GROUNDTEXTURE = 'vision8'
const RESOURCE_DOGTEXTURE = 'vision10'
const RESOURCE_ANTENNATEXTURE = 'vision12'
const RESOURCE_PATCHWORKOTHERTEXTURE = 'vision14'
const RESOURCE_PATCHWORKBLAUTEXTURE = 'vision16'
const RESOURCE_BIOGASTEXTURE = 'vision18'
const RESOURCE_SOLARPANELOTHERSTEXTURE = 'vision20'
const RESOURCE_SOLARPANELTEXTURE = 'vision22'
const RESOURCE_GARDENBED1TEXTURE = 'vision24'
const RESOURCE_GARDENBED2TEXTURE = 'vision26'
const RESOURCE_VERTICALGARDENINGTEXTURE = 'vision28'

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
    name: RESOURCE_NAME14,
    type: 'gltfModel',
    path: [scene14],
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
  {
    name: RESOURCE_PATCHWORKOTHERTEXTURE,
    type: 'texture',
    path: [PatchworkOthertexture],
  },
  {
    name: RESOURCE_PATCHWORKBLAUTEXTURE,
    type: 'texture',
    path: [PatchworkBlautexture],
  },
  {
    name: RESOURCE_BIOGASTEXTURE,
    type: 'texture',
    path: [Biogastexture],
  },
  {
    name: RESOURCE_SOLARPANELOTHERSTEXTURE,
    type: 'texture',
    path: [SolarpanelOthertexture],
  },
  {
    name: RESOURCE_SOLARPANELTEXTURE,
    type: 'texture',
    path: [Solarpaneltexture],
  },

  {
    name: RESOURCE_GARDENBED1TEXTURE,
    type: 'texture',
    path: [Gardenbed1texture],
  },
  {
    name: RESOURCE_GARDENBED2TEXTURE,
    type: 'texture',
    path: [Gardenbed2texture],
  },
  {
    name: RESOURCE_VERTICALGARDENINGTEXTURE,
    type: 'texture',
    path: [VerticalGardeningtexture],
  },
]

export default class BioVision extends VisionLoader {
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
    const gltf14 = this.resources.items[RESOURCE_NAME14] as GLTF

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

    this.scene.add(gltf5.scene)

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
    // patchwork other

    const bakedMeshPatchworkOther = gltf7.scene.children.find(
      child => child.name === 'PatchworkOther',
    )

    const meshPatchworkOther =
      this.resources.items[RESOURCE_PATCHWORKOTHERTEXTURE]
    meshPatchworkOther.flipY = false
    meshPatchworkOther.colorSpace = THREE.SRGBColorSpace

    if (gltf7) {
      bakedMeshPatchworkOther.material = new THREE.MeshBasicMaterial({
        map: meshPatchworkOther,
      })
    }

    this.scene.add(gltf7.scene)

    // patchworkblau

    const bakedMeshPatchworkBalu = gltf8.scene.children.find(
      child => child.name === 'PatchworkBlau',
    )

    const meshPatchworkBalu =
      this.resources.items[RESOURCE_PATCHWORKBLAUTEXTURE]
    meshPatchworkBalu.flipY = false
    meshPatchworkBalu.colorSpace = THREE.SRGBColorSpace

    if (gltf8) {
      bakedMeshPatchworkBalu.material = new THREE.MeshBasicMaterial({
        map: meshPatchworkBalu,
      })
    }
    this.scene.add(gltf8.scene)
    // Biogas
    const bakedMeshBiogas = gltf9.scene.children.find(
      child => child.name === 'Biogas',
    )

    const meshBiogas = this.resources.items[RESOURCE_BIOGASTEXTURE]
    meshBiogas.flipY = false
    meshBiogas.colorSpace = THREE.SRGBColorSpace

    if (gltf9) {
      bakedMeshBiogas.material = new THREE.MeshBasicMaterial({
        map: meshBiogas,
      })
    }

    this.scene.add(gltf9.scene)

    // Solar others
    const bakedMeshSolarpanelOthers = gltf10.scene.children.find(
      child => child.name === 'SolarpanelOther',
    )

    const meshSolarpanelOthers =
      this.resources.items[RESOURCE_SOLARPANELOTHERSTEXTURE]
    meshSolarpanelOthers.flipY = false
    meshSolarpanelOthers.colorSpace = THREE.SRGBColorSpace

    if (gltf10) {
      bakedMeshSolarpanelOthers.material = new THREE.MeshBasicMaterial({
        map: meshSolarpanelOthers,
      })
    }

    this.scene.add(gltf10.scene)

    // Solar
    const bakedMeshSolarpanel = gltf11.scene.children.find(
      child => child.name === 'Solarpanel',
    )

    const meshSolarpanel = this.resources.items[RESOURCE_SOLARPANELTEXTURE]
    meshSolarpanel.flipY = false
    meshSolarpanel.colorSpace = THREE.SRGBColorSpace

    if (gltf11) {
      bakedMeshSolarpanel.material = new THREE.MeshBasicMaterial({
        map: meshSolarpanel,
      })
    }

    this.scene.add(gltf11.scene)

    // Gardenbed 1
    const bakedMeshGardenbed1 = gltf12.scene.children.find(
      child => child.name === 'Gardenbed1',
    )

    const meshGardenbed1 = this.resources.items[RESOURCE_GARDENBED1TEXTURE]
    meshGardenbed1.flipY = false
    meshGardenbed1.colorSpace = THREE.SRGBColorSpace

    if (gltf12) {
      bakedMeshGardenbed1.material = new THREE.MeshBasicMaterial({
        map: meshGardenbed1,
      })
    }
    this.scene.add(gltf12.scene)

    // Gardenbed 2
    const bakedMeshGardenbed2 = gltf13.scene.children.find(
      child => child.name === 'Gardenbed2',
    )

    const meshGardenbed2 = this.resources.items[RESOURCE_GARDENBED2TEXTURE]
    meshGardenbed2.flipY = false
    meshGardenbed2.colorSpace = THREE.SRGBColorSpace

    if (gltf13) {
      bakedMeshGardenbed2.material = new THREE.MeshBasicMaterial({
        map: meshGardenbed2,
      })
    }

    this.scene.add(gltf13.scene)

    // VerticalGardening1
    const bakedMeshVerticalGardening = gltf14.scene.children.find(
      child => child.name === 'VerticalGardening',
    )

    const meshVerticalGardening =
      this.resources.items[RESOURCE_VERTICALGARDENINGTEXTURE]
    meshVerticalGardening.flipY = false
    meshVerticalGardening.colorSpace = THREE.SRGBColorSpace

    if (gltf14) {
      bakedMeshVerticalGardening.material = new THREE.MeshBasicMaterial({
        map: meshVerticalGardening,
      })
    }

    this.scene.add(gltf14.scene)

    this.addToolTip(
      this.getObjectByName('Antenna'),
      'Stromnetz und Kommunikation',
      'In dieser neuen Gesellschaft achten alle auf einander. Große Konzerne gibt es nicht mehr, stattdessen organisieren sich die Menschen in selbstverwalteten Gemeinschaften, die gemeinsam und nachhaltig für das Gemeinwohl arbeiten. Häuser sind nicht nur private Rückzugsorte, sondern dienen dem Allgemeinwohl. Das Dach ist mit einem Stromnetz verbunden, das auf erneuerbaren Energien basiert und die Häuser untereinander vernetzt. So kann bei Energieengpässen an einem Hausstand sofort unterstützt werden. Nachhaltigkeit, Transparenz und Verantwortung stehen im Mittelpunkt – jedes Haus ist ein aktiver Teil des Stromnetzwerks der Gemeinschaft und trägt zur Stabilität des gesamten Viertels bei.',
    )
    this.addToolTip(
      this.getObjectByName('PatchworkBlau'),
      'Patches',
      'Da kaum noch neue Materialien produziert werden, weil sie zu viel Abfall erzeugen, entstand ein neuer Umgang mit Reparaturen. Schäden treten natürlich trotzdem auf, doch zum Glück kann der Abfall der vergangenen Generationen von den sogenannten „Waste-Fields“ wiederverwendet werden, um Dinge zu reparieren. Das führt zu einem kunterbunten Mix an Farben und Materialien und fördert die Kreativität – denn jeder Patch erzählt eine Geschichte und trägt zum einzigartigen Erscheinungsbild jedes Haushalts bei.',
    )
    this.addToolTip(
      this.getObjectByName('VerticalGardening'),
      'Vertical Gardening',
      'Um genügend Platz für Salat anzubauen, haben sich die Bewohner*innen dieses Hauses für Vertical Gardening entschieden. Die Fassade ist mit Salat bepflanzt, und das Konzept der „grünen Häuser“ hat sich längst als Standard durchgesetzt. Auch die Nachbar*innen tragen dazu bei: Rechts blühen farbenprächtige Blumen, die nicht nur das Haus verschönern, sondern auch ein Paradies für Bienen schaffen. Jedoch ist es ist beeindruckend, wie viel Salat auf nur einer vertikalen Fläche wächst – eine Lösung, die Platz spart und gleichzeitig der Natur Raum bietet.',
    )
    this.addToolTip(
      this.getObjectByName('Biogas'),
      'Biogas-Modul',
      'Das ist das Biogas-Modul. Dieses kompakte Gerät kann aus organischen Abfällen – etwa Gemüse- und Obstschalen oder anderen biologischen Abfällen aus dem Haushalt – Biogas erzeugen. Dieses Gas wird für das Kochen und für die Heizung verwendet. Einige weiterentwickelte Modelle verfügen sogar über eine Funktion zur Wasseraufbereitung und liefern sauberes Trinkwasser, das aus den Abfällen gewonnen wird. Jedes Haus trägt somit aktiv zur Energieerzeugung bei und reduziert Abfall, was die Eigenversorgung und Nachhaltigkeit in der Nachbarschaft unterstützt.',
    )
    this.addToolTip(
      this.getObjectByName('Solarpanel'),
      'Solarpaneele',
      '„Weg von Atomkraftwerken, hin zur Natur“ lautet das Motto der neuen Ära. Strom wird fast ausschließlich durch Solarenergie gewonnen, aber dieser reicht nicht für alle Bedürfnisse. Der technologische Fortschritt ist dadurch ins Stocken geraten, und komplexe Systeme wie AGI (Artificial General Intelligence) sind ohne größere Stromquellen undenkbar geworden. Diese Entwicklung wird jedoch kaum bedauert, da die Generationen zuvor den Wunsch nach solchen Technologien ohnehin ablehnten. Stattdessen setzt die Gesellschaft auf minimalistischen Komfort und nachhaltige, naturfreundliche Lösungen.',
    )
    this.addToolTip(
      this.getObjectByName('TradingHouse'),
      'Schrank',
      'Dieser Schrank ist inzwischen ein fester Bestandteil jedes Haushalts. Nach der Wirtschaftskrise und dem Konsumcrash hörten die Menschen auf, ständig neue Dinge zu kaufen. Es wird kaum noch etwas neu produziert. Stattdessen tauschen die Menschen, um an das zu gelangen, was sie benötigen. Dinge, die nicht mehr gebraucht werden, kommen in den Schrank – und innerhalb von Tagen finden sie ein neues Zuhause. Auch für den Lebensmitteltausch mit den Nachbar*innen ist er sehr praktisch und sorgt dafür, dass Lebensmittel im Viertel nicht verschwendet werden.',
    )
    this.addToolTip(
      this.getObjectByName('Gardenbed1'),
      'Beet mit Kürbis',
      'Das ist der Gemüse- und Obstgarten des Hauses. Die Nachbarschaft hat sich darauf geeinigt, dass hier Kürbisse, Äpfel und Salat angebaut werden. Zusammen mit dem restlichen Quartier kann so der Nahrungsbedarf aller Bewohner*innen gedeckt werden. Auf diese Weise muss keine Nahrung importiert werden, und die Gemeinschaft kann autark leben.',
    )
  }
}
