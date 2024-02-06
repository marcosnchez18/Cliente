function get_cookie(nom_cookie) {
  const nombre = nom_cookie + "=";
  const cookies_deco = decodeURIComponent(document.cookie);
  const cookies_array = cookies_deco.split('; ');
  let resultado;
  cookies_array.forEach(val => {
    if (val.indexOf(nombre) === 0) resultado = val.substring(nombre.length);
  })
  return resultado
}

var votar = document.getElementById("votar");
var radio = document.getElementsByName("sistema");

if (document.cookie == "") {
  document.cookie = "iOS=0";
  document.cookie = "Android=0";
  document.cookie = "Windows_Phone=0";
  document.cookie = "Otro=0";
} else if (document.cookie != "iOS=0; Android=0; Windows_Phone=0; Otro=0") {
  calc()

}
function calc() {
  let ios = parseInt(get_cookie("iOS"));
  let android = parseInt(get_cookie("Android"));
  let windows = parseInt(get_cookie("Windows_Phone"));
  let otro = parseInt(get_cookie("Otro"));
  let total = ios + android + windows + otro;
  document.getElementById("iOS").value = (ios / total * 100);
  document.getElementById("Android").value = (android / total * 100);
  document.getElementById("Windows_Phone").value = (windows / total * 100);
  document.getElementById("Otro").value = (otro / total * 100);
}
votar.onclick = () => {
  radio.forEach((rad, i) => {
    if (radio[i].checked) {
      document.cookie = `${radio[i].value}=${parseInt(get_cookie(radio[i].value)) + 1}`
      calc()
    }
  })
}
