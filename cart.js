let cart = [];

function addToCart(productId, quantity = 1) {
  const product = fetchProducts().find((p) => p.id === productId);
  if (!product) return;

  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  updateUI();
}

function updateQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    cart = cart.filter((item) => item.id !== productId);
  } else {
    const cartItem = cart.find((item) => item.id === productId);
    if (cartItem) cartItem.quantity = newQuantity;
  }

  updateUI();
}


function clearCart() {
  cart = [];
  updateUI();
}

function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}


function getCartItems() {
  return cart;
}