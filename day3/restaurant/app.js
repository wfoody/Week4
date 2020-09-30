
let dishListUL = document.getElementById("dishListUL")


for (index = 0; index < dishes.length; index++) {
    let dish = dishes[index]

    const dishItem = `
    <li id="menuItem">
        <img class="container" src="${dish.imageURL}">
        <p class="container"><b>${dish.title}</b></p>
        <p class="container">${dish.description}</p>
        <p class="container">${dish.price}</p>
    </li>`

    dishListUL.insertAdjacentHTML("beforeend", dishItem)
 
}
