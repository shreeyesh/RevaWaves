import { Menu, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Products', path: '/products' },
    { title: 'Custom Orders', path: '/custom' },
    { title: 'Our Impact', path: '/impact' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-stone-50 fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-semibold text-green-800">EcoGift</Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="text-green-700 hover:text-green-900 transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <ShoppingBag className="w-6 h-6 text-green-700 cursor-pointer hover:text-green-900" />
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6 text-green-700" /> : <Menu className="h-6 w-6 text-green-700" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-stone-50"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="block px-3 py-2 text-green-700 hover:text-green-900"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;