var Lbutton = document.getElementById("Lclick");
var Rbutton = document.getElementById("Rclick");

function opendoor() {
    document.getElementById("Lpanel").classList.toggle("movepanel-left");
    document.getElementById("Rpanel").classList.toggle("movepanel-right");
}

Lbutton.addEventListener("click", opendoor);
Rbutton.addEventListener("click", opendoor);
