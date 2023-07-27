// Agrega una clase "smooth-scroll" a todos los enlaces que deben tener el desplazamiento suave
var smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

// Agrega un evento de clic a cada enlace
smoothScrollLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace

    var targetId = link.getAttribute('href'); // Obtiene el ID del objetivo del enlace
    var targetElement = document.querySelector(targetId); // Obtiene el elemento del objetivo

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente hasta el objetivo
    }
  });
});
