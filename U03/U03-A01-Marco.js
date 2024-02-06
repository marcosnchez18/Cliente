/* Calcular el tiempo restante expresado en días entre la fecha actual y la fecha de fin de año. 
La información deberá aparecer en la página web.

Calcularla también expresado en milisegundos.  */


function tiempo_restante() {
    var factual = new Date();
    var anio = new Date(). getFullYear();
    var fin_anio = new Date(anio,11,31);
    var t_restante = fin_anio - factual;
    alert("El tiempo restante en milisegundos es: " + t_restante)
    alert("El tiempo restante en días es: " + Math.trunc(t_restante/(1000*60*60*24)))
    
}

tiempo_restante()







// recordar que el primer mes es el mes 0 y no el 1.