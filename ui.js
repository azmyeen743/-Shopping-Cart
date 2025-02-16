
function renderProducts() {
    const productList = document.getElementById('product-list');
    const products = fetchProducts();
  
    productList.innerHTML = products
      .map(
        (product) => `
        <div class="product">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      `
      )
      .join('');
  }
  

  function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
  
    const items = getCartItems();
    cartItems.innerHTML = items
      .map(
        (item) => `
        <div class="cart-item">
          <span>${item.name} (x${item.quantity})</span>
          <span>$${(item.price * item.quantity).toFixed(2)}</span>
          <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
          <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
        </div>
      `
      )
      .join('');
  
    cartTotal.textContent = `Total: $${calculateTotal().toFixed(2)}`;
    cartCount.textContent = `Cart: ${items.reduce((sum, item) => sum + item.quantity, 0)}`;
  }

  function updateUI() {
    renderProducts();
    updateCartUI();
  }