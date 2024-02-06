/* Realiza un script que pida la contraseña de acceso a una página web y 
compruebe si es la misma que la almacenada en una variable. Si es correcta, 
le dará la bienvenida, sino se la volverá a pedir.*/

function calculadora() {
    do {
        var clave = "Vivaelbetis";
        var contraseña = prompt("Introduzca su contraseña:");
        if (clave === contraseña) {
            alert("Contraseña correcta")
            break;
        }
    }
     while (true);

}
calculadora();
