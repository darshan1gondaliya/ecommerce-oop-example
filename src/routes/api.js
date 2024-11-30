const express = require("express");
const ProductService = require("../services/ProductService");
const OrderService = require("../services/OrderService");

const router = express.Router();

// Create a product
router.post("/product", async (req, res) => {
  try {
    const { name, price, description } = req.body;
    console.log(req.body);
    const product = await ProductService.createProduct(name, price, description);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to fetch a single product by ID
router.get("/products/:id", async (req, res) => {
  try {
    const product = await ProductService.findProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to fetch multiple products with pagination and sorting
router.get("/products", async (req, res) => {
  try {
    const { page = 1, limit = 10, sortBy = "name", order = "asc" } = req.query;
    const products = await ProductService.getProducts({
      page: Number(page),
      limit: Number(limit),
      sortBy,
      order,
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create an order
router.post("/orders", async (req, res) => {
  try {
    const { products } = req.body;
    const order = await OrderService.createOrder(products);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get order total
router.get("/order/:id/total", async (req, res) => {
  try {
    const total = await OrderService.calculateOrderTotal(req.params.id);
    res.status(200).json({ total });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
