let isPaused = false;

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        isPaused = !isPaused;
        if (isPaused) {
            cancelAnimationFrame(gameLoop);
        } else {
            requestAnimationFrame(gameLoop);
        }
    }
});
