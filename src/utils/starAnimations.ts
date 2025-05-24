/**
 * Applies interactive behavior to stars based on mouse position
 */
export const animateStarWithMouse = (
  star: HTMLElement, 
  mouseX: number, 
  mouseY: number
): void => {
  const rect = star.getBoundingClientRect();
  const starX = rect.left + rect.width / 2;
  const starY = rect.top + rect.height / 2;
  
  // Calculate distance from mouse to star
  const dx = mouseX - starX;
  const dy = mouseY - starY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  // Reduced interaction distance for more subtle tracking
  if (distance < 150) {
    const factor = 1 - distance / 150;
    // Reduced movement factor for gentler motion
    const moveX = dx * factor * -0.05; 
    const moveY = dy * factor * -0.05;
    
    star.setAttribute('style', `
      transform: translate(${moveX}px, ${moveY}px);
      opacity: ${0.4 + factor * 0.3};
      filter: blur(${Math.max(0, 0.5 - factor * 0.5)}px);
      transition: transform 1.5s ease, opacity 1.5s ease, filter 1.5s ease;
    `);
  } else {
    star.setAttribute('style', `
      transform: translate(0, 0);
      transition: transform 2s ease-out, opacity 2s ease-out, filter 2s ease-out;
    `);
  }
}

/**
 * Creates initial stars in the container element
 */
export const createInitialStars = (container: HTMLDivElement | null): HTMLDivElement[] => {
  if (!container) return [];
  
  const stars: HTMLDivElement[] = [];
  
  // Clear existing stars
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  
  // Create new stars - reduced number for less chaos
  for (let i = 0; i < 69; i++) {
    const size = Math.random() * 2.5 + 0.5;
    const star = document.createElement('div');
    
    // Create star shape with CSS
    star.className = 'cosmic-star';
    star.style.position = 'absolute';
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Use softer star shape
    if (Math.random() > 0.7) {
      star.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
    } else {
      star.style.clipPath = 'polygon(50% 0%, 50% 30%, 100% 50%, 50% 70%, 50% 100%, 0% 50%)';
    }
    star.style.backgroundColor = '#FFDB58'; // Amber Gold color
    
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.opacity = `${Math.random() * 0.3 + 0.2}`;
    star.style.transition = 'transform 1.5s ease-out, opacity 1.5s ease';
    star.style.boxShadow = '0 0 2px rgba(255, 215, 0, 0.5)';
    
    // Add subtle pulsing animation to some stars with longer duration
    if (Math.random() > 0.6) {
      star.style.animation = `pulse-star ${Math.random() * 8 + 4}s ease-in-out infinite`;
    }
    
    container.appendChild(star);
    stars.push(star);
  }
  
  return stars;
}

/**
 * Creates a magic particle at the specified coordinates
 */
export const createMagicParticle = (
  container: HTMLDivElement | null,
  x: number,
  y: number
): void => {
  if (!container) return;
  
  // Reduced frequency of particle creation for subtlety
  if (Math.random() > 0.1) return;
  
  const particle = document.createElement('div');
  const size = Math.random() * 3 + 1;
  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * 15;
  
  // Offset from cursor
  const particleX = x + Math.cos(angle) * distance;
  const particleY = y + Math.sin(angle) * distance;
  
  particle.className = 'magic-particle';
  
  // Create star shape with different colors
  const colors = ['#FFD700', '#FFEC8B', '#FFF8DC', '#FFFACD'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${particleX}px`;
  particle.style.top = `${particleY}px`;
  
  // Make particles use softer shapes
  if (Math.random() > 0.7) {
    particle.style.borderRadius = '50%';
    particle.style.background = `radial-gradient(circle, ${color} 0%, ${color}77 50%, transparent 100%)`;
  } else {
    particle.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
    particle.style.backgroundColor = color;
  }
  
  particle.style.boxShadow = `0 0 ${size * 0.8}px ${color}`;
  particle.style.opacity = '0';
  particle.style.animationDelay = '0s';
  
  container.appendChild(particle);
  
  // Remove particles after animation to avoid memory leaks
  setTimeout(() => {
    if (container && container.contains(particle)) {
      container.removeChild(particle);
    }
  }, 6000);
}
