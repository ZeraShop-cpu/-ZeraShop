ZeraShop/
│── index.html
│── style.css
│── script.js
│── login.html
│── products.html
│── about.html
│── contact.html
│── cart.html
│
├── images/
└── icons/
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeBtn.innerHTML = "☀️";
        } else {
            themeBtn.innerHTML = "🌙";
        }
    });
}
const slider = document.getElementById("slider");

if (slider) {
    const banners = [
        "images/banner.PNG",
        "images/product5.PNG",
        "images/product6.PNG",
        "images/product7.PNG",
        "images/product8.PNG"
    ];

    let current = 0;

    setInterval(() => {
        current = (current + 1) % banners.length;
        slider.src = banners[current];
    }, 3000);
}
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const value = this.value.toLowerCase();
        const products = document.querySelectorAll(".product-card");

        products.forEach(product => {
            const text = product.innerText.toLowerCase();

            if (text.includes(value)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cartCount");

if (cartCount) {
    cartCount.innerText = cart.length;
}