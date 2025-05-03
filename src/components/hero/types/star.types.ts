
export interface StarProps {
  size: number;
  position: {
    x: number;
    y: number;
  };
  velocity: {
    vx: number;
    vy: number;
  };
  opacity: number;
  mass: number;
  twinkleSpeed: number;
  twinklePhase: number;
  isCircle: boolean;
}
