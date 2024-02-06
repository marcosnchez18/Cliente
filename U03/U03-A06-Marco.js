/*    Realizar un código que le pida al usuario que indique la zona horaria de la que desea conocer la hora y 
    muestre la hora local del lugar seleccionado. Simplificando, tendremos en cuenta las siguientes zonas horarias:

        UTC -12 : Línea internacional de fecha del oeste

        UTC -11 : Isla Midway, Samoa

        UTC -10 : Hawai

        UTC -9 : Alaska

        UTC -8 : Hora del pacífico (USA y Canadá)

        UTC -7 : Hora de las montañas rocosas (USA y Canadá)

        UTC -6 : América central

        UTC -5 : Hora central (USA y Canadá)

        UTC -4 : Hora del Atlántico (Canadá)

        UTC -3 : Buenos Aires, Asunción, Brasilia, Montevideo

        UTC -2 : Atlántico central

        UTC -1 : Azores

        UTC 0 : Hora del meridiano de Greenwich, Londres, Dublín

        UTC +1 : París, Madrid, Barcelona, Roma

        UTC +2 : El Cairo

        UTC +3 : Nairobi

        UTC +4 : Bakú

        UTC +5 : Ekaterimburgo

        UTC +6 : Astana

        UTC +7 : Bangkok

        UTC +8 : Ulán Bator

        UTC +9 : Tokio

        UTC +10 : Sidney

        UTC +11 : Islas Salomón

        UTC +12 : Wellington*/


var mas_menos_x = parseInt(prompt("Introduzca su zona horaria:"));

function zona_horaria(mas_menos_x) {
    var hora_actual = new Date();
    var hora_nueva = new Date(hora_actual.getTime() + mas_menos_x * 60 * 60 * 1000);
    alert("Zona horaria: " + mas_menos_x + " hora:  " + hora_nueva.toLocaleString());
}
zona_horaria(mas_menos_x);
