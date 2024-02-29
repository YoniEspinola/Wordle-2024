let intentos = 6;
let lista  = ["MOUSE", "HOUSE", "HORSE", "FUNNY"]
let palabra = lista[Math.floor(Math.random()* lista.length)]

console.log("RANDOM", Math.floor(Math.random()* lista.length))

console.log (palabra)
console.log("ADIVINAR", palabra)

let button = document.getElementById('guess-button');

button.addEventListener('click', intentar)

function intentar(){
    const GRID = document.getElementById('grid')
    const ROW = document.createElement('div')
    ROW.className = 'row'
    const INTENTO = leerIntento ();
    console.log (INTENTO)
    if (INTENTO.length != 5) {
        alert("Debe ingresar una palabra de 5 letras");
        return;
    }
    
    if (INTENTO===palabra){
        console.log("ganaste")
        terminar("Ganaste")
        button.disabled = true;
        /*reiniciarBtn.disabled = true;*/
    }

    for (let i in palabra){
        const SPAM = document.createElement('spam')
        SPAM.className = "letter"
        if(palabra[i]===INTENTO[i]){
            console.log(INTENTO[i], "verde")
            SPAM.innerHTML = INTENTO[i];
            SPAM.style.background = "green"
        }else if (palabra.includes(INTENTO[i])){
            console.log(INTENTO[i], "amarilo")
            SPAM.innerHTML = INTENTO[i];
            SPAM.style.background = "yellow"
        }else{
            console.log(INTENTO[i], "gris")
            SPAM.innerHTML = INTENTO[i];
            SPAM.style.background = "gray"
        }
        ROW.appendChild(SPAM)
    }
    GRID.appendChild(ROW)

    intentos--;
    if (intentos===0){
        console.log("Perdiste");
        terminar("Perdiste");
        button.disabled = true;
        //reiniciarBtn.disabled = true;//BOTON PARA REINICIAR 
    }
}

function leerIntento(){
    let valor = document.getElementById('guess-input').value
    valor = valor.toUpperCase()
    return valor
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = "<h1>" + mensaje + "<h1>";
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