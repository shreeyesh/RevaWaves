import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';

// Sample product data - in a real app, this would come from an API
const products = [
  {
    id: '1',
    title: 'Eco-Friendly Tote Bag',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1597484662317-9bd7bdda2907',
    category: 'Bags',
    sdgGoals: ['Responsible Consumption', 'Gender Equality']
  },
  {
    id: '2',
    title: 'Sustainable Water Bottle',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
    category: 'Accessories',
    sdgGoals: ['Clean Water', 'Climate Action']
  },
  {
    id: '3',
    title: 'Handwoven Table Runner',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443',
    category: 'Home',
    sdgGoals: ['Decent Work', 'Reduced Inequalities']
  },
  {
    id: '4',
    title: 'Recycled Paper Journal',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1589495374906-b7f5ca5de879',
    category: 'Stationery',
    sdgGoals: ['Responsible Consumption', 'Climate Action']
  },
  {
    id: '5',
    title: 'Bamboo Cutlery Set',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1584346133934-a3afd2a33c3c',
    category: 'Kitchen',
    sdgGoals: ['Life on Land', 'Responsible Consumption']
  },
  {
    id: '6',
    title: 'Organic Cotton Scarf',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1601244005535-a48d21d951ac',
    category: 'Accessories',
    sdgGoals: ['Decent Work', 'Responsible Consumption']
  }
];

const categories = ['All', 'Bags', 'Accessories', 'Home', 'Stationery', 'Kitchen'];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16 min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Our Products</h1>
          <p className="text-green-700">Discover our collection of sustainable and ethically made products.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Category filters */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-green-700 hover:bg-green-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;