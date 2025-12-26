const Product = require("../models/Product");

// CREATE (admin)
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, product });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// GET ALL (admin)
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json({ success: true, count: products.length, products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ FRONTEND WOMEN LISTING (MongoDB se)
exports.getWomenProducts = async (req, res) => {
  try {
    const filter = { category: "Women" };

    if (req.query.subCategory) filter.subCategory = req.query.subCategory;
    if (req.query.fabric) filter.fabric = req.query.fabric;
    if (req.query.style) filter.style = req.query.style;
    if (req.query.work) filter.work = req.query.work;
    if (req.query.length) filter.length = req.query.length;

    const products = await Product.find(filter).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET SINGLE
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE (admin)
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.json({ success: true, product });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE (admin)
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
