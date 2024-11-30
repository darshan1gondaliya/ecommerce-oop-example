const ProductService = require('../src/services/ProductService');

test('should return a Product instance', () => {
  const product = ProductService.findProductById(1);
  expect(product.name).toBe(`Product 1`);
  expect(product.price).toBeGreaterThan(0);
});
