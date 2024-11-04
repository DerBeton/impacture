import BioVision from './BioVision'
import type VisionType from './VisionType'

interface Visions {
  id: string
  name: string
  class: new () => VisionType
}

export const possibleVision: Visions[] = [
  {
    id: '0010',
    name: 'Bio Vision',
    class: BioVision,
  },
]
