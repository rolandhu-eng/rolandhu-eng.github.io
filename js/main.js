// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, { passive: true });

// Smooth scrolling with offset for fixed navbar
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

// Fade-in animation on scroll
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

// Typing effect for hero subtitle (optional - very engineering-like)
const subtitle = document.querySelector('.hero .subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
}

// Add cursor effect to hero name
const heroName = document.querySelector('.hero h1');
if (heroName) {
    heroName.style.position = 'relative';
    
    // Create blinking cursor element
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.style.cssText = `
        color: var(--accent);
        animation: blink 1s step-end infinite;
        margin-left: 5px;
    `;
    
    // Add cursor animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Add cursor after delay
    setTimeout(() => {
        heroName.appendChild(cursor);
    }, 1500);
}

// Add glitch effect on project cards (subtle, engineering-style)
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.animation = 'glitch 0.3s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 300);
    });
});

// Add glitch animation
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
    @keyframes glitch {
        0% { transform: translateY(-7px) translateX(0); }
        25% { transform: translateY(-7px) translateX(-2px); }
        50% { transform: translateY(-7px) translateX(2px); }
        75% { transform: translateY(-7px) translateX(-1px); }
        100% { transform: translateY(-7px) translateX(0); }
    }
`;
document.head.appendChild(glitchStyle);

// Smooth page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Console greeting (Easter egg for engineers who inspect)
console.log(`
%c█▀▀ █▀█ █▀▀ █▀▀ ▀█▀ █ █▄ █ █▀▀ █▀ 
%c█▄█ █▀▄ ██▄ ██▄  █  █ █ ▀█ █▄█ ▄█ 

%cHey there! 👋 
Thanks for checking out my portfolio.
Feel free to reach out if you want to collaborate!

%c→ GitHub: https://github.com/rolandhu-eng
→ Email: rhu2718@gmail.com
`, 
'color: #64ffda; font-weight: bold; font-size: 16px;',
'color: #64ffda; font-weight: bold; font-size: 16px;',
'color: #8892b0; font-size: 14px; line-height: 1.8;',
'color: #00d4ff; font-size: 12px;'
);
