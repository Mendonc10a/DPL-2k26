const canvas = document.createElement('canvas');
const c = canvas.getContext('2d');
const grid = 20;
let cols, rows, snake, dir, gameOver;

document.body.style.margin = '0';
document.body.appendChild(canvas);

const resize = () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    cols = Math.floor(innerWidth / grid);
    rows = Math.floor(innerHeight / grid);
    if (snake) {
        for (let s of snake) {
            s.x = s.x % cols;
            s.y = s.y % rows;
        }
        draw();
    }
};

const restart = () => {
    snake = [{ x: Math.floor(cols / 2), y: Math.floor(rows / 2) }];
    dir = { x: 1, y: 0 };
    gameOver = false;
};

const update = () => {
    const head = { x: (snake[0].x + dir.x + cols) % cols, y: (snake[0].y + dir.y + rows) % rows };
    snake.unshift(head);
    snake.pop();
};

const draw = () => {
    c.fillStyle = '#111';
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = '#2ecc71';
    for (let s of snake) c.fillRect(s.x * grid, s.y * grid, grid - 1, grid - 1);
    if (gameOver) {
        c.fillStyle = 'rgba(0,0,0,0.6)';
        c.fillRect(0, 0, canvas.width, canvas.height);
        c.fillStyle = '#fff';
        c.font = '24px sans-serif';
        c.textAlign = 'center';
        c.fillText('Game Over - Press Space or Enter', canvas.width / 2, canvas.height / 2);
    }
};

resize();
restart();
window.addEventListener('resize', resize);

window.addEventListener('keydown', (e) => {
    const k = e.key;
    if ((k === 'ArrowUp' || k.toLowerCase() === 'w') && dir.y !== 1) dir = { x: 0, y: -1 };
    if ((k === 'ArrowDown' || k.toLowerCase() === 's') && dir.y !== -1) dir = { x: 0, y: 1 };
    if ((k === 'ArrowLeft' || k.toLowerCase() === 'a') && dir.x !== 1) dir = { x: -1, y: 0 };
    if ((k === 'ArrowRight' || k.toLowerCase() === 'd') && dir.x !== -1) dir = { x: 1, y: 0 };
    if ((k === ' ' || k === 'Enter') && gameOver) restart();
});

// simple loop: 8 updates per second
setInterval(() => {
    if (!gameOver) update();
    draw();
}, 1000 / 8);