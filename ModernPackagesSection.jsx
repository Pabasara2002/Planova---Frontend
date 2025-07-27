import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Crown, Zap, Gift, ArrowRight, Check, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const ModernPackagesSection = () => {
  const packages = [
    {
      name: 'Essential',
      icon: <Zap className="w-6 h-6" />,
      price: 'Starting at $999',
      description: 'Perfect for intimate gatherings and small celebrations',
      features: [
        'Event planning consultation',
        'Vendor recommendations',
        'Basic timeline creation',
        'Budget tracking tools',
        'Email support',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      popular: false,
    },
    {
      name: 'Premium',
      icon: <Crown className="w-6 h-6" />,
      price: 'Starting at $2,499',
      description: 'Comprehensive planning for memorable events',
      features: [
        'Full-service event planning',
        'Vendor coordination',
        'Detailed timeline & checklist',
        '3D venue visualization',
        'Guest management system',
        'Day-of coordination',
        'Priority support',
      ],
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      popular: true,
    },
    {
      name: 'Luxury',
      icon: <Gift className="w-6 h-6" />,
      price: 'Starting at $4,999',
      description: 'Ultimate planning experience for extraordinary events',
      features: [
        'White-glove event planning',
        'Premium vendor network',
        'Custom design & styling',
        'Advanced 3D/AR previews',
        'Dedicated event manager',
        'Full-day coordination',
        'Memory collection service',
        '24/7 premium support',
      ],
      gradient: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      popular: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
            <Gift className="w-4 h-4 mr-2" />
            Our Packages
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">
              Planning Package
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We work with you to create the best value for money on every detail,
            ensuring your event stays within budget while exceeding
            expectations.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">
              All packages include our satisfaction guarantee
            </span>
          </div>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 },
              }}
              className={`relative group ${pkg.popular ? 'md:-mt-8' : ''}`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <Card
                className={`h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  pkg.popular ? 'ring-2 ring-purple-200 scale-105' : ''
                } bg-white/90 backdrop-blur-sm`}
              >
                <CardContent className="p-8">
                  {/* Icon & Name */}
                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl ${pkg.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div
                        className={`text-transparent bg-clip-text bg-gradient-to-r ${pkg.gradient}`}
                      >
                        {React.cloneElement(pkg.icon, {
                          className: `w-6 h-6 bg-gradient-to-r ${pkg.gradient} text-transparent`,
                        })}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {pkg.description}
                    </p>
                    <div
                      className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${pkg.gradient}`}
                    >
                      {pkg.price}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <Check
                          className={`w-5 h-5 text-green-500 flex-shrink-0`}
                        />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Link to="/customPackages">
                      <Button
                        className={`w-full bg-gradient-to-r ${pkg.gradient} hover:opacity-90 text-white font-semibold py-3 transition-all duration-300`}
                        size="lg"
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      className="w-full text-gray-600 hover:bg-gray-50"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>

                {/* Decorative Border */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pkg.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Package CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Something Different?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every event is unique. Work with our team to create a custom package
            that perfectly fits your vision, budget, and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/customPackages">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
              >
                Create Custom Package
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ModernPackagesSection
