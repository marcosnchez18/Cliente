var n = parseInt(prompt('Introduzca el número a analizar:'));

function digitos(n) {
    if (n >= 1000) {
        alert("El número máximo a analizar es 999");
    }
    else {
        var n_str = n.toString(); // Convertir el número en una cadena
        for (var dig of n_str) {
            alert(dig);
        }

    }
}

digitos(n);
