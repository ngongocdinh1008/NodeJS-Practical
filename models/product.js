const Sequelize = require('sequelize');
const db = require('../config/database');
const Product = require('./models/product');

const Product = db.define('Product', {
  productcode: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  productname: {
    type: Sequelize.STRING,
  },
  productDate: {
    type: Sequelize.DATE,
  },
  productPrice: {
    type: Sequelize.FLOAT,
  },
  productStorecode: {
    type: Sequelize.STRING,
  },
});

module.exports = Product;