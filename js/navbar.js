// ---- variables ----
const siteNav = document.querySelector('.site-nav');

// scroll state
// need to track state to make sure that we don't accidentally keep 
// adding/removing the class when we scroll. this code originally used
// toggle but we decided to introduce state tracking so we only update 
// the class when needed
let navbarIsScrolled = false; 

// the reason we set separate thresholds for
// scrolling up and down is because we needed a deadzone 
// for the animation to increase the height without causing a layout shift
const updateNavbar = () => {
    const scrollY = window.scrollY;

    // if the navbar hasn't already been scrolled yet,
    // and we are above a certain scroll threshold
    // then add the is-scrolled class to the navbar
    if (!navbarIsScrolled && scrollY > 24) {
        navbarIsScrolled = true;
        siteNav.classList.add('is-scrolled');
    } else if (navbarIsScrolled && scrollY <= 4) {
        // if the navbar has already been scrolled, 
        // and we are below a certain threshold, 
        // then remove the is-scrolled class from the navbar
        navbarIsScrolled = false;
        siteNav.classList.remove('is-scrolled');
    }
};

updateNavbar(); // in case the user starts scrolled
window.addEventListener('scroll', updateNavbar, { passive: true });