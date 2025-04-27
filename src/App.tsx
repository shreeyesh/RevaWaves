import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import './index.css';

const mockProducts = [
  {
    title: "Eco-Friendly Journal",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80",
    category: "Stationery",
    sdgGoals: ["SDG 12", "SDG 15"]
  },
  {
    title: "Bamboo Plant Pot",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80",
    category: "Home & Garden",
    sdgGoals: ["SDG 11", "SDG 13"]
  },
  {
    title: "Recycled Canvas Bag",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80",
    category: "Bags",
    sdgGoals: ["SDG 12", "SDG 14"]
  }
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50">
        <Navbar />
        <Hero />
        
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;