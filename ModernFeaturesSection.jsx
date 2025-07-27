import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import {
  CheckCircle,
  Settings,
  Users,
  Network,
  Sparkles,
  Shield,
  Clock,
  Heart,
} from 'lucide-react'

const ModernFeaturesSection = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Everything You Need, All in One Place',
      description:
        'From venue booking and vendor coordination to budget tracking and guest list management, we offer a comprehensive suite of features designed to save you time and effort.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      delay: 0.1,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborate and Customize Effortlessly',
      description:
        'Work closely with your team, vendors, or clients through real-time collaboration tools. Customize event details, share updates, and keep everyone on the same page.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      delay: 0.2,
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Streamline Planning with Smart Tools',
      description:
        'Say goodbye to spreadsheets and scattered notes. Our platform integrates intelligent planning tools that automate scheduling, track budgets, manage RSVPs, and more.',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      delay: 0.3,
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Connect with Trusted Vendors',
      description:
        'Discover a curated network of reliable vendors—from caterers and decorators to photographers and entertainers. Book services directly through the platform.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      delay: 0.4,
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Trusted by Planners, Loved by Guests',
      description:
        'Our platform makes events smooth for both planners and attendees — keeping everything organized and stress-free with beautiful, intuitive interfaces.',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      delay: 0.5,
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI-Powered Recommendations',
      description:
        'Get personalized suggestions for themes, vendors, and services based on your preferences, budget, and event type using our advanced AI technology.',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      delay: 0.6,
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            Why Choose Planova
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Create
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">
              Unforgettable Events
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover powerful features designed to simplify your event planning
            journey and deliver exceptional experiences that exceed
            expectations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div
                      className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}
                    >
                      {React.cloneElement(feature.icon, {
                        className: `w-8 h-8 bg-gradient-to-r ${feature.color} text-transparent`,
                      })}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative Border */}
                  <div
                    className={`mt-6 h-1 w-full bg-gradient-to-r ${feature.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium">
              Trusted by 500+ event planners worldwide
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Clock className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium">
              Save 10+ hours per event with our smart tools
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ModernFeaturesSection
