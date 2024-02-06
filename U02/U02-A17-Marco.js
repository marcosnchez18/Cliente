/*Realiza un script que muestre por pantalla un menú ;

            “Calculadora”

            Pulse 1 para sumar

            Pulse 2 para restar

            Pulse 3 para multiplicar

            Pulse 4 para dividir

            Pulse 5 para obtener el módulo

            Pulse 6 para salir

En función de la opción seleccionada realizará la operación y si 
pulsa la opción 6, con el botón confirm preguntar si está seguro de salir,
si es que si cerrará la ventana si es que no, se volverá a elegir una opción del menú. */

function calculadora() {
    do {
        var opcion = parseInt(prompt(
            "Calculadora\n\n" +
            "Pulse 1 para sumar\n" +
            "Pulse 2 para restar\n" +
            "Pulse 3 para multiplicar\n" +
            "Pulse 4 para dividir\n" +
            "Pulse 5 para obtener el módulo\n" +
            "Pulse 6 para salir"
        ));

        if (opcion === 6) {
            var c = confirm("¿Está seguro de que quiere salir?");
            if (c) {
                break;
            }
        } else if (opcion >= 1 && opcion <= 5) {
            var n1 = parseFloat(prompt("Introduzca el primer número:"));
            var n2 = parseFloat(prompt("Introduzca el segundo número:"));

            if (isNaN(n1) || isNaN(n2)) {
                alert("Números no válidos!!!");
            } else {
                switch (opcion) {
                    case 1:
                        var suma = n1 + n2;
                        alert(suma);
                        break;

                    case 2:
                        var resta = n1 - n2;
                        alert(resta);
                        break;

                    case 3:
                        var multiplicacion = n1 * n2;
                        alert(multiplicacion);
                        break;

                    case 4:
                        if (n2 == 0) {
                            alert("SintaxError");
                        } else {
                            var division = n1 / n2;
                            alert(division);
                        }
                        break;

                    case 5:
                        var modulo = n1 % n2;
                        alert(modulo);
                        break;
                }
            }
        } else {
            alert("Opción no reconocida");
            break;
        }
    } while (true);
}

calculadora();
