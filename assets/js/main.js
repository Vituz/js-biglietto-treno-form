// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente

var insertNameEl, usernameEl, percorsoEl, ageEl, scontoEl, carrozzaEl, cpCodeEl;

var euroKm = 0.21;

var costoBigliettoEl, calcolo;

document.getElementById("confirm").addEventListener("click", function(){

    insertNameEl = document.getElementById("name");
    console.log(insertNameEl.value);

    usernameEl = document.getElementById("username");
    usernameEl.innerHTML = insertNameEl.value;
    console.log(usernameEl);

    percorsoEl = document.getElementById("percorso").value;
    console.log(percorsoEl);


    ageEl = document.querySelector("#eta").value;
    console.log(ageEl);
    scontoEl = document.getElementById("sconto");
    scontoEl.innerHTML = "Offerta" + "<br>" + ageEl;

    console.log(sconto(ageEl));
    calcolo = (percorsoEl * euroKm) - ((percorsoEl * euroKm) * sconto(ageEl));

    costoBigliettoEl = document.getElementById("costo");

    costoBigliettoEl.innerHTML = calcolo.toFixed(2) + " €";


    carrozzaEl = document.getElementById("carrozza");
    carrozzaEl.innerHTML = rndNumber(1, 10);

    cpCodeEl = document.getElementById("cp_code");
    cpCodeEl.innerHTML = rndNumber(99999, 90000);

});


function rndNumber(min, max){

    var nRandom = Math.floor(Math.random() * (max - min +1) + min);

    return nRandom;
}


function sconto(text){

    var sconto;

    if(text === "minorenne"){
        sconto = 0.20;
        console.log("sconto del 20%");
        return sconto;

    } else if(text === "maggiorenne"){
        sconto = 0;
        console.log("nessuna offerta");
        return sconto;

    } else if(text === "over65"){
        sconto = 0.40;
        console.log("sconto del 40%");
        return sconto;
    }

}

document.getElementById("delete").addEventListener("click", function(){
    insertNameEl.value = "";
    percorsoEl = document.getElementById("percorso");
    percorsoEl.value = "";
});


