import BioVision from './BioVision'
import DomeVision from './DomeVision'
import type VisionType from './VisionType'

interface Visions {
  id: string
  name: string
  class: new () => VisionType
}

// don't forget to update VisionManager.spec.ts test cases after adding a new Vision
export const possibleVisions: Visions[] = [
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
