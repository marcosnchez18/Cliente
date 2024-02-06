/*  Crea un script que tome una serie de palabras ingresadas por el usuario 
y almacene esas palabras en un array. Posteriormente, manipula ese array para mostrar en una nueva ventana 
los siguientes datos:

Todas las palabras.   si
Todas las palabras colocadas al revés.  si
La primera palabra ingresada por el usuario   si
La última palabra ingresada por el usuario    si
El número de palabras presentes en el array    si
Las palabras ordenadas de la 'a' a la 'z':
Las palabras Ordenadas de la 'z' a la 'a' */


var p1 = prompt("Introduzca la palabra número 1:");
var p2 = prompt("Introduzca la palabra número 2:");
var p3 = prompt("Introduzca la palabra número 3:");
var p4 = prompt("Introduzca la palabra número 4:");
var p5 = prompt("Introduzca la palabra número 5:");
function almacena(){
    var array = [p1, p2, p3, p4, p5];
    alert("Todas las palabras: " + array.join(","));
    alert("Todas las palabras colocadas al revés " + array.reverse().join(","));
    alert("La primera palabra ingresada por el usuario es: " + array[4]);
    alert("La última palabra ingresada por el usuario es: " + array[0]);
    alert("El número de palabras del array es de: " + array.length);
    alert("Las palabras ordenadas alfabeticamente son: " + array.sort());
    alert("Las palabras ordenadas de la Z a la A son: " + array.sort().reverse());
    }
almacena()