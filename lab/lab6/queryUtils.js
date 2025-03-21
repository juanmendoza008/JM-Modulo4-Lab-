// fetch example
// fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
//   .then((response) => response.json())
//   .then((json) => json.forEach((item) => addItem(item)));

// axios example
axios
  .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
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
  template.querySelector(".card-text").innerText = item.body;
  document.querySelector("#post-list").appendChild(template);
}

/*
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
*/
