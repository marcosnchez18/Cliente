
function buscarCiudades() {
    var input = document.getElementById('ciudadInput').value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var sugerencias = JSON.parse(this.responseText);
            mostrarSugerencias(sugerencias);
        }
    };
    xhr.open("GET", "ciudades.php?q=" + input, true);
    xhr.send();
}

function mostrarSugerencias(sugerencias) {
    var lista = document.getElementById('sugerenciasLista');    
    lista.innerHTML = '';
    sugerencias.forEach(function (ciudad) {             
        var listItem = document.createElement('li');
        listItem.textContent = ciudad;
        lista.appendChild(listItem);
    });
}                           