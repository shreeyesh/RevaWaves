import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  sdgGoals: string[];
}

const ProductCard = ({ id, title, price, image, category, sdgGoals }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, title, price, image });
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-sm text-green-600 font-medium">{category}</span>
        <h3 className="text-lg font-semibold text-green-800 mt-1">{title}</h3>
        <p className="text-green-700 font-medium mt-2">${price.toFixed(2)}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {sdgGoals.map((goal) => (
            <span
              key={goal}
              className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
            >
              {goal}
            </span>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          className="mt-4 w-full bg-green-700 text-white py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-green-800 transition-colors"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Add to Cart</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;