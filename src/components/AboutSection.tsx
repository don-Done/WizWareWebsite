import { Wand2, Sparkles, Gamepad2, Users2, BookOpen } from 'lucide-react';
import Header from './Header';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-wizware-black to-wizware-dark-black sacred-geometry">
      <Header />
      <div className="container mx-auto px-2">
        <div className="text-center mb-16 animate-magic-fade-in mt-20">
        <h3 className="wizware-subtitle text-3xl md:text-3xl mb-4">Crafting Digital Magic</h3>
          <p className="text-gray-300 text-2xl max-w-3xl mx-auto font-quicksand">
            Founded by passionate gamers and wizards, WizWare is dedicated to creating 
            immersive gaming experiences that blend fantasy, strategy, and storytelling while
            transforming education through engaging gameplay.
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="order-1 md:order-2 space-y-8">
            <div className="animate-magic-fade-in">
              <p className="text-gray-300 text-2xl text-center font-quicksand">
                At WizWare, we believe games are the modern form of magic - experiences that transport 
                players to new worlds, challenge their minds, and ignite their imagination. We want to create games that captivate, inspire,
                and teach valuable skills through engaging gameplay.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="cosmic-card animate-magic-fade-in" style={{ animationDelay: '0.2s' }}>
                <Wand2 className="text-wizware-gold mb-4" size={28} />
                <h4 className="text-wizware-gold font-cinzel text-3xl mb-2">Creative Magic</h4>
                <p className="text-gray-300 text-2xl font-quicksand">Pushing the boundaries of imagination with unique game mechanics</p>
              </div>

              <div className="cosmic-card animate-magic-fade-in" style={{ animationDelay: '0.4s' }}>
                <Sparkles className="text-wizware-purple mb-4" size={28} />
                <h4 className="text-wizware-purple font-cinzel text-3xl mb-2">Polished Experiences</h4>
                <p className="text-gray-300 text-2xl font-quicksand">Crafting games with attention to detail</p>
              </div>

              <div className="cosmic-card animate-magic-fade-in" style={{ animationDelay: '0.6s' }}>
                <Gamepad2 className="text-wizware-teal mb-4" size={28} />
                <h4 className="text-wizware-teal font-cinzel text-3xl mb-2">Player-Focused</h4>
                <p className="text-gray-300 text-2xl font-quicksand">Creating engaging gameplay that respects player time</p>
              </div>

              <div className="cosmic-card animate-magic-fade-in" style={{ animationDelay: '0.8s' }}>
                <Users2 className="text-wizware-red mb-4" size={28} />
                <h4 className="text-wizware-red font-cinzel text-3xl mb-2">Community</h4>
                <p className="text-gray-300 text-2xl font-quicksand">Building games with and for our amazing community</p>
              </div>
            </div>

            <div className="mt-8 animate-magic-fade-in" style={{ animationDelay: '1s' }}>
              <div className="cosmic-card">
                <h4 className="text-wizware-gold font-cinzel text-3xl mb-4 flex items-center">
                  <BookOpen className="text-wizware-gold mr-2" size={24} />
                  Our Mission
                </h4>
                <p className="text-gray-300 mb-4 text-2xl font-quicksand">
                  WizWare is dedicated to transforming education through immersive gameplay. We believe that the best
                  way to learn is through play, and our games blend entertainment with educational concepts.
                </p>
                <div className="spell-code">
                  <p className="text-2xl font-code">
                    <span className="text-wizware-purple">function</span> <span className="text-wizware-gold">createMagic</span>() {"{"}
                    <br />
                    &nbsp;&nbsp;<span className="text-wizware-purple">const</span> elements = [<span className="text-wizware-teal">"Creativity"</span>, <span className="text-wizware-teal">"Learning"</span>, <span className="text-wizware-teal">"Innovation"</span>];
                    <br />
                    &nbsp;&nbsp;<span className="text-wizware-purple">return</span> elements.<span className="text-wizware-gold">combine</span>(<span className="text-wizware-teal">"Gaming Experience"</span>);
                    <br />
                    {"}"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
