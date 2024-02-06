/*  Realizar en JavaScript lo siguiente

1. Abrir una ventana nueva (utilizar window.open() )

2. Darle unas dimensiones determinadas (más pequeña que la ventana anterior)

3. Ponerle un nombre a dicha ventana

4. Dicha ventana abrirá un determinado enlace URL
 */

function abrir_ventana() {

    var ventana = window.open('width=400, height=300');
    ventana.resizeTo(300, 200);
    ventana.document.write('<h1>Ventana a github</h1>');
    ventana.location.href = 'https://github.com/';
  }
  
  abrir_ventana();
  