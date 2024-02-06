/*Crear una array multidimensional que recoja los nombres de 5 alumnos y las notas obtenidas en tres módulos.
 Dicha información será introducida por el usuario y una vez finalizada la recogida de datos se mostrará el contenido del array en forma de tabla. 
Tabla generada por manejo del DOM*/ 

let alumnos = [];

function agregarAlumno() {
    const nombre = document.getElementById('nombre').value;
    const modulo1 = parseFloat(document.getElementById('modulo1').value);
    const modulo2 = parseFloat(document.getElementById('modulo2').value);
    const modulo3 = parseFloat(document.getElementById('modulo3').value);

    if (isNaN(modulo1) || isNaN(modulo2) || isNaN(modulo3) || modulo1 < 0 || modulo1 > 10 || modulo2 < 0 || modulo2 > 10 || modulo3 < 0 || modulo3 > 10) {
        alert('Por favor, ingrese notas válidas (entre 0 y 10).');
        return;
    }

    const alumno = {
        nombre: nombre,
        notas: [modulo1, modulo2, modulo3]
    };

    alumnos.push(alumno);
    mostrarTabla();
}

function mostrarTabla() {
    const tablaContainer = document.getElementById('tablaContainer');
    tablaContainer.innerHTML = '';

    if (alumnos.length === 0) {
        tablaContainer.innerHTML = '<p>No hay alumnos registrados.</p>';
        return;
    }

    const tabla = document.createElement('table');
    tabla.innerHTML = '<tr><th>Nombre</th><th>Módulo 1</th><th>Módulo 2</th><th>Módulo 3</th></tr>';

    alumnos.forEach(alumno => {
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>${alumno.nombre}</td><td>${alumno.notas[0]}</td><td>${alumno.notas[1]}</td><td>${alumno.notas[2]}</td>`;
        tabla.appendChild(fila);
    });

    tablaContainer.appendChild(tabla);
}

