// utils.js

/**
 * Generate a random number between min and max
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} - Random number in the range [min, max]
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Check if two elements (like bullets & enemies) are colliding
 * @param {HTMLElement} obj1 - First object
 * @param {HTMLElement} obj2 - Second object
 * @returns {boolean} - True if collision detected, otherwise false
 */
function isColliding(obj1, obj2) {
    const rect1 = obj1.getBoundingClientRect();
    const rect2 = obj2.getBoundingClientRect();

    return !(
        rect1.top > rect2.bottom ||
        rect1.bottom < rect2.top ||
        rect1.left > rect2.right ||
        rect1.right < rect2.left
    );
}

/**
 * Play a sound effect (e.g., shooting or explosion)
 * @param {string} soundFile - Path to the sound file
 */
function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}

/**
 * Create an HTML element dynamically
 * @param {string} tag - HTML tag name (e.g., "div", "img")
 * @param {string[]} classList - List of class names
 * @param {Object} attributes - Key-value pairs of attributes (e.g., `{ src: 'image.png' }`)
 * @returns {HTMLElement} - The created element
 */
function createElement(tag, classList = [], attributes = {}) {
    const element = document.createElement(tag);
    classList.forEach(cls => element.classList.add(cls));
    Object.keys(attributes).forEach(attr => element.setAttribute(attr, attributes[attr]));
    return element;
}

/**
 * Update the scoreboard
 * @param {number} score - Current score
 * @param {number} lives - Remaining lives
 * @param {number} time - Remaining time or elapsed time
 */
function updateScoreboard(score, lives, time) {
    document.getElementById("score").textContent = `Score: ${score}`;
    document.getElementById("lives").textContent = `Lives: ${lives}`;
    document.getElementById("timer").textContent = `Time: ${time}s`;
}

/**
 * Delay execution for a given number of milliseconds
 * @param {number} ms - Number of milliseconds to wait
 * @returns {Promise} - A promise that resolves after the delay
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
