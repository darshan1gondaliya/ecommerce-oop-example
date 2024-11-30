const express = require('express');
const ProductService = require('../services/ProductService');
const OrderService = require('../services/OrderService');

const router = express.Router();

// Create a product
router.post('/product', async (req, res) => {
  const { name, price } = req.body;
  const product = await ProductService.createProduct(name, price);
  res.status(201).json(product);
});

// Create an order
router.post('/order', async (req, res) => {
  const { productIds } = req.body;
  const order = await OrderService.createOrder(productIds);
  res.status(201).json(order);
});

// Get order total
router.get('/order/:id/total', async (req, res) => {
  const total = await OrderService.calculateOrderTotal(req.params.id);
  res.status(200).json({ total });
});

module.exports = router;
