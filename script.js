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