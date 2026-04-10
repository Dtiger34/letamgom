# Liên Tâm Gốm - Thông Tin Chi Tiết Màn Hình

## 1. Trang Chủ (Landing Page)

### ENDPOINTS API
- **GET** `/products` (tùy chọn) - Lấy sản phẩm nổi bật cho phần hero
  - Query Parameters:
    - `limit=4` (giới hạn 4 sản phẩm nổi bật)
    - `page=1` (mặc định trang đầu tiên)
  - Bảo vệ: ❌ Không

### DỮ LIỆU VÀO
- Không có (tải trang ban đầu) hoặc sản phẩm nổi bật từ API

### DỮ LIỆU RA
- Điều hướng đến Trang Sản Phẩm
- Điều hướng đến Chi Tiết Sản Phẩm (nếu nhấp vào sản phẩm nổi bật)
- Điều hướng đến Trang Liên Hệ

### CÁC PHẦN TỬ
- Thanh Điều Hướng Header
  - Logo (Liên Tâm Gốm)
  - Menu: Trang Chủ, Giới Thiệu, Sản Phẩm, Liên Hệ, Quản Trị
- Banner Hero
  - Hình ảnh/video chính về khái niệm dự án
  - Tiêu đề: "Liên Tâm Gốm – Hoa sen từ trầm tích, chạm đến lòng người"
  - Phụ đề: Mô tả dự án
- Phần Giới Thiệu
  - Triết lý và câu chuyện dự án (từ context.md)
  - Hình ảnh hoa sen
  - Thông điệp về di sản văn hóa
- Phần Sản Phẩm Nổi Bật
  - Hiển thị 3-4 sản phẩm gốm nổi bật
  - Hình ảnh, tên, mô tả ngắn, giá sản phẩm
  - Nút "Xem Chi Tiết" cho mỗi sản phẩm
- Phần Kêu Gọi Hành Động
  - Nút "Khám Phá Bộ Sưu Tập" → Trang Sản Phẩm
  - Nút "Liên Hệ Với Chúng Tôi" → Trang Liên Hệ
- Footer
  - Thông tin liên hệ, liên kết mạng xã hội
  - Thông tin bản quyền

### HÀNH ĐỘng
- Hiệu ứng hover trên các mục điều hướng
- Nhấp vào sản phẩm nổi bật → Đi đến trang Chi Tiết Sản Phẩm
- Nhấp "Khám Phá Bộ Sưu Tập" → Đi đến Trang Sản Phẩm
- Nhấp "Liên Hệ Với Chúng Tôi" → Đi đến Trang Liên Hệ
- Cuộn mượt giữa các phần

---

## 2. Trang Giới Thiệu (About Page)

### ENDPOINTS API
- Không cần API (nội dung tĩnh) hoặc có thể lấy từ CMS/cơ sở dữ liệu

### DỮ LIỆU VÀO
- Nội dung tĩnh về công ty/dự án/câu chuyện sản phẩm
- Hình ảnh từ cơ sở dữ liệu hoặc tĩnh

### DỮ LIỆU RA
- Điều hướng đến Trang Sản Phẩm
- Điều hướng đến Trang Liên Hệ
- Chia sẻ trên mạng xã hội (tùy chọn)

### CÁC PHẦN TỬ
- Header (giống Trang Chủ)
- Breadcrumb Navigation: Trang Chủ > Giới Thiệu
- Phần Hero/Banner
  - Hình ảnh nền về cửa hàng/xưởng
  - Tiêu đề: "Về Liên Tâm Gốm"
  - Mô tả ngắn
- Phần Câu Chuyện Công Ty (Our Story)
  - Tiêu đề: "Câu Chuyện Của Chúng Tôi"
  - Đoạn văn chi tiết về lịch sử, sứ mệnh, tầm nhìn
  - Hình ảnh minh họa
- Phần Triết Lý & Giá Trị (Philosophy & Values)
  - Tiêu đề: "Triết Lý Thiết Kế"
  - Các giá trị cốt lõi (từ context.md):
    - Bảo tồn di sản gốm Chu Đậu
    - Kết hợp truyền thống và hiện đại
    - Tâm linh và văn hóa
  - Hình ảnh minh họa cho mỗi giá trị
- Phần Thủ Công & Kỹ Thuật (Craftsmanship)
  - Tiêu đề: "Kỹ Thuật Truyền Thống Chu Đậu"
  - Mô tả quy trình làm gốm
  - Hình ảnh/video quy trình
  - Tài liệu về chất liệu và kỹ thuật
- Phần Đội Ngũ (Team) - Tùy chọn
  - Tiêu đề: "Đội Ngũ Của Chúng Tôi"
  - Ảnh đại diện thành viên
  - Tên và vị trí
  - Mô tả ngắn
- Phần Số Liệu Thống Kê (Stats) - Tùy chọn
  - Số năm kinh nghiệm
  - Số sản phẩm được tạo
  - Số khách hàng hài lòng
  - Giải thưởng/chứng chỉ
- Phần Hình Ảnh Xưởng/Showroom (Gallery)
  - Hình ảnh không gian xưởng/cửa hàng
  - Hình ảnh các tác phẩm tiêu biểu
- Call to Action Section
  - Nút "Xem Bộ Sưu Tập" → Trang Sản Phẩm
  - Nút "Liên Hệ Với Chúng Tôi" → Trang Liên Hệ
- Liên Kết Mạng Xã Hội
  - Instagram, Facebook, Pinterest, v.v.
- Footer (giống Trang Chủ)

### HÀNH ĐỘng
- Hover trên hình ảnh → Zoom hoặc hiển thị chi tiết
- Nhấp "Xem Bộ Sưu Tập" → Đi đến Trang Sản Phẩm
- Nhấp "Liên Hệ Với Chúng Tôi" → Đi đến Trang Liên Hệ
- Nhấp breadcrumb → Quay lại Trang Chủ
- Chia sẻ trên mạng xã hội (tùy chọn) → Mở cửa sổ chia sẻ
- Cuộn mượt giữa các phần
- Xem video kỹ thuật (nếu có)

---

## 3. Trang Sản Phẩm (Product Page)

### ENDPOINTS API
- **GET** `/products` (bắt buộc) - Lấy danh sách sản phẩm với phân trang & lọc
  - Query Parameters:
    - `page` (tùy chọn, mặc định: 1) - Số trang hiện tại
    - `limit` (tùy chọn, mặc định: 20) - Số sản phẩm trên mỗi trang
    - `q` (tùy chọn) - Từ khóa tìm kiếm theo tên sản phẩm
  - Bảo vệ: ❌ Không

### DỮ LIỆU VÀO
- Danh sách sản phẩm từ API GET /products
- Tham số lọc/sắp xếp từ chuỗi truy vấn

### DỮ LIỆU RA
- Điều hướng đến Trang Chi Tiết Sản Phẩm (chọn sản phẩm)
- Danh sách sản phẩm được cập nhật (sau khi lọc/sắp xếp)
- Thêm vào giỏ hàng/danh sách yêu thích (nếu được triển khai)

### CÁC PHẦN TỬ
- Header (giống Trang Chủ)
- Tiêu đề Trang: "Bộ Sưu Tập Gốm"
- Phần Lọc & Sắp Xếp
  - Sắp xếp theo: Giá (thấp→cao, cao→thấp), Mới Nhất, Phổ Biến
  - Lọc theo: Danh mục, Khoảng Giá, Tình Trạng Hàng
  - Thanh tìm kiếm
- Lưới/Danh Sách Sản Phẩm
  - Thẻ Sản Phẩm (mỗi cái):
    - Hình ảnh sản phẩm
    - Tên sản phẩm
    - Giá
    - Mô tả ngắn/danh mục
    - Nút "Xem Chi Tiết"
    - Biểu tượng thêm vào giỏ/yêu thích (tùy chọn)
- Phân trang (nếu nhiều sản phẩm)
- Thanh bên (tùy chọn)
  - Các tùy chọn lọc
  - Danh sách danh mục
- Footer (giống Trang Chủ)

### HÀNH ĐỘng
- Nhấp vào tùy chọn lọc/sắp xếp → Cập nhật danh sách sản phẩm động
- Gõ trong thanh tìm kiếm → Lọc sản phẩm theo tên/mô tả
- Nhấp "Xem Chi Tiết" → Điều hướng đến trang Chi Tiết Sản Phẩm
- Điều hướng phân trang → Tải các trang sản phẩm khác
- Thêm vào giỏ (nếu tính năng tồn tại) → Hiển thị thông báo xác nhận
- Hover trên thẻ sản phẩm → Hiển thị thông tin/hình ảnh bổ sung

---

## 4. Trang Chi Tiết Sản Phẩm (Product Detail Page)

### ENDPOINTS API
- **GET** `/products/:id` (bắt buộc) - Lấy chi tiết sản phẩm
  - Tham số: `id` (ID sản phẩm từ URL)
  - Bảo vệ: ❌ Không
- **GET** `/reviews` (tùy chọn) - Lấy đánh giá/xếp hạng sản phẩm
  - Query: `productId` (lọc đánh giá theo sản phẩm)
  - Bảo vệ: ❌ Không

### DỮ LIỆU VÀO
- ID sản phẩm từ tham số URL
- Dữ liệu sản phẩm từ API GET /products/:id
- Sản phẩm liên quan (từ danh sách sản phẩm cục bộ hoặc cuộc gọi API bổ sung)
- Dữ liệu giỏ hàng của người dùng (từ localStorage hoặc phiên người dùng nếu đã đăng nhập)
- Dữ liệu đánh giá/xếp hạng (tùy chọn)

### DỮ LIỆU RA
- Thêm vào Giỏ Hàng → Trang Thanh Toán
- Điều hướng đến Trang Sản Phẩm (quay lại)
- Thêm vào danh sách yêu thích/giỏ hàng (nếu tính năng tồn tại)
- Chia sẻ sản phẩm (tùy chọn)

### CÁC PHẦN TỬ
- Header (giống Trang Chủ)
- Điều Hướng Breadcrumb: Trang Chủ > Sản Phẩm > [Tên Sản Phẩm]
- Phần Chi Tiết Sản Phẩm
  - Hình ảnh sản phẩm lớn / bộ sưu tập ảnh
  - Hình thu nhỏ ảnh (để chuyển đổi chế độ xem)
- Phần Thông Tin Sản Phẩm
  - Tên sản phẩm
  - Giá
  - Xếp hạng/đánh giá (nếu có)
  - Trạng thái hàng còn
  - Mã SKU/mã sản phẩm
  - Mô tả (chi tiết)
  - Thông tin Vật Liệu & Kỹ Thuật
  - Kích Thước & Cân Nặng
- Bộ Chọn Số Lượng
  - Trường nhập liệu hoặc nút +/-
  - Hiển thị số lượng còn
- Nút Hành Động
  - Nút "Thêm vào Giỏ Hàng" (chính)
  - Nút "Thêm vào Yêu Thích" (phụ)
  - Nút "Chia Sẻ" (tùy chọn)
- Phần Sản Phẩm Liên Quan
  - 3-4 sản phẩm tương tự với hình ảnh, tên, giá
- Phần Đánh Giá Khách Hàng (nếu có)
- Footer (giống Trang Chủ)

### HÀNH ĐỘng
- Nhấp vào hình thu nhỏ → Thay đổi hình ảnh sản phẩm chính
- Tăng/giảm số lượng → Cập nhật giá trị số lượng
- Nhấp "Thêm vào Giỏ Hàng" → 
  - Kiểm tra số lượng > 0
  - Lưu trữ dữ liệu sản phẩm trong giỏ
  - Hiển thị thông báo thành công
- Nhấp "Thêm vào Yêu Thích" → Thêm vào danh sách yêu thích (nếu người dùng đã đăng nhập)
- Nhấp sản phẩm liên quan → Điều hướng đến chi tiết sản phẩm đó
- Nhấp "Quay Lại" hoặc breadcrumb → Quay lại Trang Sản Phẩm
- Phóng to hình ảnh sản phẩm (tùy chọn)

---

## 5. Trang Thanh Toán (Payment/Checkout Page)

### ENDPOINTS API
- **POST** `/orders` (bắt buộc) - Tạo đơn hàng mới với thông tin khách hàng & mục
  - Body: `items[]`, `shippingAddress`, `userId` (tùy chọn)
  - Bảo vệ: ❌ Không (nhưng userId tùy chọn nếu xác thực)
- **GET** `/users/profile` (tùy chọn) - Lấy thông tin người dùng đã đăng nhập để điền sẵn
  - Bảo vệ: ✅ Có (Yêu Cầu Xác Thực)
- **POST** `/auth/login` (tùy chọn) - Cho phép người dùng đăng nhập trước khi thanh toán
  - Bảo vệ: ❌ Không

### DỮ LIỆU VÀO
- Mục giỏ hàng (sản phẩm, số lượng, giá) từ localStorage/trạng thái
- Tính toán cộng dồn, giao hàng, thuế, tổng cộng (frontend)
- Dữ liệu người dùng từ API GET /users/profile (nếu đã đăng nhập)
- Token JWT từ xác thực (nếu người dùng đã đăng nhập)

### DỮ LIỆU RA
- Dữ liệu đơn hàng vào cơ sở dữ liệu
- Điều hướng đến Trang Cảm Ơn
- Điều hướng quay lại Trang Sản Phẩm (hủy)

### CÁC PHẦN TỬ
- Header (đơn giản hoặc tập trung vào checkout)
- Chỉ báo Tiến Độ (1. Giỏ → 2. Thanh Toán → 3. Xác Nhận)
- Phần Tóm Tắt Đơn Hàng
  - Danh sách mục trong giỏ
    - Hình ảnh sản phẩm, tên, số lượng, giá mỗi mục, cộng dồn mỗi mục
  - Cộng dồn
  - Chi phí giao hàng
  - Thuế/VAT
  - Tổng giá
- Phần Thông Tin Hóa Đơn/Giao Hàng
  - Nhập tên khách hàng
  - Nhập email
  - Nhập số điện thoại
  - Nhập địa chỉ
  - Nhập Thành Phố/Tỉnh
  - Nhập Mã Bưu Điện
  - Nhập Quốc Gia
  - Tùy chọn giao hàng đến địa chỉ khác (tùy chọn)
- Phần Phương Thức Thanh Toán
  - Nhập Thẻ Tín Dụng/Ghi Nợ
    - Số thẻ
    - Ngày hết hạn
    - CVV
    - Tên chủ thẻ
  - Hoặc: Tùy chọn chuyển khoản ngân hàng
  - Hoặc: Các phương thức thanh toán khác (PayPal, v.v.)
- Phần Ghi Chú Đơn Hàng (tùy chọn)
  - Vùng văn bản cho các yêu cầu đặc biệt
- Nút
  - Nút "Đặt Hàng" / "Hoàn Thành Thanh Toán" (chính)
  - Nút "Quay Lại Giỏ" / "Tiếp Tục Mua Sắm" (phụ)
- Biểu tượng bảo mật (SSL, biểu tượng bảo mật thanh toán)
- Footer (tối thiểu)

### HÀNH ĐỘng
- Điền thông tin khách hàng → Kiểm tra (trường bắt buộc)
- Chọn phương thức thanh toán → Hiển thị mẫu thanh toán thích hợp
- Nhập chi tiết thẻ → Kiểm tra định dạng
- Nhấp "Đặt Hàng" → 
  - Kiểm tra tất cả các trường bắt buộc
  - Xử lý thanh toán (tích hợp với cổng thanh toán)
  - Lưu dữ liệu đơn hàng vào cơ sở dữ liệu
  - Xóa giỏ hàng
  - Điều hướng đến Trang Cảm Ơn
- Nhấp "Quay Lại Giỏ" → Quay lại Trang Sản Phẩm (hoặc giữ giỏ)
- Nhập mã khuyến mãi (tùy chọn) → Áp dụng giảm giá

---

## 6. Trang Cảm Ơn / Xác Nhận (Thank You / Confirmation Page)

### ENDPOINTS API
- **GET** `/orders/:id` (bắt buộc) - Lấy chi tiết đơn hàng để hiển thị
  - Tham số: `id` (ID đơn hàng từ URL hoặc chuyển hướng)
  - Bảo vệ: ❌ Không
- **Backend (không được tiếp xúc)** - Gửi email xác nhận (được xử lý bởi máy chủ)
  - Được gọi sau khi tạo đơn hàng

### DỮ LIỆU VÀO
- ID đơn hàng từ tham số URL hoặc trạng thái chuyển hướng
- Dữ liệu đơn hàng từ API GET /orders/:id
- Địa chỉ email từ dữ liệu đơn hàng
- Thông báo dịch vụ email backend (tự động)

### DỮ LIỆU RA
- Điều hướng đến Trang Chủ
- Điều hướng đến Trang Sản Phẩm
- Tải xuống/In hóa đơn (tùy chọn)
- Gửi email xác nhận (backend)

### CÁC PHẦN TỬ
- Header (đơn giản)
- Banner/Hero Xác Nhận
  - Biểu tượng dấu kiểm / Thông báo thành công
  - "Cảm Ơn Bạn Đã Đặt Hàng!"
  - Thông báo xác nhận đơn hàng
- Phần Chi Tiết Đơn Hàng
  - ID/Số Đơn Hàng
  - Ngày/giờ đặt hàng
  - Ngày giao hàng dự kiến
  - Tổng số tiền thanh toán
- Phần Tóm Tắt Đơn Hàng
  - Danh sách các mục đã mua với số lượng và giá
  - Cộng dồn, giao hàng, thuế, tổng cộng
- Phần Thông Tin Khách Hàng
  - Tên, email, địa chỉ giao hàng
- Phần Hành Động
  - Nút "Tải Xuống Hóa Đơn" (tùy chọn)
  - Nút "In Đơn Hàng" (tùy chọn)
  - Nút "Tiếp Tục Mua Sắm" → Trang Sản Phẩm
  - Nút "Quay Lại Trang Chủ" → Trang Chủ
- Thông Báo Theo Dõi
  - "Email xác nhận đã được gửi đến [email]"
  - "Thông tin theo dõi sẽ được gửi sớm"
- Tùy chọn đăng ký bản tin (tùy chọn)
- Footer

### HÀNH ĐỘng
- Nhấp "Tiếp Tục Mua Sắm" → Điều hướng đến Trang Sản Phẩm
- Nhấp "Quay Lại Trang Chủ" → Điều hướng đến Trang Chủ
- Nhấp "Tải Xuống Hóa Đơn" → Tạo và tải xuống PDF
- Nhấp "In Đơn Hàng" → Mở hộp thoại in
- Gửi email xác nhận tự động cho khách hàng (backend)

---

## 7. Trang Liên Hệ (Contact Page)

### ENDPOINTS API
- **POST** `/contacts` (bắt buộc) - Gửi biểu mẫu liên hệ
  - Body: `name`, `email`, `phone`, `subject`, `message`
  - Bảo vệ: ❌ Không
  - **Lưu Ý**: Endpoint này cần được tạo (không trong danh sách API hiện tại)
- **Backend (không được tiếp xúc)** - Gửi email cho quản trị viên
  - Được gọi sau khi gửi biểu mẫu

### DỮ LIỆU VÀO
- Thông tin liên hệ tĩnh (được mã hóa cứng trong thành phần)
- Dữ liệu gửi biểu mẫu liên hệ (từ đầu vào biểu mẫu)
- Thông báo dịch vụ email backend

### DỰ LIỆU RA
- Gửi biểu mẫu liên hệ → Lưu vào cơ sở dữ liệu / Gửi email
- Điều hướng đến các trang khác

### CÁC PHẦN TỬ
- Header (giống Trang Chủ)
- Tiêu đề Trang: "Liên Hệ Với Chúng Tôi"
- Phần Thông Tin Liên Hệ
  - Địa chỉ (vị trí xưởng/phòng trưng bày)
  - Số điện thoại
  - Địa chỉ email
  - Giờ làm việc
  - Bản đồ (nhúng Google Maps)
- Biểu Mẫu Liên Hệ
  - Nhập tên đầy đủ
  - Nhập email
  - Nhập số điện thoại
  - Nhập chủ đề
  - Vùng văn bản tin nhắn
  - Nút "Gửi"
  - Nút "Đặt Lại" (tùy chọn)
- Liên Kết Mạng Xã Hội
  - Instagram, Facebook, Pinterest, v.v.
- Phần Câu Hỏi Thường Gặp (tùy chọn)
- Footer

### HÀNH ĐỘng
- Điền biểu mẫu liên hệ → Kiểm tra các trường bắt buộc
- Nhấp "Gửi" → 
  - Kiểm tra tất cả các trường
  - Lưu vào cơ sở dữ liệu
  - Gửi email xác nhận cho khách hàng
  - Hiển thị thông báo thành công
  - Xóa biểu mẫu
- Nhấp "Đặt Lại" → Xóa tất cả các trường biểu mẫu
- Nhấp vào liên kết mạng xã hội → Mở trong tab mới
- Xem bản đồ → Nhận chỉ đường

---

## 8. Bảng Điều Khiển Quản Trị (Admin Dashboard)

### ENDPOINTS API
- **POST** `/auth/login` (bắt buộc) - Đăng nhập quản trị viên
  - Body: `email`, `password`
  - Bảo vệ: ❌ Không
  - Trả về: Token JWT có vai trò quản trị viên
- **GET** `/orders/all` (bắt buộc) - Lấy tất cả đơn hàng để xem của quản trị viên
  - Bảo vệ: ✅ Có (Yêu Cầu Quản Trị Viên)
- **GET** `/users` (bắt buộc) - Lấy tất cả người dùng để xem của quản trị viên
  - Bảo vệ: ✅ Có (Yêu Cầu Quản Trị Viên)
- **GET** `/orders/:id` (tùy chọn) - Lấy chi tiết đơn hàng
  - Bảo vệ: ✅ Có (Yêu Cầu Quản Trị Viên)
- **GET** `/users/:id` (tùy chọn) - Lấy chi tiết người dùng
  - Bảo vệ: ✅ Có (Yêu Cầu Quản Trị Viên)
- **PUT** `/orders/:id` (tùy chọn) - Cập nhật trạng thái đơn hàng
  - Bảo vệ: ✅ Có (Yêu Cầu Quản Trị Viên)
- **Backend (không được tiếp xúc)** - Tạo báo cáo/phân tích bán hàng
  - Được tính toán từ dữ liệu đơn hàng

### DỮ LIỆU VÀO
- Xác thực quản trị viên qua POST /auth/login
- Token JWT có vai trò quản trị viên (cho các endpoint được bảo vệ)
- Tất cả dữ liệu đơn hàng từ API GET /orders/all
- Tất cả dữ liệu người dùng từ API GET /users
- Chi tiết đơn hàng từ API GET /orders/:id (tùy chọn)
- Chi tiết người dùng từ API GET /users/:id (tùy chọn)
- Dữ liệu phân tích bán hàng (được tính toán từ dữ liệu đơn hàng)

### DỮ LIỆU RA
- Cập nhật kho sản phẩm (nếu quản trị viên có thể chỉnh sửa)
- Xuất báo cáo (tùy chọn)
- Đăng xuất

### CÁC PHẦN TỬ
- Header Quản Trị Viên
  - Logo
  - Điều Hướng: Bảng Điều Khiển, Đơn Hàng, Khách Hàng, Sản Phẩm, Phân Tích, Cài Đặt, Đăng Xuất
- Khu Vực Nội Dung Chính
  - Bảng Điều Khiển Tổng Quan
    - Thẻ tổng doanh thu
    - Thẻ tổng đơn hàng
    - Thẻ tổng khách hàng
    - Thẻ tổng sản phẩm
    - Biểu đồ xu hướng doanh thu (tùy chọn)
    - Xem trước đơn hàng gần đây
- Phần Danh Sách Khách Hàng
  - Bảng với các cột: ID, Tên, Email, Điện Thoại, Số Đơn Hàng, Tổng Chi Tiêu
  - Thanh tìm kiếm
  - Phân trang
  - Các tùy chọn lọc
  - Nhấp vào hàng để xem chi tiết khách hàng (tùy chọn)
- Phần Danh Sách Doanh Thu/Bán Hàng
  - Bảng với các cột: ID Đơn Hàng, Ngày, Tên Khách Hàng, Mục, Tổng Số Tiền, Trạng Thái
  - Thanh tìm kiếm
  - Phân trang
  - Lọc theo khoảng ngày, trạng thái
  - Nhấp vào hàng để xem chi tiết đơn hàng
  - Nút Xuất sang CSV/Excel (tùy chọn)
- Phân Tích/Biểu Đồ
  - Bán hàng theo sản phẩm
  - Bán hàng theo thời gian
  - Nhân khẩu học khách hàng (nếu dữ liệu được thu thập)
- Phần Cài Đặt (tùy chọn)
  - Thông tin cửa hàng
  - Cài đặt thanh toán
  - Cài đặt giao hàng
- Footer hoặc footer tối thiểu

### HÀNH ĐỘng
- Đăng nhập → Xác thực thông tin đăng nhập quản trị viên
- Nhấp vào các mục điều hướng → Chuyển đổi giữa các phần
- Tìm kiếm khách hàng/đơn hàng → Lọc bảng
- Nhấp vào phân trang → Điều hướng các trang
- Nhấp vào hàng đơn hàng/khách hàng → Xem thông tin chi tiết
- Xuất dữ liệu → Tải xuống CSV/Excel
- Cập nhật kho sản phẩm (nếu được phép) → Lưu các thay đổi
- Đăng xuất → Kết thúc phiên, quay lại đăng nhập

---

---

## TÓM TẮT CÁC ENDPOINTS API THEO MÀN HÌNH

| Màn Hình | HTTP | Endpoint | Bảo Vệ | Bắt Buộc | Mục Đích |
|----------|------|----------|--------|----------|----------|
| Trang Chủ | GET | `/products` | ❌ | ⭐ Tùy Chọn | Sản phẩm nổi bật |
| Giới Thiệu | - | Không cần API | - | - | Nội dung tĩnh |
| Danh Sách Sản Phẩm | GET | `/products` | ❌ | ⭐ Bắt Buộc | Danh sách sản phẩm |
| Chi Tiết Sản Phẩm | GET | `/products/:id` | ❌ | ⭐ Bắt Buộc | Chi tiết sản phẩm |
| Chi Tiết Sản Phẩm | GET | `/reviews` | ❌ | ⭐ Tùy Chọn | Đánh giá/xếp hạng |
| Thanh Toán | POST | `/orders` | ❌ | ⭐ Bắt Buộc | Tạo đơn hàng |
| Thanh Toán | GET | `/users/profile` | ✅ | ⭐ Tùy Chọn | Điền sẵn thông tin người dùng |
| Thanh Toán | POST | `/auth/login` | ❌ | ⭐ Tùy Chọn | Đăng nhập người dùng |
| Cảm Ơn | GET | `/orders/:id` | ❌ | ⭐ Bắt Buộc | Xác nhận đơn hàng |
| Liên Hệ | POST | `/contacts` | ❌ | ⭐ Bắt Buộc | Gửi biểu mẫu liên hệ |
| Quản Trị | POST | `/auth/login` | ❌ | ⭐ Bắt Buộc | Xác thực quản trị viên |
| Quản Trị | GET | `/orders/all` | ✅ Quản Trị | ⭐ Bắt Buộc | Tất cả đơn hàng |
| Quản Trị | GET | `/users` | ✅ Quản Trị | ⭐ Bắt Buộc | Tất cả người dùng |
| Quản Trị | GET | `/orders/:id` | ✅ Quản Trị | ⭐ Tùy Chọn | Chi tiết đơn hàng |
| Quản Trị | GET | `/users/:id` | ✅ Quản Trị | ⭐ Tùy Chọn | Chi tiết người dùng |
| Quản Trị | PUT | `/orders/:id` | ✅ Quản Trị | ⭐ Tùy Chọn | Cập nhật trạng thái đơn hàng |

---

## Xác Thực & Phân Quyền

### Các Endpoint Công Khai (Không Yêu Cầu Token)
- GET /products, GET /products/:id
- GET /orders/:id
- POST /orders
- POST /contacts
- POST /auth/login, POST /auth/register, POST /auth/forgot-password, v.v.
- GET /reviews

### Các Endpoint Được Bảo Vệ (Yêu Cầu Token JWT)
- GET /users/profile (bất kỳ người dùng nào đã xác thực)
- PUT /users/profile (bất kỳ người dùng nào đã xác thực)
- POST /reviews (bất kỳ người dùng nào đã xác thực)

### Các Endpoint Quản Trị (Yêu Cầu Token JWT + Vai Trò Quản Trị)
- GET /users
- GET /orders/all
- GET /users/:id
- PUT /orders/:id
- POST /products, PUT /products/:id, DELETE /products/:id

### URL Cơ Sở
```
http://localhost:5000/api/v1
```

### Header Xác Thực
```
Authorization: Bearer <JWT_TOKEN>
```

---

## Tóm Tắt Luồng Dữ Liệu

```
Trang Chủ → Giới Thiệu → Trang Sản Phẩm → Chi Tiết Sản Phẩm → Thanh Toán → Cảm Ơn
      ↓                                                              ↓
   Trang Liên Hệ ←────────────────────────────────────────────────→
      
Bảng Điều Khiển Quản Trị (khu vực xác thực riêng)
- Xem dữ liệu tập hợp từ tất cả các đơn hàng thành công
- Có thể xem danh sách người dùng và thông tin doanh thu
```

---

## Các Bảng Cơ Sở Dữ Liệu Cần Thiết

1. **products** (id, name, description, price, image, material, dimensions, stock)
2. **orders** (id, customer_id, order_date, total_amount, status, items)
3. **order_items** (id, order_id, product_id, quantity, price)
4. **customers** (id, name, email, phone, address, city, postal_code, country)
5. **admin_users** (id, username, password_hash, email)
6. **contact_submissions** (id, name, email, phone, subject, message, created_at)

---

## ⚠️ Endpoint API Mới Cần Thiết

### POST `/contacts` - Gửi Biểu Mẫu Liên Hệ
- **Mục đích**: Nhận và lưu biểu mẫu liên hệ từ khách hàng
- **Tham số**:
  - `name` (string, bắt buộc): Tên người liên hệ
  - `email` (string, bắt buộc): Email liên hệ
  - `phone` (string, bắt buộc): Số điện thoại
  - `subject` (string, bắt buộc): Tiêu đề tin nhắn
  - `message` (string, bắt buộc): Nội dung tin nhắn
- **Phản Hồi**: Thông báo xác nhận + ID liên hệ đã lưu
- **Bảo Vệ**: ❌ Không
- **Hành Động**:
  1. Kiểm tra tính hợp lệ của các trường nhập liệu
  2. Lưu vào cơ sở dữ liệu (bảng contact_submissions)
  3. Gửi email xác nhận cho khách hàng
  4. Gửi email thông báo cho quản trị viên (lientamgom@gmail.com)

**Lược Đồ Cơ Sở Dữ Liệu cho contact_submissions:**
```sql
CREATE TABLE contact_submissions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  read BOOLEAN DEFAULT FALSE
)
```
