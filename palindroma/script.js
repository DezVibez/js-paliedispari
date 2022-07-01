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