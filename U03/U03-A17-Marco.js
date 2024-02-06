/* El usuario deberá introducir un texto con varias lineas  (crea un textarea)

Realizar un scrip que saque la primera palabra de cada frase por ejmplo:
Hola paco.que pasa
tio me voy a ir

y devuelva : Hola, que y tio

  NOTA: utilizar  para crear el espacio de escribir texto  <textarea id="texto" style="width: 200px; height: 200px;"></textarea>

   utilizar el método match() */

   function extraer_primera() {
    var texto = document.getElementById("texto").value;
    const ex_regular = /[^.!?]+[.!?\n]+/g;
    var frases = texto.match(ex_regular);

    var p = frases.map(function(frase) {
        var primera = frase.trim().split(' ')[0];
        return primera;
    });

    var palabras = p.join(",");
    document.getElementById("palabras").textContent = palabras;
}

extraer_primera()

