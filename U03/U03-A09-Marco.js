/* Solicitar una frase desde teclado, almacenar cada palabra en un array y mostrar los siguientes datos:

La primera palabra de la frase.

La última palabra de la frase.

El número de palabras de la frase. --

NOTA: utilizar trim() y split(" ")  */

var frase = prompt("Introduzca su frase:").trim()

function cuenta_palabras(frase) {
    var cont = 1;
    var palabras = frase.split(' ');
    var primera_palabra = palabras[0];
    var ultima_palabra = palabras[palabras.length - 1]
    for(p of frase) {
        if (p === " ")
        cont += 1;
    }
    
    alert("La frase tiene " + cont + " palabras, la primera es: " + primera_palabra + " y la última es: " + ultima_palabra)
}

cuenta_palabras(frase)