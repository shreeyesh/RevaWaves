import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EcoGift</h3>
            <p className="text-gray-300">Sustainable gifts for a better tomorrow. Making eco-friendly choices accessible and beautiful.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/products" className="text-gray-300 hover:text-white">Products</a></li>
              <li><a href="/custom-request" className="text-gray-300 hover:text-white">Custom Request</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: hello@ecogift.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Green Street, Eco City</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-green-800 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} EcoGift. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer