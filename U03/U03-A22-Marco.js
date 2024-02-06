function agrandar() {
    var text = document.getElementById("text");
    text.style.fontSize = "100px";
}

function reducir() {
    var text = document.getElementById("text");
    text.style.fontSize = "10px";
}

function original() {
    var text = document.getElementById("text");
    text.style.fontSize = "32px";
}

agrandar()
reducir()
original()