
import React from 'react';
import { Mail, MapPin, Send, MessageSquare, HelpCircle } from 'lucide-react';

const FAQ = [
  {
    question: "What is Grand Wizard Tournament?",
    answer: "Grand Wizard Tournament is an educational game that teaches programming concepts through a magical spell-crafting system. Players learn to code while competing in magical challenges and tournaments."
  },
  {
    question: "Is the game suitable for children?",
    answer: "Yes! The game is designed for players ages 10 and up. The visual programming system is intuitive enough for children while still teaching real coding concepts that adults can appreciate too."
  },
  {
    question: "Do I need programming experience to play?",
    answer: "Not at all! The game is designed for beginners and teaches programming concepts from the ground up. More experienced programmers will enjoy the advanced challenges and optimization puzzles."
  },
  {
    question: "What platforms is the game available on?",
    answer: "Grand Wizard Tournament is currently available on PC (Windows/Mac/Linux), with mobile versions for iOS and Android. Console versions are in development."
  },
  {
    question: "How does the educational aspect work?",
    answer: "The game teaches programming concepts by having players create spells using visual programming blocks. These blocks represent real programming concepts like variables, loops, and conditionals."
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-wizware-dark-black to-wizware-black sacred-geometry">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-magic-fade-in">
          <h2 className="wizware-title text-4xl md:text-5xl mb-4">Join Our Magical Community</h2>
          <p className="text-gray-300 max-w-3xl mx-auto font-quicksand">
            Stay updated with our latest releases, behind-the-scenes content, and exclusive offers
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-magic-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="wizware-subtitle text-2xl md:text-3xl mb-6">Get in Touch</h3>
            <p className="text-gray-300 mb-8 font-quicksand">
              Have questions, suggestions, or just want to chat about games? 
              We'd love to hear from you! Our community is what makes the magic happen.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start cosmic-card p-4">
                <Mail className="text-wizware-gold mt-1 mr-4 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-white font-medium mb-1 font-cinzel">Email Us</h4>
                  <p className="text-gray-400 font-quicksand">contact@wizware-games.com</p>
                </div>
              </div>
              
              <div className="flex items-start cosmic-card p-4">
                <MapPin className="text-wizware-gold mt-1 mr-4 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-white font-medium mb-1 font-cinzel">Visit Our Studio</h4>
                  <p className="text-gray-400 font-quicksand">123 Magic Lane, Digital City, 98765</p>
                </div>
              </div>

              <div className="flex items-start cosmic-card p-4">
                <MessageSquare className="text-wizware-gold mt-1 mr-4 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-white font-medium mb-1 font-cinzel">Community Discord</h4>
                  <p className="text-gray-400 font-quicksand">Join our active community of players, educators, and developers</p>
                  <a href="#" className="text-wizware-teal hover:text-wizware-gold transition-colors text-sm mt-1 inline-block font-quicksand">
                    discord.gg/wizwaregames
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10 animate-magic-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl text-wizware-gold font-cinzel mb-4">Follow the Magic</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="cosmic-card inline-block p-3 hover:text-wizware-gold transition-colors cosmic-glow"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="cosmic-card inline-block p-3 hover:text-wizware-gold transition-colors cosmic-glow"
                  aria-label="Discord"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="cosmic-card inline-block p-3 hover:text-wizware-gold transition-colors cosmic-glow"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="cosmic-card inline-block p-3 hover:text-wizware-gold transition-colors cosmic-glow"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-magic-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="wizware-subtitle text-2xl md:text-3xl mb-6">Join Our Newsletter</h3>
            <p className="text-gray-300 mb-8 font-quicksand">
              Subscribe to get early access to beta releases, news about upcoming games, 
              and exclusive content only available to our community members.
            </p>
            
            <form className="space-y-6">
              <div className="cosmic-card p-4 transition-all duration-300 focus-within:scale-[1.01]">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-quicksand">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-wizware-dark-black border border-wizware-purple/20 rounded-lg focus:border-wizware-gold/50 focus:outline-none focus:ring-1 focus:ring-wizware-gold/30 transition font-quicksand"
                />
              </div>
              
              <div className="cosmic-card p-4 transition-all duration-300 focus-within:scale-[1.01]">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-quicksand">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-wizware-dark-black border border-wizware-purple/20 rounded-lg focus:border-wizware-gold/50 focus:outline-none focus:ring-1 focus:ring-wizware-gold/30 transition font-quicksand"
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full cosmic-button flex items-center justify-center group"
                >
                  Subscribe <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <p className="text-gray-400 text-xs text-center font-quicksand">
                By subscribing, you agree to our Privacy Policy and to receive email updates.
              </p>
            </form>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20 animate-magic-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-cinzel text-wizware-gold mb-2">Frequently Asked Questions</h3>
            <p className="text-gray-300 font-quicksand">Have questions? We have magical answers!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQ.map((item, index) => (
              <div 
                key={index} 
                className="cosmic-card animate-magic-fade-in"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="flex items-start">
                  <HelpCircle className="text-wizware-gold mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-wizware-teal font-cinzel text-lg mb-2">{item.question}</h4>
                    <p className="text-gray-300 text-sm font-quicksand">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
