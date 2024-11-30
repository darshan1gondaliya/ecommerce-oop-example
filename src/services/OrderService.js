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

  static async getAllOrders() {
    // Simulate retrieving all orders
    const orders = await OrderModel.find();
    return orders;
  }

  static async updateOrder(orderId, orderData) {
    // Simulate updating an order in the database
    const updatedOrder = await OrderModel.findByIdAndUpdate(orderId, orderData, { new: true });
    return updatedOrder;
  }
  static async deleteOrder(orderId) {
    const result = await Order.findByIdAndDelete(orderId);
    return result !== null;
  }
}

module.exports = OrderService;
