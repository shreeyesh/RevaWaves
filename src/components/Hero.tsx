import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Heart, Gift } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as "reverse",
      ease: "easeInOut",
    },
  };

  return (
    <div className="bg-gradient-to-b from-stone-50 to-green-50 min-h-screen pt-16 overflow-hidden relative">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
      >
        {/* Background decorative elements */}
        <motion.div 
          animate={floatingAnimation}
          className="absolute top-20 right-10 text-green-200"
        >
          <Leaf size={40} />
        </motion.div>
        <motion.div 
          animate={floatingAnimation}
          className="absolute bottom-20 left-10 text-green-200"
        >
          <Heart size={40} />
        </motion.div>
        <motion.div 
          animate={floatingAnimation}
          className="absolute top-40 left-20 text-green-200"
        >
          <Gift size={40} />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-green-800 mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Sustainable Gifts for a Better Tomorrow
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-green-700 mb-8 max-w-2xl mx-auto"
          >
            Discover our collection of eco-friendly, handcrafted gifts that make a positive impact on our planet.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-700 text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 hover:bg-green-800 transition-colors"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {['Eco-Friendly', 'Handcrafted', 'Custom Made'].map((item, index) => (
            <motion.div
              key={item}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
              className="p-6 rounded-lg bg-white shadow-sm backdrop-blur-sm bg-opacity-80"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-2">{item}</h3>
              <p className="text-green-700">
                {index === 0 && "100% sustainable materials and packaging"}
                {index === 1 && "Made with care by local artisans"}
                {index === 2 && "Personalized just for you"}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;