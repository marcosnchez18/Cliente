// Crea un array con los números impares del 1 al 21.

// Calcula el sumatorio de dichos números impares e imprime el resultado.
// Muestra en orden inverso el array creado anteriormente.
// Lea un valor que escriba el usuario y búsquelo en el array. Indique si la búsqueda tuvo éxito indicando la posición o si no tuvo éxito.
// En caso de tener éxito, borra su valor.
// Muéstrelo ordenado de forma ascendente, y a continuación de forma descendente.


var num_usuario = parseInt(prompt("Introduzca un número a buscar en el array:"));

function crear_array(num_usuario) {
    var array = [];
    var cont = 0;

    for (var i = 1; i < 22; i++) {
        if (i % 2 !== 0) {
            array.push(i);
        }
    }

    for (var a of array) {
        cont += a;
    }

    alert("El array es: " + array + "\nLa suma es: " + cont + "\nEl array a la inversa es: " + array.slice().reverse());

    var pos = array.indexOf(num_usuario);

    if (pos !== -1) {
        alert("El número: " + num_usuario + " se encuentra en la posición: " + pos + " del array.");
        array.splice(pos, 1);    //aqui borramos el valor
        alert("Número eliminado");
    } else {
        alert("Número no encontrado");
    }

    // ascendente
    var ascendente = array.slice().sort(function (a, b) {
        return a - b;
    });

    // descendente
    var descendente = array.slice().sort(function (a, b) {
        return b - a;
    });

    alert("Array ordenado de forma ascendente: " + ascendente);
    alert("Array ordenado de forma descendente: " + descendente);
}

crear_array(num_usuario);
