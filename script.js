const products = [
  {
    id: 1,
    name: "Men's T-Shirt",
    category: "Men",
    price: 25,
    image: "images/tshirt.jpg"
  },
  {
    id: 2,
    name: "Women's Dress",
    category: "Women",
    price: 55,
    image: "images/dress.jpg"
  },
  {
    id: 3,
    name: "Black Hoodie",
    category: "Men",
    price: 40,
    image: "images/hoodie.jpg"
  },
  {
    id: 4,
    name: "Blue Jeans",
    category: "Men",
    price: 45,
    image: "images/jeans.jpg"
  },
  {
    id: 5,
    name: "Winter Jacket",
    category: "Women",
    price: 80,
    image: "images/jacket.jpg"
  },
  {
    id: 6,
    name: "Kids Sneakers",
    category: "Kids",
    price: 70,
    image: "images/sneakers.jpg"
  }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("products");
const searchInput = document.querySelector(".search input");
const cartCount = document.getElementById("cart-count");

updateCart();

function updateCart() {
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

function addToCart(id) {
  const product = products.find(p => p.id === id);

  if (!product) return;

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();

  alert(product.name + " added to cart!");
}

function showProducts(list) {
  if (!container) return;

  container.innerHTML = "";

  list.forEach(product => {
    container.innerHTML += `
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

showProducts(products);

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    const result = products.filter(product =>
      product.name.toLowerCase().includes(value) ||
      product.category.toLowerCase().includes(value)
    );

    showProducts(result);
  });
}