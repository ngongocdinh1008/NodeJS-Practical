// Kết nối đến database MongoDB
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/product_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const ProductSchema = new mongoose.Schema({
  ProductCode: String,
  ProductName: String,
  ProductDate: Date,
  ProductOriginPrice: Number,
  Quantity: Number,
  ProductStoreCode: String
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
