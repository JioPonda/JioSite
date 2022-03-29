let Lbutton = document.getElementById("Lclick");
let Rbutton = document.getElementById("Rclick");
let buttonBack = document.getElementById("Backclick");

function opendoor() {
    document.getElementById("Lpanel").classList.toggle("movepanel-left");
    document.getElementById("Rpanel").classList.toggle("movepanel-right");
};

function closedoor() {
    document.getElementById("Lpanel").classList.toggle("movepanel-close-left")
    document.getElementById("Rpanel").classList.toggle("movepanel-close-right")
    setTimeout(function() { 
        document.getElementById("youtube").style.display = "none";
        document.getElementById("twitch").style.display = "none";
    }, 1000);
};

function clean() {
    document.getElementById("Lpanel").classList.remove("movepanel-left");
    document.getElementById("Rpanel").classList.remove("movepanel-right");
    document.getElementById("Lpanel").classList.remove("movepanel-close-left");
    document.getElementById("Rpanel").classList.remove("movepanel-close-right");
}

function showTwitch(btn) { 
    if (btn.id == "Lclick") { 
        document.getElementById("twitch").style.display = "block"; 
    } else {
        document.getElementById("youtube").style.display = "none";
    }
};

function showYoutube(btn) {
    if (btn.id == "Rclick") { 
        document.getElementById("youtube").style.display = "block"; 
    } else {
        document.getElementById("twitch").style.display = "none";
    }
};