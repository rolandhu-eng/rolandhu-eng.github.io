 // ── Theme toggle ──────────────────────────────────────────────
        const html = document.documentElement;
        const toggleBtn = document.getElementById('theme-toggle');
        const icon = document.getElementById('theme-icon');
        const label = document.getElementById('theme-label');

        function setTheme(dark) {
            if (dark) {
                html.classList.add('dark');
                html.style.background = '#020817';
                icon.textContent = '☀';
                label.textContent = 'Light';
            } else {
                html.classList.remove('dark');
                html.style.background = '#f5f3ef';
                icon.textContent = '☾';
                label.textContent = 'Dark';
            }
            localStorage.setItem('theme', dark ? 'dark' : 'light');
        }

        const saved = localStorage.getItem('theme');
        setTheme(saved !== 'light');

        toggleBtn.addEventListener('click', () => {
            setTheme(!html.classList.contains('dark'));
        });

        // ── Mobile nav ────────────────────────────────────────────────
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.getElementById('nav-links');

        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
        });

        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => navLinks.classList.remove('open'));
        });