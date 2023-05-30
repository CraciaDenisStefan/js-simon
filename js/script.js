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
//Attendere 30 secondi 
setTimeout(attesa , 3000);
setTimeout(domanda , 3100);


//array con i numeri del utente
let rispostaUtente =[]
console.log(rispostaUtente)

//Far scomparire i 5 numeri
function attesa(){
    number.innerText= ``;  
}
//Chiedere al utente di inserire i 5 numeri ( uno alla volta )
//pushare i numeri inseriti in un array
function domanda(){
   let primoNumero = parseInt(prompt(`Inserisci primo numero`))
   rispostaUtente.push(primoNumero)
   let secondoNumero = parseInt(prompt(`Inserisci secondo numero`))
   rispostaUtente.push(secondoNumero)
   let terzoNumero = parseInt(prompt(`Inserisci terzo numero`))
   rispostaUtente.push(terzoNumero)
   let quartoNumero = parseInt(prompt(`Inserisci quarto numero`))
   rispostaUtente.push(quartoNumero)
   let quintoNumero = parseInt(prompt(`Inserisci quinto numero`))
   rispostaUtente.push(quintoNumero)
   
   setTimeout(risposta, 1000)
}

function risposta() {
    if (simonNumber === rispostaUtente) {
      alert(`Hai vinto!`);
    } else {
      alert(`Hai perso!`);
    }
  }


  

