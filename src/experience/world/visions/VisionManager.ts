import { possibleVisions } from './possibleVisions'

export class VisionManager {
  static getVisionById(visionId: string): any | null {
    const vision = possibleVisions.find(v => v.id === visionId)
    return vision ? vision.class : null
  }

  static isPathPossible(currentPath: string, answer: 'yes' | 'no') {
    const nextPosition = currentPath.length
    const answerMapped = answer === 'yes' ? '1' : '0'
    // const possibleOptions: string[] = []

    for (const vision of possibleVisions) {
      if (vision.id.startsWith(currentPath)) {
        if (vision.id.at(nextPosition) === answerMapped) {
          return true // stops execution
        }
      }
    }

    return false
  }
}
