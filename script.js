function toggleMenu() {
    let menu = document.getElementById("menu");
    let button = document.querySelector(".menu-btn");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        button.setAttribute("aria-expanded", "false");
    } else {
        menu.style.display = "block";
        button.setAttribute("aria-expanded", "true");
    }
}