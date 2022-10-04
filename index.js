let home1 = 1
let home2 = 2
let home3 = 3

let guest1 = 1
let guest2 = 2
let guest3 = 3

let totalguest = (guest1 + guest2 + guest3)
console.log(totalguest)

let homerun = (home1 + home2 + home3)
console.log(homerun)

// document.getElementById("count-el").innertext = 10
// document.getElementById("guest-el").innertext = 10

let countEl = document.getElementById("count-el")
console.log(countEl)

let home = 0

function h1(){
    console.log("button-clicked")
    home = home + home1
    countEl.innerText = home
}

function h2(){
    console.log("button-clicked")
    home = home + home2
    countEl.innerText = home
}

function h3(){
    console.log("button-clicked")
    home = home + home3
    countEl.innerText = home
}
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let guestEL = document.getElementById("guest-el")
console.log(guestEL)

let guest = 0

function g1(){
    console.log("button-clicked")
    guest = guest + guest1
    guestEL.innerText = guest
}

function g2(){
    console.log("button-clicked")
    guest = guest + guest2
    guestEL.innerText = guest
}

function g3(){
    console.log("button-clicked")
    guest = guest + guest3
    guestEL.innerText = guest
}
