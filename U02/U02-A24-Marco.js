var n = parseInt(prompt("Introduzca el último número:"));

function fibonacci(n) {
  var fibonacci = [1, 1];
  for (var i = 2; i < n; i++) {
    var siguiente = fibonacci[i - 1] + fibonacci[i - 2];
    if (siguiente > n) {
      break;
    }
    fibonacci.push(siguiente);
  }
  return fibonacci;
}

var sucesión = fibonacci(n);
alert("Sucesión de Fibonacci hasta " + n + ": " + sucesión.join(', '));
