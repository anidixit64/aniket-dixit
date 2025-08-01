import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// Mock the HomePage component
vi.mock('./pages/HomePage.jsx', () => ({
  default: () => <div data-testid="home-page">Home Page Content</div>
}))

// Mock the CSS import
vi.mock('./styles/App.css', () => ({}), { virtual: true })

const renderApp = () => {
  return render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

describe('App Component', () => {
  beforeEach(() => {
    vi.clearAllTimers()
    vi.useFakeTimers()
  })

  it('renders loading screen initially', () => {
    renderApp()
    
    expect(screen.getByText('ANIKET DIXIT')).toBeInTheDocument()
    expect(screen.getByAltText('Laurel Wreath')).toBeInTheDocument()
    expect(screen.queryByTestId('home-page')).not.toBeInTheDocument()
  })

  it('shows shimmer effect after 2 seconds', async () => {
    renderApp()
    
    // Fast-forward to just before shimmer should appear
    vi.advanceTimersByTime(1999)
    expect(screen.getByText('ANIKET DIXIT')).not.toHaveClass('shimmer-active')
    
    // Fast-forward to when shimmer should appear
    vi.advanceTimersByTime(1)
    expect(screen.getByText('ANIKET DIXIT')).toHaveClass('shimmer-active')
  })

  it('transitions to main app after loading', async () => {
    renderApp()
    
    // Fast-forward past loading time
    vi.advanceTimersByTime(2250)
    
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument()
    })
    
    expect(screen.queryByText('ANIKET DIXIT')).not.toBeInTheDocument()
  })

  it('has proper loading animation structure', () => {
    renderApp()
    
    const loader = screen.getByRole('generic', { hidden: true })
    expect(loader).toHaveClass('loader')
    
    const wreathLoader = loader.querySelector('.wreath-loader')
    expect(wreathLoader).toBeInTheDocument()
    
    const wreathImage = screen.getByAltText('Laurel Wreath')
    expect(wreathImage).toHaveAttribute('src', '/laurel-wreath.svg')
    expect(wreathImage).toHaveClass('wreath-background')
  })

  it('maintains proper state management', () => {
    renderApp()
    
    // Initially should be loading
    expect(screen.getByText('ANIKET DIXIT')).toBeInTheDocument()
    
    // After loading completes
    vi.advanceTimersByTime(2250)
    
    // Should show main app
    expect(screen.getByTestId('home-page')).toBeInTheDocument()
  })
}) 