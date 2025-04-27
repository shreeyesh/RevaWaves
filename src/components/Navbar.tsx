import { Link } from 'react-router-dom'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 top-0 left-0 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-semibold text-green-800">EcoGift</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-700">Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-green-700">Products</Link>
              <Link to="/custom-request" className="text-gray-700 hover:text-green-700">Custom Request</Link>
              <Link to="/about" className="text-gray-700 hover:text-green-700">About</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-green-700">Home</Link>
              <Link to="/products" className="block px-3 py-2 text-gray-700 hover:text-green-700">Products</Link>
              <Link to="/custom-request" className="block px-3 py-2 text-gray-700 hover:text-green-700">Custom Request</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-green-700">About</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar