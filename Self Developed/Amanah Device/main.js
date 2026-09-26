// =========================
// AMANAH DEVICE
// Main JavaScript
// =========================

// =========================
// CART
// =========================

let cartCount = 0;

const cartCountElement = document.getElementById("cartCount");
const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(function (button) {

```
button.addEventListener("click", function () {

    cartCount++;

    cartCountElement.textContent = cartCount;

    button.textContent = "Added ✓";

    setTimeout(function () {
        button.textContent = "Add to Cart";
    }, 1200);

});
```

});

// =========================
// CART BUTTON
// =========================

const cartBtn = document.getElementById("cartBtn");

cartBtn.addEventListener("click", function () {

```
if (cartCount === 0) {
    alert("Your cart is empty.");
} else {
    alert("You have " + cartCount + " item(s) in your cart.");
}
```

});

// =========================
// SEARCH BUTTON
// =========================

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {

```
const search = prompt("What device are you looking for?");

if (search !== null && search.trim() !== "") {

    alert(
        'Searching for "' +
        search.trim() +
        '"...'
    );

}
```

});

// =========================
// LOGIN BUTTON
// =========================

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {

```
window.location.href = "login.html";
```

});

// =========================
// NEWSLETTER
// =========================

const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function (event) {

```
event.preventDefault();

const emailInput = document.getElementById("email");
const email = emailInput.value.trim();

if (email === "") {
    alert("Please enter your email.");
    return;
}

alert(
    "Thank you for subscribing to Amanah Device!"
);

emailInput.value = "";
```

});

// =========================
// CATEGORY CARD
// =========================

const categoryCards =
document.querySelectorAll(".category-card");

categoryCards.forEach(function (card) {


card.addEventListener("click", function () {

    const categoryName =
        card.querySelector("h3").textContent;

    alert(
        "You selected: " + categoryName
    );

});


});

// =========================
// PAGE LOAD
// =========================

console.log("Amanah Device is ready.");
console.log("Welcome to Amanah Device!");
