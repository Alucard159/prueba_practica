class Product {
  constructor({ id, name, price }) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

 static async getAll() {
    try {
        return [
          new Product({ id: 1, name: "Product A", price: 100 }),
          new Product({ id: 2, name: "Product B", price: 200 }),
          new Product({ id: 3, name: "Product C", price: 300 }),
        ];
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Product;
