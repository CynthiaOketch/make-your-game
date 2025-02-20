function checkCollision(bullet, enemy) {
    let bRect = bullet.getBoundingClientRect();
    let eRect = enemy.getBoundingClientRect();

    return !(
        bRect.bottom < eRect.top ||
        bRect.top > eRect.bottom ||
        bRect.right < eRect.left ||
        bRect.left > eRect.right
    );
}

function handleCollisions() {
    let bullets = document.querySelectorAll(".bullet");
    let enemies = document.querySelectorAll(".enemy");

    bullets.forEach((bullet) => {
        enemies.forEach((enemy) => {
            if (checkCollision(bullet, enemy)) {
                bullet.remove();
                enemy.remove();
            }
        });
    });

    requestAnimationFrame(handleCollisions);
}

handleCollisions();
