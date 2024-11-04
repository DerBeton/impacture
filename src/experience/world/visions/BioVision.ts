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
import scene2 from '@/assets/models/gltf/scenes/bio/Decoration.glb'
// @ts-ignore
import scene3 from '@/assets/models/gltf/scenes/bio/TradingHouse.glb'
// @ts-ignore
import scene4 from '@/assets/models/gltf/scenes/bio/Ground.glb'
// @ts-ignore
import scene5 from '@/assets/models/gltf/scenes/bio/Dog.glb'
// @ts-ignore
import scene6 from '@/assets/models/gltf/scenes/bio/Antenna.glb'

import Housetexture from '@/assets/images/haus_baked.png'
import Decorationtexture from '@/assets/images/decoration_baked.png'
import TradingHousetexture from '@/assets/images/tradingHouse_baked.jpg'
import Groundtexture from '@/assets/images/ground_baked.jpg'
import Dogtexture from '@/assets/images/dog_baked.png'
import Antennatexture from '@/assets/images/antenna_baked.png'

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

    this.addToolTip(
      this.getObjectByName('Antenna'),
      'Stromnetz und Kommunikation',
      'In dieser neuen Gesellschaft achtet jeder auf den anderen. Große Konzerne gibt es nicht mehr, stattdessen organisieren sich die Menschen in selbstverwalteten Gemeinschaften, die gemeinsam und nachhaltig für das Gemeinwohl arbeiten. Häuser sind nicht nur private Rückzugsorte, sondern dienen dem Allgemeinwohl. Das Dach ist mit einem Stromnetz verbunden, das auf erneuerbaren Energien basiert und die Häuser untereinander vernetzt. So kann bei Energieengpässen an einem Hausstand sofort unterstützt werden. Nachhaltigkeit, Transparenz und Verantwortung stehen im Mittelpunkt – jedes Haus ist ein aktiver Teil des Stromnetzwerks der Gemeinschaft und trägt zur Stabilität des gesamten Viertels bei.',
    )
    this.addToolTip(
      this.getObjectByName('Patchworkblau'),
      'Patchwork',
      'Da kaum noch neue Materialien produziert werden, weil sie zu viel Abfall erzeugen, entstand ein neuer Umgang mit Reparaturen. Schäden treten natürlich trotzdem auf, doch zum Glück kann der Abfall der vergangenen Generationen von den sogenannten „Waste-Fields“ wiederverwendet werden, um Dinge zu reparieren. Das führt zu einem kunterbunten Mix an Farben und Materialien und fördert die Kreativität – denn jeder Patch erzählt eine Geschichte und trägt zum einzigartigen Erscheinungsbild jedes Haushalts bei.',
    )
    this.addToolTip(
      this.getObjectByName('Cube039'),
      'Vertical Farming',
      'Um genügend Platz für Salat anzubauen, haben sich die Bewohner dieses Hauses für Vertical Gardening entschieden. Die Fassade ist mit Salat bepflanzt, und das Konzept der „grünen Häuser“ hat sich längst als Standard durchgesetzt. Auch die Nachbarn tragen dazu bei: Rechts blühen farbenprächtige Blumen, die nicht nur das Haus verschönern, sondern auch ein Paradies für Bienen schaffen. Es ist beeindruckend, wie viel Salat auf nur einer vertikalen Fläche wächst – eine Lösung, die Platz spart und gleichzeitig der Natur Raum bietet.',
    )
    this.addToolTip(
      this.getObjectByName('biogasgrundriss'),
      'Biogas',
      'Ein kleines, unscheinbares Gerät im Garten oder in einem kleinen Schuppen: das Biogas-Modul. Dieses kompakte Gerät kann aus organischen Abfällen – etwa Gemüse- und Obstschalen oder anderen biologischen Abfällen aus dem Haushalt – Biogas erzeugen. Dieses Gas wird für das Kochen und für die Heizung verwendet. Einige weiterentwickelte Modelle verfügen sogar über eine Funktion zur Wasseraufbereitung und liefern sauberes Trinkwasser, das aus den Abfällen gewonnen wird. Jedes Haus trägt somit aktiv zur Energieerzeugung bei und reduziert Abfall, was die Eigenversorgung und Nachhaltigkeit in der Nachbarschaft unterstützt.',
    )
    this.addToolTip(
      this.getObjectByName('Solarpanel'),
      'Solaranlagen',
      '„Weg von Atomkraftwerken, hin zur Natur“ lautet das Motto der neuen Ära. Strom wird fast ausschließlich durch Solarenergie gewonnen, aber dieser reicht nicht für alle Bedürfnisse. Der technologische Fortschritt ist dadurch ins Stocken geraten, und Stromfresser wie AGI (Artificial General Intelligence) sind ohne größere Stromquellen undenkbar geworden. Diese Entwicklung wird jedoch kaum bedauert, da die Generationen zuvor den Wunsch nach solchen Technologien ohnehin ablehnten. Stattdessen setzt die Gesellschaft auf minimalistischen Komfort und nachhaltige, naturfreundliche Lösungen.',
    )
    this.addToolTip(
      this.getObjectByName('TradingHouse'),
      'Tauschbox',
      '"Sharing is Caring" lautet das Motto. Nach der Wirtschaftskrise und dem Konsumcrash hörten die Menschen auf, ständig neue Dinge zu kaufen. Es wird kaum noch etwas neu produziert. Stattdessen tauschen die Menschen, um an das zu gelangen, was sie benötigen. Dinge, die nicht mehr gebraucht werden, kommen in die Tauschbox – und innerhalb von Tagen finden sie ein neues Zuhause. Auch für den Lebensmitteltausch mit den Nachbarn ist er sehr praktisch und sorgt dafür, dass Lebensmittel im Viertel nicht verschwendet werden.',
    )
    this.addToolTip(
      this.getObjectByName('Gardenbedstone1'),
      'Gartenbeet',
      'Das ist der Gemüse- und Obstgarten des Hauses. Die Nachbarschaft hat sich darauf geeinigt, dass hier Kürbisse, Äpfel und Salat angebaut werden. Zusammen mit dem restlichen Quartier kann so der Nahrungsbedarf aller Bewohner gedeckt werden. Auf diese Weise muss keine Nahrung importiert werden, und die Gemeinschaft kann autark leben.',
    )
  }
}
