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
    image: "images/drees.jpg",
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
  },
  {
    id: 7,
    name: "Shoes",
    price: 50,
    image: "images/shoes.jpg",
    category: "Men"
  },
  {
    id: 8,
    name: "Bag",
    price: 25,
    image: "images/bag.jpg",
    category: "Women"
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
          <button onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="buy-btn" onclick="buyNow(${product.id})">Buy Now</button>
        </div>
      </div>
    `;
  });
}

function addToCart(id) {
  cart.push(id);
  cartCount.textContent = cart.length;
}

function buyNow(id) {
  const product = products.find(p => p.id === id);
  alert(`Product: ${product.name}\nPrice: $${product.price}\n\nThank you for shopping at ZeraShop ❤️`);
}

function searchProducts() {
  const value = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(value)
  );
  showProducts(filtered);
}

document.querySelectorAll(".categories button").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.textContent.trim();

    if (category === "All") {
      showProducts(products);
    } else {
      showProducts(products.filter(product => product.category === category));
    }
  });
});

showProducts(products);