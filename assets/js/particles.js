/**
 * CYBERPODIUM PARTICLES LAYER ENVIRONMENT
 * High Performance Canvas Background Processing Node
 */

(function() {
    const canvas = document.getElementById("particles-canvas");
    if(!canvas) return;
    
    const context = canvas.getContext("2d");
    let particleArray = [];
    const executionLimits = 60; // Optimal node density balance

    class ParticleNode {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 1.5 + 0.5;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = Math.random() * 0.4 - 0.2;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
            if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        }
        draw() {
            context.fillStyle = "rgba(0, 212, 255, 0.25)";
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            context.fill();
        }
    }

    function dynamicResize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        buildChamberPool();
    }

    function buildChamberPool() {
        particleArray = [];
        for (let i = 0; i < executionLimits; i++) {
            particleArray.push(new ParticleNode());
        }
    }

    function animateVectorLoops() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particleArray.length; i++) {
            particleArray[i].update();
            particleArray[i].draw();
        }
        requestAnimationFrame(animateVectorLoops);
    }

    window.addEventListener("resize", dynamicResize);
    dynamicResize();
    animateVectorLoops();
})();