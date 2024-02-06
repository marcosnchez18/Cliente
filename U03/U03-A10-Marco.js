/*  Realiza un script que pida al usuario una frase. 

De ella se extraerá la parte comprendida entre unas marcas de inicio y fin (distintas) que serán indicadas por el usuario

Escribir en la página :

 - Frase completa

- Frase extraida

NOTA: puedes utilizar los métodos  indexof y slice */


var frase = prompt("Introduzca su frase:").trim();
var m1 = prompt("Introduzca la marca 1:").trim();
var m2 = prompt("Introduzca la marca 2:").trim();

function extraer(frase, m1, m2) {
    var a = frase.indexOf(m1);
    var b = frase.indexOf(m2);
    if (a !== -1 && b !== -1 && a < b) {
        var fragmento = frase.slice(a + m1.length, b);
        alert("Frase completa: " + frase);
        alert("Frase extraída: " + fragmento);
    } else {
        alert("Error");
    }
}

extraer(frase, m1, m2);
