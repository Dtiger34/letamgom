const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
require("dotenv").config();

// Import Models
const User = require("./model/User");
const Product = require("./model/Product");
const Review = require("./model/Review");
const Cart = require("./model/Cart");
const Order = require("./model/Order");

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/bambooshop",
    );
    console.log("MongoDB đã kết nối");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

// Clear all collections
const clearDB = async () => {
  try {
    await User.deleteMany({});
    await Product.deleteMany({});
    await Review.deleteMany({});
    await Cart.deleteMany({});
    await Order.deleteMany({});
    console.log("Cơ sở dữ liệu đã xóa");
  } catch (err) {
    console.error("Error clearing database:", err.message);
  }
};

// Seed data
const seedDB = async () => {
  try {
    // Create Users (manually hash passwords to bypass hook)
    const hashPassword = async (pwd) => {
      const salt = await bcryptjs.genSalt(10);
      return await bcryptjs.hash(pwd, salt);
    };

    const users = await User.insertMany([
      {
        name: "Quản Trị Viên",
        email: "lientamgom@gmail.com",
        password: await hashPassword("admin123"),
        role: "admin",
      },
      {
        name: "Trương Mạnh Hùng",
        email: "truongmanhhung@gmail.com",
        password: await hashPassword("user123"),
        role: "user",
      },
      {
        name: "Lê Thị Hương",
        email: "lethihuong@gmail.com",
        password: await hashPassword("user123"),
        role: "user",
      },
      {
        name: "Phạm Đức Long",
        email: "phamducklong@gmail.com",
        password: await hashPassword("user123"),
        role: "user",
      },
    ]);
    console.log("✓ Người dùng đã được thêm:", users.length);

    // Create Products
    const products = await Product.insertMany([
      {
        name: "Bình Hút Lộc Liên Tâm Gốm",
        code: "H250",
        price: 2650000,
        description: "Bình hút lộc độc đáo, phù hợp trang trí nội thất cao cấp",
        images: ["/upload/H250.jpg"],
        stock: 50,
        active: true,
      },
      {
        name: "Trứng Tài Lộc Liên Tâm Gốm",
        code: "H251",
        price: 2650000,
        description: "Trứng tài lộc mang ý nghĩa may mắn và thịnh vượng",
        images: ["/upload/H251.jpg"],
        stock: 50,
        active: true,
      },
      {
        name: "Đĩa Cảnh Liên Tâm Gốm",
        code: "H252",
        price: 650000,
        description: "Đĩa cảnh tinh xảo, là tác phẩm nghệ thuật gốm tuyệt đẹp",
        images: ["/upload/H252.jpg"],
        stock: 80,
        active: true,
      },
      {
        name: "Bình Hoa Mẫu Đơn Liên Tâm Gốm",
        code: "H253",
        price: 2650000,
        description: "Bình hoa hình mẫu đơn, biểu tượng của sự sang trọng",
        images: ["/upload/H253.jpg"],
        stock: 50,
        active: true,
      },
      {
        name: "Hũ Đựng Trà Liên Tâm Gốm",
        code: "H254",
        price: 1850000,
        description: "Hũ đựng trà cao cấp, giữ hương vị trà tự nhiên",
        images: ["/upload/H254.jpg"],
        stock: 60,
        active: true,
      },
      {
        name: "Bình Tích Lộc Tứ Cảnh Liên Tâm Gốm",
        code: "H255",
        price: 7700000,
        description: "Bình tích lộc tứ cảnh, tác phẩm quý giá dành cho những bộ sưu tập đặc biệt",
        images: ["/upload/H255.jpg"],
        stock: 30,
        active: true,
      },
      {
        name: "Bình Hoa Phi Yến Chim Hoa Lựu",
        code: "H256",
        price: 2200000,
        description: "Bình hoa phi yến với họa tiết chim hoa lựu, tinh tế và đầy màu sắc",
        images: ["/upload/H256.jpg"],
        stock: 45,
        active: true,
      },
      {
        name: "Bình Hút Tài Lộc Cửu Ngư Hoa Sen Liên Tâm Gốm",
        code: "H257",
        price: 30000000,
        description: "Bình hút tài lộc cửu ngư hoa sen, tác phẩm cao cấp nhất, biểu tượng của thịnh vượng tối cao",
        images: ["/upload/H257.jpg"],
        stock: 10,
        active: true,
      },
      {
        name: "Bình Tứ Cảnh Sơn Thủy Liên Tâm Gốm",
        code: "H258",
        price: 18000000,
        description: "Bình tứ cảnh sơn thủy, kỳ công về nghệ thuật sơn mài và thiết kế",
        images: ["/upload/H258.jpg"],
        stock: 20,
        active: true,
      },
    ]);
    console.log("✓ Sản phẩm đã được thêm:", products.length);

    // Create Reviews
    const reviews = await Review.insertMany([
      {
        user: users[1]._id,
        product: products[0]._id,
        rating: 5,
        comment: "Bình hút lộc rất đẹp! Chất lượng gốm tuyệt vời, trang trí nhà thật sang trọng.",
      },
      {
        user: users[2]._id,
        product: products[0]._id,
        rating: 5,
        comment: "Sản phẩm gốm truyền thống, chi tiết và tinh xảo. Rất hài lòng!",
      },
      {
        user: users[1]._id,
        product: products[2]._id,
        rating: 5,
        comment: "Đĩa cảnh xinh đẹp, họa tiết tinh tế. Quá xuất sắc!",
      },
      {
        user: users[3]._id,
        product: products[4]._id,
        rating: 5,
        comment: "Hũ đựng trà rất chắc chắn, giữ mùi trà tuyệt vời.",
      },
      {
        user: users[2]._id,
        product: products[1]._id,
        rating: 4,
        comment: "Trứng tài lộc đẹp lắm, mang ý nghĩa tốt lành.",
      },
    ]);
    console.log("✓ Đánh giá đã được thêm:", reviews.length);

    // Create Carts
    const carts = await Cart.insertMany([
      {
        user: users[1]._id,
        items: [
          { product: products[0]._id, quantity: 1 },
          { product: products[1]._id, quantity: 2 },
        ],
      },
      {
        user: users[2]._id,
        items: [{ product: products[2]._id, quantity: 1 }],
      },
    ]);
    console.log("✓ Giỏ hàng đã được thêm:", carts.length);

    // Create Orders
    const orders = await Order.insertMany([
      {
        user: users[1]._id,
        items: [
          {
            product: products[0]._id,
            name: products[0].name,
            price: products[0].price,
            quantity: 1,
          },
          {
            product: products[2]._id,
            name: products[2].name,
            price: products[2].price,
            quantity: 1,
          },
        ],
        totalPrice: products[0].price + products[2].price,
        shippingAddress: {
          fullName: "Nguyễn Văn A",
          phone: "+84912345678",
          address: "123 Đường Nguyễn Huệ, Quận 1, TP.HCM",
        },
        status: "completed",
        paymentMethod: "Bank Transfer",
        isPaid: true,
        paidAt: new Date("2026-02-01"),
      },
      {
        user: users[2]._id,
        items: [
          {
            product: products[1]._id,
            name: products[1].name,
            price: products[1].price,
            quantity: 1,
          },
          {
            product: products[4]._id,
            name: products[4].name,
            price: products[4].price,
            quantity: 1,
          },
        ],
        totalPrice: products[1].price + products[4].price,
        shippingAddress: {
          fullName: "Trần Thị B",
          phone: "+84987654321",
          address: "456 Đường Trần Hưng Đạo, Quận 4, TP.HCM",
        },
        status: "shipped",
        paymentMethod: "COD",
        isPaid: true,
        paidAt: new Date("2026-02-03"),
      },
      {
        user: users[3]._id,
        items: [
          {
            product: products[3]._id,
            name: products[3].name,
            price: products[3].price,
            quantity: 1,
          },
        ],
        totalPrice: products[3].price,
        shippingAddress: {
          fullName: "Phạm Văn C",
          phone: "+84933333333",
          address: "789 Đường Võ Văn Kiệt, Quận 5, TP.HCM",
        },
        status: "pending",
        paymentMethod: "Bank Transfer",
        isPaid: false,
      },
    ]);
    console.log("✓ Đơn hàng đã được thêm:", orders.length);

    console.log("\n✅ Dữ liệu đã được thêm vào cơ sở dữ liệu thành công!");
  } catch (err) {
    console.error("Error seeding database:", err.message);
  }
};

// Run seed
const runSeed = async () => {
  await connectDB();
  await clearDB();
  await seedDB();
  await mongoose.connection.close();
  console.log("Kết nối đã đóng");
};

runSeed();
