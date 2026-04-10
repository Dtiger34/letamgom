import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useIsAdmin } from '../hooks/useIsAdmin';
import './Header.css';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const isAdmin = useIsAdmin();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUserMenuOpen(false);
    navigate('/');
    window.location.reload();
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src="/image/Logo.png" alt="Liên Tâm Gốm" className="logo-image" />
          </Link>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setMobileMenuOpen(false)}>
            Trang Chủ
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={() => setMobileMenuOpen(false)}>
            Giới Thiệu
          </Link>
          <Link to="/products" className={`nav-link ${isActive('/products')}`} onClick={() => setMobileMenuOpen(false)}>
            Sản Phẩm
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setMobileMenuOpen(false)}>
            Liên hệ
          </Link>
          {isAdmin && (
            <Link to="/admin" className={`nav-link admin-link ${isActive('/admin')}`}>
              Quản Trị
            </Link>
          )}
        </nav>

        <div className="header-actions">
          <Link to="/cart" className="cart-link">
            <span className="cart-icon">🛒</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          {user ? (
            <div className="user-menu">
              <button
                className="user-button"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                👤
              </button>
              {userMenuOpen && (
                <div className="user-dropdown">
                  <div className="user-name">{user.fullName || user.email}</div>
                  {user.role === 'admin' && (
                    <Link to="/admin" className="dropdown-link" onClick={() => setUserMenuOpen(false)}>
                      Quản Trị
                    </Link>
                  )}
                  <button className="dropdown-link logout-btn" onClick={handleLogout}>
                    Đăng Xuất
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="login-link">
              Đăng Nhập
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
