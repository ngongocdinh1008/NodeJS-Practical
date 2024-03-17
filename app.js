const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/product-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', require('./routes/products'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
