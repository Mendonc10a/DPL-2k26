// Dentro da function Rect, no método update:
this.update = function() {
    // Move o objeto
    this.x += this.dx;
    this.y += this.dy;

    // Colisão precisa com as bordas (usando o tamanho real do objeto)
    if ((this.x + this.size) >= canvas.width || this.x <= 0) {
        this.dx = -this.dx;
    }
    if ((this.y + this.size) >= canvas.height || this.y <= 0) {
        this.dy = -this.dy;
    }

    // Interação com mouse (Efeito de escala)
    if (Math.abs(mouse.x - this.x) < 50 && Math.abs(mouse.y - this.y) < 50) {
        if (this.size < 40) { // Limite máximo de crescimento
            this.size += 1;
        }
    } else if (this.size > 2) { // Encolhe se estiver longe do mouse
        this.size -= 0.5;
    }

    this.draw();
}

// Na função createObjects:
function createObjects() {
    for (var j = 0; j < 1000; j++) { // 1000 é mais seguro para performance
        var size = Math.random() * 10 + 2;
        var x = Math.random() * (canvas.width - size * 2) + size;
        var y = Math.random() * (canvas.height - size * 2) + size;
        var dx = (Math.random() - 0.5) * 4; // Velocidade aleatória para os dois lados
        var dy = (Math.random() - 0.5) * 4;
        var color = colorArray[Math.floor(Math.random() * colorArray.length)];

        rectArray.push(new Rect(x, y, dx, dy, size, color));
    }
}