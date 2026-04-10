import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useIsAdmin } from '../../hooks/useIsAdmin';
import Dashboard from './Dashboard';
import OrderManagement from './OrderManagement';
import UserManagement from './UserManagement';
import ProductManagement from './ProductManagement';
import './AdminLayout.css';

export default function AdminLayout() {
  const navigate = useNavigate();
  const isAdmin = useIsAdmin();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const storedUser = localStorage.getItem('user');

  useEffect(() => {
    if (!storedUser || !isAdmin) {
      navigate('/');
    }
  }, [navigate, isAdmin, storedUser]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="admin-layout">
      <div className={`admin-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>Admin</h2>
          <button
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
        </div>

        <nav className="sidebar-menu">
          <Link
            to="/admin"
            className="menu-item"
            onClick={() => setSidebarOpen(false)}
          >
            📊 Dashboard
          </Link>
          <Link
            to="/admin/orders"
            className="menu-item"
            onClick={() => setSidebarOpen(false)}
          >
            📦 Quản Lý Đơn Hàng
          </Link>
          <Link
            to="/admin/products"
            className="menu-item"
            onClick={() => setSidebarOpen(false)}
          >
            🏺 Quản Lý Sản Phẩm
          </Link>
          <Link
            to="/admin/users"
            className="menu-item"
            onClick={() => setSidebarOpen(false)}
          >
            👥 Quản Lý Người Dùng
          </Link>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            Đăng Xuất
          </button>
        </div>
      </div>

      <div className="admin-main">

        <main className="admin-content">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<OrderManagement />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="users" element={<UserManagement />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
