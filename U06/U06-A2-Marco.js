/* Crear un código en HTLM en el que tengamos un boton para añadir nodos y otro para eliminar nodos.

Los nodos creados y eliminados serán elementos nuevos (<div>) del documento HTML, donde se deberá escribir un texto solicitado al cliente (por ejemplo por prompt).

El código de crear, asi como de eliminar nodos deberá estar en JavaScript. Utilizando el manejo del DOM.  */


function añadir_nodo() {
    var texto = prompt("Ingrese el texto para el nuevo nodo:");
    if (texto !== null && texto.trim() !== "") {
        var container = document.getElementById("container");
        var nuevo_nodo = document.createElement("div");
        nuevo_nodo.className = "node";
        nuevo_nodo.textContent = texto;
        container.appendChild(nuevo_nodo);
    }
}

function borrar_nodo() {
    var container = document.getElementById("container");
    if (container.childNodes.length > 0) {
        container.removeChild(container.lastChild);
    } else {
        alert("No hay nodos para eliminar.");
    }
}