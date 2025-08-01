import { describe, it, expect } from 'vitest'
import { MLData, FSData } from './WorkData.jsx'

describe('WorkData', () => {
  describe('MLData', () => {
    it('should be an array', () => {
      expect(Array.isArray(MLData)).toBe(true)
    })

    it('should not be empty', () => {
      expect(MLData.length).toBeGreaterThan(0)
    })

    it('each project should have required properties', () => {
      MLData.forEach((project, index) => {
        expect(project).toHaveProperty('title')
        expect(project).toHaveProperty('desc')
        expect(project).toHaveProperty('tech')
        expect(project).toHaveProperty('gitlink')
        expect(project).toHaveProperty('site')
        
        expect(typeof project.title).toBe('string')
        expect(typeof project.desc).toBe('string')
        expect(Array.isArray(project.tech)).toBe(true)
        expect(typeof project.gitlink).toBe('string')
        expect(typeof project.site).toBe('string')
      })
    })

    it('should contain expected ML projects', () => {
      const projectTitles = MLData.map(project => project.title)
      
      expect(projectTitles).toContain('LexicaForge')
      expect(projectTitles).toContain('HealthNav')
      expect(projectTitles).toContain('Interviewer')
    })

    it('tech arrays should not be empty', () => {
      MLData.forEach(project => {
        expect(project.tech.length).toBeGreaterThan(0)
      })
    })

    it('should have valid GitHub links', () => {
      MLData.forEach(project => {
        expect(project.gitlink).toMatch(/github\.com/)
      })
    })
  })

  describe('FSData', () => {
    it('should be an array', () => {
      expect(Array.isArray(FSData)).toBe(true)
    })

    it('should not be empty', () => {
      expect(FSData.length).toBeGreaterThan(0)
    })

    it('each project should have required properties', () => {
      FSData.forEach((project, index) => {
        expect(project).toHaveProperty('title')
        expect(project).toHaveProperty('desc')
        expect(project).toHaveProperty('tech')
        expect(project).toHaveProperty('gitlink')
        expect(project).toHaveProperty('site')
        
        expect(typeof project.title).toBe('string')
        expect(typeof project.desc).toBe('string')
        expect(Array.isArray(project.tech)).toBe(true)
        expect(typeof project.gitlink).toBe('string')
        expect(typeof project.site).toBe('string')
      })
    })

    it('should contain expected FS projects', () => {
      const projectTitles = FSData.map(project => project.title)
      
      expect(projectTitles).toContain('Certamen')
      expect(projectTitles).toContain('Job Scraper')
    })

    it('tech arrays should not be empty', () => {
      FSData.forEach(project => {
        expect(project.tech.length).toBeGreaterThan(0)
      })
    })

    it('should have valid GitHub links', () => {
      FSData.forEach(project => {
        expect(project.gitlink).toMatch(/github\.com/)
      })
    })
  })

  describe('Data Integrity', () => {
    it('all projects should have unique titles', () => {
      const allProjects = [...MLData, ...FSData]
      const titles = allProjects.map(project => project.title)
      const uniqueTitles = new Set(titles)
      expect(uniqueTitles.size).toBe(titles.length)
    })

    it('all projects should have descriptions', () => {
      const allProjects = [...MLData, ...FSData]
      allProjects.forEach(project => {
        expect(project.desc.length).toBeGreaterThan(10) // Reasonable description length
      })
    })

    it('all tech stacks should contain valid technologies', () => {
      const allProjects = [...MLData, ...FSData]
      allProjects.forEach(project => {
        project.tech.forEach(tech => {
          expect(typeof tech).toBe('string')
          expect(tech.length).toBeGreaterThan(0)
        })
      })
    })
  })
}) 