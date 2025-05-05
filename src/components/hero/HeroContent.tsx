
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroContent: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="flex flex-col items-center mt-32">
          <h1 className="wizware-title text-4xl md:text-6xl lg:text-7xl mb-4 animate-magic-fade-in">
            WIZWARE
          </h1>
          
          <p className="wizware-subtitle text-xl md:text-2xl mb-8 max-w-2xl animate-magic-fade-in" style={{ animationDelay: '0.3s' }}>
            Where Code Becomes Magic
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-magic-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="#games" className="cosmic-button">
              Explore Our Games
            </a>
            <a href="#about" className="cosmic-button">
              Discover Our Story
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 mx-auto w-fit animate-bounce">
        <a href="#about" className="text-wizware-gold hover:text-wizware-teal transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </>
  );
};

export default HeroContent;
