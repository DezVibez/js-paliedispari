console.log("js ok")

/*Svolgiamo 2 esercizi, possibilmente in file separati:
/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Domande da farsi quando scriviamo una funzione
// ?1 - Come la chiamo?
// ?2 - Ho bisogno di parametri? (se si quali?)
// ?3 - Devo restituire qualcosa? (se si cosa? di che tipo?)
// ?4 OPZIONALE:  Qualcosa  potrebbe andare storto? (se si, cosa?) */


/*Pari e Dispari

const min = 1
const max = 5


const userValue = parseInt(prompt(`Scegli un numero pari o dispari da ${min} a ${max}`, 5))
console.log(userValue + " tuo numero")

function getCpuRandomNumber(){

    let randomNumber = Math.floor(Math.random() * (max - min) + min)
    return randomNumber
}

let cpuNumber = getCpuRandomNumber()
console.log(cpuNumber + " numero cpu")
let sommaNumeri = (cpuNumber + userValue)


console.log(sommaNumeri + " totale")


function isEven() {

    let evenOrNot

    if (sommaNumeri % 2 == 0){
        evenOrNot = ( sommaNumeri +" è pari")
    } else
        evenOrNot = ( sommaNumeri +" è dispari")

    return evenOrNot
}


sommaNumeri = isEven()
console.log(sommaNumeri)

if (getCpuRandomNumber < userValue) {
    console.log("hai vinto")
}

else console.log("hai perso") /*


/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/


function reverseWord(parola) {
    let result ='';

    for (let i = parola.length - 1; i >= 0; i--)
    {
        result += parola[i];
    }
    return result;
}

let parolaUtente = prompt("inserisci una parola e vedi se è palindroma", "anna");

parolaReversata = reverseWord(parolaUtente)

console.log(parolaReversata)

if (parolaUtente == parolaReversata){
    console.log(`la parola ${parolaUtente} è palindroma`)
} else console.log(`la parola ${parolaUtente} non è palindroma`)


    