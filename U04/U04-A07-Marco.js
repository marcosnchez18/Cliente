
/*  Usando los nuevos métodos de los arrays (por ejemplo: filter() // fill() // keys() )

Crea un array de diez números aleatorios entre 0 y 10.
Devuelve un array con los valores menores a 8.
Intercambia los valores impares por la cadena “impar”.  */

function aleatorios() {
    var array_aleatorio = [];
    for (var i = 0; i < 10; i++) {
        var num_aleatorio = Math.floor(Math.random() * 11);
        array_aleatorio.push(num_aleatorio);
    } //creamos el array aleatorio

    var nuevo_array = array_aleatorio.filter(function(valor) {
        return valor < 8;
    });   //filtramos

    Array.from(nuevo_array.keys()).forEach(function(index) {
        if (nuevo_array[index] % 2 !== 0) {
            nuevo_array[index] = "impar";
        }
    });  //intercamabiamos los pares por "impar"

    var c1 = array_aleatorio.join(', ');
    var c2 = nuevo_array.join(', ');
    alert("Array original: " + c1);
    alert("Array nuevo: " + c2);
}

aleatorios();
