// Agregar el método al prototipo de Array
Array.prototype.crear_nuevo_vector = function() {
    this.sort(function(a, b) {
        return a - b;
    });
    var menor = this[0];
    var mayor = this[this.length - 1];
    
    return this.filter(function(valor) {
        return valor !== menor && valor !== mayor;
    });
}

function crear_vector() {
    var vector = [];
    for (var i = 0; i < 10; i++) {
        var num_aleatorio = Math.floor(Math.random() * 1001);
        vector.push(num_aleatorio);
    }

    var nuevo_vector = vector.crear_nuevo_vector();

    alert("El vector original era [" + vector + "] Y el nuevo será [" + nuevo_vector + "]");
}

crear_vector();
