/*El Document Object Model (DOM) es una representación en forma de árbol de los elementos de una página HTML. 
Se puede manipular con JavaScript para cambiar dinámicamente la estructura y el contenido de una página. 
Realizar un código que muestre/ represente en el propio HTML  el DOM de la página HTML*/


function mostrar_dom() {
    const dom_cont = document.getElementById('dom_cont');
    dom_cont.textContent = representacion_dom(document.documentElement);
}

function representacion_dom(elemento) {
    let resultado = `${etiqueta(elemento)}\n`;

    for (let i = 0; i < elemento.children.length; i++) {
        resultado += representacion_dom(elemento.children[i]);
    }

    return resultado;
}

function etiqueta(elemento) {
    const nombre = elemento.nodeName.toLowerCase();
    const atributos = obtener_atributos(elemento);

    return `<${nombre}${atributos}>`;
}

function obtener_atributos(elemento) {
    const atributos = elemento.attributes;
    let resultado = '';

    for (let i = 0; i < atributos.length; i++) {
        resultado += ` ${atributos[i].name}="${atributos[i].value}"`;
    }

    return resultado;
}

window.onload = mostrar_dom;
