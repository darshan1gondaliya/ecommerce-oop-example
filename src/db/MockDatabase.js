class MockDatabase {
    static findProduct(id) {
      return { id, name: `Product ${id}`, price: Math.random() * 100 };
    }
  }
  
  module.exports = MockDatabase;
  