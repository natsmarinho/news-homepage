const btnAbreMenu = document.querySelector("#abreMenu").addEventListener("click", openMenu);
const btnFechaMenu = document.querySelector("#close-menu").addEventListener("click", closeMenu);

function openMenu() {
    menu.style.display = "flex";
    abreMenu.style.display = "none";
}

function closeMenu() {
    menu.style.display = "none";
    abreMenu.style.display = "flex";
}
