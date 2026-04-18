"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "./ThemeProvider";

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animFrameRef = useRef(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  const initParticles = useCallback((width, height) => {
    const count = 35;
    return Array.from({ length: count }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      phase: Math.random() * Math.PI * 2,
      amplitude: Math.random() * 0.5 + 0.2,
      frequency: Math.random() * 0.01 + 0.005,
      orbitRadius: Math.random() * 30 + 10,
      orbitSpeed: (Math.random() - 0.5) * 0.005,
      type: i % 4,
      opacity: Math.random() * 0.5 + 0.15,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (particlesRef.current.length === 0) {
        particlesRef.current = initParticles(canvas.width, canvas.height);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const getColors = () => {
      const isDark = themeRef.current === "dark";
      return {
        colors: isDark
          ? [
              "rgba(251, 191, 36, 0.4)",
              "rgba(249, 115, 22, 0.3)",
              "rgba(245, 158, 11, 0.25)",
              "rgba(255, 255, 255, 0.1)",
            ]
          : [
              "rgba(245, 158, 11, 0.25)",
              "rgba(249, 115, 22, 0.15)",
              "rgba(180, 180, 180, 0.2)",
              "rgba(160, 160, 160, 0.1)",
            ],
        lineColor: isDark
          ? "rgba(245, 158, 11, 0.06)"
          : "rgba(180, 180, 180, 0.12)",
      };
    };

    let time = 0;
    const CONNECTION_DIST = 120;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { colors, lineColor } = getColors();
      time++;

      const particles = particlesRef.current;

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Movement: base drift + sine wave + subtle orbit
        p.x += p.speedX + Math.sin(time * p.frequency + p.phase) * p.amplitude;
        p.y += p.speedY + Math.cos(time * p.frequency * 0.7 + p.phase) * p.amplitude * 0.6;

        // Wrap around edges
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = colors[p.type];
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Draw connecting lines (constellation effect)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = lineColor;
            ctx.globalAlpha = 1 - dist / CONNECTION_DIST;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;
