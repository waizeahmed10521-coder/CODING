

function takeBookings()  {
    let bookButton = document.querySelector(".bookBtn")
    let para = document.querySelector(".para")

    bookButton.textContent = "Booked"
    para.textContent = "Thanks for your booking!!"
}




let bookButton = document.querySelector(".bookBtn")

bookButton.onclick = takeBookings

