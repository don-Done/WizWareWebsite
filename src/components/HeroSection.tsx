
import React, { useState, useEffect } from 'react';
import StarBackground from './hero/StarBackground';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-wizware-black z-0 pt-20">
        {/* Background elements */}
        <HeroBackground />     
        {/* Physics-enabled stars background */}
        <StarBackground />
        
        <HeroContent />
    </section>
  );
};

export default HeroSection;
