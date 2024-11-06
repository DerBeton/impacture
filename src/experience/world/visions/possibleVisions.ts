import BioVision from './BioVision'
import BioVision2 from './BioVision2'
import DomeVision from './DomeVision'
import DomeVision2 from './DomeVision2'
import type VisionType from './VisionType'

interface Visions {
  id: string
  name: string
  class: new () => VisionType
}

export const possibleVisions: Visions[] = [
  {
    id: '0000',
    name: 'Bio Vision 2',
    class: BioVision2,
  },
  {
    id: '0010',
    name: 'Bio Vision',
    class: BioVision,
  },
  {
    id: '1001',
    name: 'Dome Vision',
    class: DomeVision,
  },
  {
    id: '0001',
    name: 'Dome Vision 2',
    class: DomeVision2,
  },
]
