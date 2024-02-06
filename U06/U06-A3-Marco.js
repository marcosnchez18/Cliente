/*Crear objeto Vehículo.

Crear constructor con las siguientes propiedades: marca, modelo, color y año fabricación
Introducir 5 vehículos diferente.
Crear un botón para que genere una tabla (con manejo del DOM) y la visualicemos en la pagina web */


function Vehiculo(marca, modelo, color, año_fab) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.año_fab = año_fab;
}

var vehiculos = [
    new Vehiculo("Toyota", "Corolla", "Azul", 2022),
    new Vehiculo("Honda", "Civic", "Rojo", 2021),
    new Vehiculo("Ford", "Focus", "Blanco", 2020),
    new Vehiculo("Chevrolet", "Malibu", "Negro", 2019),
    new Vehiculo("Volkswagen", "Jetta", "Gris", 2018)
];

function generar_tabla() {
    var tbody = document.getElementById("cuerpo_tabla_vehiculos");
    tbody.innerHTML = "";
    vehiculos.forEach(function(vehiculo) {
        var fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${vehiculo.marca}</td>
            <td>${vehiculo.modelo}</td>
            <td>${vehiculo.color}</td>
            <td>${vehiculo.año_fab}</td>
        `;
        tbody.appendChild(fila);
    });
}
