// =========================
// Zera Shop Script
// =========================

// ---------- Dark Mode ----------
const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (themeBtn) themeBtn.innerHTML = "☀️";
}

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeBtn.innerHTML = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.innerHTML = "🌙";
        }
    });
}

// ---------- Search ----------
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        cards.forEach(card => {

            let title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}

// ---------- Cart ----------
let cart = Number(localStorage.getItem("cart")) || 0;

const cartCount = document.getElementById("cartCount");

function updateCart() {
    if (cartCount) {
        cartCount.textContent = cart;
    }
}

updateCart();

document.querySelectorAll(".buy-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        cart++;

        localStorage.setItem("cart", cart);

        updateCart();

        btn.innerHTML = "✔ Added";

        btn.disabled = true;

        setTimeout(() => {

            btn.innerHTML = "Add To Cart";

            btn.disabled = false;

        }, 1500);

    });

});

// ---------- Slider ----------
const slider = document.querySelector(".slider img");

if (slider) {

    const images = [

        "images/banner.PNG",
        "images/product1.PNG",
        "images/product2.PNG",
        "images/product3.PNG",
        "images/product4.PNG"

    ];

    let current = 0;

    setInterval(() => {

        current++;

        if (current >= images.length) current = 0;

        slider.src = images[current];

    }, 3000);

}

// ---------- Newsletter ----------
const newsletterBtn = document.querySelector(".newsletter button");

if (newsletterBtn) {

    newsletterBtn.addEventListener("click", () => {

        const email = document.querySelector(".newsletter input").value;

        if (email === "") {

            alert("Please enter your email.");

            return;

        }

        alert("Thank you for subscribing!");

        document.querySelector(".newsletter input").value = "";

    });

}

// ---------- Smooth Scroll ----------
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ---------- Button Hover ----------
document.querySelectorAll("button").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

// ---------- Welcome ----------
window.addEventListener("load", () => {

    console.log("Welcome to Zera Shop");

});