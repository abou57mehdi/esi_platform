import React, { useEffect, useRef } from 'react';

const BubbleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match its display size
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    ctx.scale(dpr, dpr);

    // Particle system
    const particles: Particle[] = [];
    const particleCount = 80;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      originalSize: number;
      opacity: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.originalSize = Math.random() * 8 + 3; // Even larger bubbles
        this.size = this.originalSize;
        this.speedX = Math.random() * 0.4 - 0.2; // Slow and smooth movement
        this.speedY = Math.random() * 0.4 - 0.2;
        this.opacity = Math.random() * 0.6 + 0.3; // Higher opacity for more intense blue
        this.color = `rgba(29, 78, 216, ${this.opacity})`; // Deeper Blue (Tailwind blue-700)
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvasWidth) this.speedX *= -1;
        if (this.y <= 0 || this.y >= canvasHeight) this.speedY *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Add gradient for a more 3D effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        gradient.addColorStop(0, `rgba(59, 130, 246, ${this.opacity})`); // Vibrant blue center
        gradient.addColorStop(1, `rgba(29, 78, 216, ${this.opacity * 0.4})`); // Deep blue edge

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.clientWidth, canvas.clientHeight));
    }

    let animationFrameId: number;

    const animate = () => {
      if (!ctx) return;

      // Clear with white background
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.clientWidth, canvas.clientHeight);
        particles[i].draw(ctx);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-50"
    />
  );
};

export default BubbleBackground;