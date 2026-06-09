const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const particles = [];

const random = (min, max) => Math.random() * (max - min) + min;
const resizeCanvas = () => (canvas.width = window.innerWidth, canvas.height = window.innerHeight);

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const mouse = { x: canvas.width / 2, y: canvas.height / 2, active: false };

window.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; });
window.addEventListener("mouseout", () => { mouse.active = false; });
window.addEventListener("mousedown", () => { mouse.active = true; });
window.addEventListener("mouseup", () => { mouse.active = false; });

const createParticle = (x, y) => ({
  x: x + random(-24, 24),
  y: y + random(-24, 24),
  vx: Math.cos(Math.random() * Math.PI * 2) * random(0.5, 2.5) * 0.4,
  vy: Math.sin(Math.random() * Math.PI * 2) * random(0.5, 2.5) * 0.4 - random(1, 2),
  size: random(1.5, 4.5),
  life: random(40, 90),
  hue: Math.floor(random(180, 260)),
});

const spawnParticles = () => {
  if (!mouse.active) return;
  for (let i = 0; i < 1; i++) particles.push(createParticle(mouse.x, mouse.y));
  if (particles.length > 350) particles.splice(0, particles.length - 350);
};

const updateParticles = () => {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.life--;
    if (p.life <= 0) particles.splice(i, 1);
  }
};

const drawParticles = () => particles.forEach((p) => {
  ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${p.life / 90})`;
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
  ctx.fill();
});

const drawMouseHalo = () => {
  if (!mouse.active) return;
  const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 18);
  g.addColorStop(0, "rgba(255,255,255,0.8)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 18, 0, Math.PI * 2);
  ctx.fill();
};

const animate = () => {
  ctx.fillStyle = "rgba(8, 10, 25, 0.18)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  spawnParticles();
  updateParticles();
  drawParticles();
  drawMouseHalo();
  requestAnimationFrame(animate);
};

animate();

