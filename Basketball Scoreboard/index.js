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
}

