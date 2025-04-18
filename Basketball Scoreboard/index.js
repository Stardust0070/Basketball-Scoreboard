let punctajHome =  0
let punctajGuest = 0
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let foulHomeNr = 0
let foulGuestNr = 0

let foulHomeEl = document.getElementById("foul-home")
let foulGuestEl = document.getElementById("foul-guest")



function plusOneHome() {
    punctajHome += 1
    homeEl.textContent = punctajHome
}

function plusOneGuest() {
    punctajGuest += 1
    guestEl.textContent = punctajGuest
}

function plusTwoHome() {
    punctajHome += 2
    homeEl.textContent = punctajHome
}

function plusTwoGuest() {
    punctajGuest += 2
    guestEl.textContent = punctajGuest
}

function plusThreeHome() {
    punctajHome += 3
    homeEl.textContent = punctajHome
}

function plusThreeGuest() {
    punctajGuest += 3
    guestEl.textContent = punctajGuest
}


function foulHome() {
    foulHomeNr +=1
    foulHomeEl.textContent = foulHomeNr
}

function foulGuest() {
    foulGuestNr +=1
    foulGuestEl.textContent = foulGuestNr
}


function newGame() {
    punctajGuest = 0
    punctajHome = 0
    foulHomeNr = 0
    foulGuestNr = 0
    guestEl.textContent = 0
    homeEl.textContent = 0
    foulHomeEl.textContent = 0
    foulGuestEl.textContent = 0
    minutes = 0
    seconds = 0
    clearInterval(interval)
}

let minutes = 0;
let seconds = 0;
let period = 0;
let interval;

const timerEl = document.getElementById("timer");
const periodEl = document.getElementById("period-el");
function startGame () {
    let interval = setInterval(() => {
        seconds++;
    
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
        }
    
        // Crește period când minutes este multiplu de 10 și seconds este 0
        if (minutes % 10 === 0 && seconds === 0 && minutes !== 0) {
            period += 1;
            periodEl.textContent = period;
        }
    
        // Oprește timerul la 40:00
        if (minutes === 40 && seconds === 0) {
            clearInterval(interval);
        }
    
        timerEl.textContent = 
            (minutes < 10 ? "0" + minutes : minutes) + ":" + 
            (seconds < 10 ? "0" + seconds : seconds);
    
    }, 100);
}
