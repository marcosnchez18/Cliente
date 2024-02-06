/*4. Realizar un script que, al pulsar un botón del ratón, el color de fondo del cuadro de mensaje
debe ser amarillo (#FFFF00) y cuando se pulsa una tecla, el color de fondo debe ser azul
(#CCE6FF). Al volver a mover el ratón, el color de fondo vuelve a ser blanco. */


  var cuadro = document.getElementById("cuadro");

  
  cuadro.onmousedown = function() {
    cuadro.style.backgroundColor = "yellow";
  };


  document.onkeydown = function() {
    cuadro.style.backgroundColor = "blue";
  };

  cuadro.onmousemove = function() {
    cuadro.style.backgroundColor = "white";
  };
