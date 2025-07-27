import React from 'react'
import { motion } from 'framer-motion'
import { Users, Heart, Award, Target, Calendar, Sparkles } from 'lucide-react'
import { Card } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description:
        'We pour our hearts into every event, ensuring each celebration reflects your unique story and vision.',
    },
    {
      icon: Users,
      title: 'Client-Centered',
      description:
        'Your satisfaction is our priority. We listen, understand, and deliver beyond expectations.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'Award-winning service with meticulous attention to detail in every aspect of event planning.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description:
        'From concept to completion, we stay focused on turning your dream event into reality.',
    },
  ]

  const stats = [
    { number: '500+', label: 'Events Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Partner Vendors' },
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
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We are{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Planova
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Welcome to our Event Planning Hub! We specialize in organizing and
              managing all types of events, from weddings and birthdays to
              corporate meetings and social gatherings.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Us?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Planning an event can be stressful, but it doesn't have to be.
                We take the hassle out of event planning, so you can relax and
                enjoy your special occasion.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of experienced professionals handles every detail with
                precision and care, ensuring your event is everything you
                dreamed it would be and more.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/about-1.png"
                  alt="Wedding celebration"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.src = '/placeholder-image.jpg'
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Perfect Events
                    </p>
                    <p className="text-sm text-gray-600">Every Time</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Origin Story */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:order-2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Where We Come From
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2020 by a set of vibrant young individuals, Planova
                is a dedicated Event Planner in Sri Lanka, committed to turning
                your dream events into stunning realities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From intimate gatherings to grand-scale celebrations, we infuse
                every project with meticulous planning, creative flair, and
                unwavering attention to detail. Our passion for creating
                unforgettable moments drives everything we do.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:order-1 relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/about-2.png"
                  alt="Event ceremony"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.src = '/placeholder-image.jpg'
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Since 2020</p>
                    <p className="text-sm text-gray-600">Creating Magic</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape every event we
              create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Vision Statement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center"
        >
          <Card className="max-w-4xl mx-auto p-8 lg:p-12 bg-gradient-to-r from-purple-50 to-blue-50 border-0 shadow-xl">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed italic">
              "Your Vision. Your Style. Your Passion. Your Day.
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-bold not-italic">
                We make it happen. We are Planova.
              </span>
              "
            </blockquote>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}
export default AboutPage
