var palabra = prompt('Introduzca una de estas cuatro palabras para traducirlas al inglés: casa, mesa, perro, gato').toLowerCase();

function traduce(palabra) {
    var palabras = ["casa", "mesa", "perro", "gato"];
    if (palabras.includes(palabra)) {
        var texto = (palabra === "casa") ? "House" :
            (palabra === "mesa") ? "Table" :
                (palabra === "gato") ? "Cat" :
                    (palabra === "perro") ? "Dog" :
                        "error"


        document.getElementById("div1").innerHTML = texto;
    }
    else { 
        document.getElementById("div1").innerHTML = ("palabra no reconocida");
    }

}

traduce(palabra)