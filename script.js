let movie = document.querySelector("#movie");
let ticketPrice = +movie.value;
let price = 0;
let btn = document.querySelectorAll("button");
let seatNumber = document.querySelector(".number");
let priceDisplay = document.querySelector(".price");
let paymentBtn = document.querySelector("input");
let container = document.querySelector(".container");

function updateSelectedCount(){
    let selectedSeats = document.querySelectorAll(".selected");
    let number = selectedSeats.length;
    seatNumber.innerText = number;
    priceDisplay.textContent = number * ticketPrice;
}

movie.addEventListener("change", (e)=>{
    ticketPrice = e.target.value;
    updateSelectedCount()
})

container.addEventListener("click",(e)=>{
    if(e.target.classList.contains('seat')&& !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
})



   







