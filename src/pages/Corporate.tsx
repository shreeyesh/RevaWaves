import { motion } from 'framer-motion';
import { Building2, Gift, Users, Briefcase } from 'lucide-react';

const Corporate = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-green-800 mb-4">Corporate Solutions</h1>
          <p className="text-green-700 text-lg mb-8">
            Sustainable corporate gifting and partnership opportunities that make a difference.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Building2 className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Corporate Gifting</h3>
                  <p className="text-gray-600">
                    Unique, sustainable gifts that reflect your company's commitment to social responsibility 
                    and environmental stewardship.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Gift className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Custom Solutions</h3>
                  <p className="text-gray-600">
                    Tailored gifting programs designed to meet your specific needs and brand requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Impact Partnerships</h3>
                  <p className="text-gray-600">
                    Join forces with us to create meaningful social impact while meeting your business objectives.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Request Information</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-green-800 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-green-800 mb-1">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-green-800 mb-1">
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option>Corporate Gifting</option>
                    <option>Custom Solutions</option>
                    <option>Impact Partnerships</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-green-800 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="w-12 h-12 text-green-600 mb-4" />,
                title: "Bulk Orders",
                description: "Special pricing and dedicated support for large corporate orders."
              },
              {
                icon: <Gift className="w-12 h-12 text-green-600 mb-4" />,
                title: "Custom Branding",
                description: "Add your company's logo and branding to our sustainable products."
              },
              {
                icon: <Users className="w-12 h-12 text-green-600 mb-4" />,
                title: "CSR Programs",
                description: "Partner with us for your corporate social responsibility initiatives."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                {item.icon}
                <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Corporate;