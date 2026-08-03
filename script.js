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
    name: "Hoodie",
    category: "Men",
    price: 40,
    image: "images/hoodie.jpg"
  },
  {
    id: 4,
    name: "Jeans",
    category: "Men",
    price: 45,
    image: "images/jeans.jpg"
  },
  {
    id: 5,
    name: "Jacket",
    category: "Women",
    price: 80,
    image: "images/jacket.jpg"
  },
  {
    id: 6,
    name: "Sneakers",
    category: "Kids",
    price: 70,
    image: "images/sneakers.jpg"
  }
];

let cart = [];

const container = document.getElementById("products");
const searchInput = document.querySelector(".search input");

function displayProducts(list) {
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

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);

  alert(`${product.name} added to cart!`);