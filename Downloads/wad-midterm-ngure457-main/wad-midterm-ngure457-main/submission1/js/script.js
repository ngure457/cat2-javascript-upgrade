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