import BioVision from './BioVision'
import DomeVision from './DomeVision'
import type VisionType from './VisionType'

interface Vision {
  id: string
  name: string
  class: new () => VisionType
}

export const possibleVisions: Vision[] = [
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
]
