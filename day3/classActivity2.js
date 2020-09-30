

let postListUL = document.getElementById("postListUL")


for (index = 0; index < posts.length; index++) {
    let post = posts[index]


    const postItem = `
    <li>
        <b>${post.title}</b>
        <i>${post.body}</i>
    </li>`

    postListUL.insertAdjacentElement("beforeend", postItem)


}

