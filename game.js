let lastTime = 0;
function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    // Call game update functions here
    handleCollisions();

    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
