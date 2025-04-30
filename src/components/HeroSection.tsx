
import React, { useState, useEffect } from 'react';
import StarBackground from './hero/StarBackground';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-wizware-black">
      {/* Background elements */}
      <HeroBackground />
      
      {/* Physics-enabled stars background */}
      <StarBackground />
      
      {/* Main content */}
      <HeroContent />
    </section>
  );
};

export default HeroSection;
