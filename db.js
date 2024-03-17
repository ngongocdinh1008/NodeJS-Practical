const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/product-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ProductSchema = new mongoose.Schema({
  productCode: String,
  productName: String,
  productDate: Date,
  productOriginPrice: Number,
  quantity: Number,
  productStoreCode: String,
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
