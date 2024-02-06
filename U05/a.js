let formulario = document.getElementById('formulario');
let dni = document.getElementById('dni');
let nombre = document.getElementById('nombre');
let fecha = document.getElementById('fecha');
let email = document.getElementById('email');
let web = document.getElementById('web');
let contra = document.getElementById('contra');
let confirm = document.getElementById('confirm');
let submit = document.getElementById('submit');
const letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K'];

dni.addEventListener('input', validarDni);
nombre.addEventListener('input', validarNombre);
fecha.addEventListener('input', validarFecha);
email.addEventListener('input', validarEmail);
web.addEventListener('input', validarWeb);
contra.addEventListener('input', validarContra);
confirm.addEventListener('input', validarConfirm);
formulario.addEventListener('submit', validarTodos);

// DNI
function validarDni() {
    if ( dni.validity.valueMissing ) {
        dni.setCustomValidity('Introduce un valor de DNI.');
    } else if (dni.validity.patternMismatch){
        dni.setCustomValidity('DNI no válido.');
    } else if ( !letraDni(dni.value) ) {
        dni.setCustomValidity('Letra errónea.');
    } else {
        dni.setCustomValidity('');
    }
}

function letraDni(dni){
    let d = dni.split('-');
    if (d.length >= 2) {
        let numeroDni = d[0].replaceAll('.', '');
        let resto = numeroDni % 23;
        return d[1].toUpperCase() == letra[resto];
    } else {
        return false;
    }
}

// Nombre
function validarNombre() {
    if ( nombre.validity.valueMissing ) {
        nombre.setCustomValidity('Introduce un nombre.');
    } else if ( nombre.validity.patternMismatch ){
        nombre.setCustomValidity('Nombre no válido.');
    } else {
        nombre.setCustomValidity('');
    }
}

// Other validation functions follow a similar structure...

// Validar todos
function validarTodos(e) {
    if (!formulario.checkValidity()) {
        e.preventDefault();
    }
}

// Auxiliares
function limpiarCampo(campo) {
    campo.value = '';
    campo.setCustomValidity('');
}

// Reset custom validity on focus
formulario.addEventListener('focusin', function (e) {
    if (e.target.tagName === 'INPUT') {
        e.target.setCustomValidity('');
        invalido(e.target);
    }
});

// Reset custom validity on change
formulario.addEventListener('change', function (e) {
    if (e.target.tagName === 'INPUT') {
        e.target.setCustomValidity('');
        invalido(e.target);
    }
});
