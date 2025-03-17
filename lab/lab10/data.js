// fetch example
// fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
//   .then((response) => response.json())
//   .then((json) => json.forEach((item) => addItem(item)));

// axios example
axios
  .get("https://fakestoreapi.com/products")
  .then((response) => {
    console.log("response", response);
    response.data.forEach((item) => addItem(item));
  });

// clone, then populate, then append a new template
function addItem(item) {
    const template = document
        .getElementById("card-template")
        .content.cloneNode(true);
    template.querySelector(".card-title").innerText = item.title;
    template.querySelector(".card-text").innerText = item.description;

    const cardIMageEle = template.querySelector(".card-img-top")
    cardIMageEle.src = item.image;
    cardIMageEle.alt = item.image;

    template.querySelector(".card-rating")
    .innerText = `rating: ${item.rating.rate}`;
    template.querySelector(".card-price").innerText = `$${item.price}`;




  document.querySelector("#post-list").appendChild(template);
}



/*
category : "men's clothing"
description : "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
id : 1
image : "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
price : 109.95
rating : {rate: 3.9, count: 120}
title : "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
*/