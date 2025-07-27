import React from 'react'
import { motion } from 'framer-motion'
import ModernHeroSection from '../components/ModernHeroSection'
import ModernFeaturesSection from '../components/ModernFeaturesSection'
import ModernEventsSection from '../components/ModernEventsSection'
import ModernSpecializationsSection from '../components/ModernSpecializationsSection'
import ModernPackagesSection from '../components/ModernPackagesSection'

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-sans text-gray-800 overflow-x-hidden"
    >
      <ModernHeroSection />

      {/* Features Section */}
      <ModernFeaturesSection />

      {/* Events Section */}
      <ModernEventsSection />

      {/* Specializations Section */}
      <ModernSpecializationsSection />

      {/* Packages Section */}
      <ModernPackagesSection />
    </motion.div>
  )
}

export default HomePage
