import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Toast from './components/Toast';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/public/product/Products';
import ProductDetail from './pages/public/product/ProductDetail';
import Cart from './pages/public/cart/Cart';
import Checkout from './pages/public/cart/Checkout';
import ThankYou from './pages/public/cart/ThankYou';
import Contact from './pages/public/contact/Contact';
import Login from './pages/public/auth/Login';
import Register from './pages/public/auth/Regist';
import AdminLayout from './pages/admin/AdminLayout';
import './App.css';

export default function App() {
  return (
    <Router>
      <CartProvider>
        <ToastProvider>
          <ScrollToTop />
          <Header />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin/*" element={<AdminLayout />} />
            </Routes>
          </main>
          <Footer />
          <Toast />
        </ToastProvider>
      </CartProvider>
    </Router>
  );
}
