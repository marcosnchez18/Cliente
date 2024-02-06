
var resultado = "";

function barra() {
  document.getElementById("num").value = resultado || "0";
}

function agregar(valor) {
  resultado += valor;
  barra();
}

function operador(op) {
  resultado += op;
  barra();
}

function calcular() {
  try {
    resultado = eval(resultado);
    barra();
  } catch (error) {
    resultado = "Error";
    barra();
  }
}

function trigonometria(op) {
  if (resultado !== "") {
    resultado = Math[op](parseFloat(resultado));
    barra();
  }
}

function raiz_cuadrada() {
  if (resultado !== "") {
    resultado = Math.sqrt(parseFloat(resultado));
    barra();
  }
}

function potencia(exponente) {
  if (resultado !== "") {
    resultado = Math.pow(parseFloat(resultado), exponente);
    barra();
  }
}


function borrar_todo() {
  resultado = "";
  barra();
}