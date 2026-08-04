document.addEventListener("DOMContentLoaded", () => {

    // Buy Now Buttons
    const buttons = document.querySelectorAll(".card button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Product added to cart!");
        });
    });

    // Search Icon
    const search = document.querySelector(".fa-magnifying-glass");

    if (search) {
        search.addEventListener("click", () => {
            alert("Search feature coming soon.");
        });
    }

    // Hero Button
    const heroBtn = document.querySelector(".hero button");

    if (heroBtn) {
        heroBtn.addEventListener("click", () => {
            window.location.href = "products.html";
        });
    }

});