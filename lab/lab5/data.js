
// Data 
let news = [
    { id: 1, title: 'Election Results',
    content: "Newly elected minister..." },
    { id: 2, title: 'Sporting Success',
    content: "World Cup winners..." },
    { id: 3, title: 'Tornado Warning',
    content: "Residents should prepare..." }
    ];


function getNews() {
    document.getElementById("card-list").innerText="";
    news.forEach((item) => {
        generateNews(item.title, item.content);
    });

}

function generateNews(title, content) {
    const template = document.getElementById("card-template").content.cloneNode(true);
    template.querySelector('.card-title').innerText = title;
    template.querySelector('.card-text').innerText = content;
    document.querySelector('#card-list').appendChild(template);
}

getNews();
    

let newsReload = setInterval(getNews, 5000);
 
console.log(news);

function addNewToList(event) {
    event.preventDefault();
    let newTitle = document.getElementById("newsTitle").value;
    let newContent = document.getElementById("newsContent").value;
    news.push({id: news.length+1, title: newTitle, content: newContent});
    console.log(news);
}

function stopReload() {
    clearInterval(newsReload);
}








