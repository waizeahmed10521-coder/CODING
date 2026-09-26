const userData = localStorage.getItem("loggedInUser");

if (!userData) {
    window.location.href = "index.html";
} else {
    const user = JSON.parse(userData);

    document.getElementById("userId").textContent = user.id;
    document.getElementById("userName").textContent = user.name;
    document.getElementById("userEmail").textContent = user.email;
    document.getElementById("userPhone").textContent = user.phone;
    document.getElementById("userAge").textContent = user.age;
    document.getElementById("userCity").textContent = user.city;
    document.getElementById("userProfession").textContent = user.profession;
    document.getElementById("userStatus").textContent = user.status;
}

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}