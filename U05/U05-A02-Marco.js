/*2. Realizar un script que permita mover una caja dentro de la ventana del navegador tanto con las
teclas de desplazamiento del teclado central como con las del teclado numérico. */

var caja = document.getElementById('caja');   //cojemos la caja

function mueve_caja(evento) {
    var paso = 10;

    var rectangulo_caja = caja.getBoundingClientRect();
    var caja_top = rectangulo_caja.top;
    var caja_left = rectangulo_caja.left;

    switch (evento.key) {
        case 'ArrowUp':
            caja.style.top = (caja_top - paso) + 'px';
            break;
        case 'ArrowDown':
            caja.style.top = (caja_top + paso) + 'px';
            break;
        case 'ArrowLeft':
            caja.style.left = (caja_left - paso) + 'px';
            break;
        case 'ArrowRight':
            caja.style.left = (caja_left + paso) + 'px';
            break;
    }
}

document.addEventListener('keydown', mueve_caja);
