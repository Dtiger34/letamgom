const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
require("dotenv").config();

// Import Models
const User = require("./model/User");
const Category = require("./model/Category");
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
    await Category.deleteMany({});
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
    // Create Categories
    const categories = await Category.insertMany([
      { name: "Đồ uống", slug: "do-uong" },
      { name: "Đồ dùng sinh hoạt", slug: "do-dung-sinh-hoat" },
      { name: "Đồ decor", slug: "do-decor" },
    ]);
    console.log("✓ Danh mục đã được thêm:", categories.length);

    // Create Users (manually hash passwords to bypass hook)
    const hashPassword = async (pwd) => {
      const salt = await bcryptjs.genSalt(10);
      return await bcryptjs.hash(pwd, salt);
    };

    const users = await User.insertMany([
      {
        name: "Quản Trị Viên",
        email: "trelab.store@gmail.com",
        password: await hashPassword("admin123"),
        role: "admin",
      },
      {
        name: "Nguyễn Văn A",
        email: "nguyenvana@example.com",
        password: await hashPassword("john123"),
        role: "user",
      },
      {
        name: "Trần Thị B",
        email: "tranthib@example.com",
        password: await hashPassword("jane123"),
        role: "user",
      },
      {
        name: "Phạm Văn C",
        email: "phamvanc@example.com",
        password: await hashPassword("bob123"),
        role: "user",
      },
    ]);
    console.log("✓ Người dùng đã được thêm:", users.length);

    // Create Products
    const products = await Product.insertMany([
      // ===== ĐỒ UỐNG =====
      {
        name: "Bình giữ nhiệt",
        price: 199000,
        description: "Bình giữ nhiệt cao cấp, giữ nóng/lạnh lâu dài",
        images: ["/upload/binh_giu_nhiet.PNG"],
        category: categories[0]._id,
        stock: 50,
      },
      {
        name: "Cốc có quai",
        price: 149000,
        description: "Cốc bamboo có quai tiện lợi, phù hợp một tay",
        images: ["/upload/coc_co_quai.PNG"],
        category: categories[0]._id,
        stock: 80,
      },
      {
        name: "Cốc giữ nhiệt có nắp",
        price: 199000,
        description: "Cốc giữ nhiệt có nắp kín, giữ nguyên vị thức uống",
        images: ["/upload/coc_giu_nhiet_co_nap.PNG"],
        category: categories[0]._id,
        stock: 70,
      },
      {
        name: "Cốc khảm sơn mài",
        price: 129000,
        description: "Cốc bamboo khảm sơn mài, họa tiết truyền thống đẹp mắt",
        images: ["/upload/coc_kham_son_mai.PNG"],
        category: categories[0]._id,
        stock: 60,
      },
      {
        name: "Cốc trơn size 10cm",
        price: 39000,
        description: "Cốc bamboo trơn kích thước 10cm, nhẹ nhàng và dễ sử dụng",
        images: ["/upload/coc_tron_size_10cm.PNG"],
        category: categories[0]._id,
        stock: 100,
      },
      {
        name: "Cốc trơn size 12cm",
        price: 49000,
        description:
          "Cốc bamboo trơn kích thước 12cm, vừa tay, dung tích vừa đủ",
        images: ["/upload/coc_tron_size_12cm.png"],
        category: categories[0]._id,
        stock: 90,
      },
      {
        name: "Cốc trơn size 15cm",
        price: 54000,
        description:
          "Cốc bamboo trơn kích thước 15cm, dung tích lớn cho những ai thích uống nhiều",
        images: ["/upload/coc_tron_size_15cm.PNG"],
        category: categories[0]._id,
        stock: 75,
      },
      {
        name: "Cốc vẽ truyền thống",
        price: 119000,
        description:
          "Cốc bamboo vẽ tay hoạ tiết truyền thống, độc đáo và tinh tế",
        images: ["/upload/coc_ve_truyen_thong.PNG"],
        category: categories[0]._id,
        stock: 65,
      },
    ]);
    console.log("✓ Sản phẩm đã được thêm:", products.length);

    // Create Reviews
    const reviews = await Review.insertMany([
      {
        user: users[1]._id,
        product: products[0]._id,
        rating: 5,
        comment: "Bình giữ nhiệt rất tốt! Giữ nóng được lâu và thiết kế đẹp.",
      },
      {
        user: users[2]._id,
        product: products[0]._id,
        rating: 4,
        comment: "Chất lượng tốt, nhưng giá hơi cao một chút.",
      },
      {
        user: users[1]._id,
        product: products[1]._id,
        rating: 5,
        comment: "Cốc có quai rất tiện dụng! Dễ dùng một tay.",
      },
      {
        user: users[3]._id,
        product: products[2]._id,
        rating: 5,
        comment: "Hài lòng với sản phẩm, nắp kín tốt và không rò rỉ.",
      },
      {
        user: users[2]._id,
        product: products[3]._id,
        rating: 4,
        comment: "Họa tiết đẹp, cốc chắc chắn và bền.",
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
            product: products[1]._id,
            name: products[1].name,
            price: products[1].price,
            quantity: 1,
          },
          {
            product: products[2]._id,
            name: products[2].name,
            price: products[2].price,
            quantity: 2,
          },
        ],
        totalPrice: products[1].price + products[2].price * 2,
        shippingAddress: {
          fullName: "Nguyễn Văn A",
          phone: "+84912345678",
          address: "123 Đường Nguyễn Huệ, Quận 1, TP.HCM",
        },
        status: "completed",
        paymentMethod: "Credit Card",
        isPaid: true,
        paidAt: new Date("2026-02-01"),
      },
      {
        user: users[2]._id,
        items: [
          {
            product: products[0]._id,
            name: products[0].name,
            price: products[0].price,
            quantity: 1,
          },
          {
            product: products[3]._id,
            name: products[3].name,
            price: products[3].price,
            quantity: 1,
          },
        ],
        totalPrice: products[0].price + products[3].price,
        shippingAddress: {
          fullName: "Trần Thị B",
          phone: "+84987654321",
          address: "456 Đường Trần Hưng Đạo, Quận 4, TP.HCM",
        },
        status: "shipping",
        paymentMethod: "PayPal",
        isPaid: true,
        paidAt: new Date("2026-02-03"),
      },
      {
        user: users[3]._id,
        items: [
          {
            product: products[4]._id,
            name: products[4].name,
            price: products[4].price,
            quantity: 1,
          },
        ],
        totalPrice: products[4].price,
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
