const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product');

const app = express();

mongoose.connect('mongodb://localhost:27017/product-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/products', async (req, res) => {
  const products = await Product.find().sort({ productStoreCode: -1 });
  res.send(products);
});

app.post('/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send(product);
});

app.delete('/products/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send('Product deleted successfully');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
