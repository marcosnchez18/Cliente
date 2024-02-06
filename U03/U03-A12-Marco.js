/*   Realiza un script que solicite una frase al usuario. 
Deberá indicar si aparece en ella o no la palabra indicada por el usuario. 
En caso de que la encuentre indicar a partir de qué posición se puede encontrar la primera coincidencia.
Indicar por cuantos caracteres está formada la palabra buscada y por último sustituirla 'dwecl'.

nota: puedes utilizar indexOf()        y  replace()*/



var frase = prompt("Introduzca la cadena a analizar:").trim();
var palabra = prompt("¿Qué palabra desea buscar?");
function sustituye(frase, palabra){
    if (frase.includes(palabra)) {
        var frase2= frase.replace(palabra, "dwecl");
        alert("la palabra se encuentra en la posición " + frase.indexOf(palabra) + " y la palabra tiene:  "+ palabra.length + " caracteres, la nueva frase es: "+ frase2);
    }
    else{
        alert("Palabra Not Found.")
    }
}

sustituye(frase, palabra)