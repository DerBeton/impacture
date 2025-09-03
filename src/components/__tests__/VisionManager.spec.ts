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

describe('VisionManager.isPathPossible', () => {
  it('should return true for both yes/no at the root if vision start with 0 and 1', () => {
    expect(VisionManager.isPathPossible('', 'yes')).toBe(true) // 1001
    expect(VisionManager.isPathPossible('', 'no')).toBe(true)  // 0010
  })

  it('should allow continuation if at least one vision matches the next step', () => {
    expect(VisionManager.isPathPossible('0', 'yes')).toBe(false)  // no match
    expect(VisionManager.isPathPossible('0', 'no')).toBe(true)  // matches 0010
  })

  it('should return false if no vision continues this path', () => {
    expect(VisionManager.isPathPossible('1', 'yes')).toBe(false) // no vision 11...
    expect(VisionManager.isPathPossible('01', 'yes')).toBe(false) // dead end
  })
})
