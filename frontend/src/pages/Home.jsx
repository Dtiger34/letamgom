import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getProducts } from '../service/productAPI';
import { CartContext } from '../context/CartContext';
import { BASE_URL } from '../service/config';
import { useToast } from '../hooks/useToast';
import './home.css';

export default function Home() {
  const navigate = useNavigate();
  const toast = useToast();
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts({ limit: 4 });
        // Get products from API and filter only active ones
        const allProducts = data.products || data.data || [];
        const activeProducts = allProducts.filter((p) => p.active !== false);
        setFeaturedProducts(activeProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    toast.success('Đã thêm vào giỏ hàng!');
  };

  return (
    <div className="home">
      {/* Hero Section - Full Width */}
      <section className="hero" style={{backgroundImage: 'url(/image/banner.png)'}}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">LIÊN TÂM GỐM</h1>
          <div className="hero-subtitle-section">
            <p className="hero-subtitle"><em>Hoa sen từ trầm tích, chạm đến lòng người</em></p>
          </div>
          <div className="hero-button-section">
            <div className="hero-button">
              <button
                className="shop-btn"
                onClick={() => navigate('/products')}
              >
                Khám Phá Bộ Sưu Tập
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="heritage-section">
        <div className="container">
          <h2 className="section-title">Bảo Tồn Di Sản Truyền Thống</h2>
          <p className="section-description">
            Trong bối cảnh sản xuất công nghiệp ngày càng phát triển, nhiều giá trị của gốm thủ công truyền thống có nguy cơ bị mai một.
            Liên Tâm Gốm ra đời như một nỗ lực tái định vị gốm Chu Đậu, kết hợp kỹ thuật truyền thống với tư duy thiết kế đương đại,
            nhằm tạo ra những tác phẩm vừa mang giá trị thẩm mỹ, vừa có chiều sâu văn hóa và tinh thần.
          </p>
          <p className="section-description">
            Mỗi tác phẩm là độc bản được xem là vật phẩm nghệ thuật phong thủy, nơi hoa sen đóng vai trò thanh lọc năng lượng,
            đồng thời tạo sự kết nối giữa không gian sống và nội tâm của người sở hữu.
          </p>
        </div>
      </section>

      {/* Collection Section */}
      <section className="collection-section">
        <div className="container">
          <h2 className="section-title">BỘ SƯU TẬP</h2>
          <p className="section-description">
            Liên Tâm Gốm - Nơi lưu giữ văn hóa, tâm linh và chiều sâu tinh thần của con người Việt.
            Mỗi tác phẩm là sự kết tinh của đất, thời gian và bàn tay người nghệ nhân.
          </p>

          {/* Products Grid */}
          {loading ? (
            <p className="text-center">Đang tải sản phẩm...</p>
          ) : featuredProducts.length === 0 ? (
            <p className="text-center">Không có sản phẩm nào</p>
          ) : (
            <div className="products-showcase">
              {featuredProducts.map((product) => (
                <div key={product._id} className="product-showcase-card">
                  <div className="product-image-wrapper">
                    <img
                      src={`${BASE_URL}${product.images?.[0] || '/upload/placeholder.jpg'}`}
                      alt={product.name}
                      className="product-showcase-image"
                      onError={(e) => {
                        e.target.style.backgroundColor = '#f0f0f0';
                        e.target.style.display = 'flex';
                        e.target.style.alignItems = 'center';
                        e.target.style.justifyContent = 'center';
                        e.target.innerHTML = '🏺';
                      }}
                    />
                  </div>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-code">{product.code}</p>
                  <p className="product-price">
                    {product.price?.toLocaleString('vi-VN')} đ
                  </p>
                  <div className="product-actions">
                    <button
                      className="home-btn-add-cart"
                      onClick={() => handleAddToCart(product)}
                    >
                      Thêm vào giỏ
                    </button>
                    <Link
                      to={`/products/${product._id}`}
                      className="home-btn-detail"
                    >
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Snippet */}
      <section className="about-snippet">
        <div className="container">
          <h2>Về Chúng Tôi</h2>
          <p>
            Liên Tâm Gốm kết hợp kỹ thuật gốm truyền thống Chu Đậu với thiết kế đương đại,
            tạo ra những tác phẩm vừa có giá trị thẩm mỹ, vừa mang chiều sâu văn hóa và tinh thần.
            Mỗi sản phẩm là độc bản mang ý nghĩa phong thủy, giúp cân bằng năng lượng cho không gian sống.
          </p>
          <Link to="/about" className="btn-learn-more">
            Tìm hiểu thêm →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-final" style={{backgroundImage: 'url(/image/banner-home.jpg)'}}>
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <h2>Bắt Đầu Hành Trình</h2>
          <p>Liên hệ với chúng tôi hoặc khám phá bộ sưu tập đầy đủ</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-contact">
              Liên Hệ
            </Link>
            <Link to="/products" className="btn-shop">
              Mua Ngay
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
