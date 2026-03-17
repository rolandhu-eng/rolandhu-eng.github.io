const navbar = document.getElementById('navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navbar && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navbar.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.addEventListener('click', (event) => {
        if (event.target && event.target.tagName === 'A') {
            navbar.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in animation
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

const hero = document.querySelector('.hero');

// Scroll effects: navbar + hero parallax
let lastKnownScrollY = 0;
let ticking = false;

const onScroll = () => {
    lastKnownScrollY = window.scrollY || window.pageYOffset;
    if (!ticking) {
        window.requestAnimationFrame(() => {
            document.documentElement.style.setProperty('--scrollY', `${lastKnownScrollY}`);

            if (navbar) {
                if (lastKnownScrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }

            document.documentElement.style.setProperty('--heroShift', `${Math.min(lastKnownScrollY, 220)}`);

            if (hero) {
                hero.style.backgroundPositionY = `${-(lastKnownScrollY * 0.6)}px`;
            }
            ticking = false;
        });
        ticking = true;
    }
};

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
