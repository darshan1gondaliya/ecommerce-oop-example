const OrderController = require('./controllers/OrderController');

// Example usage
console.log('Creating an order...');
const order = OrderController.createOrder([1, 2, 3]);

console.log('Order created successfully:');
console.log(order);
