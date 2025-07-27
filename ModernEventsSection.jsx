import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { LoadingSpinner } from './ui/loading'
import { Calendar, MapPin, Users, ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import api from '../lib/api'

const ModernEventsSection = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get('/events')
        setEvents(response.data.slice(0, 6)) // Show only first 6 events
      } catch (error) {
        console.error('Error fetching events:', error)
        // Fallback to mock data for demo
        setEvents([
          {
            id: 1,
            title: 'Elegant Wedding Ceremony',
            image: '/event-1.png',
            category: 'Wedding',
            date: '2024-02-15',
            location: 'Garden Venue',
            attendees: 150,
            rating: 5.0,
          },
          {
            id: 2,
            title: 'Corporate Annual Gala',
            image: '/event-2.png',
            category: 'Corporate',
            date: '2024-03-20',
            location: 'Conference Center',
            attendees: 300,
            rating: 4.8,
          },
          {
            id: 3,
            title: 'Birthday Celebration',
            image: '/event-3.png',
            category: 'Birthday',
            date: '2024-04-10',
            location: 'Private Hall',
            attendees: 75,
            rating: 4.9,
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

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

  const getCategoryColor = (category) => {
    const colors = {
      Wedding: 'bg-pink-100 text-pink-700',
      Corporate: 'bg-blue-100 text-blue-700',
      Birthday: 'bg-purple-100 text-purple-700',
      Anniversary: 'bg-green-100 text-green-700',
      Conference: 'bg-orange-100 text-orange-700',
      default: 'bg-gray-100 text-gray-700',
    }
    return colors[category] || colors.default
  }

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <LoadingSpinner size="lg" />
            <p className="mt-4 text-gray-600">Loading events...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white">
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
            <Calendar className="w-4 h-4 mr-2" />
            Recent Events
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bringing Dreams to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">
              Beautiful Reality
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful events that showcase our
            commitment to excellence and attention to detail in every
            celebration.
          </p>
        </motion.div>

        {/* Events Grid */}
        {events.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-xl text-gray-500">
              No events available at the moment
            </p>
            <p className="text-gray-400 mt-2">
              Check back soon for exciting upcoming events!
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {events.map((event, index) => (
              <motion.div
                key={event.id || index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={event.image || '/placeholder.png'}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = '/placeholder.png'
                      }}
                    />
                    {event.category && (
                      <Badge
                        className={`absolute top-4 left-4 ${getCategoryColor(
                          event.category
                        )}`}
                      >
                        {event.category}
                      </Badge>
                    )}
                    {event.rating && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium">
                          {event.rating}
                        </span>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      {event.title}
                    </h3>

                    {/* Event Details */}
                    <div className="space-y-2 mb-4">
                      {event.date && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">
                            {new Date(event.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                      )}
                      {event.attendees && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">
                            {event.attendees} Attendees
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Learn More Button */}
                    <Button
                      variant="ghost"
                      className="w-full justify-between group-hover:bg-purple-50 group-hover:text-purple-600 transition-all duration-300"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* View All Button */}
        {events.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                View All Events
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default ModernEventsSection
