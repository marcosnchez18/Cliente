var palabra = prompt('Introduzca la frase a deletrear:');

function quita_digitos(palabra) {
    var letras = [];
    for (var letra of palabra) {
        if (isNaN(letra)) {
            letras.push(letra);
        }
    }
    document.getElementById("div1").innerHTML = ("Las letras omitiendo los numeros  son: " + letras.join(', '));
    }

quita_digitos(palabra);
