function google () {
    window.open("https://www.google.es", "Google");
}

function cambiar () {
    var asignatura = document.getElementById("asignatura").value;
    var nombre = "";
    if (asignatura == "Programacion") {
        nombre = "mailto:ricado@donana.es"
    } else if (asignatura == "Sistemas") {
        nombre = "mailto:alvaro@donana.es"
    } else if (asignatura == "Fol") {
        nombre = "mailto:juana@donana.es"
    }
    document.forms["formulario"].action = nombre;
}

function cambiar_preferente() {
    var checkboxes = document.getElementsByName("Disponibilidad");
    var dia = "";

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            dia = checkboxes[i].value;
        }
    }

    var dia_preferente = document.getElementsByName("preferente")[0];
    dia_preferente.value = dia;
}

function cambiar_color() {
    var colores = document.getElementsByName("color");
    var colorcito = "";

    for (var i = 0; i < colores.length; i++) {
        if (colores[i].checked) {
            colorcito = colores[i].value;
        }
    }


    document.body.style.backgroundColor = colorcito;
}