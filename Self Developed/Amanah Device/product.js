// =========================
// AMANAH DEVICE
// PRODUCTS PAGE JAVASCRIPT
// =========================

// =========================
// ELEMENTS
// =========================

const productCards =
document.querySelectorAll(".shop-product-card");

const filterButtons =
document.querySelectorAll(".filter-btn");

const productSearch =
document.getElementById("productSearch");

const productSearchBtn =
document.getElementById("productSearchBtn");

const productCount =
document.getElementById("productCount");

const noProducts =
document.getElementById("noProducts");

// =========================
// CART
// =========================

let cartCount = 0;

const cartCountElement =
document.getElementById("cartCount");

const cartBtn =
document.getElementById("cartBtn");

// =========================
// SHOW PRODUCTS
// =========================

function showProducts(category = "all", searchText = "") {


let visibleProducts = 0;

productCards.forEach(function (card) {

    const productCategory =
        card.getAttribute("data-category");

    const productName =
        card.getAttribute("data-name").toLowerCase();

    const searchValue =
        searchText.toLowerCase().trim();


    const categoryMatch =
        category === "all" ||
        productCategory === category;

    const searchMatch =
        searchValue === "" ||
        productName.includes(searchValue);


    if (categoryMatch && searchMatch) {

        card.style.display = "block";

        visibleProducts++;

    } else {

        card.style.display = "none";

    }

});


// Update product count

productCount.textContent =
    visibleProducts + " Product" +
    (visibleProducts !== 1 ? "s" : "");


// Show / hide no products message

if (visibleProducts === 0) {

    noProducts.style.display = "block";

} else {

    noProducts.style.display = "none";

}


}

// =========================
// CATEGORY FILTER
// =========================

filterButtons.forEach(function (button) {


button.addEventListener("click", function () {

    // Remove active class

    filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
    });


    // Add active class

    button.classList.add("active");


    // Get category

    const category =
        button.getAttribute("data-category");


    // Get current search

    const searchText =
        productSearch.value;


    // Show products

    showProducts(
        category,
        searchText
    );

});


});

// =========================
// SEARCH
// =========================

function searchProducts() {


const searchText =
    productSearch.value;

const activeButton =
    document.querySelector(".filter-btn.active");

const category =
    activeButton
        ? activeButton.getAttribute("data-category")
        : "all";


showProducts(
    category,
    searchText
);


}

// Search button

productSearchBtn.addEventListener(
"click",
searchProducts
);

// Search while typing

productSearch.addEventListener(
"input",
searchProducts
);

// Enter key

productSearch.addEventListener(
"keydown",
function (event) {


    if (event.key === "Enter") {

        searchProducts();

    }

}


);

// =========================
// ADD TO CART
// =========================

const addCartButtons =
document.querySelectorAll(".shop-add-cart");

addCartButtons.forEach(function (button) {


button.addEventListener(
    "click",
    function () {

        cartCount++;

        cartCountElement.textContent =
            cartCount;


        // Button change

        button.textContent =
            "Added ✓";

        button.classList.add("added");


        setTimeout(function () {

            button.textContent =
                "Add to Cart";

            button.classList.remove("added");

        }, 1200);

    }
);


});

// =========================
// CART BUTTON
// =========================

cartBtn.addEventListener(
"click",
function () {


    if (cartCount === 0) {

        alert(
            "Your cart is empty."
        );

    } else {

        alert(
            "You have " +
            cartCount +
            " item(s) in your cart."
        );

    }

}


);

// =========================
// INITIAL LOAD
// =========================

showProducts();

console.log(
"Amanah Device Products Page Loaded."
);