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
  alert(product.name + " added to cart!");
}

const container = document.getElementById("products");

products.forEach(product => {
  container.innerHTML += `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">
        Add to Cart
      </button>
    </div>
  `;
});