import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-stone-50 min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
            Sustainable Gifts for a Better Tomorrow
          </h1>
          <p className="text-lg md:text-xl text-green-700 mb-8 max-w-2xl mx-auto">
            Discover our collection of eco-friendly, handcrafted gifts that make a positive impact on our planet.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-700 text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 hover:bg-green-800 transition-colors"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6 rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Eco-Friendly</h3>
            <p className="text-green-700">100% sustainable materials and packaging</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Handcrafted</h3>
            <p className="text-green-700">Made with care by local artisans</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Custom Made</h3>
            <p className="text-green-700">Personalized just for you</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;