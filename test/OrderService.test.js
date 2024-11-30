const OrderService = require('../src/services/OrderService');
const Product = require('../src/models/Product');

test('should create an order and calculate total', () => {
  const products = [new Product(1, 'Test Product', 50), new Product(2, 'Another Product', 75)];
  const order = OrderService.createOrder(products);

  expect(order.calculateTotal()).toBe(125);
});
