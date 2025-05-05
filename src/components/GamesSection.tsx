import { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { gameData, categories } from '../data/games.data';
import { GrimoireSystem } from './grimoire/GrimoireSystem';
import type { Game } from '../types/game.types';

const GamesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredGames = activeCategory === 'All' 
    ? gameData 
    : gameData.filter(game => game.category === activeCategory);

  return (
    <section id="games" className="py-20 bg-gradient-to-b from-wizware-dark-black to-wizware-black sacred-geometry">
      <div className="text-center mb-16 animate-magic-fade-in px-6">
        <h2 className="wizware-title text-4xl md:text-5xl mb-4">Our Magical Creations</h2>
        <p className="text-gray-300 max-w-3xl mx-auto font-quicksand">
          Explore our portfolio of enchanting games that will transport you to extraordinary worlds
          and teach valuable skills through immersive gameplay
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12 animate-magic-fade-in px-6" style={{ animationDelay: '0.2s' }}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 font-quicksand purple-glow-button ${
              activeCategory === category
                ? 'bg-wizware-gold text-wizware-black font-medium'
                : 'bg-wizware-dark-black text-gray-300 border border-wizware-gold/20 hover:border-wizware-gold/40'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="mb-16">
        <h3 className="text-2xl text-wizware-gold font-cinzel mb-8 text-center animate-magic-fade-in px-6" style={{ animationDelay: '0.3s' }}>
          Featured Games
        </h3>
        
        {filteredGames.filter(game => game.id === 1).map(game => (
          <div key={game.id} className="animate-magic-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="cosmic-card mx-6">
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-4">
                  <h4 className="text-3xl font-cinzel text-wizware-gold mb-2 flex items-center">
                    <Sparkles className="mr-2" size={24} />
                    {game.title}
                  </h4>
                  <p className="text-gray-300 mb-4 font-quicksand">{game.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {game.features?.map((feature, index) => (
                      <div key={index} className="cosmic-card p-4">
                        <feature.icon className="text-wizware-teal mb-2" size={20} />
                        <h5 className="text-wizware-teal font-cinzel text-lg mb-1">{feature.title}</h5>
                        <p className="text-gray-400 text-sm font-quicksand">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <a 
                      href={game.link} 
                      className="cosmic-button inline-flex items-center mb-6"
                    >
                      Enter the Tournament <ExternalLink size={16} className="ml-2" />
                    </a>
                    
                    <GrimoireSystem />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredGames.filter(game => game.featured && game.id !== 1).map((game, index) => (
            <GameCard key={game.id} game={game} index={index} featured />
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredGames.filter(game => !game.featured).map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </div>
    </section>
  );
};

interface GameCardProps {
  game: Game;
  index: number;
  featured?: boolean;
}

const GameCard = ({ game, index, featured }: GameCardProps) => (
  <div className={`cosmic-card group transition-all duration-500 hover:scale-[${featured ? '1.02' : '1.03'}] animate-magic-fade-in`} 
       style={{ animationDelay: `${(featured ? 0.6 : 0.8) + index * (featured ? 0.2 : 0.1)}s` }}>
    <div className={`relative h-${featured ? '64' : '48'} mb-${featured ? '6' : '4'} overflow-hidden rounded-lg`}>
      <img 
        src={game.image} 
        alt={game.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-wizware-black to-transparent"></div>
      <div className="absolute bottom-4 left-4">
        <span className="inline-block px-2 py-1 text-xs font-medium text-wizware-black bg-wizware-gold rounded-full">
          {game.category}
        </span>
      </div>
    </div>
    <h4 className={`text-${featured ? '2xl' : 'xl'} font-cinzel text-wizware-gold mb-2`}>{game.title}</h4>
    <p className={`text-gray-300 ${featured ? '' : 'text-sm'} mb-${featured ? '4' : '3'} ${featured ? '' : 'line-clamp-2'} font-quicksand`}>
      {game.description}
    </p>
    <a 
      href={game.link} 
      className={`inline-flex items-center text-${featured ? '' : 'sm'} text-wizware-gold hover:text-wizware-teal transition-colors font-quicksand`}
    >
      Learn More <ExternalLink size={featured ? 16 : 14} className="ml-1" />
    </a>
  </div>
);

export default GamesSection;
