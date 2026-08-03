const products = [
  {
    name: "T-Shirt",
    price: "$20",
    image: "tshirt.jpg"
  },
  {
    name: "Jeans",
    price: "$35",
    image: "jeans.jpg"
  },
  {
    name: "Hoodie",
    price: "$40",
    image: "hoodie.jpg"
  },
  {
    name: "Jacket",
    price: "$55",
    image: "jacket.jpg"
  },
  {
    name: "Dress",
    price: "$30",
    image: "dress.jpg"
  },
  {
    name: "Sneakers",
    price: "$45",
    image: "sneakers.jpg"
  }
];

const productsContainer = document.getElementById("products");

products.forEach(product => {
  productsContainer.innerHTML += `
    <div class="card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  `;
});