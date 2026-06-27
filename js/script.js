const navToggle = document.querySelector('.nav-toggle');
const navLinksMobile = document.querySelector('.nav-links-mobile');
const header = document.querySelector('.header-nav');

let nav_toggle_bool = false;

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("is-open");
    navLinksMobile.classList.toggle("is-open");
    header.classList.toggle("is-open");
    
})


const scrollBreakpoint = document.querySelector('.scroll-breakpoint');

const headerHeight = header.offsetHeight;
const buffer = 150; 

const headerObserver = new IntersectionObserver(
    ([entry]) => {
        header.classList.toggle('scrolled', !entry.isIntersecting);
    },
    {
        threshold: 0,
        rootMargin: `-${headerHeight + buffer}px 0px 0px 0px`
    }
);

headerObserver.observe(scrollBreakpoint);