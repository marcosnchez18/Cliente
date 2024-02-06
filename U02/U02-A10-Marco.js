var n = parseInt(prompt('Introduce un número para ver su tabla de multiplicar:'));

function tablaMultiplicar(n){
for (var i = 1; i <= 10; i++) {
  var resultado = n * i;
  document.getElementById("div" + i).innerHTML = n + " x " + i + " = " + resultado;
}
}

tablaMultiplicar(n)
