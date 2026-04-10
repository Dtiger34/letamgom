import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../../service/authAPI';
import { useToast } from '../../../hooks/useToast';
import './auth.css';

export default function Register() {
  const navigate = useNavigate();
  const toast = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.passwordConfirm) {
      setError('Mật khẩu không khớp');
      return;
    }

    setLoading(true);

    try {
      await register({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
      });
      toast.success('Đăng ký thành công! Vui lòng đăng nhập.');
      navigate('/login');
    } catch (err) {
      toast.error(err.message || 'Đăng ký thất bại');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form-wrapper">
          <h1>Đăng Ký</h1>
          <p>Tạo tài khoản tại Liên Tâm Gốm</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Họ Tên</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                placeholder="Nhập họ tên của bạn"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Nhập email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Điện Thoại</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Nhập số điện thoại"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mật Khẩu</label>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="Nhập mật khẩu (tối thiểu 6 ký tự)"
              />
            </div>

            <div className="form-group">
              <label htmlFor="passwordConfirm">Xác Nhận Mật Khẩu</label>
              <input
                id="passwordConfirm"
                type="password"
                name="passwordConfirm"
                value={formData.passwordConfirm}
                onChange={handleInputChange}
                required
                placeholder="Nhập lại mật khẩu"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-large"
              disabled={loading}
            >
              {loading ? 'Đang đăng ký...' : 'Đăng Ký'}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Đã có tài khoản? <Link to="/login">Đăng nhập tại đây</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
