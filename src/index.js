import "./styles/main.scss";
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      console.log("Menu toggled"); // For debugging
    });
  } else {
    console.error("Menu elements not found"); // For debugging
  }
});
