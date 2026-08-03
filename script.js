const products = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    price: 999,
    image: "https://picsum.photos/300?random=1"
  },
  {
    id: 2,
    name: "MacBook Pro",
    price: 1999,
    image: "https://picsum.photos/300?random=2"
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 249,
    image: "https://picsum.photos/300?random=3"
  },
  {
    id: 4,
    name: "Apple Watch",
    price: 399,
    image: "https://picsum.photos/300?random=4"
  }
];

let cart = [];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
  alert(product.name + " added to cart!");
}

function updateCart() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

function searchProducts() {
  const input = document
    .getElementById("search")
    .value.toLowerCase();

  const cards = document.querySelectorAll(".product-card");

  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();

    if (title.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}