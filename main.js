import footer from "./src/components/footer.js";
import header from "./src/components/header.js";
import menu from "./src/components/menu.js";

document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();

const menuBar = document.getElementById("seatac-menu-header");

menuBar.innerHTML = menu();
const menuBarContainer = document.getElementById(
  "seatac-menu-header-container"
);

function onCursor() {
  const menuTrigger = document.getElementById("menu-trigger");
  menuTrigger.addEventListener("mouseover", () => {
    menuBar.classList.remove("hidden");
    menuBar.classList.add("flex");
    menuBarContainer.style.height = "120px";
  });
}

onCursor();

function unfocusHeader() {
  menuBar.addEventListener("mouseleave", () => {
    menuBarContainer.style.height = "0px";
    menuBar.classList.remove("flex");
    menuBar.classList.add("hidden");
  });
  window.addEventListener("click", () => {
    menuBarContainer.style.height = "0px";
    menuBar.classList.remove("flex");
    menuBar.classList.add("hidden");
  });
}

unfocusHeader();
