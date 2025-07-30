const toggleModeBtn = document.getElementById("toggle-mode");
const body = document.querySelector("body");
const menuBtn = document.querySelector(".menu-toggle-button");
const menu = document.querySelector(".nav-list");
const toTopBtn = document.querySelector(".to-top-btn");


toggleModeBtn.addEventListener("click", () => {
    toggleModeBtn.classList.toggle("bx-sun");
    body.classList.toggle("dark");
});

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("bx-x");
    toggleOverLay();
});

window.addEventListener("scroll", () => {
    (scrollY >= 100) ? toTopBtn.classList.add("show") : toTopBtn.classList.remove("show");
});

toTopBtn.addEventListener("click", () => {
    scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

function toggleOverLay() {
    const overlay = document.getElementById("overlay-model");
    if (overlay) {
        overlay.remove();
    } else {
        const newOverLay = document.createElement("div");
        newOverLay.id = "overlay-model";
        document.body.appendChild(newOverLay);
    }
}

