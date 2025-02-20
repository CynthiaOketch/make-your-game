document.addEventListener("DOMContentLoaded", () => {
    const player = document.getElementById("player");
    const gameContainer = document.getElementById("game-container");
    let playerSpeed = 10;

    document.addEventListener("keydown", (e) => {
        let left = player.offsetLeft;
        if (e.key === "ArrowLeft" && left > 0) {
            player.style.left = left - playerSpeed + "px";
        }
        if (e.key === "ArrowRight" && left < gameContainer.clientWidth - player.clientWidth) {
            player.style.left = left + playerSpeed + "px";
        }
        if (e.key === " " || e.key === "Spacebar") {
            shootBullet();
        }
    });

    function shootBullet() {
        const bullet = document.createElement("div");
        bullet.classList.add("bullet");
        bullet.style.left = player.offsetLeft + player.clientWidth / 2 + "px";
        bullet.style.bottom = "40px";
        gameContainer.appendChild(bullet);

        let interval = setInterval(() => {
            let bulletBottom = parseInt(bullet.style.bottom);
            if (bulletBottom >= gameContainer.clientHeight) {
                bullet.remove();
                clearInterval(interval);
            } else {
                bullet.style.bottom = bulletBottom + 10 + "px";
            }
        }, 30);
    }
});
