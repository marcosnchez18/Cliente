/* Genera 10 números aleatorios comprendidos entre 0 y 20, todos enteros  */


// 10 números aleatorios entre 0 y 20
function aleatorios() {
    var numeros = [];
    for (var i = 0; i < 10; i++) {
        var num_aleatorio = Math.floor(Math.random() * 21);
        numeros.push(num_aleatorio)
    }
    alert(numeros)
}

aleatorios()