var votar = document.getElementById("votar");
var radio = document.getElementsByName("equipo");
votar.onclick = ()=>{
    radio.forEach((rad, i) => {
      if (radio[i].checked){
        fetch('encuesta_voto.php?input=' + radio[i].value)
                .then(function(response) {
                    return response.text();
                })
                .then(function(data) {
                    mostrar_votos(data);
                })
        }
    })
}

function mostrar_votos(votos){
    var array = votos.split("||");
    let total   = parseInt(array[0]) + parseInt(array[1]) + parseInt(array[2]) + parseInt(array[3]);
    document.getElementById("1").value = (parseInt(array[0]) / total * 100);
    document.getElementById("2").value = (parseInt(array[1]) / total * 100);
    document.getElementById("3").value = (parseInt(array[2]) / total * 100);
    document.getElementById("4").value = (parseInt(array[3]) / total * 100);
}

  
