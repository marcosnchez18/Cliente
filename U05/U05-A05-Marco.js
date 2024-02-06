/*5. Coloque en la aplicación una imagen, y que se cambie por otra imagen, y ésta se mantenga
mientras el usuario está pulsando algún botón del ratón, cuando suelte debe volver la primera
imagen. */

var img = document.getElementById("img");

img.addEventListener('mousedown', () => {
    img.setAttribute("src", "f2.jpeg");
}
);

img.addEventListener('mouseup', () => {
    img.setAttribute("src", "f1.jpg");
}
);

