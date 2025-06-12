const toggleModeBtn = document.getElementById("toggle-mode");
const body = document.querySelector("body");
const menuBtn = document.querySelector(".menu-toggle-button");
const menu = document.querySelector(".nav-list");

toggleModeBtn.addEventListener("click", () => {
    toggleModeBtn.classList.toggle("bx-sun");
    body.classList.toggle("dark");
});

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});
document.addEventListener("click", (e) => {
    if(!menu.contains(e.target) && !menuBtn.contains(e.target)) {
        menu.classList.remove("active");
    }
});