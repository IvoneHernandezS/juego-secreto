let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número secreto en ${intentos} ${intentos === 1 ? "intento" : "intentos"} `);
        document.getElementById(`reiniciar`).removeAttribute (`disabled`);
        //le pedi que si acierta elimine el disabled de reiniciar
    } else {
        //El usuario no acertó
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p',`El número secreto es mayor`);
        } else {
            asignarTextoElemento('p',`El número secreto es menor`);
        }
        intentos++
        limpiarCaja ();
    } 
    return;
}

function limpiarCaja () { 
    document.querySelector(`#valorUsuario`).value = ``;
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales () {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    limpiarCaja (); //limpiar caja
    condicionesIniciales ();
    //indicar mensaje de intervalos
    //generar el número aleatorio
    //reiniciar los intentos
    document.getElementById(`reiniciar`).setAttribute(`disabled`,`true`)
    //deshabiitar el botón de nuevo juego
}

condicionesIniciales ();