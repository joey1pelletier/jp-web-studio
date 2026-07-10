const navToggle = document.querySelector('.nav-toggle');
const navLinksMobile = document.querySelector('.nav-links-mobile');
const header = document.querySelector('.header-nav');

let nav_toggle_bool = false;

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("is-open");
    navLinksMobile.classList.toggle("is-open");
    header.classList.toggle("is-open");
    
})