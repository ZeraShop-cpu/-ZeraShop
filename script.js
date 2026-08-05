// Smooth Reveal Animation

const items = document.querySelectorAll(
".category-card,.card,.feature-card,.sale-banner,.newsletter"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

items.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(60px)";
item.style.transition=".8s";

observer.observe(item);

});

// Button Effect

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.innerHTML="✔ Added";

setTimeout(()=>{

btn.innerHTML="Buy Now";

},1500);

});

});

// Navbar Shadow

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>50){

nav.style.boxShadow="0 15px 40px rgba(0,0,0,.35)";

}else{

nav.style.boxShadow="none";

}

});
let cart = 0;

document.querySelectorAll(".card button").forEach(button=>{

button.addEventListener("click",()=>{

cart++;

document.getElementById("cart-count").innerText = cart;

});

});
let cart = 0;

const cartCount = document.getElementById("cart-count");

document.querySelectorAll(".card button").forEach(button => {

    button.addEventListener("click", () => {

        cart++;

        cartCount.textContent = cart;

    });

});