/*  Haciendo uso de los métodos vistos en clase e introduciendo tu fecha de nacimiento:

Mostrar en la página web :  los meses, días y años que tienes a fecha actual. */

var a = parseInt(prompt("Introduzca tu año de nacimiento"));
var b = parseInt(prompt("Introduzca tu mes de nacimiento (número)"));
var c = parseInt(prompt("Introduzca tu día de nacimiento"));

function mi_edad(a, b, c) {
    var mi_fecha = new Date(a, b - 1, c);
    var f_actual = new Date();
    

    var diferencia = f_actual - mi_fecha;
    

    var anios = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365)); 
    var meses = Math.floor((diferencia % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.41)); 
    var dias = Math.floor((diferencia % (1000 * 60 * 60 * 24 * 30.41) / (1000 * 60 * 60 * 24)));

    alert("Tienes " + anios + " años, " + meses + " meses y " + dias + " días.");
}

mi_edad(a, b, c);
