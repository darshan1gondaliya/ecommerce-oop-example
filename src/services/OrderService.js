const Order = require('../models/Order');

class OrderService {
  static async createOrder(productIds) {
    const order = new Order({ products: productIds });
    await order.save();
    return order;
  }

  static async calculateOrderTotal(orderId) {
    const order = await Order.findById(orderId).populate('products');
    return order.calculateTotal();
  }
}

module.exports = OrderService;
