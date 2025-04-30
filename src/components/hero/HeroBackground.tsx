
import React from 'react';

const HeroBackground: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center magical-parallax">
        <div className="parallax-layer" style={{ transform: 'translateZ(-100px)' }}></div>
      </div>
      
      {/* Sacred geometry pattern overlay */}
      <div className="absolute inset-0 sacred-geometry opacity-10"></div>
    </>
  );
};

export default HeroBackground;
