import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import {
  Menu,
  X,
  Home,
  Users,
  Heart,
  Mail,
  User,
  Phone,
  Camera,
  Gift,
  Sparkles,
} from 'lucide-react'

const ModernNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navItems = [
    {
      name: 'Home',
      path: '/',
      icon: <Home className="w-4 h-4" />,
    },
    {
      name: 'Services',
      path: '/services',
      icon: <Sparkles className="w-4 h-4" />,
    },
    {
      name: 'Gallery',
      path: '/gallery',
      icon: <Camera className="w-4 h-4" />,
    },
    {
      name: 'Packages',
      path: '/customPackages',
      icon: <Gift className="w-4 h-4" />,
    },
    {
      name: 'About',
      path: '/about',
      icon: <Users className="w-4 h-4" />,
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Phone className="w-4 h-4" />,
    },
  ]

  const isActivePage = (path) => {
    return location.pathname === path
  }

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <img
                src="/logo.png"
                alt="Planova Logo"
                className="h-12 w-12 object-contain transition-transform duration-300 hover:scale-105"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(124,28,108,0.10)',
                  background: 'transparent',
                  border: 'none',
                }}
              />
              <div className="hidden sm:block">
                <h2 className="text-xl font-bold text-[#7C1C6C]">Planova</h2>
                <p className="text-xs text-gray-500 -mt-1">Event Planning</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <Link key={index} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <Button
                      variant={isActivePage(item.path) ? 'default' : 'ghost'}
                      className={`flex items-center space-x-2 transition-all duration-300 ${
                        isActivePage(item.path)
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                          : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </Button>
                    {isActivePage(item.path) && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                        initial={false}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Auth Buttons (Desktop) */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link to="/auth">
                <Button
                  variant="ghost"
                  className="text-gray-600 hover:text-purple-600"
                >
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </Link>
              <Link to="/chatbot">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI Chat
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="xl:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 90 }}
                    exit={{ rotate: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 xl:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 xl:hidden"
            >
              <div className="p-6">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Planova
                      </h3>
                      <p className="text-xs text-gray-500 -mt-1">
                        Event Planning
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="space-y-2 mb-8">
                  {navItems.map((item, index) => (
                    <Link key={index} to={item.path}>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: { delay: index * 0.1 },
                        }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 ${
                          isActivePage(item.path)
                            ? 'bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div
                          className={`p-2 rounded-lg ${
                            isActivePage(item.path)
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <span
                            className={`font-medium ${
                              isActivePage(item.path)
                                ? 'text-purple-600'
                                : 'text-gray-700'
                            }`}
                          >
                            {item.name}
                          </span>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>

                {/* Mobile Auth Buttons */}
                <div className="space-y-3 pt-6 border-t border-gray-200">
                  <Link to="/auth" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/chatbot" className="block">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white justify-start">
                      <Sparkles className="w-4 h-4 mr-2" />
                      AI Chat Assistant
                    </Button>
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-2">Need Help?</p>
                    <Link to="/contact">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-purple-600"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Contact Support
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20" />
    </>
  )
}

export default ModernNavbar
