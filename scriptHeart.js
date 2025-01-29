var backgroundCanvas = document.getElementById('background');
var bgCtx = backgroundCanvas.getContext('2d');

var resizeCanvas = function () {
    backgroundCanvas.width = window.innerWidth;
    backgroundCanvas.height = window.innerHeight;
};
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

var hearts = [];
var heartColors = ["red", "pink", "purple", "white"];

for (var i = 0; i < 50; i++) {
    hearts.push({
        x: Math.random() * backgroundCanvas.width,
        y: Math.random() * backgroundCanvas.height,
        size: Math.random() * 8 + 2,
        speed: Math.random() * 2 + 1,
        color: heartColors[Math.floor(Math.random() * heartColors.length)]
    });
}

var drawHeart = function (ctx, x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - size, y - size, x - size * 1.5, y + size / 2, x, y + size);
    ctx.bezierCurveTo(x + size * 1.5, y + size / 2, x + size, y - size, x, y);
    ctx.fill();
};

var updateHearts = function () {
    bgCtx.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
    for (var i = 0; i < hearts.length; i++) {
        var heart = hearts[i];
        heart.y += heart.speed;
        if (heart.y > backgroundCanvas.height) {
            heart.y = -10;
            heart.x = Math.random() * backgroundCanvas.width;
        }
        drawHeart(bgCtx, heart.x, heart.y, heart.size, heart.color);
    }
    requestAnimationFrame(updateHearts);
};

updateHearts();
