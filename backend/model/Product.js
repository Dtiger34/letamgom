const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  description: String,
  images: [String],

  stock: { type: Number, default: 0 },
  sold: { type: Number, default: 0 },

  // rating trung bình của sản phẩm
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },

  // Trạng thái ẩn/hiện
  active: { type: Boolean, default: true }
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)
