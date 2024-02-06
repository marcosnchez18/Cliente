/* Crear una array multidimensional que recoja los nombres de 5 alumnos y las notas obtenidas en tres módulos. 

Dicha información será introducida por el usuario y una vez finalizada la recogida de datos se mostrará el contenido del array en forma de tabla.

(Se deberá comprobar que las notas son valores entre el 0 y el 10) sino indicara mensaje de error.*/


function obtener() {

    var alumnos = [];
    for (var i = 0; i < 5; i++) {
        var nombre = prompt(`Introduzca el nombre del alumno ${i + 1}: `);
        var notas = [];
        for (var j = 0; j < 3; j++) {
            var nota = parseFloat(prompt(`Introduzca la nota del módulo ${j + 1} para ${nombre}: `));
            if (comprueba_nota(nota)) {
                notas.push(nota);
            } else {
                alert("La nota mínima es 0 y la máxima 10");
                j--;
            }
        }
        alumnos.push({ nombre: nombre, notas: notas });
    }
    imprimir_tabla(alumnos);
}
function comprueba_nota(nota) {
    return !isNaN(nota) && nota >= 0 && nota <= 10;
}
function imprimir_tabla(datos) {
    var tablaHTML = '<table border="2"><tr><th>Nombre Alumno</th><th>DAWEB</th><th>DIW</th><th>DIWEC</th></tr>';

    for (var i = 0; i < datos.length; i++) {
        tablaHTML += `<tr><td>${datos[i].nombre}</td><td>${datos[i].notas[0]}</td><td>${datos[i].notas[1]}</td><td>${datos[i].notas[2]}</td></tr>`;
    }
    tablaHTML += '</table>';
    document.getElementById('div1').innerHTML = tablaHTML;
}
obtener()