window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    document.body.style.margin = '0';
    document.body.style.overflow = 'hidden';
    document.body.appendChild(canvas);

    const c = canvas.getContext('2d');

    function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    let x = 100;
    let vx = 10;

    function loop() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = '#0077cc';
    c.fillRect(x, 100, 100, 100);

    if ((x += vx) <= 0 || x + 100 >= canvas.width) vx = -vx;

    requestAnimationFrame(loop);
    }

    loop();
});