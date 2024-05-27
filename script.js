function PlayAudio(){
    document.getElementById("musica1").play();
}

setTimeout(cambiaMensaje, 3000)

function cambiaMensaje(){
document.getElementById("loading-message").innerText = "¡ Recibido !";
}

setTimeout(function () {
    alert("¡ Felices 8 meses, mi amorcito ! 🥰❤️ ")
}, 3500)
