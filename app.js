const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/products');

const app = express();

mongoose.connect('mongodb://localhost:27017/product-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', productRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
