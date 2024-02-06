/*  Haz que el ordenador te salude educadamente dándote los buenos días, 
buenas tardes o buenas noches dependiendo de la hora que sea. */

function saluda() {
    var hoy = new Date();
    var mañana = [6, 7, 8, 9, 10, 11, 12];
    var tarde = [13, 14, 15, 16, 17, 18, 19];
    var noche = [20, 21, 22, 23, 0, 1, 2, 3, 4, 5];
    var h = hoy.getHours();
    
    if (mañana.includes(h)) {
        alert("Buenos días");
    }
    else if (tarde.includes(h)) {
        alert("Buenas tardes");
    }
    else if (noche.includes(h)) {
        alert("Buenas noches");
    }
    else {
        alert("Error");
    }
}

saluda();
