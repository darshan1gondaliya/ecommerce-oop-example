const Product = require("../models/Product");

class ProductService {
  static async createProduct(name, price, description) {
    const product = new Product({ name, price, description });
    await product.save();
    return product;
  }

  static async findProductById(id) {
    return Product.findById(id);
  }

  // Fetch multiple products with sorting and pagination
  static async getProducts({
    page = 1,
    limit = 10,
    sort = "name",
    order = "asc",
  }) {
    const skip = (page - 1) * limit;
    const sortOrder = order === "asc" ? 1 : -1;
    return await Product.find()
      .sort({ [sort]: sortOrder })
      .skip(skip)
      .limit(limit);
  }
}

module.exports = ProductService;
