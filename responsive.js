import { useState, useEffect } from 'react'

// Responsive utility classes and breakpoint helpers
export const responsive = {
  // Tailwind breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Common responsive grid patterns
  grids: {
    responsive: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    cards: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    features: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    testimonials: 'grid-cols-1 lg:grid-cols-2',
    gallery: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  },

  // Spacing patterns
  spacing: {
    section: 'py-12 md:py-16 lg:py-20',
    container: 'px-4 sm:px-6 lg:px-8',
    hero: 'pt-24 pb-12 md:pb-16 lg:pb-20',
  },

  // Typography scales
  text: {
    hero: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
    heading: 'text-2xl sm:text-3xl md:text-4xl',
    subheading: 'text-lg sm:text-xl md:text-2xl',
    body: 'text-sm sm:text-base',
  },

  // Common responsive patterns
  patterns: {
    maxWidth: 'max-w-7xl mx-auto',
    cardPadding: 'p-4 sm:p-6 lg:p-8',
    buttonSize: 'px-4 py-2 sm:px-6 sm:py-3',
    heroContent: 'max-w-3xl mx-auto text-center',
  },
}

// Hook for detecting screen sizes (if needed in components)
export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState('md')

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth
      if (width < 640) setScreenSize('sm')
      else if (width < 768) setScreenSize('md')
      else if (width < 1024) setScreenSize('lg')
      else if (width < 1280) setScreenSize('xl')
      else setScreenSize('2xl')
    }

    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  return {
    screenSize,
    isMobile: screenSize === 'sm',
    isTablet: screenSize === 'md',
    isDesktop: ['lg', 'xl', '2xl'].includes(screenSize),
  }
}

// Utility for responsive image loading
export const getResponsiveImageSrc = (baseName, extension = 'jpg') => ({
  small: `${baseName}-sm.${extension}`,
  medium: `${baseName}-md.${extension}`,
  large: `${baseName}-lg.${extension}`,
  default: `${baseName}.${extension}`,
})

// Animation variants for different screen sizes
export const responsiveAnimations = {
  mobile: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 },
  },
  desktop: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 0.5 },
  },
  hover: {
    whileHover: { scale: 1.02, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  },
}
