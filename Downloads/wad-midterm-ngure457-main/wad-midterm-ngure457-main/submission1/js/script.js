// Dynamic Cake Menu

const cakes = [
{
name:"Cupcakes Delight",
description:"Sweet cupcakes with colorful toppings.",
image:"images/cupcakes.jpg"},

{
name:"Strawberry Dream",
description:"Fresh strawberries with whipped cream.",
image:"images/strawberry.jpg"},

{
name:"Wedding Special",
description:"Elegant cakes for unforgettable weddings.",
image:"images/wedding.jpg"},

{
name:"Chocolate Fudge",
description:"Rich chocolate cake for chocolate lovers.",
image:"images/chocolate.jpg"}
];

const cakeContainer = document.getElementById("cakeContainer");

cakes.forEach(cake=>{

const card=document.createElement("div");

card.className="cake-card";

card.innerHTML=`

<img src="${cake.image}" alt="${cake.name}">

<div class="content">

<h3>${cake.name}</h3>

<p>${cake.description}</p>

</div>`;

cakeContainer.appendChild(card);
}); 

// Wishlist
const input=document.getElementById("cakeInput");
const addBtn=document.getElementById("addCake");
const list=document.getElementById("wishlist");

function saveWishlist(){

const items=[];

document.querySelectorAll("#wishlist li")
.forEach(li=>{

items.push(li.firstChild.textContent);
});

localStorage.setItem("wishlist",JSON.stringify(items)
);}


function createItem(text){

const li=document.createElement("li");

li.append(text);

const remove=document.createElement("button");

remove.textContent="Remove";

remove.onclick=()=>{

li.remove();

saveWishlist();};

li.appendChild(remove);

list.appendChild(li);

}

addBtn.addEventListener("click",()=>{

if(input.value.trim()=="") return;

createItem(input.value);

saveWishlist();

input.value="";

});

const saved=
JSON.parse(localStorage.getItem("wishlist"));

if(saved){

saved.forEach(createItem);
}