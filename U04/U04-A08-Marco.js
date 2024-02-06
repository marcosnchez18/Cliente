/* Usando los nuevos métodos de los arrays ( every() // map() // reduce() )

Crea un vector con 5 valores numéricos.
Comprueba si son todos enteros positivos.
Devuelve en un nuevo array el triple sus valores.
Calcula el resultado de multiplicar todos los valores del nuevo array.  */

function vector() {
    var array_aleatorio = [];
    for (var i = 0; i < 5; i++) {
        var num_aleatorio = Math.floor(Math.random() * 51);
        array_aleatorio.push(num_aleatorio);
    }
    // si son todos positivos
    var es_positivo = array_aleatorio.every(function(valor) {
        return Number.isInteger(valor) && valor > 0;
    });
    // triple del array
    var nuevo_array = array_aleatorio.map(function(valor) {
        return valor * 3;
    });  
    // multiplicar todo
    var mult = nuevo_array.reduce(function(acumulador, valor) {
        return acumulador * valor;
    }, 1);
    
    alert("Array original:"+ array_aleatorio);
    alert("¿Son todos enteros positivos?"+ es_positivo);
    alert("Triple del array"+ nuevo_array);
    alert("Resultado de la multiplicación:"+ mult);
}

vector();
