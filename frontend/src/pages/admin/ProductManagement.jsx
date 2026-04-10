import React, { useState, useEffect } from 'react';
import { getProducts, updateProduct } from '../../service/productAPI';
import { BASE_URL } from '../../service/config';
import { useToast } from '../../hooks/useToast';
import './ProductManagement.css';

export default function ProductManagement() {
  const toast = useToast();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [deletingProduct, setDeletingProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts({});
        setProducts(Array.isArray(data) ? data : data.products || data.data || []);
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error('Không thể tải sản phẩm');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    setEditingProduct(product._id);
    setEditFormData({
      name: product.name,
      price: product.price,
      description: product.description,
      stock: product.stock,
    });
  };

  const handleSaveEdit = async () => {
    if (!editFormData.name || !editFormData.price || !editFormData.description) {
      toast.error('Vui lòng điền đầy đủ thông tin');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await updateProduct(editingProduct, editFormData, token);

      setProducts(
        products.map((p) =>
          p._id === editingProduct ? { ...p, ...editFormData } : p
        )
      );

      toast.success('Cập nhật sản phẩm thành công');
      setEditingProduct(null);
      setEditFormData({});
    } catch (error) {
      toast.error('Lỗi khi cập nhật: ' + error.message);
    }
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    setEditFormData({});
  };

  const handleToggleActive = (product) => {
    setDeletingProduct(product);
  };

  const handleConfirmToggle = async () => {
    if (!deletingProduct) return;

    try {
      const token = localStorage.getItem('token');
      const newActiveState = !deletingProduct.active;
      await updateProduct(deletingProduct._id, { active: newActiveState }, token);
      setProducts(
        products.map((p) =>
          p._id === deletingProduct._id ? { ...p, active: newActiveState } : p
        )
      );
      toast.success(
        newActiveState ? 'Hiển thị sản phẩm thành công' : 'Ẩn sản phẩm thành công'
      );
      setDeletingProduct(null);
    } catch (error) {
      toast.error('Lỗi: ' + error.message);
    }
  };

  const handleCancelToggle = () => {
    setDeletingProduct(null);
  };

  if (loading) {
    return <div className="product-management">Đang tải...</div>;
  }

  return (
    <div className="product-management">
      <div className="header-row">
        <div>
          <h1>Quản Lý Sản Phẩm</h1>
          <p className="product-count">Tổng cộng: <strong>{products.length}</strong> sản phẩm</p>
        </div>
        <button className="btn btn-primary">+ Thêm Sản Phẩm</button>
      </div>

      {products.length === 0 ? (
        <p className="empty-state">Không có sản phẩm nào</p>
      ) : (
        <>
          {editingProduct && (
            <div className="edit-modal-overlay" onClick={handleCancelEdit}>
              <div className="edit-modal" onClick={(e) => e.stopPropagation()}>
                <h2>Sửa Sản Phẩm</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSaveEdit();
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="name">Tên Sản Phẩm:</label>
                    <input
                      id="name"
                      type="text"
                      value={editFormData.name || ''}
                      onChange={(e) =>
                        setEditFormData({ ...editFormData, name: e.target.value })
                      }
                      placeholder="Nhập tên sản phẩm"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="price">Giá (VND):</label>
                    <input
                      id="price"
                      type="number"
                      value={editFormData.price || ''}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          price: parseFloat(e.target.value),
                        })
                      }
                      placeholder="Nhập giá"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="stock">Kho Hàng:</label>
                    <input
                      id="stock"
                      type="number"
                      value={editFormData.stock || ''}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          stock: parseInt(e.target.value),
                        })
                      }
                      placeholder="Nhập số lượng kho"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">Mô Tả:</label>
                    <textarea
                      id="description"
                      value={editFormData.description || ''}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          description: e.target.value,
                        })
                      }
                      placeholder="Nhập mô tả sản phẩm"
                      rows={4}
                      required
                    />
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn-save">
                      Lưu
                    </button>
                    <button
                      type="button"
                      className="btn-cancel"
                      onClick={handleCancelEdit}
                    >
                      Hủy
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {deletingProduct && (
            <div className="delete-modal-overlay" onClick={handleCancelToggle}>
              <div className="delete-modal" onClick={(e) => e.stopPropagation()}>
                <div className="delete-modal-icon">
                  {deletingProduct.active ? '👁‍🗨' : '🚫'}
                </div>
                <h2>
                  {deletingProduct.active ? 'Xác Nhận Ẩn' : 'Xác Nhận Hiển Thị'}
                </h2>
                <p className="delete-modal-message">
                  Bạn có chắc chắn muốn{' '}
                  {deletingProduct.active ? 'ẩn' : 'hiển thị'} sản phẩm{' '}
                  <strong>"{deletingProduct.name}"</strong>?
                </p>
                <p className="delete-modal-warning">
                  {deletingProduct.active
                    ? 'Sản phẩm sẽ không hiển thị cho khách hàng.'
                    : 'Sản phẩm sẽ hiển thị cho khách hàng.'}
                </p>
                <div className="delete-modal-actions">
                  <button
                    className={`btn-delete-confirm ${deletingProduct.active ? '' : 'btn-show'}`}
                    onClick={handleConfirmToggle}
                  >
                    {deletingProduct.active ? 'Ẩn' : 'Hiển Thị'}
                  </button>
                  <button
                    className="btn-delete-cancel"
                    onClick={handleCancelToggle}
                  >
                    Hủy
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="products-table-wrapper">
            <table className="products-table">
            <thead>
              <tr>
                <th>Ảnh</th>
                <th>Tên Sản Phẩm</th>
                <th>Giá</th>
                <th>Kho</th>
                <th>Đã Bán</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <React.Fragment key={product._id}>
                  <tr>
                    <td className="product-image-cell">
                      <img
                        src={`${BASE_URL}${product.images?.[0] || '/upload/placeholder.jpg'}`}
                        alt={product.name}
                        className="product-thumbnail"
                        onError={(e) => {
                          e.target.style.backgroundColor = '#f0f0f0';
                          e.target.style.display = 'flex';
                          e.target.style.alignItems = 'center';
                          e.target.style.justifyContent = 'center';
                          e.target.innerHTML = '🏺';
                        }}
                      />
                    </td>
                    <td className={`product-name ${!product.active ? 'inactive' : ''}`}>
                      {product.name}
                      {!product.active && <span className="inactive-badge">Đã Ẩn</span>}
                    </td>
                    <td className="product-price">
                      {product.price?.toLocaleString('vi-VN')} VND
                    </td>
                    <td className="product-stock">
                      <span className={product.stock > 20 ? 'stock-high' : product.stock > 0 ? 'stock-low' : 'stock-out'}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="product-sold">{product.sold}</td>
                    <td className="action-buttons">
                      <button
                        className="btn-edit"
                        onClick={() => handleEdit(product)}
                        title="Sửa sản phẩm"
                      >
                        ✎
                      </button>
                      <button
                        className={`btn-toggle-active ${!product.active ? 'hidden' : ''}`}
                        onClick={() => handleToggleActive(product)}
                        title={product.active ? 'Ẩn sản phẩm' : 'Hiển thị sản phẩm'}
                      >
                        {product.active ? '👁‍🗨' : '🚫'}
                      </button>
                      <button
                        className="btn-detail"
                        onClick={() =>
                          setExpandedProduct(
                            expandedProduct === product._id ? null : product._id
                          )
                        }
                        title="Chi tiết"
                      >
                        {expandedProduct === product._id ? '▲' : '▼'}
                      </button>
                    </td>
                  </tr>
                  {expandedProduct === product._id && (
                    <tr className="product-details show">
                      <td colSpan="6">
                        <div className="details-content">
                          <div className="details-column">
                            <h4>Thông Tin Cơ Bản</h4>
                            <p><strong>ID:</strong> {product._id}</p>
                            <p><strong>Tên:</strong> {product.name}</p>
                            <p><strong>Giá:</strong> {product.price?.toLocaleString('vi-VN')} VND</p>
                            <p><strong>Kho Hàng:</strong> {product.stock}</p>
                            <p><strong>Đã Bán:</strong> {product.sold}</p>
                          </div>
                          <div className="details-column">
                            <h4>Đánh Giá</h4>
                            <p><strong>Rating:</strong> {product.rating}/5 ⭐</p>
                            <p><strong>Số Nhận Xét:</strong> {product.numReviews}</p>
                          </div>
                          <div className="details-column">
                            <h4>Mô Tả</h4>
                            <p>{product.description}</p>
                          </div>
                          <div className="details-column">
                            <h4>Ngày</h4>
                            <p><strong>Tạo:</strong> {new Date(product.createdAt).toLocaleString('vi-VN')}</p>
                            <p><strong>Cập Nhật:</strong> {new Date(product.updatedAt).toLocaleString('vi-VN')}</p>
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
          </>
      )}
    </div>
  );
}
