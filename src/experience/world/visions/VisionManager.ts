import { possibleVision } from './possibleVisions'

export class VisionManager {
  static getVisionById(visionId: string): any | null {
    const vision = possibleVision.find(v => v.id === visionId)
    return vision ? vision.class : null
  }
}
