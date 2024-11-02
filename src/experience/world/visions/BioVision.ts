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
      'Stromnetz und Kommunikation',
      'Die Energie wird von jedem Wohnquartier selbst produziert. Der Wirtschaftskollaps hat dazu geführt, dass alle aufeinander acht geben, da viele in die Armut getrieben wurden. Deshalb wird auch der Strom mit den Nachbarn geteilt. So erhöht sich ausserdem die Versorgungssicherheit der einzelnen Haushalte.',
    )
    this.addToolTip(
      this.getObjectByName('Patchworkblau'),
      'Patchwork',
      'Da die Erzeugung von klimaschädlichen Strom verboten wurde, musste auf erneuerbare Energien umgestiegen werden. Der nachhaltige Umgang mit Ressourcen wurde plötzlich sehr wichtig. Rohstoffe stehen nicht mehr unerschöpflich zur Verfügung. Deshalb haben die Bewohner*innen angefangen, alle Baustoffe aus Wastefields wiederzuverwenden, um ihre Gebäude und Geräte zu reparieren. Das Wissen wird untereinander getauscht und Pläne zu Maschinen stehen frei zugänglich (Open Source) zur Verfügung.',
    )
    this.addToolTip(
      this.getObjectByName('Cube039'),
      'Vertical Farming',
      'Die Wirtschaftskrise hat in der Gesellschaft zu einem umdenken geführt. Es wurde Vielen bewusst, dass wir abhängig von Grosskonzernen gewesen sind und alleine nicht mehr weit kommen würden. Deshalb begannen die Leute ihre eigene Nahrung anzubauen und mit Communities zu teilen. Für den Anbau wird jeder verfügbare Platz verwendet.',
    )
    this.addToolTip(
      this.getObjectByName('biogasgrundriss'),
      'Biogas',
      'Eine Art der Stromproduktion sind Biogasanlagen. Dort werden kompostierbare Dinge wie alte Lebensmittel und Abfälle aus dem Garten in sauberen Strom umgewandelt. Selbst das eigene Abwassersystem ist dort angeschlossen. So kann auch bei schlechtem Wetter Strom produziert werden.',
    )
    this.addToolTip(
      this.getObjectByName('Solarpanel'),
      'Solaranlagen',
      'Die am weitesten verbreitete Art um Strom zu gewinnen, ist die Verwendung von Solarmodulen. Durch Jahzehntelanger Forschung in diesem Bereich, liegt der Wirkungsgrad mittlerweile bei knapp 60%. Sie sind deshalb an sehr vielen Orten anzutreffen.',
    )
    this.addToolTip(
      this.getObjectByName('TradingHouse'),
      'Tauschbox',
      '"Sharing is Caring" lautet das Motto. Deshalb hat Jeder und Jede eine Art Schrank vor dem Haus. Darin werden nicht mehr benötigte Gegenstände, oder selbst angebaute Lebensmittel zur Verfügung gestellt. Wer etwas benötigt, nimmt sich etwas daraus und legt einen Gegenstand zum Tausch zurück.',
    )
    this.addToolTip(
      this.getObjectByName('Gardenbedstone1'),
      'Gartenbeet',
      'In diesem Beet wachsen aktuell Kürbisse. Da die Familie, die hier lebt, nicht alle für sich selbst benötigt, wird ein Teil davon über die Tauschbox weitergegeben. Es findet sich bestimmt Jemand, der ein paar Karotten zum Tauschen hat.',
    )
  }
}
