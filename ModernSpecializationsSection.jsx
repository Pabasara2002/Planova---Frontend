import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import {
  Palette,
  ChefHat,
  MapPin,
  Eye,
  Camera,
  Lightbulb,
  Sparkles,
  Plus,
} from 'lucide-react'

const ModernSpecializationsSection = () => {
  const specializations = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Smart Theme Suggestions',
      description:
        'AI-powered theme recommendations based on your age, culture, personal style, and event type.',
      gradient: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
    },
    {
      icon: <ChefHat className="w-6 h-6" />,
      title: 'Personalized Catering',
      description:
        'Curated food ideas that perfectly match your budget, theme, and any dietary requirements.',
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Vendor Matching',
      description:
        'Find the best vendors in your area based on location, budget, preferences, and reviews.',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: '3D Venue Preview',
      description:
        'Visualize your decorated venue in stunning 3D before the event with our AR technology.',
      gradient: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Memory Collection',
      description:
        'Automatically collect and organize photos, videos, and messages from guests for lasting memories.',
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'AI Recommendations',
      description:
        'Get intelligent, personalized recommendations tailored to your specific needs and preferences.',
      gradient: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-50',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Our Specializations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced Features That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">
              Set Us Apart
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover innovative tools and services that transform the way you
            plan events, making every celebration unique and memorable.
          </p>
        </motion.div>

        {/* Specializations List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {specializations.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                x: 8,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div
                        className={`text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}
                      >
                        {React.cloneElement(item.icon, {
                          className: `w-6 h-6 bg-gradient-to-r ${item.gradient} text-transparent`,
                        })}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Plus Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-purple-100 flex items-center justify-center transition-all duration-300">
                        <Plus className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:rotate-90 transition-all duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div
                    className={`mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${item.gradient} transition-all duration-500 ease-out`}
                  ></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '1000+', label: 'Events Planned' },
            { number: '50+', label: 'Trusted Vendors' },
            { number: '100%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium group-hover:text-purple-600 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ModernSpecializationsSection
