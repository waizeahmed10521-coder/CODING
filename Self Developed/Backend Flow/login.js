const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const loggedUser = users.find(function (person) {
        return (
            person.email.toLowerCase() === email.toLowerCase() &&
            person.password === password
        );
    });

    if (loggedUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(loggedUser));

        window.location.href = "profile.html";
    } else {
        alert("Invalid email or password!");
    }
});