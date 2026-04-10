import { Link } from 'react-router-dom';
import './ThankYou.css';

export default function ThankYou() {
  return (
    <div className="thank-you-page">
      <div className="container">
        <div className="thank-you-content">
          <div className="success-icon">✓</div>
          <h1>Cảm Ơn Bạn!</h1>
          <p className="main-message">
            Đơn hàng của bạn đã được tạo thành công. Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ để xác nhận đơn hàng.
          </p>

          <div className="next-steps">
            <h3>Bước Tiếp Theo:</h3>
            <ol>
              <li>Chúng tôi sẽ liên hệ với bạn để xác nhận đơn hàng</li>
              <li>Tiến hành đóng gói sản phẩm và vận chuyển</li>
              <li>Kiểm tra sản phẩm và xác nhận nhận hàng</li>
            </ol>
          </div>

          <div className="contact-info">
            <h3>Cần Hỗ Trợ?</h3>
            <p>
              📞 Hotline:0905 266 668
            </p>
            <p>Thời gian hỗ trợ: 8:00 - 18:00 (Thứ 2 - Thứ 7)</p>
          </div>

          <div className="thank-you-actions">
            <Link to="/products" className="btn btn-primary btn-large">
              Tiếp Tục Mua Sắm
            </Link>
            <Link to="/" className="btn btn-secondary btn-large">
              Quay Về Trang Chủ
            </Link>
          </div>

          <div className="notes">
            <p>
              <strong>Lưu Ý:</strong> Mỗi tác phẩm gốm của Liên Tâm Gốm là độc bản được làm thủ công.
              Quá trình sản xuất có thể mất từ 5-15 ngày tùy vào độ phức tạp của sản phẩm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
