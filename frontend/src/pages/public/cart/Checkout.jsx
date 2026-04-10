import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import { createOrder } from '../../../service/orderAPI';
import { useToast } from '../../../hooks/useToast';
import { BASE_URL } from '../../../service/config';
import './Checkout.css';

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    customerAddress: '',
    notes: '',
    paymentMethod: 'cod',
  });

  if (cart.length === 0) {
    return (
      <div className="container text-center" style={{ padding: '3rem 1rem' }}>
        <h2>Giỏ hàng trống</h2>
        <p>Vui lòng thêm sản phẩm trước khi thanh toán</p>
        <button className="btn btn-primary" onClick={() => navigate('/products')}>
          Quay Lại
        </button>
      </div>
    );
  }

  const subtotal = getTotalPrice();
  const shippingFee = 40000;
  const totalPrice = subtotal + shippingFee;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const orderData = {
        items: cart.map((item) => ({
          productId: item._id,
          quantity: item.quantity,
          price: item.price,
        })),
        shippingAddress: {
          fullName: formData.customerName,
          email: formData.customerEmail,
          phone: formData.customerPhone,
          address: formData.customerAddress,
        },
        notes: formData.notes,
        paymentMethod: formData.paymentMethod,
        totalAmount: totalPrice,
      };

      const response = await createOrder(orderData);
      clearCart();
      toast.success('Đơn hàng đã được tạo thành công!');
      navigate('/thank-you', { state: { orderId: response._id } });
    } catch (error) {
      toast.error('Lỗi khi tạo đơn hàng: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <h1>Thanh Toán</h1>

        <div className="checkout-content">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h2>Thông Tin Giao Hàng</h2>

            <div className="form-group">
              <label htmlFor="customerName">Họ Tên *</label>
              <input
                id="customerName"
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="customerEmail">Email *</label>
                <input
                  id="customerEmail"
                  type="email"
                  name="customerEmail"
                  value={formData.customerEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="customerPhone">Điện Thoại *</label>
                <input
                  id="customerPhone"
                  type="tel"
                  name="customerPhone"
                  value={formData.customerPhone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="customerAddress">Địa Chỉ Giao Hàng *</label>
              <textarea
                id="customerAddress"
                name="customerAddress"
                value={formData.customerAddress}
                onChange={handleInputChange}
                placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố"
                rows="3"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="notes">Ghi Chú Đơn Hàng</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows="3"
                placeholder="Ví dụ: Giao trong giờ hành chính, yêu cầu đặc biệt..."
              />
            </div>

            <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
              Phương Thức Thanh Toán
            </h2>

            <div className="payment-options">
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleInputChange}
                />
                <span>Thanh toán khi nhận hàng (COD)</span>
              </label>
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="other"
                  checked={formData.paymentMethod === 'other'}
                  onChange={handleInputChange}
                />
                <span>Liên hệ để thống nhất</span>
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-large"
              disabled={loading}
              style={{ width: '100%', marginTop: '2rem' }}
            >
              {loading ? 'Đang xử lý...' : 'Xác Nhận Đơn Hàng'}
            </button>
          </form>

          <div className="checkout-summary">
            <div className="summary-box">
              <h3>Đơn Hàng Của Bạn</h3>

              <div className="summary-items">
                {cart.map((item) => (
                  <div key={item._id} className="summary-item">
                    <div className="item-image">
                      <img
                        src={`${BASE_URL}${item.images?.[0] || '/upload/placeholder.jpg'}`}
                        alt={item.name}
                        onError={(e) => (e.target.src = '/image/placeholder.jpg')}
                      />
                    </div>
                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <p>x{item.quantity}</p>
                    </div>
                    <div className="item-price">
                      {(item.price * item.quantity)?.toLocaleString('vi-VN')} VND
                    </div>
                  </div>
                ))}
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row">
                <span>Subtotal:</span>
                <span>{subtotal?.toLocaleString('vi-VN')} VND</span>
              </div>

              <div className="summary-row">
                <span>Vận Chuyển:</span>
                <span>{shippingFee?.toLocaleString('vi-VN')} VND</span>
              </div>

              <div className="summary-row total">
                <span>Tổng Cộng:</span>
                <span>{totalPrice?.toLocaleString('vi-VN')} VND</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
