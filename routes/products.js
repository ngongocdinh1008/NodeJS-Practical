const express = require('express');
const router = express.Router();

const Product = require('../models/product');

router.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

router.post('/', async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

router.get('/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

router.put('/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  await product.update(req.body);
  res.json(product);
});

router.delete('/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  await product.destroy();
  res.json({ message: 'Product deleted successfully' });
});

module.exports = router;