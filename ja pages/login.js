const toggleModeBtn = document.getElementById("toggle-mode");
const body = document.querySelector("body");


toggleModeBtn.addEventListener("click", () => {
    toggleModeBtn.classList.toggle("bx-sun");
    body.classList.toggle("dark");
});