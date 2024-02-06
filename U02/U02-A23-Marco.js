/* Utilizando bucles, realizar un script que muestre en una página Web lo que se observa en la figura */

/*     *
      ***
     ***** 
    ******* 
     *****
      *** 
       *     */

var altura = 4;

for (var i = 1; i <= altura; i++) {
    var espacios = altura - i;
    var asteriscos = 2 * i - 1;
    var linea = " ".repeat(espacios) + "*".repeat(asteriscos);
    document.write(linea + "<br>");
}

for (var i = altura - 1; i >= 1; i--) {
    var espacios = altura - i;
    var asteriscos = 2 * i - 1;
    var linea = " ".repeat(espacios) + "*".repeat(asteriscos);
    document.write(linea + "<br>");
}
