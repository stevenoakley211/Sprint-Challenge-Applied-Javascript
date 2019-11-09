// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const tabsElement = document.querySelector('.cards-container')

function createCard(obj){
    const card = document.createElement('div');
    const headline = document.createElement('div')
    const author = document.createElement('div');
    const imgCon = document.createElement('div');
    const image = document.createElement('img')
    const authorsName = document.createElement('span')

    card.appendChild(author);
    card.appendChild(headline);
    author.appendChild(imgCon);
    imgCon.appendChild(image);
    author.appendChild(authorsName);

    card.classList.add('card')
    headline.classList.add('headline')
    imgCon.classList.add('img-container')
    author.classList.add('author')
    
    
    authorsName.textContent = `By ${obj.authorName}`
    image.src = obj.authorPhoto
    headline.textContent = obj.headline
    return card
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")

.then(response => {
    console.log(response.data.articles)
        const articles = response.data.articles
        articles.javascript.forEach(element => {
            tabsElement.appendChild(createCard(element))
        });
        articles.bootstrap.forEach(element => {
            tabsElement.appendChild(createCard(element))
        });
        articles.technology.forEach(element => {
            tabsElement.appendChild(createCard(element))
        });
        articles.jquery.forEach(element => {
            tabsElement.appendChild(createCard(element))
            
        });
        articles.node.forEach(element => {
            tabsElement.appendChild(createCard(element))
        });
       
       
       
    });


