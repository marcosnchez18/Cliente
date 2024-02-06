/*Crear un vector de 10 elementos con valores aleatorios comprendidos entre 0 y 1000. 

Buscar el menor y el mayor. Generar otro vector a partir de él que deje fuera dichos valores.

(NOTA: puedes utilizar los métodos sort() y slice()  ) */


function crear_vector() {
    var vector = [];
    for (var i = 0; i < 10; i++) {
        var num_aleatorio = Math.floor(Math.random() * 1001);
        vector.push(num_aleatorio);
    }
    vector.sort(function (a, b) {
        return a - b;
    });
    var menor = vector[0];
    var mayor = vector[vector.length - 1]

    var nuevo_vector = vector.filter(function(valor) {
        return valor !== menor && valor !== mayor;
    });

    alert("El vector original era [" + vector + "] Y el nuevo será [" + nuevo_vector + "]")
}
crear_vector()