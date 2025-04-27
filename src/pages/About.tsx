import { motion } from 'framer-motion';
import { Heart, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-green-800 mb-4">About Reva Waves</h1>
          <p className="text-green-700 text-lg mb-8">
            Empowering women through sustainable craftsmanship and economic opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Reva Waves began with a vision to combine environmental sustainability with women's empowerment. 
                Founded in 2020, we've grown from a small workshop to a thriving community of artisans creating 
                eco-friendly products while building better lives for themselves and their families.
              </p>
              <p className="text-gray-600">
                Our mission is to create beautiful, sustainable products while providing skills training and 
                economic opportunities to women from underserved communities.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1594389597329-a82f377c0b8e"
                alt="Women artisans working"
                className="rounded-lg shadow-lg object-cover h-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <Heart className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Our Values</h3>
              <p className="text-gray-600">
                We believe in sustainable practices, fair wages, and creating opportunities for growth.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Our Community</h3>
              <p className="text-gray-600">
                A growing network of skilled artisans, supporters, and environmentally conscious consumers.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <Globe className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Our Impact</h3>
              <p className="text-gray-600">
                Creating positive change through sustainable practices and community development.
              </p>
            </motion.div>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Join Our Journey</h2>
            <p className="text-gray-600 mb-6">
              Whether you're a customer, partner, or supporter, there are many ways to be part of our mission.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Get Involved
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;