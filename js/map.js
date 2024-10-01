const map = {
    image: new Image()
};

map.image.src = 'assets/images/placeholders/map.png';

function drawMap() {
    ctx.drawImage(map.image, 0, 0, canvas.width, canvas.height);
}
