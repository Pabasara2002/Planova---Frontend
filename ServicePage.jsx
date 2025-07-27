import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, RotateCcw, Plus, Check } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import api from '../lib/api'

const services = [
  {
    id: 1,
    name: 'Hotels',
    image: 'hotels.png',
    description: 'Luxury accommodations for your guests',
    popular: true,
  },
  {
    id: 2,
    name: 'Decorations',
    image: 'decorations.png',
    description: 'Beautiful themes and decorative elements',
    popular: false,
  },
  {
    id: 3,
    name: 'Entertainment options',
    image: 'entertainment.png',
    description: 'Live performances and entertainment',
    popular: true,
  },
  {
    id: 4,
    name: 'Caterings',
    image: 'catering.png',
    description: 'Delicious cuisine for every taste',
    popular: true,
  },
  {
    id: 5,
    name: 'Themes',
    image: 'themes.png',
    description: 'Custom themes to match your vision',
    popular: false,
  },
  {
    id: 6,
    name: 'Special Offers',
    image: 'special_offers.png',
    description: 'Exclusive packages and deals',
    popular: false,
  },
]

const addons = [
  {
    id: 1,
    name: 'Outdoor Orchestra',
    image: 'orchestra.png',
    description: 'Live classical music experience',
    price: '$500',
  },
  {
    id: 2,
    name: 'Dancing Team',
    image: 'dancing_team.png',
    description: 'Professional choreographed performances',
    price: '$300',
  },
  {
    id: 3,
    name: 'Videography',
    image: 'videography.png',
    description: 'Professional event recording',
    price: '$400',
  },
  {
    id: 4,
    name: 'Sky Flower Petals Drop',
    image: 'sky_flower.png',
    description: 'Magical flower petal experience',
    price: '$200',
  },
  {
    id: 5,
    name: 'Fireworks',
    image: 'fireworks.png',
    description: 'Spectacular fireworks display',
    price: '$600',
  },
]

const ServicePage = () => {
  const [selectedServices, setSelectedServices] = useState([])
  const [selectedAddons, setSelectedAddons] = useState([])
  const [loading, setLoading] = useState(false)

  const toggleService = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((s) => s !== serviceId)
        : [...prev, serviceId]
    )
  }

  const toggleAddon = (addonId) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId)
        ? prev.filter((a) => a !== addonId)
        : [...prev, addonId]
    )
  }

  const handleAddToCart = async () => {
    setLoading(true)
    try {
      const selectedServiceNames = services
        .filter((s) => selectedServices.includes(s.id))
        .map((s) => s.name)
      const selectedAddonNames = addons
        .filter((a) => selectedAddons.includes(a.id))
        .map((a) => a.name)

      await api.post('/cart', {
        selectedServices: selectedServiceNames,
        selectedAddons: selectedAddonNames,
      })

      // Success toast will be handled by the API layer
    } catch (error) {
      console.error('Failed to add to cart:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setSelectedServices([])
    setSelectedAddons([])
  }

  const ServiceCard = ({ service, isSelected, onToggle }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className={`cursor-pointer transition-all duration-300 overflow-hidden group ${
          isSelected
            ? 'ring-2 ring-purple-500 bg-purple-50'
            : 'hover:shadow-lg border-gray-200'
        }`}
        onClick={() => onToggle(service.id)}
      >
        <div className="relative">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.src = '/placeholder-image.jpg'
            }}
          />
          {service.popular && (
            <Badge className="absolute top-3 left-3 bg-purple-600">
              Popular
            </Badge>
          )}
          <div
            className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
              isSelected ? 'bg-purple-600' : 'bg-white/80'
            }`}
          >
            {isSelected ? (
              <Check className="h-4 w-4 text-white" />
            ) : (
              <Plus className="h-4 w-4 text-gray-600" />
            )}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">
            {service.name}
          </h3>
          <p className="text-gray-600 text-sm">{service.description}</p>
        </div>
      </Card>
    </motion.div>
  )

  const AddonCard = ({ addon, isSelected, onToggle }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className={`cursor-pointer transition-all duration-300 overflow-hidden group ${
          isSelected
            ? 'ring-2 ring-purple-500 bg-purple-50'
            : 'hover:shadow-lg border-gray-200'
        }`}
        onClick={() => onToggle(addon.id)}
      >
        <div className="relative">
          <img
            src={addon.image}
            alt={addon.name}
            className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.src = '/placeholder-image.jpg'
            }}
          />
          <div
            className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
              isSelected ? 'bg-purple-600' : 'bg-white/80'
            }`}
          >
            {isSelected ? (
              <Check className="h-4 w-4 text-white" />
            ) : (
              <Plus className="h-4 w-4 text-gray-600" />
            )}
          </div>
          <Badge className="absolute bottom-3 left-3 bg-black/80 text-white">
            {addon.price}
          </Badge>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-base mb-1 text-gray-900">
            {addon.name}
          </h3>
          <p className="text-gray-600 text-sm">{addon.description}</p>
        </div>
      </Card>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Premium{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your vision into reality with our comprehensive event
              planning services. From luxury accommodations to spectacular
              entertainment, we have everything you need to create unforgettable
              memories.
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2">
                {selectedServices.length + selectedAddons.length} items selected
              </Badge>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Main Services Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Core Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our essential event planning services to build your
              perfect celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ServiceCard
                  service={service}
                  isSelected={selectedServices.includes(service.id)}
                  onToggle={toggleService}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Add-ons Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Premium Add-ons
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Elevate your event with our exclusive add-on services for that
              extra special touch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <AddonCard
                  addon={addon}
                  isSelected={selectedAddons.includes(addon.id)}
                  onToggle={toggleAddon}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={handleAddToCart}
            disabled={
              loading ||
              (selectedServices.length === 0 && selectedAddons.length === 0)
            }
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            {loading ? 'Adding to Cart...' : 'Add to Cart'}
          </Button>

          <Button
            onClick={handleReset}
            variant="outline"
            size="lg"
            className="px-8 py-3 rounded-full border-2 hover:bg-gray-50 transition-all duration-300"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            Reset Selection
          </Button>
        </motion.div>

        {/* Selection Summary */}
        {(selectedServices.length > 0 || selectedAddons.length > 0) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Your Selection
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {selectedServices.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">
                    Selected Services:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {services
                      .filter((s) => selectedServices.includes(s.id))
                      .map((service) => (
                        <Badge
                          key={service.id}
                          className="bg-purple-100 text-purple-800"
                        >
                          {service.name}
                        </Badge>
                      ))}
                  </div>
                </div>
              )}

              {selectedAddons.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">
                    Selected Add-ons:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {addons
                      .filter((a) => selectedAddons.includes(a.id))
                      .map((addon) => (
                        <Badge
                          key={addon.id}
                          className="bg-blue-100 text-blue-800"
                        >
                          {addon.name} ({addon.price})
                        </Badge>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default ServicePage
