$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 600
    });

    // Muestra la fecha y hora actual
    function mostrarFechaHora() {
        var fecha = new Date();
        var fechaTexto = fecha.toLocaleDateString() + " " + fecha.toLocaleTimeString();
        document.getElementById("fechaHora").innerHTML = fechaTexto;
    }
    mostrarFechaHora();
    setInterval(mostrarFechaHora, 1000); // Actualiza cada segundo

    // Botón para ir arriba
    $('.to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const formAlert = document.querySelector(".form-alert");

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Previene el envío del formulario de la manera tradicional

        // Resetea el estado de la alerta
        formAlert.classList.remove("alert-success", "alert-error");
        formAlert.style.display = 'none'; // Oculta la alerta inicialmente

        // Validación del nombre
        if (nameInput.value.trim().length < 2) {
            formAlert.textContent = "El nombre debe tener al menos 2 letras.";
            formAlert.classList.add("alert-error");
            formAlert.style.display = 'block';
            return; // Detiene la función aquí si hay error
        }

        // Validación del email
        if (!emailInput.value.includes('@') || emailInput.value.trim().length < 3) {
            formAlert.textContent = "Por favor, introduce un correo electrónico válido.";
            formAlert.classList.add("alert-error");
            formAlert.style.display = 'block';
            return; // Detiene la función aquí si hay error
        }

        // Validación del mensaje
        if (messageInput.value.trim().length < 10) {
            formAlert.textContent = "El mensaje debe tener al menos 10 letras.";
            formAlert.classList.add("alert-error");
            formAlert.style.display = 'block';
            return; // Detiene la función aquí si hay error
        }

        // Si pasa todas las validaciones
        formAlert.textContent = "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.";
        formAlert.classList.add("alert-success");
        formAlert.style.display = 'block';


        // Limpia el formulario después de enviar 
        contactForm.reset();
    });
});
