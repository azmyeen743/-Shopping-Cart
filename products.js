const products = [
  {
    id: 1,
    name: "Airpords",
    description: "This is product 1.",
    price: 10.99,
    image: "Airpords.png"
  },
  {
    id: 2,
    name: "SSD",
    description: "This is product 2.",
    price: 19.99,
    image: "SSD.png"
  },
  {
    id: 3,
    name: "Keyboard",
    description: "This is product 3.",
    price: 5.99,
    image: "Keyboard.png"
  }
];

function fetchProducts() {
  return products;
}