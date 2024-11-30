const ProductService = require('../services/ProductService');
const OrderService = require('../services/OrderService');

class OrderController {
  static createOrder(productIds) {
    const products = productIds.map((id) => ProductService.findProductById(id));
    const order = OrderService.createOrder(products);
    return order;
  }
}

module.exports = OrderController;
