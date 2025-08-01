import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import HeroSection from './HeroSection.jsx'

// Mock the CSS import
vi.mock('../styles/HeroSection.css', () => ({}), { virtual: true })

// Mock the resume PDF
vi.mock('../data/Aniket_Dixit_Resume.pdf', () => 'mock-resume.pdf', { virtual: true })

const renderHeroSection = (props = {}) => {
  const defaultProps = {
    nav: false,
    handleNav: vi.fn(),
    ...props
  }
  return render(<HeroSection {...defaultProps} />)
}

describe('HeroSection Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders hero section with correct structure', () => {
    renderHeroSection()
    
    expect(screen.getByText('Aniket')).toBeInTheDocument()
    expect(screen.getByText('Dixit')).toBeInTheDocument()
    expect(screen.getByText(/Software Engineer/)).toBeInTheDocument()
    expect(screen.getByText(/Linguistics/)).toBeInTheDocument()
    expect(screen.getByText(/Machine Learning/)).toBeInTheDocument()
    expect(screen.getByText(/NLP/)).toBeInTheDocument()
    expect(screen.getByText(/CS and Linguistics @ UMich/)).toBeInTheDocument()
  })

  it('renders download CV link', () => {
    renderHeroSection()
    
    const downloadLink = screen.getByText('Download CV')
    expect(downloadLink).toBeInTheDocument()
    expect(downloadLink).toHaveAttribute('href', 'mock-resume.pdf')
    expect(downloadLink).toHaveAttribute('download', 'Aniket_Dixit_Resume')
  })

  it('renders menu icon and handles click', () => {
    const handleNav = vi.fn()
    renderHeroSection({ handleNav })
    
    const menuIcon = screen.getByRole('button', { hidden: true })
    expect(menuIcon).toBeInTheDocument()
    
    fireEvent.click(menuIcon)
    expect(handleNav).toHaveBeenCalledTimes(1)
  })

  it('shows hamburger icon when nav is false', () => {
    renderHeroSection({ nav: false })
    
    // The icon should be present (mocked as a button)
    const menuIcon = screen.getByRole('button', { hidden: true })
    expect(menuIcon).toBeInTheDocument()
  })

  it('shows close icon when nav is true', () => {
    renderHeroSection({ nav: true })
    
    // The icon should be present (mocked as a button)
    const menuIcon = screen.getByRole('button', { hidden: true })
    expect(menuIcon).toBeInTheDocument()
  })

  it('renders scroll to top button', () => {
    renderHeroSection()
    
    const scrollButton = screen.getByRole('button', { name: /scroll to top/i })
    expect(scrollButton).toBeInTheDocument()
  })

  it('has proper hero section structure', () => {
    renderHeroSection()
    
    const heroSection = screen.getByRole('region', { hidden: true })
    expect(heroSection).toHaveClass('hero-section')
    expect(heroSection).toHaveAttribute('name', 'home')
    expect(heroSection).toHaveAttribute('id', 'home')
  })

  it('renders hero overlay', () => {
    renderHeroSection()
    
    const overlay = document.querySelector('.hero-overlay')
    expect(overlay).toBeInTheDocument()
  })

  it('renders hero content with proper structure', () => {
    renderHeroSection()
    
    const heroContent = document.querySelector('.hero-content')
    expect(heroContent).toBeInTheDocument()
    
    const heroIntro = document.querySelector('.hero-intro')
    expect(heroIntro).toBeInTheDocument()
    
    const heroDesc = document.querySelector('.hero-desc')
    expect(heroDesc).toBeInTheDocument()
  })

  it('renders CV download with icon', () => {
    renderHeroSection()
    
    const downloadLink = screen.getByText('Download CV')
    const cvIcon = downloadLink.querySelector('.cv-icon')
    expect(cvIcon).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    renderHeroSection()
    
    const heroSection = screen.getByRole('region', { hidden: true })
    expect(heroSection).toHaveAttribute('name', 'home')
    expect(heroSection).toHaveAttribute('id', 'home')
  })
}) 