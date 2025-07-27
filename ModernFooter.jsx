import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Calendar,
  Users,
  Sparkles,
  ArrowUp,
} from 'lucide-react'

const ModernFooter = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Packages', path: '/customPackages' },
    { name: 'Contact', path: '/contact' },
    { name: 'Chatbot', path: '/chatbot' },
  ]

  const services = [
    'Wedding Planning',
    'Corporate Events',
    'Birthday Parties',
    'Anniversary Celebrations',
    'Venue Booking',
    'Vendor Coordination',
  ]

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: '#',
      color: 'hover:text-blue-600',
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: '#',
      color: 'hover:text-pink-600',
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: '#',
      color: 'hover:text-blue-400',
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: '#',
      color: 'hover:text-red-600',
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-40 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Planova
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Event Planning Excellence
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Transforming your dreams into unforgettable experiences. We
                specialize in creating personalized events that exceed
                expectations and create lasting memories.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>contact@planova.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>123 Event Street, City, State 12345</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">
                Quick Links
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">
                Our Services
              </h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-gray-700"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h4 className="text-xl font-semibold mb-4 text-white">
                Stay Updated with Our Latest Events
              </h4>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for exclusive offers, event planning
                tips, and inspiration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Social Links & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-700"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-300 font-medium">Follow Us:</span>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-gray-600 text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8 text-center">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-xl font-bold text-white">500+</div>
                    <div className="text-xs text-gray-400">Happy Clients</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-pink-400" />
                  <div>
                    <div className="text-xl font-bold text-white">1000+</div>
                    <div className="text-xs text-gray-400">Events Planned</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-400 text-sm text-center md:text-left">
                © 2024 Planova. All rights reserved. Crafted with{' '}
                <Heart className="w-4 h-4 inline text-red-500" /> for memorable
                events.
              </div>

              <div className="flex items-center space-x-6">
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-purple-400 hover:bg-white/10"
                >
                  <ArrowUp className="w-4 h-4 mr-1" />
                  Top
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ModernFooter
