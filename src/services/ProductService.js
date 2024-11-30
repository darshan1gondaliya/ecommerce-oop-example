const Product = require('../models/Product');

class ProductService {
  static async createProduct(name, price) {
    const product = new Product({ name, price });
    await product.save();
    return product;
  }

  static async findProductById(id) {
    return Product.findById(id);
  }
}

module.exports = ProductService;
