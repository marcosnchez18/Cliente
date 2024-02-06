/* Crear un reloj que se muestre en la página web, 
el reloj implementado mostrará la hora en formato de 12 horas e indicará si es AM o PM

Nota: utilizar la función setInterval()  */



function reloj() {

    const actual = new Date();
    var horas = actual.getHours();
    horas = horas % 12 || 12;  // Esto convierte la hora en un formato de 12 horas
    const minutos = actual.getMinutes();
    const segundos = actual.getSeconds();


    var horas_fin, minutos_fin, segundos_fin, opcion;

    if (horas < 10) {
        horas_fin = '0' + horas;
    } else {
        horas_fin = horas;
    }

    if (minutos < 10) {
        minutos_fin = '0' + minutos;
    } else {
        minutos_fin = minutos;
    }

    if (segundos < 10) {
        segundos_fin = '0' + segundos;
    } else {
        segundos_fin = segundos;
    }

    if (horas >= 12) {
        opcion = 'PM';
    } else {
        opcion = 'AM';
    }

    document.getElementById('div1').innerHTML = horas_fin + ':' + minutos_fin + ':' + segundos_fin + ':' + opcion;
}

setInterval(reloj, 1000);
reloj();
