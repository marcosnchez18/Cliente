/*  Calcula el área de un círculo. El usuario debe indicar el valor del radio y debes mostrar por pantalla el siguiente mensaje bien formateado
 “El área de un círculo es XX.XX cm2”. Calcula también el área del triángulo.  */


function calcula() {
    var radio_circulo = parseFloat(prompt("Introduzca el radio en cm"));
    var area_circulo = Math.PI * Math.pow(radio_circulo, 2);
    var b_triangulo = parseFloat(prompt("Introduce la base en cm:"));
    var h_triangulo = parseFloat(prompt("Introduce la altura en cm"));
    var area_triangulo = (b_triangulo * h_triangulo) / 2;
    alert("Área del circulo: " + area_circulo.toFixed(2) + " cm²");
    alert("Área del triángulo " + area_triangulo.toFixed(2) + " cm²");
}
calcula();
