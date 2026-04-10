import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProductById } from '../../../service/productAPI';
import { CartContext } from '../../../context/CartContext';
import { BASE_URL } from '../../../service/config';
import { useToast } from '../../../hooks/useToast';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError('Không thể tải sản phẩm');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product, quantity);
    toast.success('Đã thêm vào giỏ hàng!');
  };

  const handleBuyNow = () => {
    if (!product) return;
    addToCart(product, quantity);
    navigate('/checkout');
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  if (loading) {
    return <div className="container text-center" style={{ padding: '3rem 0' }}>Đang tải...</div>;
  }

  if (error || !product) {
    return (
      <div className="container" style={{ padding: '3rem 1rem' }}>
        <div className="text-center">
          <h2>{error || 'Sản phẩm không tìm thấy'}</h2>
          <Link to="/products" className="btn btn-primary mt-3">
            Quay Lại Danh Sách
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-link">← Quay Lại</button>

        <div className="product-detail-content">
          <div className="product-detail-image">
            <img
              src={`${BASE_URL}${product.images?.[0] || '/upload/placeholder.jpg'}`}
              alt={product.name}
              onError={(e) => (e.target.src = '🏺')}
            />
          </div>

          <div className="product-detail-info">
            <h1>{product.name}</h1>

            <div className="product-detail-meta">
              <span className="product-code">{product.code}</span>
            </div>

            <div className="product-detail-price">
              <span className="price">
                {product.price?.toLocaleString('vi-VN')} VND
              </span>
              {product.originalPrice && (
                <span className="original-price">
                  {product.originalPrice?.toLocaleString('vi-VN')} VND
                </span>
              )}
            </div>

            <div className="product-detail-description">
              <h3>Mô Tả</h3>
              <p>{product.description}</p>
            </div>

            {product.material && (
              <div className="product-detail-spec">
                <h3>Vật Liệu</h3>
                <p>{product.material}</p>
              </div>
            )}

            {product.size && (
              <div className="product-detail-spec">
                <h3>Kích Thước</h3>
                <p>{product.size}</p>
              </div>
            )}

            <div className="product-detail-actions">
              <div className="quantity-selector">
                <label htmlFor="quantity">Số Lượng:</label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  max="99"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </div>

              <button className="btn btn-primary btn-large" onClick={handleAddToCart}>
                Thêm Vào Giỏ Hàng
              </button>
              <button className="btn btn-secondary btn-large" onClick={handleBuyNow}>
                Mua Ngay
              </button>
            </div>

            <div className="product-detail-notes">
              <h3>Chú Ý</h3>
              <ul>
                <li>Mỗi tác phẩm là độc bản</li>
                <li>Tư vấn trực tiếp: 0905266668</li>
                <li>Hỗ trợ giao hàng toàn quốc</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="product-additional">
          <h2>Phong Thủy & Ý Nghĩa</h2>
          <div className="additional-content">
            <p>
              Liên Tâm Gốm không chỉ là những tác phẩm nghệ thuật, mà còn là vật phẩm phong thủy mang ý nghĩa sâu sắc. Hoa sen - biểu tượng chính của bộ sưu tập, đại diện cho sự thanh cao, khả năng vươn lên từ bùn lầy, và sự kết nối với tâm linh.
            </p>
            <p>
              Mỗi tác phẩm được tạo nên từ kỹ thuật gốm truyền thống Chu Đậu (Hải Dương), kết hợp với thiết kế đương đại, nhằm mang lại cân bằng năng lượng và an định cho không gian sống của bạn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
