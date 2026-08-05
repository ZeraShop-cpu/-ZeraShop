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