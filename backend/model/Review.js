const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
   
  // rating của từng sản phẩm
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },

  comment: {
    type: String,
    trim: true
  }
}, { timestamps: true })

// 🚫 Mỗi user chỉ được review 1 lần / 1 sản phẩm
reviewSchema.index({ user: 1, product: 1 }, { unique: true })

module.exports = mongoose.model('Review', reviewSchema)
