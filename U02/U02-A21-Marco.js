/*Realiza un script donde se utilizan las conversiones de tipo.

A mayor número de diferentes conversiones de tipos diferentes, mayor puntuación de la actividad.

Utiliza tu creatividad para diseñar una web con una aplicación
 en concreto y que necesites el uso de las conversiones de tipo */

 function comprueba() {
    do {
        var numero = "42";
        var incremento = 10;
        var resultado = Number(numero) + incremento;
        var suma = prompt("Intente adivinar el resultado:");

        suma = Number(suma);

        if (suma === resultado) {
            alert(Boolean(1));
            return;
        } else {
            alert(Boolean(0));
        }
    } while (true);
}


comprueba();
