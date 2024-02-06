var numero1 = parseInt(prompt('Introduce el primer número:'));
var numero2 = parseInt(prompt('Introduce el segundo número:'));

function crearRango(numero1, numero2) {
  var rango = [];  // aqui se crea el rango
  for (var i = numero1; i <= numero2; i++) {
    rango.push(i);
  }
  var multiplos = [];  //aqui hacemos la lista de los multiplos comprendidos
  for (var i = 0; i < rango.length; i++) {
    if (rango[i] % 8 === 0) {
      multiplos.push(rango[i]);
    }
  }
  document.getElementById("div1").innerHTML = ("Los múltiplos de 8 comprendidos entre " + numero1 + " y " + numero2 + " son: " + multiplos.join(', '));
}


crearRango(numero1, numero2)