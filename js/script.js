document.addEventListener('DOMContentLoaded', function() {
    // 1. LIGHT/DARK MODE LOGIC
    const themeBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);

    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            const current = html.getAttribute('data-theme');
            const target = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', target);
            localStorage.setItem('theme', target);
        });
    }

    // 2. BOOK ANIMATION LOGIC (Only runs on poems page)
    if ($('#bb-bookblock').length > 0) {
        var $book = $('#bb-bookblock').bookblock({
            speed: 800,
            shadowSides: 0.8,
            shadowFlip: 0.7
        });

        $('#bb-nav-next').on('click', function() {
            $book.bookblock('next');
            return false;
        });

        $('#bb-nav-prev').on('click', function() {
            $book.bookblock('prev');
            return false;
        });
    }
});
