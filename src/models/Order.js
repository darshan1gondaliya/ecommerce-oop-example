const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  customer: { type: String, required: true },
  total: { type: Number, required: true },
  status: { type: String, default: "Pending" },

  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    }
  ],
  createdAt: { type: Date, default: Date.now },

});

// Calculate total price of the order
OrderSchema.methods.calculateTotal = async function () {
  // Populate the products
  await this.populate('products');
  const products = this.products;

  // Calculate the total
  return products.reduce((total, product) => total + product.price, 0);
};

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
