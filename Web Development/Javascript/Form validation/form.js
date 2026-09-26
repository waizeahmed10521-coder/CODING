

function validateForm()  {


    // get the username, email, password from html
    let username = document.querySelector(".usernameInput").value
    let email = document.querySelector(".emailInput").value
    let password = document.querySelector(".passInput").value


    // check username
    if (username.length < 3)  {
        alert("Username must be at least 3 characters long")
        return false
    }


    // check email
    if (email.length == 0) {
        alert("Email cannot be empty")
        return false
    }


    // check password
    if (password.length < 8)  {
        alert("Password must be at least 8 characters long")
        return false
    }




}





let form = document.querySelector(".form")

form.onsubmit = validateForm


