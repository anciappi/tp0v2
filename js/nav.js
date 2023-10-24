const navToggle = document.querySelector(".navToggle");
const navMenu = document.querySelector(".navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("navMenuVisible");

  if (navMenu.classList.contains("navMenuVisible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});