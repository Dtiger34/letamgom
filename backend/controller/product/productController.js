const Product = require('../../model/Product')

// Create product (admin)
exports.createProduct = async (req, res) => {
	try {
		const data = req.body
		const product = await Product.create(data)
		res.status(201).json(product)
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message })
	}
}

// Get list of products (public)
exports.getProducts = async (req, res) => {
	try {
		const page = Math.max(1, parseInt(req.query.page) || 1)
		const limit = Math.max(1, Math.min(100, parseInt(req.query.limit) || 20))
		const q = req.query.q

		const filter = {}
		if (q) filter.name = { $regex: q, $options: 'i' }

		const skip = (page - 1) * limit
		const products = await Product.find(filter)
			.skip(skip)
			.limit(limit)

		const total = await Product.countDocuments(filter)
		const pages = Math.ceil(total / limit)

		res.json({
			products,
			data: products,
			total,
			page,
			limit,
			pages
		})
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message })
	}
}

// Get single product by id (public)
exports.getProductById = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id)
		if (!product) return res.status(404).json({ message: 'Product not found' })
		res.json(product)
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message })
	}
}

// Update product (admin)
exports.updateProduct = async (req, res) => {
	try {
		const updates = req.body
		const product = await Product.findByIdAndUpdate(req.params.id, updates, { new: true })
		if (!product) return res.status(404).json({ message: 'Product not found' })
		res.json(product)
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message })
	}
}

// Delete product (admin)
exports.deleteProduct = async (req, res) => {
	try {
		const product = await Product.findByIdAndDelete(req.params.id)
		if (!product) return res.status(404).json({ message: 'Product not found' })
		res.json({ message: 'Product deleted' })
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message })
	}
}

