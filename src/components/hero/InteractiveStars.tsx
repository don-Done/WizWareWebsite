
import React, { useEffect, useRef } from 'react';
import { createInitialStars, animateStarWithMouse, createMagicParticle } from '../../utils/starAnimations';

interface InteractiveStarsProps {
  mousePosition: { x: number; y: number };
}

const InteractiveStars: React.FC<InteractiveStarsProps> = ({ mousePosition }) => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    // Create initial stars
    if (particlesRef.current) {
      starsRef.current = createInitialStars(particlesRef.current);
    }
    
    // Create magic particle on mouse position
    if (particlesRef.current) {
      createMagicParticle(particlesRef.current, mousePosition.x, mousePosition.y);
    }
    
    // Animate existing stars based on mouse position
    const animateStars = () => {
      if (!particlesRef.current) return;
      
      const stars = document.querySelectorAll('.cosmic-star');
      stars.forEach((star) => {
        animateStarWithMouse(star as HTMLElement, mousePosition.x, mousePosition.y);
      });
      
      requestAnimationFrame(animateStars);
    };
    
    const animationId = requestAnimationFrame(animateStars);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition]);
  
  return <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-10"></div>;
};

export default InteractiveStars;
