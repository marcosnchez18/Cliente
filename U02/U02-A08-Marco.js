/*   El factorial de un número entero n es una operación matemática que consiste 
en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. 
Crear un script que calcule el factorial de un número entero introducido por el usuario. */

function factorial(numero) {
    if (numero === 0) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}

var numero = parseInt(prompt('Introduce su número al que desea hacerle el factorial:'));
var resultado = factorial(numero);
document.getElementById("div1").innerHTML = ("El resultado es: " + resultado);
