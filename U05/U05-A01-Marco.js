/*1. Realizar un script que cuando pulse el usuario con el botón del ratón en cualquier sitio de la
pantalla, identifique si ha pulsado con el botón derecho, izquierdo o la rueda central. */


function maneja_click(evento) {
    if (evento.button === 0) {
        alert('Clic izquierdo');
    } else if (evento.button === 1) {
        alert('Clic de la rueda');
    } else if (evento.button === 2) {
        alert('Clic derecho');
    } else {
        alert('Otro click reconocido');
    }
}

document.addEventListener('mousedown', maneja_click);
