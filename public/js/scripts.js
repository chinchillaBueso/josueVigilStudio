var prevScrollpos = window.pageYOffset;

function ocultarMostrarElemento() {
  var currentScrollPos = window.pageYOffset;
  var elemento = document.getElementById("menuocultar");

  if (prevScrollpos > currentScrollPos) {
    // Hacer scroll hacia arriba, mostrar el elemento
    elemento.style.opacity='1';

  } else {
    // Hacer scroll hacia abajo, ocultar el elemento
    elemento.style.opacity = "0";
  }

  prevScrollpos = currentScrollPos;

}

// Agregar el evento "scroll" al documento y llamar a la función "ocultarMostrarElemento"
window.addEventListener("scroll", ocultarMostrarElemento);
