/* Realiza un script que muestre mediante mensajes los literales de los números entre 1 y 5*/


var numero = parseInt(prompt('Introduzca un número del 1 al 5 para ver su literal'));

function literal(palabra) {
    var numeros = [1, 2, 3, 4, 5];
    if (numeros.includes(numero)) {
        var texto = (numero === 1) ? "Uno" :
            (numero === 2) ? "Dos" :
                (numero === 3) ? "Tres" :
                    (numero === 4) ? "Cuatro" :
                        (numero === 5) ? "Cinco" :
                            "error"


        document.getElementById("div1").innerHTML = texto;
    }
    else {
        document.getElementById("div1").innerHTML = ("número no reconocido");
    }

}

literal(numero)