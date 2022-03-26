let Lbutton = document.getElementById("Lclick");
let Rbutton = document.getElementById("Rclick");
let buttonBack = document.getElementById("Backclick");
let Twitch = document.getElementById("Lclick");
let Youtube = document.getElementById("Rclick");


function opendoor() {
    document.getElementById("Lpanel").classList.toggle("movepanel-left");
    document.getElementById("Rpanel").classList.toggle("movepanel-right");
}

function closedoor() {
    document.getElementById("Lpanel").classList.toggle("movepanel-close-left")
    document.getElementById("Rpanel").classList.toggle("movepanel-close-right")
}

function showTwitch(btn) { 
    if (btn.id == "Lclick") { 
        console.log("Bonjoir") } 
    else  {
        console.log("t'as tout cassé")
    }
};


Lbutton.addEventListener("click", opendoor);
Rbutton.addEventListener("click", opendoor);
buttonBack.addEventListener("click",closedoor);