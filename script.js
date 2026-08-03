// ZeraShop - Clothing Store

const products = [
  {
    id: 1,
    name: "Men's T-Shirt",
    price: 25,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
  },
  {
    id: 2,
    name: "Women's Dress",
    price: 55,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600"
  },
  {
    id: 3,
    name: "Black Hoodie",
    price: 40,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600"
  },
  {
    id: 4,
    name: "Blue Jeans",
    price: 45,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600"
  },
  {
    id: 5,
    name: "Winter Jacket",
    price: 80,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600"
  },
  {
    id: 6,
    name: "White Sneakers",
    price: 70,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
  }
];

let cart = [];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  cart.push(product);
  alert(product.name + " added to cart!");
}

const container = document.getElementById("products");

if (container) {
  products.forEach(product => {
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
