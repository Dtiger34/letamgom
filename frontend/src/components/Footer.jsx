import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src="/image/Logo.png" alt="Liên Tâm Gốm" className="footer-logo" />
          <p>
            Hoa sen từ trầm tích, chạm đến lòng người
          </p>
        </div>

        <div className="footer-section">
          <h4>Liên Kết Nhanh</h4>
          <ul>
            <li><Link to="/">Trang Chủ</Link></li>
            <li><Link to="/about">Giới Thiệu</Link></li>
            <li><Link to="/products">Sản Phẩm</Link></li>
            <li><Link to="/contact">Liên Hệ</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Thông Tin Liên Hệ</h4>
          <p>📞 Hotline:0905 266 668</p>
          <p>📧 Email: lientamgom@gmail.com</p>
          <p>📍 Địa chỉ: 69 Lãn Ông, Quận Hoàn Kiếm, TP Hà Nội</p>
        </div>

        <div className="footer-section">
          <h4>Theo Dõi</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/share/1E4a4BuYo5/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
