/* Dado un array, con 6 elementos, dos valores booleanos, dos valores numéricos y dos cadenas de caracteres. 
Realizar un script que devuelva la siguiente información: 

Ejemplo: A partir del siguiente array que se proporciona:

 var valores = [true, 5, false, "hola", "adios", 2];

Determinar cuál de los dos elementos de texto es mayor
Determinar el resultado de dos operaciones lógicas realizadas con los elementos booleanos
Determinar el resultado de dos operaciones aritméticas realizadas con los elementos numéricos*/



function clasifica() {
    var valores = [true, 5, false, "hola", "adios", 2];
    var numeros = [];
    var  buleanos = [];
    var cadenas = [];
    var suma = 0;



    for (var num of valores) {
        if (!isNaN(num) && typeof num === 'number') {
            numeros.push(num);
        }
    }

    for (var bl of valores) {
        if (typeof bl === 'boolean') {
            buleanos.push(bl);
        }
    }

    for (var cadena of valores) {
        if (typeof cadena === 'string') {
            cadenas.push(cadena);
        }
    }

    for (var i of numeros) {
        suma += i;

    }

    if (cadenas[0].length > cadenas[1].length) {
        alert(cadenas[0] + " es más larga");
    } else {
        alert(cadenas[1] + " es más larga");
    }
    alert("La suma es:" + suma)
    var resultbool = (buleanos[0] && buleanos[1]);
    alert("Comparamos los buleanos con AND:" + resultbool)
}

clasifica();
