const siteNav = document.querySelector('.site-nav');
let navbarIsScrolled = false;

const updateNavbar = () => {
    const scrollY = window.scrollY;

    if (!navbarIsScrolled && scrollY > 24) {
        navbarIsScrolled = true;
        siteNav.classList.add('is-scrolled');
    } else if (navbarIsScrolled && scrollY <= 4) {
        navbarIsScrolled = false;
        siteNav.classList.remove('is-scrolled');
    }
};

updateNavbar();
window.addEventListener('scroll', updateNavbar, { passive: true });