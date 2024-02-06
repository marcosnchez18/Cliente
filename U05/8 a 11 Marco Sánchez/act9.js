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
