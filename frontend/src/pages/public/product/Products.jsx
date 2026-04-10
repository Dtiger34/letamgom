import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../../../service/productAPI';
import { CartContext } from '../../../context/CartContext';
import { BASE_URL } from '../../../service/config';
import { useToast } from '../../../hooks/useToast';
import './Products.css';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('name');
  const [priceFilter, setPriceFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useContext(CartContext);
  const toast = useToast();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts({});
        setProducts(data.products || []);
        setFilteredProducts(data.products || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.code.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by price
    if (priceFilter !== 'all') {
      filtered = filtered.filter((p) => {
        if (priceFilter === 'low') return p.price < 2000000;
        if (priceFilter === 'mid')
          return p.price >= 2000000 && p.price < 5000000;
        if (priceFilter === 'high')
          return p.price >= 5000000 && p.price < 15000000;
        if (priceFilter === 'very-high') return p.price >= 15000000;
        return true;
      });
    }

    // Sort
    if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name, 'vi'));
    } else if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [products, sortBy, priceFilter, searchTerm]);

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    toast.success('Đã thêm vào giỏ hàng!');
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <div className="container">
          <h1>Danh Sách Sản Phẩm</h1>
          <p>Khám phá bộ sưu tập gốm Liên Tâm</p>
        </div>
      </div>

      <div className="container products-container">
        <div className="products-sidebar">
          <div className="filter-group">
            <h3>Tìm Kiếm</h3>
            <input
              type="text"
              placeholder="Tên hoặc mã sản phẩm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-group">
            <h3>Giá</h3>
            <div className="filter-option">
              <input
                type="radio"
                id="price-all"
                name="price"
                value="all"
                checked={priceFilter === 'all'}
                onChange={(e) => setPriceFilter(e.target.value)}
              />
              <label htmlFor="price-all">Tất cả</label>
            </div>
            <div className="filter-option">
              <input
                type="radio"
                id="price-low"
                name="price"
                value="low"
                checked={priceFilter === 'low'}
                onChange={(e) => setPriceFilter(e.target.value)}
              />
              <label htmlFor="price-low">Dưới 2 triệu</label>
            </div>
            <div className="filter-option">
              <input
                type="radio"
                id="price-mid"
                name="price"
                value="mid"
                checked={priceFilter === 'mid'}
                onChange={(e) => setPriceFilter(e.target.value)}
              />
              <label htmlFor="price-mid">2 - 5 triệu</label>
            </div>
            <div className="filter-option">
              <input
                type="radio"
                id="price-high"
                name="price"
                value="high"
                checked={priceFilter === 'high'}
                onChange={(e) => setPriceFilter(e.target.value)}
              />
              <label htmlFor="price-high">5 - 15 triệu</label>
            </div>
            <div className="filter-option">
              <input
                type="radio"
                id="price-very-high"
                name="price"
                value="very-high"
                checked={priceFilter === 'very-high'}
                onChange={(e) => setPriceFilter(e.target.value)}
              />
              <label htmlFor="price-very-high">Trên 15 triệu</label>
            </div>
          </div>
        </div>

        <div className="products-main">
          <div className="products-toolbar">
            <div className="sort-control">
              <label htmlFor="sort">Sắp xếp:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Theo tên (A-Z)</option>
                <option value="price-low">Giá thấp đến cao</option>
                <option value="price-high">Giá cao đến thấp</option>
              </select>
            </div>
          </div>

          {loading ? (
            <p className="text-center">Đang tải...</p>
          ) : filteredProducts.length === 0 ? (
            <p className="text-center">Không tìm thấy sản phẩm</p>
          ) : (
            <div className="products-list">
              {filteredProducts.map((product) => (
                <div key={product._id} className="product-item">
                  <div className="product-image-container">
                    <img
                      src={`${BASE_URL}${product.images?.[0] || '/upload/placeholder.jpg'}`}
                      alt={product.name}
                      onError={(e) => (e.target.src = '🏺')}
                    />
                  </div>
                  <div className="product-details">
                    <h3>{product.name}</h3>
                    <p className="product-code">{product.code}</p>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">
                      {product.price?.toLocaleString('vi-VN')} VND
                    </p>
                    <div className="product-item-actions">
                      <Link
                        to={`/products/${product._id}`}
                        className="btn btn-primary"
                      >
                        Xem Chi Tiết
                      </Link>
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleAddToCart(product)}
                      >
                        Thêm Giỏ
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
