function contador_veces() {
    let contador = localStorage.getItem("contador") || 0;
    contador = parseInt(contador) + 1;
    localStorage.setItem("contador", contador);

    document.getElementById("contador").textContent = contador;
}

window.onload = contador_veces;
