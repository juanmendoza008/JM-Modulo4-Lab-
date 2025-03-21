
// //a) 
// function addCardA(title, text) {
//     // clone the template
//     const template = document.getElementById("card-template").content.cloneNode(true);
//     // populate the template
//     template.querySelector('.card-title').innerText = title;
//     template.querySelector('.card-text').innerText = text;
//     // include the populated template into the page
//     document.querySelector('#card-list').appendChild(template);
// }
// addCardA('My Card Title', 'lorem ipsum ble bla');
// addCardA('Card2', 'test test test');

//b)
const data = [{name: 'bob', age: 23}, {name:'alice', age: 39}]

function addCardB(title, text) {
    // clone the template
    const template = document.getElementById("card-template").content.cloneNode(true);
    // populate the template
    template.querySelector('.card-title').innerText = title;
    template.querySelector('.card-text').innerText = text;
    // include the populated template into the page
    document.querySelector('#card-list').appendChild(template);
}

data.forEach((item) => {
    addCardB(item.name, item.age);
});


//c) 

// const artist = {
//     name: "Van Gogh",
//     portfolio: [
//         { title: "portrait", url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image" },
//         { title: "sky", url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg" },
//     ]
// };

// function addArtist(name, portfolio) {
//     portfolio.forEach(item => {
//         // clone the template
//         const template = document.getElementById("artist-template").content.cloneNode(true);
//         // populate the template
//         template.querySelector('.card-title').innerText = name;
//         template.querySelector('.card-text').innerText = item.title;

//         const cardImageEle = template.querySelector('.card-image');
//         cardImageEle.src = item.url;
//         cardImageEle.alt = item.title;

//         // include the populated template into the page
//         document.querySelector('#card-list').appendChild(template);
//     });
// }

// addArtist(artist.name, artist.portfolio);

