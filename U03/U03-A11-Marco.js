/*  Pide al usuario que introduzca una cadena y determinar 
si esa cadena está formada sólo por letras mayúsculas, sólo por minúsculas o por una mezcla de ambas

nota: puedes utilizar 

charAt()     toUpperCase()   */



var frase = prompt("Introduzca la cadena a analizar:")

function analiza(frase){
    if (frase === frase.toUpperCase()) {
        alert("La frase está escrita en mayúscula.")
    }
    else if (frase === frase.toLowerCase()) {
        alert("La frase está escrita en minúscula")
    }
    else {
        alert("Es una mezcla de mayúsculas y minúsculas.")
    }
}

analiza(frase)