/*  Realizar un script para simular la función sort() en un array  por indice */
var array = {
    b: 2,
    a: 1,
    c: 3
};

function ordenar_array_por_indice(array) {
    var indices_ordenados = Object.keys(array).sort();

    var array_ordenado = [];

    for (var i = 0; i < indices_ordenados.length; i++) {
        var indice = indices_ordenados[i];
        array_ordenado.push(array[indice]);
    }

    return array_ordenado;
}

var a_or = ordenar_array_por_indice(array);
console.log(a_or);


