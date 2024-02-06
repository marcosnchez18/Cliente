/* Realiza un script que determine si la cadena de texto que se le pide al usuario es un palíndromo, 
es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
 Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".*/


 var frase = prompt("Escriba la frase a analizar:").toLowerCase();

 function palindromo(frase) {

     var a = frase.replace(",", "").trim();
     var b = a.split("").reverse().join("");
     if (a === b) {
         alert("Es un palíndromo");
     } else {
         alert("No es un palíndromo");
     }
 }
 
 palindromo(frase);
 