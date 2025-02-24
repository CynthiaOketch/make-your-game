let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    // Clear and update the game state
    updateGame();
    handleCollisions();

    requestAnimationFrame(gameLoop);
}

function updateGame() {
    console.log("Game is running!"); // Debugging: Check if game loop is running
}

// Start the game loop
requestAnimationFrame(gameLoop);
