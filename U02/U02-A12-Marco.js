var n = parseInt(prompt('Introduzca el número a analizar:'));

function digitos(n) {
    if (n >= 1000) {
        alert("El número máximo a analizar es 999");
    }
    else {
        var n_str = n.toString(); // Convertir el número en una cadena
        for (var i = 0; i < n_str.length; i++) {
            var digito = n_str[i];
            alert(digito);
        }
    }
}

digitos(n);
