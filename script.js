let intentos = 6;
let palabra = "";

const UrlApi = 'https://random-word-api.vercel.app/api?words=25&length=5';

fetch (UrlApi)
    .then (response => response.json())
    .then(response => {
        palabra = response[0].toUpperCase();
        console.log("Palabra generada:", palabra);5
    })
    .catch(err => { console.log("Error al obtener la palabra:", err)}
);

let button = document.getElementById('guess-button');
let reiniciarButton = document.getElementById('reiniciar');

button.addEventListener('click', intentar);
reiniciarButton.addEventListener('click', reiniciarJuego);
reiniciarButton.disabled = false; 

function intentar(){
    const GRID = document.getElementById('grid');
    const ROW = document.createElement('div');
    ROW.className = 'row';
    const INTENTO = leerIntento ();
    console.log("Intento:", INTENTO);
    
    if (INTENTO.length != 5) {
        alert("Debe ingresar una palabra de 5 letras");
        return;
    }
    
    if (INTENTO === palabra){
        console.log("Ganaste");
        terminar("Ganaste CRACK, sos un genio");
        button.disabled = true;
        reiniciarButton.disabled = false; 
    }

    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = "letter";
        if (palabra[i] === INTENTO[i]){
            console.log(INTENTO[i], "verde");
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.background = "green";
        } else if (palabra.includes(INTENTO[i])) {
            console.log(INTENTO[i], "amarillo");
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.background = "yellow";
            for (let j = 0; j < i; j++) {
                if (palabra[j] === INTENTO[i]) {
                    SPAN.style.background = "gray";
                    break;
                }
            }
        } else {
            console.log(INTENTO[i], "gris");
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.background = "gray";
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
    intentos--;
    if (intentos === 0){
        console.log("Perdiste");
        terminar("Perdiste crack, Pero no importa, intentalo de nuevo");
        button.disabled = true;
        reiniciarButton.disabled = false; 
    }
}

function leerIntento(){
    let valor = document.getElementById('guess-input').value;
    valor = valor.toUpperCase();
    return valor;
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = false; 
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = "<h2>" + mensaje + "<h2>";
}

function reiniciarJuego() {
    console.log("Reiniciando juego......");
    intentos = 6;
    const GRID = document.getElementById('grid');
    GRID.innerHTML = ""; // Limpiar el área de adivinanzas
    document.getElementById('guess-input').value = ""; // Limpiar el input
    fetch(UrlApi)
        .then((response) => response.json())
        .then((json) => {
            palabra = json[0].toUpperCase();
            console.log("Palabra nueva", palabra)
            button.addEventListener('click', intentar);
            button.disabled = false; 
        })
        .catch((error) => console.log("Error al obtener la palabra:", error));
}



/*let i= 0
while(i<5){
    console.log("algo repetido en whil,", i)
    i++;

}**/ //while

//let miCadena = "hola";

/*for (const i in miCadena){
console.log(i,miCadena[i])
}*/ // for in
/*for (const letra of miCadena) {
    console.log(letra)
}*/
/*let miVector= ["a", "b", "c"] //2
for (let i= 0; i<3; i++){
    if (typeof miVector[i] === "string")
    console.log (i,  typeof miVector[i]);
} // for
miVector.forEach((element)=>{
console.log(i, element)
});/* //forEache
/*let b = "hola";
let miVector = [1, 2, 3, b]
miVector.push ('chau', 1);
console.log(miVector);*/ //vectores