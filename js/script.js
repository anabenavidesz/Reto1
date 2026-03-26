let nombre = document.getElementById('nombre');
let saludar = document.getElementById('btnSaludar');
let mensaje = document.getElementById('mensaje');

saludar.addEventListener('click', function() {
    let nombre2 = nombre.value; 

    if (nombre2 === "") {
        mensaje.innerText = "Por favor, escribe tu nombre";
    } else {
        mensaje.innerText = "¡Hola, " + nombre2 + "! Qué gusto verte.";
       alert("¡Hola! Este es un mensaje emergente.");
    }

});
