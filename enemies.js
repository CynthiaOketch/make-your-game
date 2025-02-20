document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.getElementById("game-container");

    function createEnemy(x, y) {
        const enemy = document.createElement("div");
        enemy.classList.add("enemy");
        enemy.style.left = x + "px";
        enemy.style.top = y + "px";
        gameContainer.appendChild(enemy);
    }

    // Create multiple enemies
    function generateEnemies(rows, cols) {
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                createEnemy(c * 50 + 20, r * 50);
            }
        }
    }

    generateEnemies(3, 8);
});
