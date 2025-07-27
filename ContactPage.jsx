import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, Clock, Users, Award } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Card } from '../components/ui/card'
import api from '../lib/api'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post('/contact', formData)
      setFormData({ firstName: '', lastName: '', email: '', message: '' })
      // Success toast will be handled by the API layer
    } catch (error) {
      console.error('Failed to send message:', error)
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '33/1, 1st Lane, Medawala Road, Colombo. 10100. Sri Lanka',
      color: 'text-purple-600',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+94 11012345',
      color: 'text-blue-600',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@planova.lk',
      color: 'text-green-600',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM',
      color: 'text-orange-600',
    },
  ]

  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional event planners with years of experience',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in event planning services',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support for your peace of mind',
    },
  ]

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
              Get in{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to plan your dream event? We're here to help make your
              vision come to life. Contact us today and let's start planning
              something extraordinary together.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="p-8 shadow-xl border-0 bg-white">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-sm font-medium text-gray-700"
                    >
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      required
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Smitherton"
                      required
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@domain.com"
                    required
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Your Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event vision, requirements, or any questions you have..."
                    required
                    rows={6}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8"
          >
            {/* About Section */}
            <Card className="p-8 shadow-xl border-0 bg-white">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">
                Why Choose Planova?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your special day deserves expert attention. As professional
                event planners, we handle all the details so you can focus on
                what matters most - enjoying your celebration. From intimate
                gatherings to grand occasions, we bring your vision to life with
                precision and care.
              </p>

              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <feature.icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Contact Details */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                >
                  <Card className="p-6 shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gray-50`}>
                        <info.icon className={`h-6 w-6 ${info.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 whitespace-pre-line">
                          {info.details}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
