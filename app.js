const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const db = require('./config/database');
const Product = require('./models/product');

app.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.render('index', { products });
});

app.post('/', async (req, res) => {
  const product = await Product.create(req.body);
  res.redirect('/');
});

app.get('/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  res.render('edit', { product });
});

app.put('/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  await product.update(req.body);
  res.redirect('/');
});

app.delete('/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  await product.destroy();
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});