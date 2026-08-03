const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 20,
    image: "images/tshirt.jpg",
    category: "Men"
  },
  {
    id: 2,
    name: "Jeans",
    price: 35,
    image: "images/jeans.jpg",
    category: "Men"
  },
  {
    id: 3,
    name: "Hoodie",
    price: 40,
    image: "images/hoodie.jpg",
    category: "Men"
  },
  {
    id: 4,
    name: "Dress",
    price: 30,
    image: "images/dress.jpg",
    category: "Women"
  },
  {
    id: 5,
    name: "Jacket",
    price: 55,
    image: "images/jacket.jpg",
    category: "Women"
  },
  {
    id: 6,
    name: "Sneakers",
    price: 45,
    image: "images/sneakers.jpg",
    category: "Kids"
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

        <div class="buttons">
          <button onclick="addToCart(${product.id})">
            Add to Cart
          </button>

          <button class="buy-btn">
            Buy Now
          </button>
        </div>

      </div>
    `;
  });
}

function addToCart(id) {
  cart.push(id);
  if (cartCount) {
    cartCount.innerHTML = cart.length;
  }
}

function searchProducts() {
  const search = document.getElementById("search");

  if (!search) return;

  const value = search.value.toLowerCase();

  const result = products.filter(product =>
    product.name.toLowerCase().includes(value)
  );

  showProducts(result);
}

function filterCategory(category) {

  if (category === "All") {
    showProducts(products);
    return;
  }

  const result = products.filter(product =>
    product.category === category
  );

  showProducts(result);
}

showProducts(products);

const buttons = document.querySelectorAll(".categories button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterCategory(btn.innerText);
  });
});