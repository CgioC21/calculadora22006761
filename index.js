var Mousetrap = require("mousetrap");

var operacionSeleccionada = 0;
var operacionFinalizada = false;

//Mousetrap para eventos del teclado de cada boton de la calculadora
Mousetrap.bind("1",clickUno)
Mousetrap.bind("2",clickDos)
Mousetrap.bind("3",clickTres)
Mousetrap.bind("4",clickCuatro)
Mousetrap.bind("5",clickCinco)
Mousetrap.bind("6",clickSeis)
Mousetrap.bind("7",clickSiete)
Mousetrap.bind("8",clickOcho)
Mousetrap.bind("9",clickNueve)
Mousetrap.bind("0",clickCero)
Mousetrap.bind("+",clickSuma)
Mousetrap.bind("-",clickResta)
Mousetrap.bind("*",clickMult)
Mousetrap.bind("/",clickDiv)
Mousetrap.bind("backspace",clickRetroceder)
Mousetrap.bind("=",clickIgual)

//Var para botones de numeros
var botonUno = document.getElementById("botonUno")
var botonDos = document.getElementById("botonDos")
var botonTres = document.getElementById("botonTres")
var botonCuatro = document.getElementById("botonCuatro")
var botonCinco = document.getElementById("botonCinco")
var botonSeis = document.getElementById("botonSeis")
var botonSiete = document.getElementById("botonSiete")
var botonOcho = document.getElementById("botonOcho")
var botonNueve = document.getElementById("botonNueve")
var botonCero = document.getElementById("botonCero")

//Var para botones de operaciones
var botonSuma = document.getElementById("botonSuma")
var botonResta = document.getElementById("botonResta")
var botonMult = document.getElementById("botonMult")
var botonDiv = document.getElementById("botonDiv")

//Var para botones de borrar, retroceder e igual(enter)
var botonBorrar = document.getElementById("botonBorrar")
var botonRetroceder = document.getElementById("botonRetroceder")
var botonIgual = document.getElementById("botonIgual")

//Var para boton de numero actual y resultado
var numeroActual = document.getElementById("numeroActual")
var numeroActual2 = document.getElementById("numeroActual2")
var resultado = document.getElementById("resultado")
var historial = document.getElementById("botonHistorial")


//Agregar evento para cuando se hace click en los botones
botonUno.addEventListener("click",clickUno)
botonDos.addEventListener("click",clickDos)
botonTres.addEventListener("click",clickTres)
botonCuatro.addEventListener("click",clickCuatro)
botonCinco.addEventListener("click",clickCinco)
botonSeis.addEventListener("click",clickSeis)
botonSiete.addEventListener("click",clickSiete)
botonOcho.addEventListener("click",clickOcho)
botonNueve.addEventListener("click",clickNueve)
botonCero.addEventListener("click",clickCero)

botonSuma.addEventListener("click",clickSuma)
botonResta.addEventListener("click",clickResta)
botonMult.addEventListener("click",clickMult)
botonDiv.addEventListener("click",clickDiv)

botonBorrar.addEventListener("click",clickBorrar)
botonRetroceder.addEventListener("click",clickRetroceder)
botonIgual.addEventListener("click",clickIgual)

//Funciones de click para los numeros
function clickUno(){
    if(operacionFinalizada==true){
        numeroActual.innerHTML = "0"
        numeroActual2.innerHTML = "0"
    }
    if(operacionSeleccionada==0){      
        numeroActual.innerHTML +="1"
    }else{      
        numeroActual2.innerHTML +="1"
    }
    operacionFinalizada = false;
}

function clickDos(){
    if(operacionFinalizada==true){
        numeroActual.innerHTML = "0"
        numeroActual2.innerHTML = "0"
    }
    if(operacionSeleccionada==0){      
        numeroActual.innerHTML +="2"
    }else{      
        numeroActual2.innerHTML +="2"
    }
    operacionFinalizada = false;
}

function clickTres(){
    if(operacionFinalizada==true){
        numeroActual.innerHTML = "0"
        numeroActual2.innerHTML = "0"
    }
    if(operacionSeleccionada==0){      
        numeroActual.innerHTML +="3"
    }else{      
        numeroActual2.innerHTML +="3"
    }
    operacionFinalizada = false;
}

function clickCuatro(){
    if(operacionFinalizada==true){
        numeroActual.innerHTML = "0"
        numeroActual2.innerHTML = "0"
    }
    if(operacionSeleccionada==0){      
        numeroActual.innerHTML +="4"
    }else{      
        numeroActual2.innerHTML +="4"
    }
    operacionFinalizada = false;
}

function clickCinco(){
    if(operacionFinalizada==true){
        numeroActual.innerHTML = "0"
        numeroActual2.innerHTML = "0"
    }
    if(operacionSeleccionada==0){      
        numeroActual.innerHTML +="5"
    }else{      
        numeroActual2.innerHTML +="5"
    }
    operacionFinalizada = false;
}

function clickSeis(){
    if(operacionFinalizada==true){
        numeroActual.innerHTML = "0"
        numeroActual2.innerHTML = "0"
    }
    if(operacionSeleccionada==0){      
        numeroActual.innerHTML +="6"
    }else{      
        numeroActual2.innerHTML +="6"
    }
    operacionFinalizada = false;

}

function clickSiete(){
    if(operacionFinalizada==true){
        numeroActual.innerHTML = "0"
        numeroActual2.innerHTML = "0"
    }
    if(operacionSeleccionada==0){      
        numeroActual.innerHTML +="7"
    }else{      
        numeroActual2.innerHTML +="7"
    }
    operacionFinalizada = false;
}   

function clickOcho(){
    if(operacionFinalizada==true){
        numeroActual.innerHTML = "0"
        numeroActual2.innerHTML = "0"
    }
    if(operacionSeleccionada==0){      
        numeroActual.innerHTML +="8"
    }else{      
        numeroActual2.innerHTML +="8"
    }
    operacionFinalizada = false;
}

function clickNueve(){
    if(operacionFinalizada==true){
        numeroActual.innerHTML = "0"
        numeroActual2.innerHTML = "0"
    }
    if(operacionSeleccionada==0){      
        numeroActual.innerHTML +="9"
    }else{      
        numeroActual2.innerHTML +="9"
    }
    operacionFinalizada = false;
}

function clickCero(){
    if(operacionFinalizada==true){
        numeroActual.innerHTML = "0"
        numeroActual2.innerHTML = "0"
    }
    if(operacionSeleccionada==0){      
        numeroActual.innerHTML +="0"
    }else{      
        numeroActual2.innerHTML +="0"
    }
    operacionFinalizada = false;
}


function clickSuma(){
    operacionSeleccionada = 1;
}

function clickResta(){
    operacionSeleccionada = 2;
}

function clickMult(){
    operacionSeleccionada = 3;
}

function clickDiv(){
    operacionSeleccionada = 4;
}


function clickIgual(){
    let valorActual = parseInt(numeroActual.innerHTML)
    let valorActual2 = parseInt(numeroActual2.innerHTML)

    switch(operacionSeleccionada){
        case 1:
            resultado.innerHTML = valorActual + valorActual2
            historial.innerHTML +=valorActual + " + " + valorActual2 + " = " + (valorActual+valorActual2) + "<br>"
            break;
        case 2:
            resultado.innerHTML = valorActual - valorActual2
            historial.innerHTML +=valorActual + " - " + valorActual2 + " = " + (valorActual-valorActual2) + "<br>"
            break;
        case 3:
            resultado.innerHTML = valorActual * valorActual2
            historial.innerHTML +=valorActual + " * " + valorActual2 + " = " + (valorActual*valorActual2) + "<br>"
            break;
        case 4:
            if (valorActual2!=0){
                resultado.innerHTML = valorActual / valorActual2
                historial.innerHTML +=valorActual + " / " + valorActual2 + " = " + (valorActual/valorActual2) + "<br>"
            }else{
                alert("No se puede dividir por cero, por favor ingrese nuevamente los numeros");
                numeroActual.innerHTML = "0";
                numeroActual2.innerHTML = "0";
            }
            break;
    }
    
    operacionSeleccionada = 0;
    operacionFinalizada = true;
}


function clickBorrar(){
    numeroActual.innerHTML = "0"
    numeroActual2.innerHTML = "0"
    resultado.innerHTML = "0"
    operacionSeleccionada = 0;
}

function clickRetroceder(){
    if(operacionSeleccionada==0){
        let nuevoNumeroActual = numeroActual.innerHTML
        let nuevoNumeroActual1 =nuevoNumeroActual.slice(0,-1);
        numeroActual.innerHTML = nuevoNumeroActual1
    }else{
        let nuevoNumeroActual = numeroActual2.innerHTML
        let nuevoNumeroActual1 =nuevoNumeroActual.slice(0,-1);
        numeroActual2.innerHTML = nuevoNumeroActual1
    }
}