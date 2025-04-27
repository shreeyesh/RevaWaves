import { motion } from 'framer-motion';
import { ArrowRight, Users, ShoppingBag, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489674267075-cee793167910')] bg-cover bg-center">
          <div className="absolute inset-0 bg-green-900/40 backdrop-blur-sm"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Empowering Women | Sustaining the Planet</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Reva Waves creates sustainable products while empowering women through skill development and economic opportunities.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors"
            >
              Shop Now
              <ShoppingBag className="ml-2" />
            </Link>
            <Link 
              to="/corporate"
              className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors backdrop-blur-sm"
            >
              Partner With Us
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6"
            >
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-green-800 mb-2">50+</h3>
              <p className="text-gray-600">Women Empowered</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6"
            >
              <ShoppingBag className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-green-800 mb-2">2000+</h3>
              <p className="text-gray-600">Products Delivered</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6"
            >
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Award Winning</h3>
              <p className="text-gray-600">Gujarat Changemakers Meet & ISTD Award</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Join the Reva Waves Movement</h2>
          <p className="text-gray-600 mb-8">Stay updated with our latest initiatives and impact stories.</p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;