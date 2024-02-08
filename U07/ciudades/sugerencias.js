document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('ciudad_input').addEventListener('input', function () {
        var input_text = this.value;
        if (input_text.length > 0) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'ciudadessugerencias.php?input=' + input_text, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    mostrar_sugerencias(response);
                }
            };
            xhr.send();
        } else {
            document.getElementById('sugerencias').innerHTML = '';
        }
    });

    function mostrar_sugerencias(sugerencias) {
        var sugerencias_l = document.getElementById('sugerencias');
        sugerencias_l.innerHTML = '';
        sugerencias.forEach(function (ciudad) {
            var li = document.createElement('li');
            li.textContent = ciudad;
            sugerencias_l.appendChild(li);
        });
    }
});

/* php -S  0.0.0.0:8000 -t . para poder abrirlo */