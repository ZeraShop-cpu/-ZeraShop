const products = [
  {id:1,name:"T-Shirt",price:20,image:"tshirt.jpg",category:"Men"},
  {id:2,name:"Jeans",price:35,image:"jeans.jpg",category:"Men"},
  {id:3,name:"Hoodie",price:40,image:"hoodie.jpg",category:"Men"},
  {id:4,name:"Dress",price:30,image:"dress.jpg",category:"Women"},
  {id:5,name:"Jacket",price:55,image:"jacket.jpg",category:"Women"},
  {id:6,name:"Sneakers",price:45,image:"sneakers.jpg",category:"Kids"}
];

let cart=[];

const productsContainer=document.getElementById("products");
const cartCount=document.getElementById("cart-count");

function showProducts(list){
    productsContainer.innerHTML="";

    list.forEach(product=>{
        productsContainer.innerHTML+=`
        <div class="card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
        `;
    });
}

function addToCart(id){
    cart.push(id);
    cartCount.innerHTML=cart.length;
}

function searchProducts(){
    const value=document.getElementById("search").value.toLowerCase();

    const result=products.filter(product=>
        product.name.toLowerCase().includes(value)
    );

    showProducts(result);
}

function filterCategory(category){

    if(category==="All"){
        showProducts(products);
        return;
    }

    const result=products.filter(product=>product.category===category);

    showProducts(result);

}

showProducts(products);

document.querySelectorAll(".categories button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        filterCategory(btn.innerText);

    });

});