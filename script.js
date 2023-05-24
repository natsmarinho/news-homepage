const openMenu = document.querySelector(".open-menu").addEventListener('click', abreMenu);
const closeMenu = document.querySelector(".close-menu").addEventListener('click', fechaMenu);
const btnAbrir = document.querySelector(".open-menu");
const btnFecha = document.querySelector(".close-menu");
const listaLink = document.querySelector(".menu-items");

function abreMenu() {
    document.body.classList.add("menu-extendido");
    btnAbrir.style.display = "none";
    btnFecha.style.display = "block";
    listaLink.style.display = "flex"
}

function fechaMenu() {
    document.body.classList.remove("menu-extendido");
    btnAbrir.style.display = "block";
    btnFecha.style.display = "none";
    listaLink.style.display = "none";
}