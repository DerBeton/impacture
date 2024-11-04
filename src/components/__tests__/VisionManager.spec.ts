import { VisionManager } from '@/experience/world/visions/VisionManager'
import type VisionType from '@/experience/world/visions/VisionType'
import { describe, it, expect, vi } from 'vitest'

// Mock `possibleVisions` for the test (because of three.js in other visions)
vi.mock('@/experience/world/visions/possibleVisions', () => {
  class MockBioVision implements VisionType {
    onResourcesLoaded(): void {}
  }
  class MockDomeVision implements VisionType {
    onResourcesLoaded(): void {}
  }

  const mockVisions = [
    { id: '0010', name: 'Bio Vision', class: MockBioVision },
    { id: '1001', name: 'Dome Vision', class: MockDomeVision },
  ]

  return { possibleVisions: mockVisions }
})

describe('VisionManager', () => {
  it('isPathPossible', () => {
    expect(VisionManager.isPathPossible('', 'yes')).equals(true)
    expect(VisionManager.isPathPossible('', 'no')).equals(true)
    expect(VisionManager.isPathPossible('0', 'yes')).equals(false)
    expect(VisionManager.isPathPossible('0', 'no')).equals(true)
    expect(VisionManager.isPathPossible('01', 'yes')).equals(false)
  })
})
