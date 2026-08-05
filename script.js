// ==========================
// MOBILE MENU
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if(menuToggle && menu){
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

// ==========================
// STICKY HEADER
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }

});

// ==========================
// BACK TO TOP
// ==========================

const backTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {

    if(!backTop) return;

    if(window.scrollY > 500){
        backTop.classList.add("show");
    }else{
        backTop.classList.remove("show");
    }

});

if(backTop){

    backTop.addEventListener("click", e => {

        e.preventDefault();

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}
// ==========================
// ACTIVE MENU
// ==========================

const navLinks = document.querySelectorAll(".menu a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(item=>{

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});

// ==========================
// NEWSLETTER
// ==========================

const newsletterForm=document.querySelector(".newsletter-form");

if(newsletterForm){

newsletterForm.addEventListener("submit",function(e){

e.preventDefault();

const email=this.querySelector("input");

if(email.value.trim()===""){

alert("Please enter your email.");

return;

}

alert("Thanks for subscribing!");

email.value="";

});

}

// ==========================
// PRODUCT HOVER
// ==========================

const products=document.querySelectorAll(".product");

products.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

// ==========================
// SCROLL REVEAL
// ==========================

const revealItems=document.querySelectorAll(

".product,.category-card,.offer-card,.testimonial-card"

);

const reveal=()=>{

const trigger=window.innerHeight*0.85;

revealItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.classList.add("fade-up");

}

});

};

window.addEventListener("scroll",reveal);

reveal();
// ==========================
// COUNTER ANIMATION
// ==========================

const counters=document.querySelectorAll(".counter-box h2");

const runCounter=(counter)=>{

const target=parseInt(counter.innerText);

let count=0;

const speed=Math.max(1,Math.ceil(target/100));

const update=()=>{

count+=speed;

if(count>=target){

counter.innerText=target+"+";
return;
}

counter.innerText=count+"+";

requestAnimationFrame(update);

};

update();

};

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

runCounter(entry.target);

observer.unobserve(entry.target);

}

});

},{threshold:.5});

counters.forEach(counter=>observer.observe(counter));

// ==========================
// DARK MODE
// ==========================

const darkBtn=document.querySelector(".dark-toggle");

if(darkBtn){

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

}

// ==========================
// SEARCH POPUP
// ==========================

const searchBtn=document.querySelector(".search-btn");

const searchBox=document.querySelector(".search-popup");

const closeSearch=document.querySelector(".close-search");

if(searchBtn && searchBox){

searchBtn.onclick=()=>{

searchBox.classList.add("show");

};

}

if(closeSearch){

closeSearch.onclick=()=>{

searchBox.classList.remove("show");

};

}

// ==========================
// PRELOADER
// ==========================

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.classList.add("hide");

setTimeout(()=>{

loader.remove();

},500);

}

});
// ==========================
// PRODUCT FILTER
// ==========================

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>{

btn.classList.remove("active");

});

button.classList.add("active");

const filter = button.dataset.filter;

productCards.forEach(card=>{

if(filter==="all"){

card.style.display="block";
return;

}

if(card.dataset.category===filter){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

});

// ==========================
// IMAGE HOVER EFFECT
// ==========================

productCards.forEach(card=>{

const image = card.querySelector("img");

card.addEventListener("mousemove",e=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

image.style.transformOrigin = `${x}px ${y}px`;

});

card.addEventListener("mouseenter",()=>{

image.style.transform="scale(1.15)";

});

card.addEventListener("mouseleave",()=>{

image.style.transform="scale(1)";

});

});

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ==========================
// CURRENT YEAR
// ==========================

const year=document.querySelector(".year");

if(year){

year.textContent=new Date().getFullYear();

}
// ==========================
// WISHLIST
// ==========================

const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        const icon = button.querySelector("i");

        if(icon){

            icon.classList.toggle("fa-regular");
            icon.classList.toggle("fa-solid");

        }

    });

});

// ==========================
// CART COUNTER
// ==========================

let cartCount = 0;

const cartNumber = document.querySelector(".cart-count");

const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        if(cartNumber){

            cartNumber.textContent = cartCount;

        }

    });

});

// ==========================
// QUICK VIEW
// ==========================

const quickButtons = document.querySelectorAll(".quick-view");
const quickModal = document.querySelector(".quick-modal");
const closeModal = document.querySelector(".close-modal");

quickButtons.forEach(button => {

    button.addEventListener("click", () => {

        if(quickModal){

            quickModal.classList.add("show");

        }

    });

});

if(closeModal){

    closeModal.addEventListener("click", () => {

        quickModal.classList.remove("show");

    });

}

window.addEventListener("click", e => {

    if(e.target === quickModal){

        quickModal.classList.remove("show");

    }

});

// ==========================
// LAZY IMAGE
// ==========================

const lazyImages = document.querySelectorAll("img[data-src]");

const imageObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const img = entry.target;

            img.src = img.dataset.src;

            img.removeAttribute("data-src");

            imageObserver.unobserve(img);

        }

    });

});

lazyImages.forEach(img => {

    imageObserver.observe(img);

});

// ==========================
// END PART 5
// ==========================