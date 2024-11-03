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
