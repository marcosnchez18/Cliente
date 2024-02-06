/*  Uno de los asistentes a una fiesta está interpretando en secreto y sin saberlo a un asesino y 
los demás asistentes deben determinar quién de ello es el asesino. En este misterio de asesinato hay:

Cuatro salas: salón de baile - la galeria - la sala de billar - el comedor
Cuatro armas: veneno - trofeo - palo de billar - un cuchillo
Cuatro sospechosos: Sr.Parker - Sra Van Cleve - Sra Sparr - Sr Kalehoff
También sabemos que cada arma corresponde a una habitación en particular:

el veneno al salón de baile
el trofeo a la galeria
el palo de billar a la sala de billar
el cuchillo al comedor
Y sabemos que cada sospechoso estaba ubicado en una habitación especifica en el momento del asesinato

el Sr parker en el comedor
Sr Van Cleve en la galeria
Sra Sparr en la sala de billar
Sr Kalehoff en el salón de baile
La información se introduce a través de dos listas desplegables donde se indique la habitación donde se ha cometido
 el asesinato y otra para indicar el sospechoso. Tras pulsar un botón se debe resolver el misterio

Para ayudar a resolver este misterio, escribe una combinación de declaraciones condicionales que:

establece el arma según la habitación
establece el valor de "resuelto" en verdadero si el valor de la habitación coincide con la habitación del sospechos
Luego usa esta plantilla para imprimir el mensaje:

 _______________lo hizo en el ______________ con el ____________ !

*/

function juego() {
    var salas = ["Comedor", "Galeria", "Sala de Billar", "Salon de Baile"];
    var sospechos = ["Sr parker", "Sr Van Cleve", "Sra Sparr", "Sr Kalehoff"];
    var armas = ["cuchillo", "trofeo", "palo de billar", "veneno"];

    var opcion_sala = document.getElementById("habitacion").value;
    var opcion_sospechoso = document.getElementById("sospechoso").value;

    var resuelto = false;
    var mensaje = "";

    for (var i = 0; i < salas.length; i++) {
        if (opcion_sala === salas[i] && opcion_sospechoso === sospechos[i]) {
            resuelto = true;
            mensaje = sospechos[i] + " lo hizo en el " + salas[i] + " con el " + armas[i];
            break;
        }
    }

    if (resuelto) {
        alert("¡Misterio resuelto! " + mensaje);
    } else {
        alert("No te rindas, sigue averiguando!");
    }
}

document.getElementById("confirma").addEventListener("click", juego);

