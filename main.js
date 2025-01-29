const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav_links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "bi bi-x-lg" : "bi bi-list");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "bi bi-list");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_container form", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_container p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".popular_card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".register_image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".register_content h4", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".register_btn", {
    ...scrollRevealOption,
    delay: 1000,
});

const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
});
