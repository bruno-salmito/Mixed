const menuIcon = document.querySelector(".hamburguerMenu");
const navBar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navBar.classList.toggle("change");
})