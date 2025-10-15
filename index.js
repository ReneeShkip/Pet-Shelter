document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const headerBurger = document.querySelector(".header-burger");
    const menuContainer = document.querySelector(".nav-menu");
    const screen = document.querySelector(".overlay");
    const header = document.querySelector("header");

    if (menuContainer) {
        burger.addEventListener("click", function () {
            menuContainer.classList.toggle("with-burger");
            burger.classList.toggle("with-burger");
            headerBurger.classList.toggle("with-burger");
            screen.classList.toggle("overlay-active");
            header.style.zIndex = "10";
        });

    } else {
        console.log("Menu container not found");

    }
});

function checkMenu(event) {
    const menuContainer = document.querySelector(".nav-menu");
    const burger = document.querySelector(".burger");
    const screen = document.querySelector(".overlay");
    if (menuContainer.classList.contains("with-burger") && !burger.contains(event.target)) {
        menuContainer.classList.remove("with-burger");
        burger.classList.remove("with-burger");
        screen.classList.toggle("overlay-active");
    }
}

document.addEventListener("click", function (event) {
    checkMenu(event);
});

document.addEventListener("scroll", function (event) {
    checkMenu(event);
});