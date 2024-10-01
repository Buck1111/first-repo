const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Placeholder for the character sprite
const character = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    speed: 5,
    sprite: new Image()
};

character.sprite.src = 'assets/images/placeholders/character.png';

function update() {
    // Movement logic will go here
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(character.sprite, character.x, character.y);
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

window.addEventListener('load', () => {
    gameLoop();
});

window.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowUp':
            character.y -= character.speed;
            break;
        case 'ArrowDown':
            character.y += character.speed;
            break;
        case 'ArrowLeft':
            character.x -= character.speed;
            break;
        case 'ArrowRight':
            character.x += character.speed;
            break;
    }
});
