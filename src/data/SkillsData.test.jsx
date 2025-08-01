import { describe, it, expect } from 'vitest'
import { SkillsData } from './SkillsData.jsx'

describe('SkillsData', () => {
  it('should be an array', () => {
    expect(Array.isArray(SkillsData)).toBe(true)
  })

  it('should not be empty', () => {
    expect(SkillsData.length).toBeGreaterThan(0)
  })

  it('each skill should have required properties', () => {
    SkillsData.forEach((skill, index) => {
      expect(skill).toHaveProperty('name')
      expect(skill).toHaveProperty('icon')
      expect(typeof skill.name).toBe('string')
      expect(skill.name.length).toBeGreaterThan(0)
      expect(skill.icon).toBeDefined()
    })
  })

  it('should contain expected skills', () => {
    const skillNames = SkillsData.map(skill => skill.name)
    
    // Check for some key skills that should be present
    expect(skillNames).toContain('Python')
    expect(skillNames).toContain('React')
    expect(skillNames).toContain('JavaScript')
    expect(skillNames).toContain('Java')
    expect(skillNames).toContain('C++')
  })

  it('should have unique skill names', () => {
    const skillNames = SkillsData.map(skill => skill.name)
    const uniqueNames = new Set(skillNames)
    expect(uniqueNames.size).toBe(skillNames.length)
  })

  it('icons should be React elements', () => {
    SkillsData.forEach(skill => {
      expect(skill.icon).toBeDefined()
      // The icon should be a React element (object with type property)
      expect(typeof skill.icon).toBe('object')
    })
  })

  it('should have proper data structure for each skill', () => {
    SkillsData.forEach(skill => {
      // Check that each skill has the correct structure
      expect(skill).toEqual(
        expect.objectContaining({
          name: expect.any(String),
          icon: expect.any(Object)
        })
      )
    })
  })
}) 