import { Icon } from '@iconify/react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
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

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="space-y-8">
        {/* Direct Contact Information */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-lg">
            <Mail className="text-gray-600" />
            <a 
              href="mailto:revawaves.sustainablelife@gmail.com"
              className="hover:text-green-600 transition-colors"
            >
              revawaves.sustainablelife@gmail.com
            </a>
          </div>
          
          <div className="flex items-center gap-3 text-lg">
            <Phone className="text-gray-600" />
            <a 
              href="tel:+917861085125"
              className="hover:text-green-600 transition-colors"
            >
              +91 78610 85125
            </a>
          </div>
        </section>

        {/* WhatsApp Business Link */}
        <section>
          <a 
            href={`https://wa.me/917861085125`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            <Icon icon="mdi:whatsapp" className="text-2xl" />
            Chat on WhatsApp
          </a>
        </section>

        {/* Social Media Links */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-gray-100 transition-colors"
                style={{ color: social.color }}
              >
                <Icon icon={social.icon} className="text-3xl" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;