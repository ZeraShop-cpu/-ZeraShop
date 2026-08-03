const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 20,
    image: "tshirt.jpg"
  },
  {
    id: 2,
    name: "Jeans",
    price: 35,
    image: "jeans.jpg"
  },
  {
    id: 3,
    name: "Hoodie",
    price: 40,
    image: "hoodie.jpg"
  },
  {
    id: 4,
    name: "Jacket",
    price: 55,
    image: "jacket.jpg"
  },
  {
    id: 5,
    name: "Dress",
    price: 30,
    image: "dress.jpg"
  },
  {
    id: 6,
    name: "Sneakers",
    price: 45,
    image: "sneakers.jpg"
  }
];

let cart = [];

const productsContainer = document.getElementById("products");
const cartCount = document.getElementById("cart-count");

function showProducts(list) {
  productsContainer.innerHTML = "";

  list.forEach(product => {
    productsContainer.innerHTML += `
      <div class="card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      </div>
    `;
  });
}

function addToCart(id) {
  cart.push(id);
  cartCount.textContent = cart.length;
  alert("Added to Cart");
}

function searchProducts() {
  const text = document
    .getElementById("search")
    .value
    .toLowerCase();

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(text)
  );

  showProducts(filtered);
}

showProducts(products);