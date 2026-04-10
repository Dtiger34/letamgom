# LetaGom - E-Commerce Application

## Backend API Documentation

Tất cả API routes được đặt tiền tố `/api/v1`

---

## 🔐 Authentication APIs

### 1. **POST** `/auth/login`
- **Mục đích**: Đăng nhập người dùng
- **Parameters**: 
  - `email` (string): Email của người dùng
  - `password` (string): Mật khẩu
- **Response**: Trả về user object và JWT token
- **Protected**: ❌ No

### 2. **POST** `/auth/register`
- **Mục đích**: Đăng ký tài khoản người dùng mới
- **Parameters**:
  - `name` (string): Tên người dùng
  - `email` (string): Email
  - `password` (string): Mật khẩu
- **Response**: Trả về user object mới được tạo
- **Protected**: ❌ No

### 3. **POST** `/auth/forgot-password`
- **Mục đích**: Yêu cầu reset mật khẩu qua email
- **Parameters**:
  - `email` (string): Email người dùng
- **Response**: Message xác nhận
- **Protected**: ❌ No

### 4. **POST** `/auth/reset-password/:token`
- **Mục đích**: Reset mật khẩu bằng token từ forgot-password
- **Parameters**:
  - `token` (string): Token reset từ URL
  - `password` (string): Mật khẩu mới
- **Response**: Message thành công
- **Protected**: ❌ No

### 5. **POST** `/auth/change-password`
- **Mục đích**: Thay đổi mật khẩu của người dùng đã đăng nhập
- **Parameters**:
  - `oldPassword` (string): Mật khẩu cũ
  - `newPassword` (string): Mật khẩu mới
- **Response**: Message thành công
- **Protected**: ✅ Yes (Require Authentication)

---

## 📦 Product APIs

### 6. **GET** `/products`
- **Mục đích**: Lấy danh sách sản phẩm (có phân trang và tìm kiếm)
- **Query Parameters**:
  - `page` (number, default: 1): Trang hiện tại
  - `limit` (number, default: 20): Số sản phẩm trên mỗi trang
  - `q` (string): Từ khóa tìm kiếm theo tên
  - `category` (string): ID của danh mục
- **Response**: Array of products + total count
- **Protected**: ❌ No

### 7. **GET** `/products/:id`
- **Mục đích**: Lấy thông tin chi tiết một sản phẩm
- **Parameters**: 
  - `id` (string): ID của sản phẩm
- **Response**: Product object
- **Protected**: ❌ No

### 8. **POST** `/products`
- **Mục đích**: Tạo sản phẩm mới (chỉ admin)
- **Parameters**:
  - `name` (string): Tên sản phẩm
  - `price` (number): Giá
  - `description` (string): Mô tả
  - `category` (string): ID của danh mục
  - ... (other product fields)
- **Response**: Product object mới được tạo
- **Protected**: ✅ Yes (Require Admin)

### 9. **PUT** `/products/:id`
- **Mục đích**: Cập nhật thông tin sản phẩm (chỉ admin)
- **Parameters**:
  - `id` (string): ID của sản phẩm
  - Body: Các trường cần cập nhật
- **Response**: Product object đã cập nhật
- **Protected**: ✅ Yes (Require Admin)

### 10. **DELETE** `/products/:id`
- **Mục đích**: Xóa sản phẩm (chỉ admin)
- **Parameters**:
  - `id` (string): ID của sản phẩm
- **Response**: Confirmation message
- **Protected**: ✅ Yes (Require Admin)

---

## 🏷️ Category APIs

### 11. **GET** `/categories`
- **Mục đích**: Lấy danh sách tất cả danh mục
- **Response**: Array of categories
- **Protected**: ❌ No

### 12. **GET** `/categories/:id`
- **Mục đích**: Lấy thông tin chi tiết một danh mục
- **Parameters**:
  - `id` (string): ID của danh mục
- **Response**: Category object
- **Protected**: ❌ No

### 13. **POST** `/categories`
- **Mục đích**: Tạo danh mục mới (chỉ admin)
- **Parameters**:
  - `name` (string): Tên danh mục
  - ... (other category fields)
- **Response**: Category object mới được tạo
- **Protected**: ✅ Yes (Require Admin)

### 14. **PUT** `/categories/:id`
- **Mục đích**: Cập nhật thông tin danh mục (chỉ admin)
- **Parameters**:
  - `id` (string): ID của danh mục
  - Body: Các trường cần cập nhật
- **Response**: Category object đã cập nhật
- **Protected**: ✅ Yes (Require Admin)

### 15. **DELETE** `/categories/:id`
- **Mục đích**: Xóa danh mục (chỉ admin)
- **Parameters**:
  - `id` (string): ID của danh mục
- **Response**: Confirmation message
- **Protected**: ✅ Yes (Require Admin)

---

## 👤 User APIs

### 16. **GET** `/users`
- **Mục đích**: Lấy danh sách tất cả người dùng (chỉ admin)
- **Response**: Array of users
- **Protected**: ✅ Yes (Require Admin)

### 17. **GET** `/users/:id`
- **Mục đích**: Lấy thông tin chi tiết một người dùng (chỉ admin)
- **Parameters**:
  - `id` (string): ID của người dùng
- **Response**: User object
- **Protected**: ✅ Yes (Require Admin)

### 18. **GET** `/users/profile`
- **Mục đích**: Lấy thông tin cá nhân của người dùng đã đăng nhập
- **Response**: Current user profile
- **Protected**: ✅ Yes (Require Authentication)

### 19. **POST** `/users`
- **Mục đích**: Tạo người dùng mới (chỉ admin)
- **Parameters**:
  - `name` (string): Tên
  - `email` (string): Email
  - `password` (string): Mật khẩu
  - ... (other user fields)
- **Response**: User object mới được tạo
- **Protected**: ✅ Yes (Require Admin)

### 20. **PUT** `/users/:id`
- **Mục đích**: Cập nhật thông tin người dùng (chỉ admin)
- **Parameters**:
  - `id` (string): ID của người dùng
  - Body: Các trường cần cập nhật
- **Response**: User object đã cập nhật
- **Protected**: ✅ Yes (Require Admin)

### 21. **PUT** `/users/profile`
- **Mục đích**: Cập nhật thông tin cá nhân của người dùng đã đăng nhập
- **Parameters**:
  - Body: Các trường cần cập nhật
- **Response**: Updated profile
- **Protected**: ✅ Yes (Require Authentication)

### 22. **DELETE** `/users/:id`
- **Mục đích**: Xóa người dùng (chỉ admin)
- **Parameters**:
  - `id` (string): ID của người dùng
- **Response**: Confirmation message
- **Protected**: ✅ Yes (Require Admin)

---

## 📋 Order APIs

### 23. **POST** `/orders`
- **Mục đích**: Tạo đơn hàng mới
- **Parameters**:
  - `userId` (string, optional): ID của người dùng
  - `items` (array): Mảng sản phẩm
    - `productId` (string): ID sản phẩm
    - `quantity` (number): Số lượng
  - `shippingAddress` (object): Địa chỉ giao hàng
    - `fullName` (string): Tên người nhận
    - `email` (string): Email
    - `phone` (string): Số điện thoại
    - `address` (string): Địa chỉ
- **Response**: Order object mới được tạo
- **Protected**: ❌ No (nhưng có thể có userId nếu đã đăng nhập)

### 24. **GET** `/orders/user`
- **Mục đích**: Lấy danh sách đơn hàng của người dùng đã đăng nhập
- **Response**: Array of orders
- **Protected**: ✅ Yes (Require Authentication)

### 25. **GET** `/orders/all`
- **Mục đích**: Lấy tất cả đơn hàng (chỉ admin)
- **Response**: Array of all orders
- **Protected**: ✅ Yes (Require Admin)

### 26. **GET** `/orders/:id`
- **Mục đích**: Lấy thông tin chi tiết một đơn hàng
- **Parameters**:
  - `id` (string): ID của đơn hàng
- **Response**: Order object
- **Protected**: ❌ No

### 27. **PUT** `/orders/:id`
- **Mục đích**: Cập nhật trạng thái đơn hàng (chỉ admin)
- **Parameters**:
  - `id` (string): ID của đơn hàng
  - `status` (string): Trạng thái mới (e.g., 'pending', 'processing', 'shipped', 'delivered')
- **Response**: Order object đã cập nhật
- **Protected**: ✅ Yes (Require Admin)

### 28. **DELETE** `/orders/:id`
- **Mục đích**: Hủy đơn hàng (chỉ có thể hủy đơn pending)
- **Parameters**:
  - `id` (string): ID của đơn hàng
- **Response**: Confirmation message
- **Protected**: ❌ No

---

## ⭐ Review APIs

### 29. **GET** `/reviews`
- **Mục đích**: Lấy danh sách tất cả các đánh giá
- **Response**: Array of reviews
- **Protected**: ❌ No

### 30. **GET** `/reviews/:id`
- **Mục đích**: Lấy thông tin chi tiết một đánh giá
- **Parameters**:
  - `id` (string): ID của đánh giá
- **Response**: Review object
- **Protected**: ❌ No

### 31. **POST** `/reviews`
- **Mục đích**: Tạo đánh giá mới (người dùng đã đăng nhập)
- **Parameters**:
  - `productId` (string): ID sản phẩm
  - `rating` (number): Số sao (1-5)
  - `comment` (string): Nội dung đánh giá
  - ... (other review fields)
- **Response**: Review object mới được tạo
- **Protected**: ✅ Yes (Require Authentication)

### 32. **PUT** `/reviews/:id`
- **Mục đích**: Cập nhật đánh giá (người dùng đã đăng nhập)
- **Parameters**:
  - `id` (string): ID của đánh giá
  - Body: Các trường cần cập nhật
- **Response**: Review object đã cập nhật
- **Protected**: ✅ Yes (Require Authentication)

### 33. **DELETE** `/reviews/:id`
- **Mục đích**: Xóa đánh giá (người dùng đã đăng nhập)
- **Parameters**:
  - `id` (string): ID của đánh giá
- **Response**: Confirmation message
- **Protected**: ✅ Yes (Require Authentication)

---

## 📊 API Summary

| Loại | Tổng số | Protected | Public |
|------|---------|-----------|--------|
| Auth | 5 | 1 | 4 |
| Products | 5 | 3 | 2 |
| Categories | 5 | 3 | 2 |
| Users | 7 | 6 | 1 |
| Orders | 6 | 2 | 4 |
| Reviews | 5 | 2 | 3 |
| **TOTAL** | **33** | **17** | **16** |

---

## 🔒 Authentication

- **Bearer Token**: JWT token được trả về khi đăng nhập thành công
- **Header**: `Authorization: Bearer <token>`
- **Admin Role**: Cần có role = 'admin' để truy cập admin endpoints

---

## 🚀 Base URL

```
http://localhost:5000/api/v1
```

---

## 📝 Notes

- Tất cả requests sử dụng JSON format
- Protected endpoints yêu cầu JWT token trong Authorization header
- Admin endpoints yêu cầu user có role = 'admin'
- Các route có `/users/profile` phải được đặt **trước** route `/users/:id` trong router
