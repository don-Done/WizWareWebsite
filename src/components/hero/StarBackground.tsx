
import React, { useEffect, useRef } from 'react';
import { StarProps } from './types/star.types';

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsDataRef = useRef<StarProps[]>([]); // Explicitly type starsDataRef
  const animationRef = useRef<number>(0);
  const starCount = 220; // Increased for better coverage

  // Initialize stars on component mount
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to fullscreen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create initial star data with more variety
    starsDataRef.current = Array(starCount).fill(0).map(() => ({
      size: Math.random() * 2.5 + 0.5, // More varied sizes
      position: { 
        x: Math.random() * canvas.width, 
        y: Math.random() * canvas.height 
      },
      velocity: { 
        vx: (Math.random() - 0.5) * 0.05, // Slow movement
        vy: (Math.random() - 0.5) * 0.05
      },
      opacity: Math.random() * 0.7 + 0.2, // More varied opacity
      mass: Math.random() * 0.5 + 0.5,
      twinkleSpeed: Math.random() * 0.01 + 0.005, // Individual twinkle speeds
      twinklePhase: Math.random() * Math.PI * 2, // Random starting phase
      isCircle: Math.random() > 0.7 // Mix of shapes
    }));

    // Animation function
    const animateStars = () => {
      if (!canvas || !ctx) return;
      
      // Clear canvas
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      
      // Update and draw stars
      const time = performance.now() * 0.001; // Current time in seconds
      
      starsDataRef.current.forEach((star) => {
        // Update position with subtle movement
        star.position.x += star.velocity.vx;
        star.position.y += star.velocity.vy;
        
        // Wrap around edges
        if (star.position.x < 0) star.position.x = canvas.width;
        if (star.position.x > canvas.width) star.position.x = 0;
        if (star.position.y < 0) star.position.y = canvas.height;
        if (star.position.y > canvas.height) star.position.y = 0;
        
        // Calculate twinkling effect
        const twinkle = Math.sin(time * star.twinkleSpeed * 3 + star.twinklePhase) * 0.3 + 0.7;
        const currentOpacity = star.opacity * twinkle;
        
        // Draw star
        ctx.save();
        ctx.translate(star.position.x, star.position.y);
        
        const amberGold = '#FFDB58';
        if (star.isCircle) {
          // Draw circle star with gradient
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, star.size * 3);
          gradient.addColorStop(0, `rgba(255, 219, 88, ${currentOpacity * 0.8})`); // Slightly less opaque center
          gradient.addColorStop(1, 'rgba(255, 219, 88, 0)'); // Fully transparent outer edge

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(0, 0, star.size * 3, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Draw star polygon
          
          ctx.fillStyle = `rgba(255, 219, 88, ${currentOpacity})`;
          ctx.beginPath(); 
          // Draw 4-sided star
          ctx.moveTo(0, -star.size * 2); // Top point
          ctx.lineTo(star.size * 0.75, -star.size * 0.75); // Top-right inner
          ctx.lineTo(star.size * 2, 0); // Right point
          ctx.lineTo(star.size * 0.75, star.size * 0.75); // Bottom-right inner
          ctx.lineTo(0, star.size * 2); // Bottom point
          ctx.lineTo(-star.size * 0.75, star.size * 0.75); // Bottom-left inner
          ctx.lineTo(-star.size * 2, 0); // Left point
          ctx.lineTo(-star.size * 0.75, -star.size * 0.75); // Top-left inner
          


          ctx.closePath();
          ctx.fill();
          
          // Add subtle glow for some stars
          if (star.size > 1.5) {
            ctx.shadowColor = `rgba(255, 219, 88, 0.5)`;
            ctx.shadowBlur = 5;
          }
        }
        
        ctx.restore();
      });
      
      animationRef.current = requestAnimationFrame(animateStars);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animateStars);

    // Cleanup animation and event listener on unmount
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Canvas for stars */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />
    </div>
  );
};

export default StarBackground;

