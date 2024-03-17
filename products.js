const router = express.Router();

const Product = require('../models/product');

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

router.post('/', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send(product);
});

router.delete('/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send('Product deleted successfully');
});

module.exports = router;
