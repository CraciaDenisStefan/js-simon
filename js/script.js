"use strict";
//Creiamo l'array con 5 numeri casuali 
let simonNumber = [];
console.log(simonNumber)
while (simonNumber.length < 5) {
let createRandomNumber = Math.floor(Math.random()*(50 - 1 +1)+1);
    if (!simonNumber.includes(createRandomNumber)) {
        simonNumber.push(createRandomNumber);
     }
}
//Mostrare sulla pagina i 5 numeri casuali 
let number = document.getElementById(`simon_number`)
number.innerText= simonNumber