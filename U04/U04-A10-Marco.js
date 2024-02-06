/* Utilice el código empleado para la generación del objeto Vehículo, y modifíquelo para que los valores de cada una de sus propiedades se impriman en una tabla HTML.

 Utilice la generación de código HTML desde código JavaScript. Cada instancia del objeto debe ocupar una línea y el valor de cada propiedad debe ocupar una celda de dicha línea. El resultado debe ser similar a:  */

function Vehiculo(marca_in, modelo_in, color_in, anyo_in) {
    this.marca = marca_in;
    this.modelo = modelo_in;
    this.color = color_in;
    this.anyo = anyo_in;
}

var coche1 = new Vehiculo("Seat", "Ibiza 1.2 reference TDI", "Blanco LB9A", "2014");
var coche2 = new Vehiculo("Kia", "Stonic", "Blanco", "2020");

function crea_tabla(obj) {
    var table = document.getElementById('v_tabla');
    var row = table.insertRow(); 
    for (let prop in obj) {
        var cell = row.insertCell();
        cell.innerHTML = obj[prop];
    }
}

crea_tabla(coche1);
crea_tabla(coche2);
