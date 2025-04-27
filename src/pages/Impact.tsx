import { motion } from 'framer-motion';
import { Users, Leaf, DollarSign, Globe } from 'lucide-react';

const Impact = () => {
  const impactMetrics = [
    { icon: Users, number: "50+", label: "Women Trained" },
    { icon: Leaf, number: "500kg", label: "Plastic Waste Saved" },
    { icon: DollarSign, number: "25+", label: "Livelihoods Generated" },
    { icon: Globe, number: "5", label: "SDGs Impacted" }
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5",
      story: "From homemaker to entrepreneur, Priya now leads a team of 5 women in sustainable product creation."
    },
    {
      name: "Lakshmi Patel",
      image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98",
      story: "Started as an artisan, now training other women in eco-friendly crafting techniques."
    }
  ];

  const sdgGoals = [
    { number: 1, title: "No Poverty" },
    { number: 5, title: "Gender Equality" },
    { number: 8, title: "Decent Work" },
    { number: 12, title: "Responsible Consumption" },
    { number: 13, title: "Climate Action" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559027615-cd4628902d4a')] bg-cover bg-center">
          <div className="absolute inset-0 bg-green-900/40 backdrop-blur-sm"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white"
        >
          <h1 className="text-5xl font-bold mb-4">Our Impact Journey</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Creating positive change through sustainable practices and women empowerment.
          </p>
        </motion.div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Impact by Numbers</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <metric.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-green-800 mb-2">{metric.number}</h3>
                <p className="text-gray-600">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Success Stories</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{story.name}</h3>
                  <p className="text-gray-600">{story.story}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Contributions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">SDG Contributions</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {sdgGoals.map((goal) => (
              <motion.div 
                key={goal.number}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-green-50 rounded-lg text-center"
              >
                <div className="text-2xl font-bold text-green-800 mb-2">SDG {goal.number}</div>
                <p className="text-sm text-green-700">{goal.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;