import React, { useState, useEffect } from 'react';
import { getAllOrders, updateOrderStatus } from '../../service/orderAPI';
import { useToast } from '../../hooks/useToast';
import './OrderManagement.css';

export default function OrderManagement() {
  const toast = useToast();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        const data = await getAllOrders(token);
        setOrders(Array.isArray(data) ? data : data.orders || []);
      } catch (error) {
        console.error('Error fetching orders:', error);
        toast.error('Không thể tải đơn hàng');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const token = localStorage.getItem('token');
      await updateOrderStatus(orderId, newStatus, token);
      setOrders(
        orders.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
      toast.success('Cập nhật trạng thái thành công');
    } catch (error) {
      toast.error('Lỗi khi cập nhật: ' + error.message);
    }
  };

  const filteredOrders =
    filter === 'all'
      ? orders
      : orders.filter((order) => order.status === filter);

  if (loading) {
    return <div className="order-management">Đang tải...</div>;
  }

  return (
    <div className="order-management">
      <h1>Quản Lý Đơn Hàng</h1>

      <div className="filter-section">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Tất Cả Đơn Hàng</option>
          <option value="pending">Chờ Xác Nhận</option>
          <option value="paid">Đã Thanh Toán</option>
          <option value="shipped">Đã Gửi</option>
          <option value="completed">Hoàn Thành</option>
          <option value="cancelled">Đã Hủy</option>
        </select>
      </div>

      {filteredOrders.length === 0 ? (
        <p className="empty-state">Không có đơn hàng</p>
      ) : (
        <div className="orders-table-wrapper">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Mã Đơn</th>
                <th>Khách Hàng</th>
                <th>Tổng Tiền</th>
                <th>Trạng Thái</th>
                <th>Ngày Tạo</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <React.Fragment key={order._id}>
                  <tr>
                    <td className="order-code">{order._id?.substring(0, 8)}</td>
                    <td>{order.user ? order.user.name : order.shippingAddress.fullName}</td>
                    <td className="order-amount">
                      {order.totalPrice?.toLocaleString('vi-VN')} VND
                    </td>
                    <td>
                      <span className={`status-badge ${order.status}`}>
                        {getStatusLabel(order.status)}
                      </span>
                    </td>
                    <td>{new Date(order.createdAt).toLocaleDateString('vi-VN')}</td>
                    <td>
                      <select
                        value={order.status}
                        onChange={(e) =>
                          handleStatusChange(order._id, e.target.value)
                        }
                        className="status-select"
                      >
                        <option value="pending">Chờ Xác Nhận</option>
                        <option value="paid">Đã Thanh Toán</option>
                        <option value="shipped">Đã Gửi</option>
                        <option value="completed">Hoàn Thành</option>
                        <option value="cancelled">Đã Hủy</option>
                      </select>
                      <button
                        className="expand-btn"
                        onClick={() =>
                          setExpandedOrder(
                            expandedOrder === order._id ? null : order._id
                          )
                        }
                      >
                        {expandedOrder === order._id ? 'Ẩn' : 'Chi Tiết'}
                      </button>
                    </td>
                  </tr>
                  {expandedOrder === order._id && (
                    <tr className="order-details show">
                      <td colSpan="6">
                        <div className="details-content">
                          <div className="details-section">
                            <h4>Thông Tin Giao Hàng</h4>
                            <p><strong>Tên:</strong> {order.shippingAddress.fullName}</p>
                            <p><strong>Email:</strong> {order.shippingAddress.email || '-'}</p>
                            <p><strong>Điện Thoại:</strong> {order.shippingAddress.phone}</p>
                            <p><strong>Địa Chỉ:</strong> {order.shippingAddress.address}</p>
                          </div>

                          <div className="details-section">
                            <h4>Sản Phẩm ({order.items.length})</h4>
                            <div className="items-list">
                              {order.items.map((item, idx) => (
                                <div key={idx} className="item-row">
                                  <span className="item-name">{item.name}</span>
                                  <span className="item-qty">x{item.quantity}</span>
                                  <span className="item-price">
                                    {item.price?.toLocaleString('vi-VN')} VND
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="details-section">
                            <h4>Thanh Toán</h4>
                            <p><strong>Phương Thức:</strong> {order.paymentMethod || 'COD'}</p>
                            <p><strong>Trạng Thái:</strong> {order.isPaid ? 'Đã Thanh Toán' : 'Chưa Thanh Toán'}</p>
                            {order.paidAt && <p><strong>Ngày:</strong> {new Date(order.paidAt).toLocaleDateString('vi-VN')}</p>}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function getStatusLabel(status) {
  const labels = {
    pending: 'Chờ Xác Nhận',
    paid: 'Đã Thanh Toán',
    shipped: 'Đã Gửi',
    completed: 'Hoàn Thành',
    cancelled: 'Đã Hủy',
  };
  return labels[status] || status;
}
