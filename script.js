// ============================================
// xX_Ganglija_Xx.piczo - Shared JavaScript
// Pure Y2K Chaos - Login System & Interactions
// ============================================

// Check login on page load (except index.html)
document.addEventListener('DOMContentLoaded', function () {
    // Hide loading overlay after 2 seconds
    const loader = document.getElementById('loading-overlay');
    if (loader) {
        setTimeout(() => {
            loader.style.display = 'none';
        }, 2000);
    }

    // Check if user is logged in (skip for index.html)
    const isLoginPage = window.location.href.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');

    if (!isLoginPage) {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            alert('You must login first! ✨');
            window.location.href = 'index.html';
            return;
        }
    }

    // Start floating hearts
    startFloatingHearts();

    // Add click sparkle effects
    setupClickEffects();

    // Setup logout button
    setupLogout();

    // Keyboard shortcuts
    setupKeyboardShortcuts();
});

// Floating Hearts Animation
function startFloatingHearts() {
    const container = document.getElementById('floating-hearts');
    if (!container) return;

    const hearts = ['💖', '💗', '💕', '💝', '💟', '✨', '⭐', '🌟'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (5 + Math.random() * 5) + 's';
        heart.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
        container.appendChild(heart);

        setTimeout(() => heart.remove(), 10000);
    }, 2000);
}

// Click Sparkle Effects
function setupClickEffects() {
    const sparkleLayer = document.querySelector('.sparkle-layer');
    if (!sparkleLayer) return;

    document.addEventListener('click', function (e) {
        // Create sparkle
        const sparkle = document.createElement('div');
        sparkle.className = 'click-sparkle';
        sparkle.style.left = (e.clientX - 10) + 'px';
        sparkle.style.top = (e.clientY - 10) + 'px';
        sparkle.style.backgroundImage = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\'><text y=\'24\' font-size=\'24\'>✨</text></svg>")';
        sparkle.style.backgroundSize = 'contain';
        sparkle.style.backgroundRepeat = 'no-repeat';
        sparkleLayer.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1000);
    });
}

// Logout Functionality
function setupLogout() {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (confirm('Are you sure you want to logout? 💔')) {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('username');
                window.location.href = 'index.html';
            }
        });
    }
}

// Keyboard Shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function (e) {
        // Press 'S' for sparkle burst
        if (e.key.toLowerCase() === 's') {
            const sparkleLayer = document.querySelector('.sparkle-layer');
            if (sparkleLayer) {
                for (let i = 0; i < 10; i++) {
                    setTimeout(() => {
                        const sparkle = document.createElement('div');
                        sparkle.className = 'click-sparkle';
                        sparkle.style.left = Math.random() * window.innerWidth + 'px';
                        sparkle.style.top = Math.random() * window.innerHeight + 'px';
                        sparkle.style.backgroundImage = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\'><text y=\'24\' font-size=\'24\'>✨</text></svg>")';
                        sparkle.style.backgroundSize = 'contain';
                        sparkleLayer.appendChild(sparkle);
                        setTimeout(() => sparkle.remove(), 1000);
                    }, i * 100);
                }
            }
        }
    });
}

// Utility: Format date
function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}
