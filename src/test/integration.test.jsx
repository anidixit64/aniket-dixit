import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from '../App.jsx'

// Mock all child components
vi.mock('../pages/HomePage.jsx', () => ({
  default: ({ nav, handleNav, closeNav }) => (
    <div data-testid="home-page">
      <button onClick={handleNav} data-testid="nav-toggle">Toggle Nav</button>
      <button onClick={closeNav} data-testid="close-nav">Close Nav</button>
      <div data-testid="nav-state">Nav: {nav ? 'open' : 'closed'}</div>
    </div>
  )
}))

vi.mock('../styles/App.css', () => ({}), { virtual: true })

const renderApp = () => {
  return render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

describe('Application Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllTimers()
    vi.useFakeTimers()
  })

  it('should load and transition from loading to main app', async () => {
    renderApp()
    
    // Initially shows loading screen
    expect(screen.getByText('ANIKET DIXIT')).toBeInTheDocument()
    expect(screen.queryByTestId('home-page')).not.toBeInTheDocument()
    
    // After loading completes
    vi.advanceTimersByTime(2250)
    
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument()
    })
    
    expect(screen.queryByText('ANIKET DIXIT')).not.toBeInTheDocument()
  })

  it('should handle navigation state properly', async () => {
    renderApp()
    
    // Wait for app to load
    vi.advanceTimersByTime(2250)
    
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument()
    })
    
    // Check initial nav state
    expect(screen.getByTestId('nav-state')).toHaveTextContent('Nav: closed')
    
    // Toggle navigation
    fireEvent.click(screen.getByTestId('nav-toggle'))
    expect(screen.getByTestId('nav-state')).toHaveTextContent('Nav: open')
    
    // Close navigation
    fireEvent.click(screen.getByTestId('close-nav'))
    expect(screen.getByTestId('nav-state')).toHaveTextContent('Nav: closed')
  })

  it('should maintain proper loading sequence', () => {
    renderApp()
    
    // Check shimmer timing
    vi.advanceTimersByTime(1999)
    expect(screen.getByText('ANIKET DIXIT')).not.toHaveClass('shimmer-active')
    
    vi.advanceTimersByTime(1)
    expect(screen.getByText('ANIKET DIXIT')).toHaveClass('shimmer-active')
    
    // Check full loading time
    vi.advanceTimersByTime(250)
    expect(screen.getByTestId('home-page')).toBeInTheDocument()
  })

  it('should handle multiple navigation toggles', async () => {
    renderApp()
    
    // Wait for app to load
    vi.advanceTimersByTime(2250)
    
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument()
    })
    
    const navToggle = screen.getByTestId('nav-toggle')
    const closeNav = screen.getByTestId('close-nav')
    
    // Toggle multiple times
    fireEvent.click(navToggle)
    expect(screen.getByTestId('nav-state')).toHaveTextContent('Nav: open')
    
    fireEvent.click(navToggle)
    expect(screen.getByTestId('nav-state')).toHaveTextContent('Nav: closed')
    
    fireEvent.click(navToggle)
    expect(screen.getByTestId('nav-state')).toHaveTextContent('Nav: open')
    
    fireEvent.click(closeNav)
    expect(screen.getByTestId('nav-state')).toHaveTextContent('Nav: closed')
  })

  it('should have proper loading animation structure', () => {
    renderApp()
    
    const loader = screen.getByRole('generic', { hidden: true })
    expect(loader).toHaveClass('loader')
    
    const wreathLoader = loader.querySelector('.wreath-loader')
    expect(wreathLoader).toBeInTheDocument()
    
    const wreathImage = screen.getByAltText('Laurel Wreath')
    expect(wreathImage).toHaveAttribute('src', '/laurel-wreath.svg')
    expect(wreathImage).toHaveClass('wreath-background')
    
    const etchedName = screen.getByText('ANIKET DIXIT')
    expect(etchedName).toHaveClass('etched-name')
  })

  it('should handle rapid state changes gracefully', async () => {
    renderApp()
    
    // Rapidly advance timers
    vi.advanceTimersByTime(1000)
    vi.advanceTimersByTime(1000)
    vi.advanceTimersByTime(250)
    
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument()
    })
    
    // Should still be functional
    expect(screen.getByTestId('nav-toggle')).toBeInTheDocument()
    expect(screen.getByTestId('close-nav')).toBeInTheDocument()
  })
}) 