const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakesArray = [];
const numberOfSnowflakes = 200;

class Snowflake {
    constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Jika salju melewati bawah, pindahkan ke atas
        if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }

        // Jika salju melewati sisi kanan atau kiri, pindahkan ke tengah
        if (this.x > canvas.width || this.x < 0) {
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function initSnowflakes() {
    for (let i = 0; i < numberOfSnowflakes; i++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.5) * 1;
        const speedY = Math.random() * 1 + 0.5;
        snowflakesArray.push(new Snowflake(x, y, size, speedX, speedY));
    }
}

function animateSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < snowflakesArray.length; i++) {
        snowflakesArray[i].update();
        snowflakesArray[i].draw();
    }
    requestAnimationFrame(animateSnowflakes);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

initSnowflakes();
animateSnowflakes();
