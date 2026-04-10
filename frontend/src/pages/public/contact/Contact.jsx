import { useState } from 'react';
import { sendContactMessage } from '../../../service/contactAPI';
import { useToast } from '../../../hooks/useToast';
import './Contact.css';

export default function Contact() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
    setSuccess(false);

    try {
      await sendContactMessage(formData);
      toast.success('Tin nhắn đã được gửi thành công!');
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      toast.error('Lỗi khi gửi tin nhắn: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      
      {/* Contact Content - 2 Columns */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column - Contact Info */}
            <div className="contact-left">
              <div className="contact-info">
                <div className="info-item">
                  <label>Địa Chỉ</label>
                  <p>69 Lãn Ông, Quận Hoàn Kiếm, Tp Hà Nội</p>
                </div>

                <div className="info-item">
                  <label>Điện Thoại</label>
                  <p>0905 266 668</p>
                </div>

                <div className="info-item">
                  <label>Email</label>
                  <p>lientamgom@gmail.com</p>
                </div>

                <div className="info-item">
                  <label>Giờ Hoạt Động</label>
                  <p>
                    Thứ 2 - Thứ 6: 8:00 - 18:00<br />
                    Thứ 7: 8:00 - 17:00<br />
                    Chủ Nhật: Đóng cửa
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="contact-right">
              {success && (
                <div className="success-message">
                  ✓ Tin nhắn của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ lại sớm nhất.
                </div>
              )}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Họ Tên"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Điện Thoại"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Nội Dung"
                    rows="5"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="submit-btn"
                >
                  {loading ? 'Đang gửi...' : 'GỬI'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
