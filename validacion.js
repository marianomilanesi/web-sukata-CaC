// Obtener el formulario y escuchar el evento de envío
const formulario = document.getElementById("formularioContacto");
const mensajeError = document.getElementById("mensajeError");
const emailInput = document.getElementById("email");

formulario.addEventListener("submit", function (event) {
    // Validar el nombre y apellido
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = emailInput.value;

    // Expresión regular para validar el formato de correo electrónico
    const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (nombre.trim() === "" || apellido.trim() === "" || email.trim() === "" || !emailRegExp.test(email)) {
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
