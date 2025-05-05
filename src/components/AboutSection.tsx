import { Wand2, Sparkles, Gamepad2, Users2, BookOpen } from 'lucide-react';
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-wizware-black to-wizware-dark-black sacred-geometry">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-magic-fade-in">
          <h2 className="wizware-title text-4xl md:text-5xl mb-4">Our Magical Journey</h2>
          <p className="text-gray-300 max-w-3xl mx-auto font-quicksand">
            Founded by passionate gamers and wizards of code, WizWare is dedicated to creating 
            immersive gaming experiences that blend fantasy, strategy, and storytelling while
            transforming education through engaging gameplay.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="cosmic-card animate-magic-fade-in">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-wizware-teal animate-pulse-glow"
                    style={{
                      width: `${Math.random() * 6 + 3}px`,
                      height: `${Math.random() * 6 + 3}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      zIndex: 2,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-8">
            <div className="animate-magic-fade-in">
              <h3 className="wizware-subtitle text-2xl md:text-3xl mb-4">Crafting Digital Magic Since 2020</h3>
              <p className="text-gray-300 font-quicksand">
                At WizWare, we believe games are the modern form of magic - experiences that transport 
                players to new worlds, challenge their minds, and ignite their imagination. Our team of 
                developers, artists, and storytellers work together to create games that captivate, inspire,
                and teach valuable programming skills through engaging gameplay.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="cosmic-card animate-magic-fade-in" style={{ animationDelay: '0.2s' }}>
                <Wand2 className="text-wizware-gold mb-4" size={28} />
                <h4 className="text-wizware-gold font-cinzel text-xl mb-2">Creative Magic</h4>
                <p className="text-gray-400 text-sm font-quicksand">Pushing the boundaries of imagination with unique game mechanics</p>
              </div>
              
              <div className="cosmic-card animate-magic-fade-in" style={{ animationDelay: '0.4s' }}>
                <Sparkles className="text-wizware-purple mb-4" size={28} />
                <h4 className="text-wizware-purple font-cinzel text-xl mb-2">Polished Experiences</h4>
                <p className="text-gray-400 text-sm font-quicksand">Crafting games with attention to every detail</p>
              </div>
              
              <div className="cosmic-card animate-magic-fade-in" style={{ animationDelay: '0.6s' }}>
                <Gamepad2 className="text-wizware-teal mb-4" size={28} />
                <h4 className="text-wizware-teal font-cinzel text-xl mb-2">Player-Focused</h4>
                <p className="text-gray-400 text-sm font-quicksand">Creating engaging gameplay that respects player time</p>
              </div>
              
              <div className="cosmic-card animate-magic-fade-in" style={{ animationDelay: '0.8s' }}>
                <Users2 className="text-wizware-gold mb-4" size={28} />
                <h4 className="text-wizware-gold font-cinzel text-xl mb-2">Community</h4>
                <p className="text-gray-400 text-sm font-quicksand">Building games with and for our amazing community</p>
              </div>
            </div>

            <div className="mt-8 animate-magic-fade-in" style={{ animationDelay: '1s' }}>
              <div className="cosmic-card">
                <h4 className="text-wizware-gold font-cinzel text-xl mb-4 flex items-center">
                  <BookOpen className="text-wizware-gold mr-2" size={24} />
                  Our Mission
                </h4>
                <p className="text-gray-300 mb-4 font-quicksand">
                  WizWare is dedicated to transforming education through immersive gameplay. We believe that the best
                  way to learn is through play, and our games blend entertainment with educational concepts.
                </p>
                <div className="spell-code">
                  <p className="text-sm font-code">
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
