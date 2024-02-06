/*  Crear objeto Vehículo.

Crear constructor.

Crear propiedades: marca, modelo, color y año fabricación------si

Instanciar dos objetos.--------Si

Mostrar por pantalla una propiedad con notación por puntos. Objeto 1 - marca.

Mostrar por pantalla una propiedad con notación por corchetes. Objeto 2 - color.

Crear el método mostrarDatos.

Crear un método que tenga argumentos acelerar(velocidad). Mostrará por pantalla que el coche ha acelerado a la velocidad pasada.

Crear un método con función interna arrancar. Mostrará por pantalla que el coche de marca _, modelo_, de color_ ha arrancado.

Asignar unanueva propiedad cilindrada

Asignar un nuevo método frenar. Mostrará por pantalla que el coche de marca_, modelo_, color_ ha parado).

Muestra todas las propiedades de Objeto1 utilizando: for in , Object.hasOwnPropertyNames(), Object.keys(). Observa y analiza las diferencias. 

¿Cómo se podrían modificar las propiedades a mostrar? */


function Vehiculo(marca_in, modelo_in, color_in, anyo_in) {
    this.marca = marca_in;
    this.modelo = modelo_in;
    this.color = color_in;
    this.anyo = anyo_in;
}

var coche1 = new Vehiculo("Seat", "Ibiza 1.2 reference TDI", "Blanco LB9A", "2014");
var coche2 = new Vehiculo("Kia", "Stonic", "Blanco", "2020");



return(coche1.marca);
return(coche2['color']);

Vehiculo.prototype.mostrarDatos = function () {
    return(`Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}, Año: ${this.anyo}`);
};
Vehiculo.prototype.acelerar = function (velocidad) {
    return(`velocidad: ${velocidad} km/h.`);
};
Vehiculo.prototype.arrancar = function () {
    function arranque_ini() {
        return(`Coche: ${this.marca}, modelo ${this.modelo}, color ${this.color} estado: arrancado.`);
    }

    arranque_ini.call(this);
};
coche1.cilindrada = "1200cc";
Vehiculo.prototype.frenar = function () {
    return(`Coche ${this.marca}, modelo ${this.modelo}, color ${this.color} estado: parado.`);
};
for (let prop in coche1) {
    return(`coche1.${prop} = ${coche1[prop]}`);
}
return(Object.getOwnPropertyNames(coche1));
return(Object.keys(coche1));
coche1.marca = "marca_nueva";
coche1.color = "color_nuevo";
