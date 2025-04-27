import { motion } from 'framer-motion';
import { Target, Award, FileText, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Corporate = () => {
  const collaborations = [
    {
      company: "TechCorp Inc.",
      testimonial: "Working with Reva Waves helped us meet our CSR goals while making a real impact in the community.",
      author: "Sarah Johnson",
      role: "CSR Head"
    },
    {
      company: "Green Solutions Ltd.",
      testimonial: "The sustainable gifting options provided by Reva Waves perfectly aligned with our company values.",
      author: "Michael Chen",
      role: "Sustainability Director"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0')] bg-cover bg-center">
          <div className="absolute inset-0 bg-green-900/40 backdrop-blur-sm"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white"
        >
          <h1 className="text-5xl font-bold mb-4">Corporate Gifting & CSR Collaboration</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Partner with us to create sustainable impact while meeting your corporate social responsibility goals.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>

      {/* Why Collaborate Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Why Partner With Us?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-green-50 rounded-lg"
            >
              <Target className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Meet CSR & ESG Goals</h3>
              <p className="text-gray-600">Align your corporate initiatives with sustainable development goals and make a measurable impact.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-green-50 rounded-lg"
            >
              <Award className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Sustainable Gifting</h3>
              <p className="text-gray-600">Choose from our range of eco-friendly corporate gifts that make a statement about your company's values.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-green-50 rounded-lg"
            >
              <FileText className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Impact Reporting</h3>
              <p className="text-gray-600">Receive detailed impact reports showing the direct social and environmental benefits of your collaboration.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Our Partners Speak</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {collaborations.map((collab, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-white rounded-lg shadow-sm"
              >
                <Building2 className="w-8 h-8 text-green-600 mb-4" />
                <p className="text-gray-600 italic mb-4">"{collab.testimonial}"</p>
                <div>
                  <p className="font-semibold text-green-800">{collab.author}</p>
                  <p className="text-sm text-gray-500">{collab.role} - {collab.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8">Let's discuss how we can collaborate to create sustainable change.</p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-green-900 rounded-lg hover:bg-green-100 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Corporate;