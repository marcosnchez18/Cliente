// Crear objeto Vehículo
function Vehiculo(marca, modelo, color, añoFabricacion) {
    // Constructor
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.añoFabricacion = añoFabricacion;

    // Método para mostrar datos del vehículo
    this.mostrarDatos = function () {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}, Año de Fabricación: ${this.añoFabricacion}`);
    };

    // Método para acelerar
    this.acelerar = function (velocidad) {
        console.log(`El coche ha acelerado a ${velocidad} km/h.`);
    };

    // Método con función interna para arrancar
    this.arrancar = function () {
        function arrancarInterno() {
            console.log(`El coche de marca ${this.marca}, modelo ${this.modelo}, color ${this.color} ha arrancado.`);
        }
        arrancarInterno.call(this);
    };

    // Asignar nueva propiedad cilindrada
    this.cilindrada = null;

    // Asignar nuevo método frenar
    this.frenar = function () {
        console.log(`El coche de marca ${this.marca}, modelo ${this.modelo}, color ${this.color} ha frenado.`);
    };
}

// Instanciar dos objetos
const objeto1 = new Vehiculo('Toyota', 'Camry', 'Rojo', 2020);
const objeto2 = new Vehiculo('Honda', 'Civic', 'Azul', 2019);

// Mostrar por pantalla una propiedad con notación por puntos (Objeto 1 - marca)
console.log(objeto1.marca);

// Mostrar por pantalla una propiedad con notación por corchetes (Objeto 2 - color)
console.log(objeto2['color']);

// Llamar al método mostrarDatos
objeto1.mostrarDatos();

// Llamar al método acelerar
objeto2.acelerar(120);

// Llamar al método arrancar
objeto1.arrancar();

// Asignar valor a la propiedad cilindrada
objeto1.cilindrada = '2000cc';

// Llamar al método frenar
objeto2.frenar();

// Mostrar todas las propiedades de Objeto1 utilizando for in
console.log('Propiedades de Objeto1 usando for in:');
for (let key in objeto1) {
    console.log(`${key}: ${objeto1[key]}`);
}

// Mostrar todas las propiedades de Objeto1 utilizando Object.hasOwnPropertyNames()
console.log('Propiedades de Objeto1 usando Object.hasOwnPropertyNames():');
Object.getOwnPropertyNames(objeto1).forEach(function (key) {
    console.log(`${key}: ${objeto1[key]}`);
});

// Mostrar todas las propiedades de Objeto1 utilizando Object.keys()
console.log('Propiedades de Objeto1 usando Object.keys():');
Object.keys(objeto1).forEach(function (key) {
    console.log(`${key}: ${objeto1[key]}`);
}

// ¿Cómo se podrían modificar las propiedades a mostrar?
// Puedes modificar las propiedades directamente asignando nuevos valores, por ejemplo:
objeto1.marca = 'Nissan';
objeto1.color = 'Gris';
objeto1.añoFabricacion = 2022;

// Luego puedes volver a llamar al método mostrarDatos para ver los cambios.
objeto1.mostrarDatos();
