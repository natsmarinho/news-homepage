const openMenu = document.querySelector(".open-menu").addEventListener('click', abreMenu);
const closeMenu = document.querySelector(".close-menu");
const menuItems = document.querySelector(".menu-items")

function abreMenu() {
    openMenu.style.display = "none";
    menuItems.style.display = "block";
}