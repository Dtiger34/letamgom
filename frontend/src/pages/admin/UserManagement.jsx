import React, { useState, useEffect } from 'react';
import { getUsers } from '../../service/userAPI';
import { useToast } from '../../hooks/useToast';
import './UserManagement.css';

export default function UserManagement() {
  const toast = useToast();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedUser, setExpandedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const data = await getUsers(token);
        setUsers(Array.isArray(data) ? data : data.users || []);
      } catch (error) {
        console.error('Error fetching users:', error);
        toast.error('Không thể tải người dùng');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="user-management">Đang tải...</div>;
  }

  return (
    <div className="user-management">
      <h1>Quản Lý Người Dùng</h1>
      <p className="user-count">Tổng cộng: <strong>{users.length}</strong> người dùng</p>

      {users.length === 0 ? (
        <p className="empty-state">Không có người dùng nào</p>
      ) : (
        <div className="users-table-wrapper">
          <table className="users-table">
            <thead>
              <tr>
                <th>Tên</th>
                <th>Email</th>
                <th>Vai Trò</th>
                <th>Ngày Tạo</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <React.Fragment key={user._id}>
                  <tr>
                    <td className="user-name">{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`role-badge ${user.role}`}>
                        {user.role === 'admin' ? 'Quản Trị' : 'Khách Hàng'}
                      </span>
                    </td>
                    <td>{new Date(user.createdAt).toLocaleDateString('vi-VN')}</td>
                    <td>
                      <button
                        className="expand-btn"
                        onClick={() =>
                          setExpandedUser(
                            expandedUser === user._id ? null : user._id
                          )
                        }
                      >
                        {expandedUser === user._id ? 'Ẩn' : 'Chi Tiết'}
                      </button>
                    </td>
                  </tr>
                  {expandedUser === user._id && (
                    <tr className="user-details show">
                      <td colSpan="5">
                        <div className="details-content">
                          <div className="detail-item">
                            <span className="detail-label">ID:</span>
                            <span className="detail-value">{user._id}</span>
                          </div>
                          <div className="detail-item">
                            <span className="detail-label">Tên:</span>
                            <span className="detail-value">{user.name}</span>
                          </div>
                          <div className="detail-item">
                            <span className="detail-label">Email:</span>
                            <span className="detail-value">{user.email}</span>
                          </div>
                          <div className="detail-item">
                            <span className="detail-label">Vai Trò:</span>
                            <span className="detail-value">
                              {user.role === 'admin' ? 'Quản Trị' : 'Khách Hàng'}
                            </span>
                          </div>
                          <div className="detail-item">
                            <span className="detail-label">Ngày Tạo:</span>
                            <span className="detail-value">
                              {new Date(user.createdAt).toLocaleString('vi-VN')}
                            </span>
                          </div>
                          <div className="detail-item">
                            <span className="detail-label">Cập Nhật Lần Cuối:</span>
                            <span className="detail-value">
                              {new Date(user.updatedAt).toLocaleString('vi-VN')}
                            </span>
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
      )}
    </div>
  );
}
