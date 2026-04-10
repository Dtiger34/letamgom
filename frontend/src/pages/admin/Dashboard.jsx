import { useState, useEffect } from 'react';
import { getAllOrders } from '../../service/orderAPI';
import { getProducts } from '../../service/productAPI';
import { getUsers } from '../../service/userAPI';
import './Dashboard.css';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    totalProducts: 0,
    totalUsers: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('token');
        const ordersData = await getAllOrders(token);
        const productsData = await getProducts({});
        const usersData = await getUsers(token);

        const orders = Array.isArray(ordersData) ? ordersData : ordersData.orders || [];
        const products = Array.isArray(productsData) ? productsData : productsData.products || [];
        const users = Array.isArray(usersData) ? usersData : usersData.users || [];

        const totalRevenue = orders.reduce((sum, order) => sum + (order.totalAmount || 0), 0);

        setStats({
          totalOrders: orders.length,
          totalRevenue,
          totalProducts: products.length,
          totalUsers: users.length,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div className="dashboard">Đang tải...</div>;
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <div className="stat-content">
            <h3>Tổng Đơn Hàng</h3>
            <p className="stat-value">{stats.totalOrders}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h3>Tổng Doanh Thu</h3>
            <p className="stat-value">
              {stats.totalRevenue?.toLocaleString('vi-VN')} VND
            </p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🏺</div>
          <div className="stat-content">
            <h3>Tổng Sản Phẩm</h3>
            <p className="stat-value">{stats.totalProducts}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>Tổng Người Dùng</h3>
            <p className="stat-value">{stats.totalUsers}</p>
          </div>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Tính Năng Quản Trị</h2>
        <ul className="feature-list">
          <li>✅ Xem và quản lý tất cả đơn hàng</li>
          <li>✅ Cập nhật trạng thái đơn hàng</li>
          <li>✅ Quản lý danh sách sản phẩm</li>
          <li>✅ Xem thông tin người dùng</li>
          <li>✅ Theo dõi doanh thu theo thời gian</li>
        </ul>
      </div>
    </div>
  );
}
