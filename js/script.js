// Function to handle Theme Toggle
function initTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    const toggleTheme = () => {
        const current = html.getAttribute('data-theme');
        const target = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', target);
        localStorage.setItem('theme', target);
    };

    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }

    // Load saved theme
    const saved = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', saved);
}

document.addEventListener('DOMContentLoaded', initTheme);
