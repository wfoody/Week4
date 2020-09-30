
let firstNameTextBox = document.getElementById("firstNameTextBox")
let lastNameTextBox = document.getElementById("lastNameTextBox")
let fullNameHeading = document.getElementById("fullNameHeading")

let submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click", function () {

    let firstName = firstNameTextBox.value
    let lastName = lastNameTextBox.value

    let fullName = `${lastName}, ${firstName}`
    fullNameHeading.innerHTML = fullName

})