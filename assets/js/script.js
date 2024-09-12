// Ocultar barra de navegación, poniendo en valor `false` el `check`
document.addEventListener('scroll', function () {
    const hamburguer = document.querySelector('#hamburguer');

    if (window.scrollY > 0) {
        hamburguer.checked = false;  // Uncheck the checkbox when scrolling down
    }
});



// Enviar correo y validarlo
