import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Recycle, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1610555356673-e549078242b9')] bg-cover bg-center">
          <div className="absolute inset-0 bg-green-900/40 backdrop-blur-sm"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sustainable Gifts for a Better Tomorrow</h1>
          <p className="text-xl mb-8 max-w-2xl">Discover our collection of eco-friendly, customizable gifts that make a difference while preserving our planet.</p>
          <Link 
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors"
          >
            Explore Products
            <ArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-6 bg-stone-50 rounded-lg"
            >
              <Leaf className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly Materials</h3>
              <p className="text-gray-600">All our products are made from sustainable and biodegradable materials.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-6 bg-stone-50 rounded-lg"
            >
              <Recycle className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainable Packaging</h3>
              <p className="text-gray-600">Zero-waste packaging that's both beautiful and kind to our environment.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-6 bg-stone-50 rounded-lg"
            >
              <Heart className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Made</h3>
              <p className="text-gray-600">Personalized gifts crafted with care and attention to detail.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home