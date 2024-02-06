/*7. Realiza una aplicación que tenga una imagen, y que muestre un mensaje indicando si la imagen
no se ha cargado correctamente, ya sea por un error o porque el usuario lo haya detenido. */

var foto  = document.getElementById('foto');


foto.addEventListener('load', comprueba_carga);
foto.addEventListener('error', comprueba_error);

function comprueba_carga() {
    alert('La imagen se ha cargado correctamente.');
}


function comprueba_error() {
    alert('La imagen no se ha cargado correctamente. Puede haber un error o el usuario la detuvo.');
}
