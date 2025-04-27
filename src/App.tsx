import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Corporate from './pages/Corporate';
import Impact from './pages/Impact';
import Training from './pages/Training';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import './index.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-stone-50 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/corporate" element={<Corporate />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/training" element={<Training />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Cart />
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;