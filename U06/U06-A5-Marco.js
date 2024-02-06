/*  Realizar un código en el que tengamos en HTML varios párrafos con un determinado texto escrito.

Crear un botón para ocultar/visualizar el párrafo  elegido.

Para ello puedes utilizar dos clases en CSS y, mediante JavaScript, se irá cambiando la clase al elemento del DOM*/

function ver(parrafoIndex) {
    const parrafos = document.getElementsByTagName('p');

    if (parrafoIndex < 1 || parrafoIndex > parrafos.length) {
        console.error('Índice de párrafo inválido.');
        return;
    }

    const parrafoSeleccionado = parrafos[parrafoIndex - 1];

    if (parrafoSeleccionado.classList.contains('visible')) {
        parrafoSeleccionado.classList.remove('visible');
        parrafoSeleccionado.classList.add('hidden');
    } else {
        parrafoSeleccionado.classList.remove('hidden');
        parrafoSeleccionado.classList.add('visible');
    }
}
