/* 9. Modifica el formulario anterior, según la materia seleccionada, debe enviarle el cuestionario a un
profesor distinto. */

function cambia_action() {
    var asignatura = document.getElementById('asignatura');

    var email_profesor = "";

    switch (asignatura.value) {
        case 'mat':
            email_profesor = 'profesor_matematicas@gmail.com';
            break;
        case 'lengua':
            email_profesor = 'profesor_lengua@gmail.com';
            break;
        case 'ingles':
            email_profesor = 'profesor_ingles@gmail.com';
            break;

        default:
            email_profesor = 'otro_profesor@gmail.com';
    }


    document.getElementById('cuestionario').action = 'mailto:' + email_profesor;
}