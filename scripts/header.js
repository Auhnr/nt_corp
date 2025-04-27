document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const body = document.body;

    // Toggle mobile menu
    burgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    // Close menu on overlay click
    overlay.addEventListener('click', function() {
        closeMobileMenu();
    });

    // Close menu on link click and enable smooth scrolling
    const menuLinks = document.querySelectorAll('.mobile-nav-list a, .mobile-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                event.preventDefault();
                document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            }
            closeMobileMenu();
        });
    });

    function closeMobileMenu() {
        burgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
    }
});