const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Tạo sản phẩm mới
router.post('/', async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Lấy danh sách sản phẩm
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

// Lấy thông tin chi tiết sản phẩm
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send('Product not found');
    res.send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Sửa thông tin sản phẩm
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).send('Product not found');
    res.send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Xóa sản phẩm
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.send('Product deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
