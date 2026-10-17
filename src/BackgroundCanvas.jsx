import { useEffect, useRef } from "react";

export default function BackgroundCanvas({ darkMode }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const particles = [];

        const resizeCanvas = () => {
            const oldWidth = canvas.width || window.innerWidth;
            const oldHeight = canvas.height || window.innerHeight;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            particles.forEach((particle) => {
                particle.x = (particle.x / oldWidth) * canvas.width;
                particle.y = (particle.y / oldHeight) * canvas.height;
            });
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;

                this.radius = Math.random() * 2 + 1;

                this.vx = (Math.random() - 0.5) * 0.35;
                this.vy = (Math.random() - 0.5) * 0.35;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;

                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }

            draw() {
                const particleColor = darkMode
                    ? "rgba(255,255,255,0.7)"
                    : "rgba(0,0,0,0.7)";

                if (darkMode) {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    ctx.fillStyle = particleColor;
                    ctx.fill();
                } else {
                    const spikes = 5;
                    const outerRadius = this.radius * 2.5;
                    const innerRadius = this.radius * 1.5;

                    let rot = Math.PI / 2 * 3;
                    const x = this.x;
                    const y = this.y;
                    const step = Math.PI / spikes;

                    ctx.beginPath();
                    ctx.moveTo(x, y - outerRadius);

                    for (let i = 0; i < spikes; i++) {
                        ctx.lineTo(
                            x + Math.cos(rot) * outerRadius,
                            y + Math.sin(rot) * outerRadius
                        );

                        rot += step;

                        ctx.lineTo(
                            x + Math.cos(rot) * innerRadius,
                            y + Math.sin(rot) * innerRadius
                        );

                        rot += step;
                    }

                    ctx.closePath();
                    ctx.fillStyle = particleColor;
                    ctx.fill();
                }
            }
        }

        const particleCount = Math.floor(
            (window.innerWidth * window.innerHeight) / 20000
        );

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        let animationId;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                p.update();
                p.draw();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, [darkMode]);

    return (
        <canvas
            ref={canvasRef}
            id="background-canvas"
        />
    );
}