import { motion } from 'framer-motion';
import { Target, Award, FileText, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface Collaboration {
  company: string;
  testimonial: string;
  author: string;
  role: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 bg-green-50 rounded-lg"
    role="article"
  >
    <div className="text-green-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const FAQAccordion: React.FC<{ faq: FAQItem }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-green-100">
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-green-800">{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="text-green-600 w-5 h-5" />
        ) : (
          <ChevronDown className="text-green-600 w-5 h-5" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-gray-600">{faq.answer}</p>
      </motion.div>
    </div>
  );
};

const Corporate = () => {
  const collaborations: Collaboration[] = [
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

  const faqs: FAQItem[] = [
    {
      question: "What types of corporate gifts do you offer?",
      answer: "We offer a wide range of sustainable corporate gifts including eco-friendly stationery, plantable products, organic gift hampers, and customized sustainable merchandise. All our products are environmentally conscious and ethically sourced."
    },
    {
      question: "How can we customize gifts for our company?",
      answer: "We provide various customization options including company branding, custom packaging, and personalized messages. We can also create bespoke gift solutions that align with your company's values and sustainability goals."
    },
    {
      question: "What is the minimum order quantity for corporate gifts?",
      answer: "Our minimum order quantity starts at 50 pieces for standard items. For custom orders, the minimum quantity may vary depending on the product type and customization requirements."
    },
    {
      question: "How do you measure and report impact?",
      answer: "We provide detailed impact reports that include metrics such as carbon footprint reduction, plastic waste avoided, and social impact created. These reports can be customized to align with your company's ESG reporting requirements."
    },
    {
      question: "What are your delivery timelines for bulk orders?",
      answer: "Standard delivery timeline for bulk orders is 2-3 weeks. For custom orders, it may take 3-4 weeks. We also offer express delivery options for urgent requirements."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0')] bg-cover bg-center">
          <div className="absolute inset-0 bg-green-900/40 backdrop-blur-sm"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Corporate Gifting & CSR Collaboration</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Partner with us to create sustainable impact while meeting your corporate social responsibility goals.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            aria-label="Contact us for corporate collaboration"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>

      {/* Why Collaborate Section */}
      <section className="py-16 bg-white" aria-labelledby="why-partner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="why-partner" className="text-3xl font-bold text-green-800 mb-12 text-center">Why Partner With Us?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Target className="w-12 h-12" />}
              title="Meet CSR & ESG Goals"
              description="Align your corporate initiatives with sustainable development goals and make a measurable impact."
            />
            <FeatureCard
              icon={<Award className="w-12 h-12" />}
              title="Sustainable Gifting"
              description="Choose from our range of eco-friendly corporate gifts that make a statement about your company's values."
            />
            <FeatureCard
              icon={<FileText className="w-12 h-12" />}
              title="Impact Reporting"
              description="Receive detailed impact reports showing the direct social and environmental benefits of your collaboration."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-green-50" aria-labelledby="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="testimonials" className="text-3xl font-bold text-green-800 mb-12 text-center">Our Partners Speak</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {collaborations.map((collab, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="p-6 bg-white rounded-lg shadow-sm"
                role="testimonial"
              >
                <Building2 className="w-8 h-8 text-green-600 mb-4" aria-hidden="true" />
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

      {/* FAQ Section */}
      <section className="py-16 bg-white" aria-labelledby="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq" className="text-3xl font-bold text-green-800 mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQAccordion key={index} faq={faq} />
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
            aria-label="Schedule a consultation meeting"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Corporate;