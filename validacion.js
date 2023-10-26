// Obtener el formulario y escuchar el evento de envío
const formulario = document.getElementById("formularioContacto");
const mensajeError = document.getElementById("mensajeError");

formulario.addEventListener("submit", function (event) {
    // Validar el nombre y apellido
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    
    if (nombre.trim() === "" || apellido.trim() === "" || email.trim() === "") {
        mensajeError.style.display = "block";
        event.preventDefault(); // Evita que el formulario se envíe
    } else {
        mensajeError.style.display = "none";
    }
    
    // Validar que se haya seleccionado un horario
    const horario = document.querySelector('input[name="horario"]:checked');
    
    if (!horario) {
        mensajeError.style.display = "block";
        event.preventDefault();
    } else {
        mensajeError.style.display = "none";
    }
});
