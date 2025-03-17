
// Data 
let news = [
    { id: 1, title: 'Election Results',
    content: "Newly elected minister..." },
    { id: 2, title: 'Sporting Success',
    content: "World Cup winners..." },
    { id: 3, title: 'Tornado Warning',
    content: "Residents should prepare..." }
    ];


    const newsContainer = document.getElementById('news-container');

    function buildTheNewsCards(newsItem) {
        if (newsItem) {
            const newEle = document.createElement('div');
            newEle.innerText = newsItem.title;
            newConstainerElement.appendChild(newEle);
        }
    
    }

    // Function to render news data to HTML
    function generateNews(news) {
        newsContainer.innerHTML = '';

        news.forEach(item => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.content}</p>
            `;
            buildTheNewsCards(newsItem);
        });
    }

    // Call the function to render news
    document.addEventListener('DOMContentLoaded', () => {
        renderNews(news);
    });

