/*  Sea la sucesión geométrica  5, 15, 45, 135, 405, 1215, ... 
Realizar un script en javascript que calcule y escriba dicha 
sucesión hasta el termino n introducido por el usuario
  */


var n = parseInt(prompt("Introduzca hasta qué número desea ver la sucesión:"));

function por_tres(n) {
    var succ = [5];
    var comienzo = succ[0];
    while(comienzo <= n) {
        comienzo *=3;
        succ.push(comienzo)
    }
    return succ
}

var sucesión = por_tres(n);
alert("Sucesión multiplicando por 3 hasta " + n + ": " + sucesión.join(', '));
