// Animate progress bars
document.addEventListener('DOMContentLoaded', function() {
    // Game scroll animation
    const gameScroll = document.querySelector('.game-scroll-track');
    if (gameScroll) {
        gameScroll.style.animation = 'scroll 30s linear infinite';
    }
});