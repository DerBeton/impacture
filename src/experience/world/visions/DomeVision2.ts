import * as THREE from 'three'
import type { Scene } from 'three'
import Experience from '@/experience/Experience'
import type Resources from '@/experience/utils/Resources'
import type { GLTF } from 'three/examples/jsm/Addons.js'
import Tooltip from '../Tooltip'
import type { ResourceItem } from '@/experience/utils/Resources'

import VisionLoader from './VisionLoader'

// @ts-ignore
import scene from '@/assets/models/gltf/scenes/dome/dome_scene_2.glb'
import houseTexture from '@/assets/images/dome/house.jpg'
import decorationTexture from '@/assets/images/dome/decoration.png'
import baseTexture from '@/assets/images/dome/base.png'
import anbauHausTexture from '@/assets/images/dome/anbauHaus.png'
import wassertankTexture from '@/assets/images/dome/wassertank.png'
import tischTexture from '@/assets/images/dome/tisch.png'
import lampenTexture from '@/assets/images/dome/lampen.png'
import gemuesebaumTexture from '@/assets/images/dome/gemuseBaum.png'
import bienenTexture from '@/assets/images/dome/biene.png'
import beetTexture from '@/assets/images/dome/beet.png'
import containerTexture from '@/assets/images/dome/container.png'
import domeTexture from '@/assets/images/dome/dome.png'
import liftTexture from '@/assets/images/dome/lift.png'

const RESOURCE_NAME = 'vision'

const sources: ResourceItem[] = [
  {
    name: RESOURCE_NAME,
    type: 'gltfModel',
    path: [scene],
  },
  {
    name: 'houseTexture',
    type: 'texture',
    path: [houseTexture],
  },
  {
    name: 'decorationTexture',
    type: 'texture',
    path: [decorationTexture],
  },
  {
    name: 'baseTexture',
    type: 'texture',
    path: [baseTexture],
  },
  {
    name: 'anbauHausTexture',
    type: 'texture',
    path: [anbauHausTexture],
  },
  {
    name: 'wassertankTexture',
    type: 'texture',
    path: [wassertankTexture],
  },
  {
    name: 'tischTexture',
    type: 'texture',
    path: [tischTexture],
  },
  {
    name: 'lampenTexture',
    type: 'texture',
    path: [lampenTexture],
  },
  {
    name: 'gemuesebaumTexture',
    type: 'texture',
    path: [gemuesebaumTexture],
  },
  {
    name: 'bienenTexture',
    type: 'texture',
    path: [bienenTexture],
  },
  {
    name: 'beetTexture',
    type: 'texture',
    path: [beetTexture],
  },
  {
    name: 'containerTexture',
    type: 'texture',
    path: [containerTexture],
  },
  {
    name: 'domeTexture',
    type: 'texture',
    path: [domeTexture],
  },
  {
    name: 'liftTexture',
    type: 'texture',
    path: [liftTexture],
  },
]

export default class DomeVision2 extends VisionLoader {
  resource?: GLTF

  constructor() {
    super(RESOURCE_NAME)

    this.setSources(sources)
  }

  public onReady(): void {
    this.setBakedMaterials()
    this.addToolTips()
  }

  private setBakedMaterials() {
    this.setBakedMaterial(
      this.getObjectByName('Haus'),
      this.resources.items['houseTexture'],
    )
    this.setBakedMaterial(
      this.getObjectByName('Decoration'),
      this.resources.items['decorationTexture'],
    )
    this.setBakedMaterial(
      this.getObjectByName('Base001'),
      this.resources.items['baseTexture'],
    )
    this.setBakedMaterial(
      this.getObjectByName('AnbauHaus'),
      this.resources.items['anbauHausTexture'],
    )
    this.setBakedMaterial(
      this.getObjectByName('Wasserfilter'),
      this.resources.items['wassertankTexture'],
    )
    this.setBakedMaterial(
      this.getObjectByName('Tisch'),
      this.resources.items['tischTexture'],
    )
    this.setBakedMaterial(
      this.getObjectByName('Lampen'),
      this.resources.items['lampenTexture'],
    )
    this.setBakedMaterial(
      this.getObjectByName('GemueseBaum'),
      this.resources.items['gemuesebaumTexture'],
    )
    this.setBakedMaterial(
      this.getObjectByName('Biene'),
      this.resources.items['bienenTexture'],
    )
    this.setBakedMaterial(
      this.getObjectByName('Beet'),
      this.resources.items['beetTexture'],
    )
    this.setBakedMaterial(
      this.getObjectByName('Container'),
      this.resources.items['containerTexture'],
    )
    this.setBakedMaterial(
      this.getObjectByName('Sphere'),
      this.resources.items['domeTexture'],
    )
    this.setBakedMaterial(
      this.getObjectByName('Lift'),
      this.resources.items['liftTexture'],
    )
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
