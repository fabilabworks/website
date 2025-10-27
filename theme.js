const themeSelect = document.getElementById('theme-select');

// Apply saved theme from localStorage or default to system
const savedTheme = localStorage.getItem('theme') || 'system';
themeSelect.value = savedTheme;
applyTheme(savedTheme);

// Listen for changes
themeSelect.addEventListener('change', (e) => {
    const theme = e.target.value;
    localStorage.setItem('theme', theme);
    applyTheme(theme);
});

function applyTheme(theme) {
    if (theme === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
        document.documentElement.setAttribute('data-theme', theme);
    }
}

// Optional: Update theme automatically if OS preference changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (localStorage.getItem('theme') === 'system') {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
});
