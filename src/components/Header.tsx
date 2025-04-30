
import React, { useState, useEffect } from 'react';
import { Menu, X, Wand2, Gamepad2 } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-wizware-black/90 backdrop-blur-md py-3 shadow-lg shadow-wizware-purple/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-cinzel font-bold text-wizware-gold flex items-center gap-2">
          <Wand2 className="text-wizware-gold" size={24} />
          WizWare
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link font-quicksand">About</a>
          <a href="#games" className="nav-link font-quicksand flex items-center">
            <Gamepad2 className="mr-1" size={16} />
            Our Magical Creations
          </a>
          <a href="#education" className="nav-link font-quicksand">Education</a>
          <a href="#team" className="nav-link font-quicksand">Team</a>
          <a href="#contact" className="nav-link font-quicksand">Contact</a>
          <a href="#" className="cosmic-button">
            Play Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-wizware-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-wizware-dark-black border-t border-wizware-gold/20 backdrop-blur-lg animate-magic-fade-in">
          <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a href="#about" className="nav-link font-quicksand" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#games" className="nav-link font-quicksand flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Gamepad2 className="mr-1" size={16} />
              Our Magical Creations
            </a>
            <a href="#education" className="nav-link font-quicksand" onClick={() => setIsMenuOpen(false)}>Education</a>
            <a href="#team" className="nav-link font-quicksand" onClick={() => setIsMenuOpen(false)}>Team</a>
            <a href="#contact" className="nav-link font-quicksand" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="#" className="cosmic-button text-center" onClick={() => setIsMenuOpen(false)}>
              Play Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
