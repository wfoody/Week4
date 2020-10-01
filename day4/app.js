
let newsListUL = document.getElementById("newsListUL")

let articleLi = news.articles.map((newsSource) => {
    let newsItem =
            `<li id="listItem">
            <p><b>${newsSource.author == null? "":newsSource.author}</b></p>
            <p>"${newsSource.title}"</p>
            <p>${newsSource.description == null? "":newsSource.description}</p>
            <a href = ${newsSource.url}>${newsSource.url}</a>
            <p><img id="pic" src="${newsSource.urlToImage}" alt="No image available"></p>
            <p>${newsSource.publishedAt}</p>

            </li>`
            
    
    return newsItem
            
})

let result = `${articleLi.join(" ")}`
newsListUL.insertAdjacentHTML("beforeend", result)
