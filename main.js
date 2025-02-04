import footer from "./src/components/footer.js";
import header from "./src/components/header.js";
import menu from "./src/components/menu.js";

document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();
const menuBar = (document.getElementById("menu-header").innerHTML = menu());

function onCursor() {
  const menuTrigger = document.getElementById("menu-trigger");
  menuTrigger.addEventListener("mouseover", () => {
    menuBar.innerHTML = menu();
  });
}

onCursor();

function unfocusHeader() {
  menuBar.addEventListener("mouseleave", () => {
    menuBar.innerHTML = document.createElement("div");
  });
  window.addEventListener("click", () => {
    menuBar.style.display = "none";
  });
}

unfocusHeader();
