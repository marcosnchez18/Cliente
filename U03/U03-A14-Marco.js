/* El usuario deberá introducir una hora y se deberá validar el ingreso de una hora con el formato hh:mm:ss o hh:mm

En el caso de ser correcto se indicará formato correcto y en caso contrario incorrecto

Nota: utilizar expresiones regulares  */


var hora = prompt("Introduzca la hora:");

function comprueba(hora) {
    var formato = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/;

    if (formato.test(hora)) {
        alert("Formato correcto");
    } else {
        alert("Formato incorrecto");
    }
}

comprueba(hora)