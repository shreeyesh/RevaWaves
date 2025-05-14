import { Icon } from '@iconify/react';
import { Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const socialLinks = [
    {
      name: "Instagram",
      icon: "mdi:instagram",
      url: "#",
      color: "#E4405F"
    },
    {
      name: "Facebook",
      icon: "mdi:facebook",
      url: "#",
      color: "#1877F2"
    },
    {
      name: "LinkedIn",
      icon: "mdi:linkedin",
      url: "#",
      color: "#0A66C2"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-12 mt-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-0 text-center">Contact Us</h1>
      <p className="text-gray-600 text-center mb-12">We'd love to hear from you. Get in touch with us.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Contact Information */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-4">Direct Contact</h2>
            
            <div className="space-y-4">
              <a 
                href="mailto:revawaves.sustainablelife@gmail.com"
                className="flex items-center gap-3 text-lg p-3 rounded-lg hover:bg-gray-50 transition-all group"
              >
                <Mail className="text-gray-600 group-hover:text-green-600 transition-colors" />
                <span className="group-hover:text-green-600 transition-colors">
                  revawaves.sustainablelife@gmail.com
                </span>
              </a>
              
              <a 
                href="tel:+917861085125"
                className="flex items-center gap-3 text-lg p-3 rounded-lg hover:bg-gray-50 transition-all group"
              >
                <Phone className="text-gray-600 group-hover:text-green-600 transition-colors" />
                <span className="group-hover:text-green-600 transition-colors">
                  +91 78610 85125
                </span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg hover:bg-gray-50 transition-all transform hover:-translate-y-1"
                  style={{ color: social.color }}
                >
                  <Icon icon={social.icon} className="text-3xl" />
                </a>
              ))}
            </div>
          </div>

          <a 
            href={`https://wa.me/917861085125`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-4 rounded-lg hover:bg-green-600 transition-all transform hover:-translate-y-1 w-full"
          >
            <Icon icon="mdi:whatsapp" className="text-2xl" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;