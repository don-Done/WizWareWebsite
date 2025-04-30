
import { StarProps } from '../types/star.types';

export const handleStarCollision = (
  star1: StarProps,
  star2: StarProps,
  star1Element: HTMLDivElement | null,
  star2Element: HTMLDivElement | null,
) => {
  const dx = star1.position.x - star2.position.x;
  const dy = star1.position.y - star2.position.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  const minDistance = (star1.size + star2.size) * 0.2;
  
  if (distance < minDistance) {
    const angle = Math.atan2(dy, dx);
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    
    const vx1 = star1.velocity.vx * cos + star1.velocity.vy * sin;
    const vy1 = star1.velocity.vy * cos - star1.velocity.vx * sin;
    const vx2 = star2.velocity.vx * cos + star2.velocity.vy * sin;
    const vy2 = star2.velocity.vy * cos - star2.velocity.vx * sin;
    
    const m1 = star1.mass;
    const m2 = star2.mass;
    const totalMass = m1 + m2;
    
    const v1Final = ((m1 - m2) * vx1 + 2 * m2 * vx2) / totalMass;
    const v2Final = ((m2 - m1) * vx2 + 2 * m1 * vx1) / totalMass;
    
    star1.velocity.vx = v1Final * cos - vy1 * sin;
    star1.velocity.vy = v1Final * sin + vy1 * cos;
    star2.velocity.vx = v2Final * cos - vy2 * sin;
    star2.velocity.vy = v2Final * sin + vy2 * cos;
    
    const overlap = minDistance - distance;
    const moveX = (overlap * 0.5 * dx) / distance;
    const moveY = (overlap * 0.5 * dy) / distance;
    
    star1.position.x += moveX;
    star1.position.y += moveY;
    star2.position.x -= moveX;
    star2.position.y -= moveY;
    
    if (star1Element) {
      star1Element.classList.remove('animate-collision');
      void star1Element.offsetWidth;
      star1Element.classList.add('animate-collision');
    }
    
    if (star2Element) {
      star2Element.classList.remove('animate-collision');
      void star2Element.offsetWidth;
      star2Element.classList.add('animate-collision');
    }
  }
};

export const updateStarPosition = (star: StarProps, deltaTime: number) => {
  star.position.x += star.velocity.vx * deltaTime;
  star.position.y += star.velocity.vy * deltaTime;

  star.velocity.vx *= 0.998;
  star.velocity.vy *= 0.998;

  if (star.position.x <= 0 || star.position.x >= 100) {
    star.velocity.vx = -star.velocity.vx * 0.97;
    star.position.x = Math.max(0, Math.min(100, star.position.x));
  }
  
  if (star.position.y <= 0 || star.position.y >= 100) {
    star.velocity.vy = -star.velocity.vy * 0.97;
    star.position.y = Math.max(0, Math.min(100, star.position.y));
  }
};

export const handleMouseInteraction = (
  star: StarProps,
  mouseX: number,
  mouseY: number,
  starElement: HTMLDivElement | null
) => {
  const dx = mouseX - star.position.x;
  const dy = mouseY - star.position.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  if (distance < 15) {
    const forceFactor = 0.02 * (1 - distance / 15);
    star.velocity.vx += dx * forceFactor;
    star.velocity.vy += dy * forceFactor;
    
    const maxVelocity = 0.15;
    const currentVelocity = Math.sqrt(star.velocity.vx * star.velocity.vx + star.velocity.vy * star.velocity.vy);
    if (currentVelocity > maxVelocity) {
      star.velocity.vx = (star.velocity.vx / currentVelocity) * maxVelocity;
      star.velocity.vy = (star.velocity.vy / currentVelocity) * maxVelocity;
    }

    if (starElement) {
      starElement.style.boxShadow = '0 0 10px rgba(128, 0, 128, 0.6)';
    }
  } else if (starElement) {
    starElement.style.boxShadow = '0 0 2px rgba(255, 215, 0, 0.5)';
  }
};
