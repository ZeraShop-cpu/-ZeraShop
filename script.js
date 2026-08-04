// ===============================
// Zera Shop JavaScript
// ===============================

// ---------- Dark Mode ----------

const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        themeBtn.textContent="☀️";
    }else{
        localStorage.setItem("theme","light");
        themeBtn.textContent="🌙";
    }

});

// ---------- Search ----------

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value = searchInput.value.toLowerCase();

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

const title = card.querySelector("h3").textContent.toLowerCase();

if(title.includes(value)){
card.style.display="block";
}else{
card.style.display="none";
}

});

});

}

// ---------- Add To Cart ----------

let cart = Number(localStorage.getItem("cart")) || 0;

const cartCount = document.getElementById("cartCount");

if(cartCount){
cartCount.textContent = cart;
}

const buttons = document.querySelectorAll(".buy-btn");

buttons.forEach(btn=>{

btn.addEventListener("click",()=>{

cart++;

localStorage.setItem("cart",cart);

if(cartCount){
cartCount.textContent = cart;
}

btn.textContent="Added ✓";

setTimeout(()=>{
btn.textContent="Add To Cart";
},1200);

});

});
// ---------- Newsletter ----------

const newsletterBtn = document.querySelector(".newsletter button");

if(newsletterBtn){

newsletterBtn.addEventListener("click",()=>{

const email = document.querySelector(".newsletter input");

if(email.value.trim()===""){

alert("Please enter your email.");

}else{

alert("Thank you for subscribing!");

email.value="";

}

});

}

// ---------- Hero Slider ----------

const sliderImages = [

"images/banner.PNG",
"images/slider1.PNG",
"images/slider2.PNG",
"images/slider3.PNG"

];

const heroImage = document.querySelector(".right-image img");

let currentSlide = 0;

if(heroImage){

setInterval(()=>{

currentSlide++;

if(currentSlide >= sliderImages.length){

currentSlide = 0;

}

heroImage.src = sliderImages[currentSlide];

},3000);

}

// ---------- Scroll To Top ----------

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "
/* ===========================
   Animations
=========================== */

html{
    scroll-behavior:smooth;
}

section{
    animation:fadeUp .8s ease;
}

@keyframes fadeUp{
    from{
        opacity:0;
        transform:translateY(40px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}

button{
    transition:.3s;
}

button:hover{
    transform:translateY(-3px) scale(1.05);
}

img{
    transition:.4s;
}

.card:hover img,
.item:hover img{
    transform:scale(1.08);
}

/* ===========================
   Back To Top
=========================== */

#topBtn{
    position:fixed;
    bottom:25px;
    right:25px;
    width:55px;
    height:55px;
    border:none;
    border-radius:50%;
    background:#2563eb;
    color:#fff;
    font-size:22px;
    cursor:pointer;
    display:none;
    z-index:999;
    box-shadow:0 10px 20px rgba(0,0,0,.2);
}

#topBtn:hover{
    background:#1d4ed8;
    transform:scale(1.1);
}

/* ===========================
   Loader
=========================== */

.loader{
    position:fixed;
    inset:0;
    background:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:99999;
    transition:.5s;
}

.loader.hidden{
    opacity:0;
    visibility:hidden;
}

.spinner{
    width:60px;
    height:60px;
    border:6px solid #ddd;
    border-top:6px solid #2563eb;
    border-radius:50%;
    animation:spin 1s linear infinite;
}

@keyframes spin{
    to{
        transform:rotate(360deg);
    }
}

/* Mobile */

@media(max-width:768px){

#topBtn{
    width:48px;
    height:48px;
    font-size:20px;
    bottom:20px;
    right:20px;
}

}
// =========================
// Product Filter
// =========================

const search = document.getElementById("searchInput");

if(search){

search.addEventListener("input",()=>{

const value = search.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

const name = card.querySelector("h3").textContent.toLowerCase();

card.style.display = name.includes(value) ? "block" : "none";

});

});

}

// =========================
// Toast Notification
// =========================

const toast = document.createElement("div");

toast.id = "toast";

toast.innerHTML = "✅ Product Added To Cart";

document.body.appendChild(toast);

toast.style.cssText = `
position:fixed;
bottom:25px;
left:50%;
transform:translateX(-50%);
background:#2563eb;
color:#fff;
padding:15px 25px;
border-radius:12px;
font-weight:bold;
display:none;
z-index:9999;
`;

document.querySelectorAll(".buy-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

toast.style.display="block";

setTimeout(()=>{
toast.style.display="none";
},2000);

});

});

// =========================
// Save Cart Count
// =========================

let cartCount = Number(localStorage.getItem("cartCount")) || 0;

const cartBadge = document.getElementById("cartCount");

if(cartBadge){
cartBadge.textContent = cartCount;
}

document.querySelectorAll(".buy-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

cartCount++;

localStorage.setItem("cartCount",cartCount);

if(cartBadge){
cartBadge.textContent = cartCount;
}

});

});

// =========================
// Image Zoom
// =========================

document.querySelectorAll(".card img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

// =========================

console.log("🚀 Zera Shop Professional Version Loaded");
// ===========================
// Newsletter Form
// ===========================

const form = document.querySelector(".newsletter-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const email = form.querySelector("input");

if(email.value.trim()===""){

alert("Please enter your email.");

return;

}

alert("Thanks for subscribing!");

email.value="";

});

}

// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ===========================
// Active Navigation
// ===========================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.offsetHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ===========================
// Reveal Animation
// ===========================

const reveals=document.querySelectorAll(".card,.item,.feature-box div");

function reveal(){

const windowHeight=window.innerHeight;

reveals.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<windowHeight-100){

el.style.opacity="1";
el.style.transform="translateY(0)";

}

});

}

reveals.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition=".6s";

});

window.addEventListener("scroll",reveal);

reveal();

// ===========================
// Header Shadow
// ===========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>30){

header.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";

}else{

header.style.boxShadow="0 8px 20px rgba(0,0,0,.08)";

}

});

// ===========================
// Welcome
// ===========================

console.log("Welcome To Zera Shop 🚀");
// ==========================
// Save Dark Mode
// ==========================

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }
});

// ==========================
// Smooth Page Load
// ==========================

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

document.body.style.opacity = "0";
document.body.style.transition = "opacity .5s";

// ==========================
// Back To Top
// ==========================

const topBtn = document.createElement("button");
topBtn.id = "topBtn";
topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});