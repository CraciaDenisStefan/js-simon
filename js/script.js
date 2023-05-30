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
    for(let i=1; i<6;i++){
   let numero = parseInt(prompt(`Inserisci un numero${i}`));
   while (isNaN(numero) || numero < 1 || numero > 50) {
    numero = parseInt(prompt(`Inserisci un numero valido ${i}`));
    }
   rispostaUtente.push(numero)
}
   setTimeout(risposta, 1000)
}
function risposta() {
    let corrette = 0;
    let numeriIndovinati = [];

    for (let i = 0; i < simonNumber.length; i++) {
      if (rispostaUtente.includes(simonNumber[i])) {
        corrette++;
        numeriIndovinati.push(simonNumber[i]);
      }
    }
    if (corrette === 5) {
        alert("Hai indovinato tutti i numeri! ");
      } else if (corrette > 0) {
        alert("Hai indovinato " + corrette + " numero/i : " + numeriIndovinati);
      } else {
        alert("Hai perso. Non hai indovinato nessun numero.");
      }
}

  

