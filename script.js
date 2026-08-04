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