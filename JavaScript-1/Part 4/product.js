import products from "./data.js";

const showProducts = () => {
  products.forEach(product => {
    console.log(`${product.id}. ${product.name} - ₹${product.price}`);
  });
};

export default showProducts;
