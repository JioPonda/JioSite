let Lbutton = document.getElementById("Lclick");
let Rbutton = document.getElementById("Rclick");
let buttonBack = document.getElementById("Backclick")

function opendoor() {
    document.getElementById("Lpanel").classList.toggle("movepanel-left");
    document.getElementById("Rpanel").classList.toggle("movepanel-right");
}

function closedoor() {
    document.getElementById("Lpanel").classList.toggle("movepanel-close-left")
    document.getElementById("Rpanel").classList.toggle("movepanel-close-right")
    alert("plop");
}

Lbutton.addEventListener("click", opendoor);
Rbutton.addEventListener("click", opendoor);
buttonBack.addEventListener("click",closedoor);