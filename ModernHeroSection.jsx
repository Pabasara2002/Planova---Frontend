import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ArrowRight, Star, Users, Calendar, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const ModernHeroSection = () => {
  const features = [
    { icon: <Users className="w-4 h-4" />, text: '500+ Happy Clients' },
    { icon: <Calendar className="w-4 h-4" />, text: '1000+ Events Planned' },
    { icon: <Star className="w-4 h-4" />, text: '5-Star Service' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
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
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-purple-200/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-pink-200/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-200/30 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Badge
              variant="secondary"
              className="text-purple-700 bg-purple-100 px-4 py-2 text-sm"
            >
              <Heart className="w-3 h-3 mr-2 text-red-500" />
              Your Dream Event Awaits
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Your Vision.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
              Your Style.
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Your Passion.
            </span>{' '}
            Your Day.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We transform your dreams into unforgettable experiences. From
            intimate gatherings to grand celebrations, we bring your vision to
            life with precision, creativity, and passion.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link to="/services">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Planning
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/gallery">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              >
                View Gallery
              </Button>
            </Link>
          </motion.div>

          {/* Feature Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-md"
              >
                <div className="text-purple-600">{feature.icon}</div>
                <span className="text-gray-700 font-medium text-sm">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default ModernHeroSection
