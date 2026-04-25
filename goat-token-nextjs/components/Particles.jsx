'use client';

import { useEffect, useRef } from 'react';

/* ============================================================
   PARTICLES BACKGROUND
   ------------------------------------------------------------
   Canvas vanilla ringan yang menggambar titik-titik gold yang
   mengambang pelan. Auto-resize saat window berubah.
============================================================ */

export default function Particles() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let rafId;

        function resize() {
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function initParticles() {
            particles = [];
            const count = Math.min(50, Math.floor(window.innerWidth / 30));
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 1.8 + 0.3,
                    vx: (Math.random() - 0.5) * 0.25,
                    vy: (Math.random() - 0.5) * 0.25,
                    alpha: Math.random() * 0.5 + 0.1,
                });
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(250, 204, 21, ${p.alpha})`;
                ctx.fill();
            });
            rafId = requestAnimationFrame(animate);
        }

        function handleResize() {
            resize();
            initParticles();
        }

        resize();
        initParticles();
        animate();

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas id="particles" ref={canvasRef}></canvas>;
}
