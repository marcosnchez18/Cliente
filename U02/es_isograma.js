var palabra = prompt("Introduzca la palabra a analizar:");

function esIsograma(palabra) {
    palabra = palabra.toLowerCase();

    var letrasVistas = [];

    for (var letra of palabra) {
        if (letrasVistas.includes(letra)) {
            var m1 = "no es un isograma";
            document.getElementById("div1").innerHTML = m1;
            return; // Salir de la función si se encuentra una letra repetida
        }
        letrasVistas.push(letra);
    }
    
    // Esta parte debe estar fuera del bucle
    var m2 = "es un isograma";
    document.getElementById("div1").innerHTML = m2;
}

esIsograma(palabra);
