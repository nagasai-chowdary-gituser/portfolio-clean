import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

/**
 * Adaptive particle canvas — dark/light theme aware.
 * Soft dots with delicate connections, mouse-reactive.
 */
export default function StarfieldCanvas() {
    const canvasRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        const isDark = theme === "dark";

        let animFrameId;
        let mouse = { x: -1000, y: -1000 };
        const STAR_COUNT = isDark ? 140 : 100;
        const CONNECTION_DIST = isDark ? 160 : 140;
        const MOUSE_RADIUS = 250;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Theme-adaptive color palettes
        const darkColors = [
            "109,191,184", "109,191,184", "90,140,200", "90,140,200",
            "155,126,200", "217,113,143", "92,124,137", "124,154,166",
        ];
        const lightColors = [
            "61,158,150", "61,158,150", "74,124,184", "74,124,184",
            "123,94,184", "180,140,120", "160,155,145", "100,130,120",
        ];
        const starColors = isDark ? darkColors : lightColors;

        const darkConnectionColors = [[109, 191, 184], [90, 140, 200], [92, 124, 137]];
        const lightConnectionColors = [[61, 158, 150], [74, 124, 184], [160, 155, 145]];
        const connectionColors = isDark ? darkConnectionColors : lightConnectionColors;

        const baseAlphaMin = isDark ? 0.1 : 0.08;
        const baseAlphaRange = isDark ? 0.3 : 0.18;
        const connectionAlphaFactor = isDark ? 0.12 : 0.07;
        const mouseGlowAlpha1 = isDark ? 0.12 : 0.06;
        const mouseGlowAlpha2 = isDark ? 0.05 : 0.03;
        const mouseLineAlpha = isDark ? 0.15 : 0.08;

        class Star {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.z = Math.random() * 2.5 + 1;
                this.radius = Math.random() * 2 + 0.8;
                this.vx = (Math.random() - 0.5) * 0.18;
                this.vy = (Math.random() - 0.5) * 0.18;
                this.baseAlpha = Math.random() * baseAlphaRange + baseAlphaMin;
                this.alpha = this.baseAlpha;
                this.pulseSpeed = Math.random() * 0.02 + 0.005;
                this.pulseOffset = Math.random() * Math.PI * 2;
                this.color = starColors[Math.floor(Math.random() * starColors.length)];
            }
            update(t) {
                this.x += this.vx;
                this.y += this.vy;

                const dx = mouse.x - canvas.width / 2;
                const dy = mouse.y - canvas.height / 2;
                this.x += (dx * 0.00004 * this.z);
                this.y += (dy * 0.00004 * this.z);

                this.alpha = this.baseAlpha + Math.sin(t * this.pulseSpeed + this.pulseOffset) * 0.1;

                if (this.x < -10) this.x = canvas.width + 10;
                if (this.x > canvas.width + 10) this.x = -10;
                if (this.y < -10) this.y = canvas.height + 10;
                if (this.y > canvas.height + 10) this.y = -10;

                const mx = mouse.x - this.x;
                const my = mouse.y - this.y;
                const md = Math.sqrt(mx * mx + my * my);
                if (md < MOUSE_RADIUS) {
                    const proximity = 1 - md / MOUSE_RADIUS;
                    this.alpha = Math.min(0.8, this.alpha + proximity * 0.5);
                    // Gentle push away from mouse
                    this.x -= (mx / md) * proximity * 0.8;
                    this.y -= (my / md) * proximity * 0.8;
                }
            }
            draw(ctx) {
                // Outer glow
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius * this.z * 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color},${this.alpha * 0.15})`;
                ctx.fill();
                // Core
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius * this.z * 0.6, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
                ctx.fill();
            }
        }

        const stars = Array.from({ length: STAR_COUNT }, () => new Star());

        const render = (t) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const star of stars) star.update(t);

            // Connections with colored lines
            for (let i = 0; i < stars.length; i++) {
                for (let j = i + 1; j < stars.length; j++) {
                    const dx = stars[i].x - stars[j].x;
                    const dy = stars[i].y - stars[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CONNECTION_DIST) {
                        const alpha = (1 - dist / CONNECTION_DIST) * connectionAlphaFactor;
                        const colIdx = (i + j) % connectionColors.length;
                        const [r, g, b] = connectionColors[colIdx];
                        ctx.beginPath();
                        ctx.moveTo(stars[i].x, stars[i].y);
                        ctx.lineTo(stars[j].x, stars[j].y);
                        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
                        ctx.lineWidth = 0.7;
                        ctx.stroke();
                    }
                }
            }

            // Mouse glow — vibrant radial gradient
            if (mouse.x > 0 && mouse.y > 0) {
                const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, MOUSE_RADIUS);
                gradient.addColorStop(0, `rgba(${isDark ? "109,191,184" : "61,158,150"},${mouseGlowAlpha1})`);
                gradient.addColorStop(0.4, `rgba(${isDark ? "90,140,200" : "74,124,184"},${mouseGlowAlpha2})`);
                gradient.addColorStop(1, "rgba(0,0,0,0)");
                ctx.fillStyle = gradient;
                ctx.fillRect(mouse.x - MOUSE_RADIUS, mouse.y - MOUSE_RADIUS, MOUSE_RADIUS * 2, MOUSE_RADIUS * 2);

                // Mouse connection lines to nearby stars
                for (const star of stars) {
                    const mx = mouse.x - star.x;
                    const my = mouse.y - star.y;
                    const md = Math.sqrt(mx * mx + my * my);
                    if (md < MOUSE_RADIUS * 0.7) {
                        const alpha = (1 - md / (MOUSE_RADIUS * 0.7)) * mouseLineAlpha;
                        ctx.beginPath();
                        ctx.moveTo(mouse.x, mouse.y);
                        ctx.lineTo(star.x, star.y);
                        ctx.strokeStyle = `rgba(${isDark ? "109,191,184" : "61,158,150"},${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            for (const star of stars) star.draw(ctx);

            animFrameId = requestAnimationFrame(render);
        };

        const handleMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
        const handleMouseLeave = () => { mouse.x = -1000; mouse.y = -1000; };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);
        animFrameId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animFrameId);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
            aria-hidden="true"
        />
    );
}
