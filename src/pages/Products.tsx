import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  
  const categories = Array.from(new Set(products.map(p => p.category)));
  
  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <div className="container mx-auto px-4 py-16 mt-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-4 md:mb-0">Our Products</h1>
        
        <div className="flex items-center gap-4">
          <Filter className="text-green-700" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-green-200 rounded-lg px-4 py-2 text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;