/* Confecciona una expresión regular que valide el ingreso del nombre de un día de la semana y un número de 1 o 2 dígitos

(ejemplo: lunes 31) - Expresión válida

(ejemplo: llunes 2) - Expresion no válida)

NOTA: utilizar el método test() */


var dia = prompt("Introduzca el día:");
var n = parseInt(prompt("Introduzca el número de día:"));

function comprueba(dia, n) {
    var formato_dia = /^(lunes|martes|miércoles|jueves|viernes|sábado|domingo)$/;
    var formato_n = /^([1-9]|[12]\d|3[01])$/;

    if (formato_dia.test(dia) && formato_n.test(n)) {
        alert("Formato correcto:" +" " + dia + " " + n);
    } else {
        alert("Formato incorrecto");
    }
}

comprueba(dia, n);
