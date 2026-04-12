import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import { BASE_URL } from '../../../service/config';
import './Cart.css';

export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useContext(CartContext);
  const totalPrice = getTotalPrice();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Giỏ Hàng</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Giỏ hàng của bạn trống</h2>
            <p>Hãy khám phá bộ sưu tập sản phẩm của chúng tôi</p>
            <Link to="/products" className="btn btn-primary btn-large">
              Tiếp Tục Mua Sắm
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Sản Phẩm</th>
                    <th>Giá</th>
                    <th>Số Lượng</th>
                    <th>Tổng Cộng</th>
                    <th>Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item._id} className="cart-item">
                      <td className="cart-product">
                        <img
                          src={`${BASE_URL}${item.images?.[0] || '/upload/placeholder.jpg'}`}
                          alt={item.name}
                          onError={(e) => (e.target.src = '/image/placeholder.jpg')}
                        />
                        <div>
                          <h4>{item.name}</h4>
                        </div>
                      </td>
                      <td className="cart-price">
                        {item.price?.toLocaleString('vi-VN')} VND
                      </td>
                      <td className="cart-quantity">
                        <input
                          type="number"
                          min="1"
                          max="99"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(item._id, parseInt(e.target.value))
                          }
                        />
                      </td>
                      <td className="cart-total">
                        {(item.price * item.quantity)?.toLocaleString('vi-VN')} VND
                      </td>
                      <td className="cart-actions">
                        <button
                          className="btn btn-danger btn-small"
                          onClick={() => removeFromCart(item._id)}
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="cart-actions-bottom">
                <button
                  className="btn btn-secondary"
                  onClick={() => navigate('/products')}
                >
                  Tiếp Tục Mua Sắm
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    if (confirm('Xác nhận xóa tất cả sản phẩm?')) {
                      clearCart();
                    }
                  }}
                >
                  Xóa Tất Cả
                </button>
              </div>
            </div>

            <div className="cart-summary">
              <div className="summary-box">
                <h3>Tóm Tắt Đơn Hàng</h3>
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>{totalPrice?.toLocaleString('vi-VN')} VND</span>
                </div>
                <div className="summary-row">
                  <span>Vận Chuyển:</span>
                  <span>Tính tại thanh toán</span>
                </div>
                <div className="summary-row total">
                  <span>Tổng Cộng:</span>
                  <span>{totalPrice?.toLocaleString('vi-VN')} VND</span>
                </div>
                <Link to="/checkout" className="btn btn-primary btn-large">
                  Tiến Hành Thanh Toán
                </Link>
                <p className="summary-note">
                  Bạn sẽ nhập thông tin vận chuyển tại trang thanh toán
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
