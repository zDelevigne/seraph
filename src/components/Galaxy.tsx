"use client";

import React, { useEffect, useRef } from "react";

interface GalaxyProps {
  starSpeed?: number;
  density?: number;
  hueShift?: number;
  speed?: number;
  glowIntensity?: number;
  saturation?: number;
  mouseRepulsion?: boolean;
  repulsionStrength?: number;
  twinkleIntensity?: number;
  rotationSpeed?: number;
  transparent?: boolean;
}

const Galaxy: React.FC<GalaxyProps> = ({
  starSpeed = 0.5,
  density = 1,
  hueShift = 140,
  speed = 1,
  glowIntensity = 0.3,
  saturation = 0,
  mouseRepulsion = true,
  repulsionStrength = 0.5,
  twinkleIntensity = 0.3,
  rotationSpeed = 0.1,
  transparent = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: any[] = [];
    const starCount = 400 * density;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * canvas.width,
          size: Math.random() * 2,
          color: `hsl(${hueShift + Math.random() * 20}, ${saturation}%, ${70 + Math.random() * 30}%)`,
          opacity: Math.random(),
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!transparent) {
        ctx.fillStyle = "#050505";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      stars.forEach((star) => {
        const perspective = canvas.width / (canvas.width + star.z);
        const x = star.x * perspective;
        const y = star.y * perspective;
        const s = star.size * perspective;

        ctx.globalAlpha = star.opacity * (1 - star.z / canvas.width);
        ctx.fillStyle = star.color;

        ctx.beginPath();
        ctx.arc(x, y, s, 0, Math.PI * 2);
        ctx.fill();

        if (glowIntensity > 0) {
          ctx.shadowBlur = 10 * glowIntensity;
          ctx.shadowColor = star.color;
        }

        star.z -= starSpeed * speed * 2;
        if (star.z <= 0) {
          star.z = canvas.width;
        }

        if (twinkleIntensity > 0) {
          star.opacity += (Math.random() - 0.5) * twinkleIntensity * 0.1;
          star.opacity = Math.max(0.1, Math.min(1, star.opacity));
        }
      });

      ctx.restore();
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    starSpeed,
    density,
    hueShift,
    speed,
    glowIntensity,
    saturation,
    twinkleIntensity,
    transparent,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
      style={{ background: transparent ? "transparent" : "#000" }}
    />
  );
};

export default Galaxy;
