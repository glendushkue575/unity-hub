/* sophisticated_code.js */
// This code generates a highly complex and interactive star field simulation

// Initialize canvas
const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

// Create star class
class Star {
  constructor(x, y, size, speed, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.color = color;
  }

  update() {
    this.x += this.speed;
    if (this.x > canvas.width + this.size) {
      this.x = -this.size;
      this.y = Math.random() * canvas.height;
    }

    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Create star field
const stars = [];
for (let i = 0; i < 200; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const size = Math.random() * 3;
  const speed = (Math.random() + 0.1) * 2;
  const color = `rgba(255, 255, 255, ${Math.random()})`;
  stars.push(new Star(x, y, size, speed, color));
}

// Main animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const star of stars) {
    star.update();
  }

  requestAnimationFrame(animate);
}

animate();