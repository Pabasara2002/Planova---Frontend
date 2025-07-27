import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, Heart, Share2, Download, X } from 'lucide-react'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Dialog } from '../components/ui/dialog'

const galleryItems = [
  {
    id: 1,
    name: 'Elegant Wedding Reception',
    image: 'album1.png',
    category: 'Weddings',
    description:
      'A beautiful outdoor wedding reception with fairy lights and floral arrangements',
    likes: 124,
    views: 1520,
  },
  {
    id: 2,
    name: 'Corporate Gala Event',
    image: 'album2.png',
    category: 'Corporate',
    description:
      'Professional corporate event with modern decor and ambient lighting',
    likes: 89,
    views: 980,
  },
  {
    id: 3,
    name: 'Birthday Celebration',
    image: 'album3.png',
    category: 'Birthdays',
    description:
      'Colorful birthday party setup with themed decorations and entertainment',
    likes: 156,
    views: 2100,
  },
  {
    id: 4,
    name: 'Anniversary Party',
    image: 'album4.png',
    category: 'Anniversaries',
    description: 'Romantic anniversary celebration with elegant table settings',
    likes: 201,
    views: 1800,
  },
  {
    id: 5,
    name: 'Garden Wedding',
    image: 'event-1.png',
    category: 'Weddings',
    description: 'Enchanting garden wedding with natural floral arrangements',
    likes: 178,
    views: 2350,
  },
  {
    id: 6,
    name: 'Luxury Banquet',
    image: 'event-2.png',
    category: 'Corporate',
    description: 'High-end banquet hall setup for corporate celebrations',
    likes: 95,
    views: 1200,
  },
]

const categories = [
  'All',
  'Weddings',
  'Corporate',
  'Birthdays',
  'Anniversaries',
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)
  const [likedItems, setLikedItems] = useState(new Set())

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  const toggleLike = (itemId) => {
    setLikedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
      }
      return newSet
    })
  }

  const GalleryCard = ({ item }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white">
        <div className="relative overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.src = '/placeholder-image.jpg'
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex gap-3">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setSelectedImage(item)}
                className="bg-white/90 hover:bg-white text-gray-900"
              >
                <Eye className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => toggleLike(item.id)}
                className={`${
                  likedItems.has(item.id)
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-white/90 hover:bg-white text-gray-900'
                }`}
              >
                <Heart
                  className={`h-4 w-4 ${
                    likedItems.has(item.id) ? 'fill-current' : ''
                  }`}
                />
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="bg-white/90 hover:bg-white text-gray-900"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Category Badge */}
          <Badge className="absolute top-3 left-3 bg-purple-600">
            {item.category}
          </Badge>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">
            {item.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {item.description}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                {item.likes + (likedItems.has(item.id) ? 1 : 0)}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {item.views}
              </span>
            </div>
          </div>
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
              Event{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our portfolio of stunning events. From intimate
              celebrations to grand occasions, discover the magic we create for
              our clients.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'hover:bg-gray-50 border-gray-300'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <GalleryCard item={item} />
            </motion.div>
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">
              No events found in this category.
            </p>
          </motion.div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.name}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <Button
                  onClick={() => setSelectedImage(null)}
                  variant="secondary"
                  size="sm"
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedImage.name}
                    </h3>
                    <Badge className="bg-purple-100 text-purple-800 mb-3">
                      {selectedImage.category}
                    </Badge>
                    <p className="text-gray-600">{selectedImage.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {selectedImage.likes +
                        (likedItems.has(selectedImage.id) ? 1 : 0)}{' '}
                      likes
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {selectedImage.views} views
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => toggleLike(selectedImage.id)}
                      variant="outline"
                      size="sm"
                      className={
                        likedItems.has(selectedImage.id)
                          ? 'text-red-600 border-red-600'
                          : ''
                      }
                    >
                      <Heart
                        className={`h-4 w-4 mr-1 ${
                          likedItems.has(selectedImage.id) ? 'fill-current' : ''
                        }`}
                      />
                      {likedItems.has(selectedImage.id) ? 'Liked' : 'Like'}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Dialog>
      )}
    </div>
  )
}
