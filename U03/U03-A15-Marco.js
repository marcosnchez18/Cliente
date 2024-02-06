/* Valida una matrícula moderna

(Formato:  0000 AAA) (incluido el espacio)

Nota: utilizar expresiones regulares */



var matricula = prompt("Introduzca la matricula:");

function comprueba(matricula) {
    var formato = /^[0-9]{4}\s[A-Z]{3}$/;

    if (formato.test(matricula)) {
        alert("Formato correcto");
    } else {
        alert("Formato incorrecto");
    }
}

comprueba(matricula)