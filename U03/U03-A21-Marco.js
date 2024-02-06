/*  1. Utilizando el objeto Navigator. Realiza un código que indique todas las características o propiedades del Navegador.

2. Realiza un código que indique la información de pantalla utilizada por el usuario

3. ¿Qué dimensiones tienen las barras de herramientas de tu navegador?

4. Realiza un script que realice lo siguiente: (puedes utilizar la propiedad bgColor de Document) */

function info() {
    document.getElementById("div0").innerHTML = ("Características del navegador:");

    document.getElementById("div1").innerHTML = ("Nombre del navegador: " + navigator.appName);
    document.getElementById("div2").innerHTML = ("Versión del navegador: " + navigator.appVersion);
    document.getElementById("div3").innerHTML = ("Plataforma del navegador: " + navigator.platform);
    document.getElementById("div4").innerHTML = ("Idioma del navegador: " + navigator.language);
    document.getElementById("div5").innerHTML = ("Agente de usuario: " + navigator.userAgent);
    document.getElementById("div6").innerHTML = ("Habilitado para cookies: " + navigator.cookieEnabled);
    document.getElementById("div7").innerHTML = ("Java habilitado: " + navigator.javaEnabled());
    document.getElementById("div8").innerHTML = ("<br><br>");

    document.getElementById("div9").innerHTML = ("Características de la pantalla:");

    document.getElementById("div10").innerHTML = ("Ancho de la pantalla: " + screen.width + " píxeles")
    document.getElementById("div11").innerHTML = ("Alto de la pantalla: " + screen.height + " píxeles")
    document.getElementById("div12").innerHTML = ("Profundidad de color: " + screen.colorDepth + " bits por píxel")
    document.getElementById("div13").innerHTML = ("Resolución física horizontal: " + screen.availWidth + " píxeles")
    document.getElementById("div14").innerHTML = ("Resolución física vertical: " + screen.availHeight + " píxeles")
    document.getElementById("div15").innerHTML = ("<br><br>");

    document.getElementById("div16").innerHTML = ("Dimensiones barra de herramientas:");
    document.getElementById("div17").innerHTML = ("<br> -ancho:" + window.innerWidth + "<br><br>" + "-alto:" + window.innerHeight)
}

function cambiar_profundidad() {
    var color = document.getElementById("color");
    var valor_color = color.value;

    if (valor_color === "yellow") {
        document.body.style.backgroundColor = "yellow";
    } else if (valor_color === "red") {
        document.body.style.backgroundColor = "red";
    } else if (valor_color === "green") {
        document.body.style.backgroundColor = "green";
    } else if (valor_color === "blue") {
        document.body.style.backgroundColor = "blue";
    }
}

cambiar_profundidad()
info()