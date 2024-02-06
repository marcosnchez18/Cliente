
function validar_dni(){
    var dni = document.getElementById("dni");
    var valor_dni = dni.value;
    var exp_dni = /\d{2}\.\d{3}\.\d{3}-[a-zA-Z]/;
    if (!exp_dni.test(valor_dni)){
        dni.setCustomValidity('Formato de nombre incorrecto');
        dni.reportValidity();
        dni.value = "";
        return false;
    }
}
function validar_nombre() {
    var nombre = document.getElementById("nombre");
    var valor_nombre = nombre.value;
    var exp_nombre = /^[A-Za-z]+ [A-Za-z]+(?: [A-Za-z]+(?: [A-Za-z]+)?)?$/;

    if (!exp_nombre.test(valor_nombre)) {
        nombre.setCustomValidity('Formato de nombre incorrecto');
        nombre.reportValidity();
        nombre.value = "";
        return false;
    }
}
function validar_fecha(){
    var fecha = document.getElementById("fecha");
    var valor_fecha = fecha.value;
    var exp_fecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!exp_fecha.test(valor_fecha)){
        fecha.setCustomValidity('Fecha incorrecta');
        fecha.reportValidity();
        fecha.value="";
        return false;
    }
}
function validar_email(){
    var email = document.getElementById("email");
    var valor_email = email.value
    var exp_email = /^.+@.+\..+$/;
    if (!exp_email.test(valor_email)){
        email.setCustomValidity('Formato de email incorrecto');
        email.reportValidity();
        email.value=""
        return false;
    }
}
function validar_web(){
    var web = document.getElementById("web").value;
    var valor_web = web.value;
    var exp_web =/^http:\/\/www\..+\..+$/;
    if (!exp_web.test(valor_web)){
        web.setCustomValidity('Formato de URL incorrecto');
        web.reportValidity();
        web.value=""
        return false;
    }
}
function validar_password(){
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    var valor_pass1 = pass1.value;
    var valor_pass2 = pass2.value;

    if (valor_pass1.length > 10) {
        pass1.value = "El password contiene mas de 10 caracteres";
    }

    if (valor_pass2.length > 10) {
        pass2.value = "El password contiene mas de 10 caracteres";
    }
}

var valores = document.forms['formulario'];

function guardar() {
    document.cookie = "usuario=jose;";

    for (var i = 0; i < valores.length; i++) {
        if (valores[i].value !== "") {
            document.cookie += `${valores[i].id}=${valores[i].value}; `;
        }
    }
}

function ver() {
    var valor_cookie = document.cookie.split('; ').join("<br>");
    document.getElementById("mostrar_datos").innerHTML = valor_cookie;
}
