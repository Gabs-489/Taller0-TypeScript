"use strict";
console.log("Hola Mundo");
var miTexto = "Hola mundo de nuevo";
console.log(miTexto);
var tagUno = "<div class=\"ejemplo\">";
var tagDos = "<div class='ejemplo'>";
console.log(tagUno);
console.log(tagDos);
console.log("Esta es una linea \n enter");
console.log("Esta es primera linea\nenter");
console.log("El valor de i variable es " + miTexto);
var op1 = 10;
var op2 = 15;
console.log("Mis variables inciales son " + op1 + " y " + op2);
op1++;
op2 += 4;
console.log("Mis variables finales son " + op1 + " y " + op2);
var resultado = op1 / op2;
console.log("Resultado: " + resultado);
console.log("Resultado: " + resultado.toPrecision(2));
var varTipoDesc;
console.log("La variable es " + varTipoDesc + " y es de tipo " + typeof (varTipoDesc));
varTipoDesc = "Ahora es un texto";
console.log("La variable es " + varTipoDesc + " y es de tipo " + typeof (varTipoDesc));
varTipoDesc = 2.8;
console.log("La variable es " + varTipoDesc + " y es de tipo " + typeof (varTipoDesc));
function imprimirMensaje() {
    console.log("Mensaje generico");
}
function imprimirMensaje2(msj) {
    console.log(msj);
}
imprimirMensaje();
imprimirMensaje2("Mensaje parametro");
function sumar(op1, op2) {
    return op1 + op2;
}
var fSumar = sumar;
console.log(sumar(2, 4));
console.log(fSumar(4, 6));
