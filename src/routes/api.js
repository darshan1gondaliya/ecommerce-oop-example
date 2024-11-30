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
// Get Order by ID
router.get("/order/:id", async (req, res) => {
  try {
    const order = await OrderService.getOrderById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Orders
router.get("/orders", async (req, res) => {
  try {
    const orders = await OrderService.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Order
router.put("/order/:id", async (req, res) => {
  try {
    const updatedOrder = await OrderService.updateOrder(req.params.id, req.body);
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Order
router.delete("/order/:id", async (req, res) => {
  try {
    const isDeleted = await OrderService.deleteOrder(req.params.id);
    if (!isDeleted) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
