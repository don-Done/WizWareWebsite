
import { useRef, useEffect } from 'react';
import { StarProps } from '../types/star.types';

export const useStarAnimation = (starCount: number = 40) => {
  const starsRef = useRef<(HTMLDivElement | null)[]>([]);
  const starsDataRef = useRef<StarProps[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    starsDataRef.current = Array(starCount).fill(0).map(() => ({
      size: Math.random() * 2 + 1,
      position: { 
        x: Math.random() * 100, 
        y: Math.random() * 100 
      },
      velocity: { 
        vx: 0, 
        vy: 0 
      },
      opacity: Math.random() * 0.5 + 0.2,
      mass: 1
    }));

    const twinkleStars = () => {
      starsDataRef.current.forEach((star, index) => {
        const starElement = starsRef.current[index];
        if (starElement) {
          star.opacity = 0.2 + Math.random() * 0.5;
          starElement.style.opacity = star.opacity.toString();
        }
      });
      animationRef.current = requestAnimationFrame(twinkleStars);
    };

    animationRef.current = requestAnimationFrame(twinkleStars);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [starCount]);

  return { starsRef, starsDataRef };
};
