import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Skills from './Skills.jsx'

// Mock the CSS import
vi.mock('../styles/Skills.css', () => ({}), { virtual: true })

// Mock the SkillsData
vi.mock('../data/SkillsData.jsx', () => ({
  SkillsData: [
    {
      name: 'Python',
      icon: '🐍'
    },
    {
      name: 'React',
      icon: '⚛️'
    },
    {
      name: 'JavaScript',
      icon: '📜'
    }
  ]
}))

describe('Skills Component', () => {
  it('renders skills section with correct structure', () => {
    render(<Skills />)
    
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByRole('region', { hidden: true })).toHaveClass('skills')
    expect(screen.getByRole('region', { hidden: true })).toHaveAttribute('id', 'skills')
  })

  it('renders all skills from data', () => {
    render(<Skills />)
    
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
  })

  it('renders skills with proper styling classes', () => {
    render(<Skills />)
    
    const skillsContainer = document.querySelector('.skills-container')
    expect(skillsContainer).toBeInTheDocument()
    
    const skillsGrid = document.querySelector('.skills-grid')
    expect(skillsGrid).toBeInTheDocument()
  })

  it('renders skills with icons', () => {
    render(<Skills />)
    
    const skillItems = document.querySelectorAll('.skill-item')
    expect(skillItems.length).toBeGreaterThan(0)
    
    // Check that each skill has an icon
    skillItems.forEach(item => {
      const icon = item.querySelector('.skill-icon')
      expect(icon).toBeInTheDocument()
    })
  })

  it('has proper section heading', () => {
    render(<Skills />)
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Skills')
  })

  it('renders skills in a grid layout', () => {
    render(<Skills />)
    
    const skillsGrid = document.querySelector('.skills-grid')
    expect(skillsGrid).toBeInTheDocument()
    
    // Should have multiple skill items
    const skillItems = skillsGrid.querySelectorAll('.skill-item')
    expect(skillItems.length).toBe(3) // Based on our mock data
  })

  it('each skill has name and icon', () => {
    render(<Skills />)
    
    const skillItems = document.querySelectorAll('.skill-item')
    
    skillItems.forEach((item, index) => {
      const skillNames = ['Python', 'React', 'JavaScript']
      expect(item).toHaveTextContent(skillNames[index])
      
      const icon = item.querySelector('.skill-icon')
      expect(icon).toBeInTheDocument()
    })
  })

  it('has proper accessibility structure', () => {
    render(<Skills />)
    
    const skillsSection = screen.getByRole('region', { hidden: true })
    expect(skillsSection).toHaveAttribute('id', 'skills')
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
  })
}) 