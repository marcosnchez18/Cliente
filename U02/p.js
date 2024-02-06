// Función para calcular el factorial
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  
  // Solicitar al usuario un número entero
  const numeroUsuario = parseInt(prompt("Introduce un número entero para calcular su factorial:"));
  
  // Verificar si el usuario proporcionó un número válido
  if (isNaN(numeroUsuario) || numeroUsuario < 0) {
    console.log("Por favor, introduce un número entero no negativo válido.");
  } else {
    // Calcular y mostrar el factorial
    const factorial = calcularFactorial(numeroUsuario);
    console.log(`El factorial de ${numeroUsuario} es ${factorial}`);
  }
  