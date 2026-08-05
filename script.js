const cartCount = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".card button");

let count = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        count++;
        cartCount.textContent = count;

        alert("Product added to cart ✅");
    });
});
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}