/* Realiza un script en el que un usuario introduzca un número, 
y vaya sumando cada una de sus cifras y devuelva el resultado.

        DOS OPCIONES A INCLUIR:

            Si el número es decimal suma solo la parte entera  (OPCION EN EL QUE SOLO SUMA LAS CIFRAS DE LA PARTE ENTERA)

            Si el número es decimal suma la parte entera y la decimal (OPCION EN EL QUE SUMA TODA LAS CIFRAS, TANTO PARTE ENTERA COMO DECIMAL)*/

var numero = parseFloat(prompt('Introduzca el número:'));

function suma_digitos(numero) {
    if (Number.isInteger(numero)) {
        var n = numero.toString();
        var cont = 0;
        for (var i of n) {
            cont += parseInt(i);
        }
        document.getElementById("div1").innerHTML = (cont);
    }
    else {
        var confirmacion = confirm("¿Quieres ver la suma de la parte entera de tu número?");
        if (confirmacion) {
            var trunc = Math.trunc(numero);
            var n_trunc = trunc.toString();
            var cont2 = 0;
            for (var e of n_trunc) {
                cont2 += parseInt(e)
            }
            document.getElementById("div1").innerHTML = (cont2);
        }
        else {
            var confirmacion2 = confirm("¿Quieres ver la suma de tu número?");
            if (confirmacion2) {
                var numeros = [];
                var numeroString = numero.toString();
                var cont3 = 0
                for (var c of numeroString) {
                    if (!isNaN(c) && c !== '.') {
                        numeros.push(c);
                        cont3 += parseInt(c);
                    }
                }
                document.getElementById("div1").innerHTML = (cont3);
            }
        }
    }
}

suma_digitos(numero);
