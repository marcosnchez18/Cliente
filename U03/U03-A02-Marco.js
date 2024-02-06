/*   Calcula tu edad, sin utiliza ningún método, trabajando con los milisegundos  */

var a = parseInt(prompt("Introduzca tu año de nacimiento"));
var b = parseInt(prompt("Introduzca tu mes de nacimiento (número)"));
var c = parseInt(prompt("Introduzca tu día de nacimiento"));

function mi_edad(a, b, c) {
    var mi_fecha = new Date(a, b - 1, c);
    var f_actual = new Date();
    var t_restante = f_actual - mi_fecha;
    var days = Math.trunc((t_restante / (1000 * 60 * 60 * 24)));
    var años = Math.trunc(days / 365)
    alert("El tiempo restante en días es: " + años);
}

mi_edad(a, b, c);
