
import React from 'react';
import { Code, BookOpen, BrainCircuit, Repeat, FunctionSquare, Braces, SplitSquareVertical, CircleDot, ArrowRight, Circle, Square, CornerDownRight } from 'lucide-react';

const EducationalSection = () => {
  const educationalConcepts = [
    {
      icon: SplitSquareVertical,
      title: 'Sequential Logic',
      description: 'Learn how computers execute instructions in order, step-by-step',
      code: 'castSpell();\nmoveForward();\ncastSpell();'
    },
    {
      icon: Braces,
      title: 'Conditional Statements',
      description: 'Make decisions in your code based on different conditions',
      code: 'if (enemyNearby) {\n  castDefensiveSpell();\n} else {\n  moveForward();\n}'
    },
    {
      icon: CircleDot,
      title: 'Variables and Data',
      description: 'Store and manipulate information in your spells',
      code: 'let mana = 100;\nlet spellPower = 25;\ncastSpell(spellPower);\nmana -= spellPower;'
    },
    {
      icon: Repeat,
      title: 'Loops',
      description: 'Repeat actions efficiently without duplicating code',
      code: 'for (let i = 0; i < 5; i++) {\n  castFireball();\n  wait(1);\n}'
    },
    {
      icon: FunctionSquare,
      title: 'Functions',
      description: 'Create reusable spell components to build complex magic',
      code: 'function healAllAllies() {\n  const allies = findAllies();\n  for (let ally of allies) {\n    healTarget(ally, 50);\n  }\n}'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-wizware-black to-wizware-dark-black sacred-geometry">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-magic-fade-in">
          <h2 className="wizware-title text-4xl md:text-5xl mb-4">Educational Approach</h2>
          <p className="text-gray-300 max-w-3xl mx-auto font-quicksand">
            Our games teach real programming concepts through magical metaphors, making learning engaging and fun
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-magic-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="cosmic-card h-full">
              <div className="flex items-center mb-6">
                <Code className="text-wizware-gold mr-3" size={28} />
                <h3 className="text-2xl font-cinzel text-wizware-gold">Code Through Magic</h3>
              </div>
              
              <p className="text-gray-300 mb-8 font-quicksand">
                In the Grand Wizard Tournament, players learn programming concepts by crafting magical spells.
                Our visual programming system uses magical metaphors to teach real coding skills that transfer
                to real-world programming languages.
              </p>
              
              <div className="space-y-6">
                <div className="cosmic-card p-4 flex items-start">
                  <BookOpen className="text-wizware-purple mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-wizware-purple font-cinzel text-lg mb-2">Learn by Doing</h4>
                    <p className="text-gray-400 text-sm font-quicksand">
                      Players master programming concepts by solving puzzles and challenges in an immersive magical world,
                      creating lasting knowledge through hands-on experience.
                    </p>
                  </div>
                </div>
                
                <div className="cosmic-card p-4 flex items-start">
                  <BrainCircuit className="text-wizware-teal mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-wizware-teal font-cinzel text-lg mb-2">Immediate Feedback</h4>
                    <p className="text-gray-400 text-sm font-quicksand">
                      See your code in action instantly as magical effects appear in the game world. 
                      This immediate feedback loop accelerates learning and engagement.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="spell-code">
                  <p className="text-sm font-code">
                    <span className="text-wizware-purple">class</span> <span className="text-wizware-gold">Wizard</span> {"{"}
                    <br />
                    &nbsp;&nbsp;<span className="text-wizware-purple">constructor</span>() {"{"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-wizware-purple">this</span>.spells = [];
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-wizware-purple">this</span>.mana = 100;
                    <br />
                    &nbsp;&nbsp;{"}"}
                    <br />
                    &nbsp;&nbsp;<span className="text-wizware-purple">learnSpell</span>(spell) {"{"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-wizware-purple">this</span>.spells.push(spell);
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-wizware-purple">console</span>.log(<span className="text-wizware-teal">`Learned ${"{"}spell.name{"}"} spell!`</span>);
                    <br />
                    &nbsp;&nbsp;{"}"}
                    <br />
                    {"}"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-cinzel text-wizware-teal mb-6 animate-magic-fade-in" style={{ animationDelay: '0.3s' }}>
              Magical Blueprint System
            </h3>
            
            {/* UE5-style Blueprint Component */}
            <div className="mb-8 overflow-hidden rounded-lg bg-[#1a1c1f] border border-[#2a2c35] p-4 animate-magic-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="mb-3 pb-2 border-b border-[#2a2c35]">
                <h4 className="text-[#0ea5e9] font-cinzel">Fireball Spell Blueprint</h4>
              </div>
              
              <div className="grid grid-cols-[auto_1fr] gap-y-4 gap-x-2">
                {/* Start node */}
                <div className="flex items-center justify-center">
                  <div className="bg-[#2D4F67] rounded-md w-6 h-6 flex items-center justify-center">
                    <Circle size={14} className="text-[#33C3F0]" />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-[#33C3F0] font-semibold text-sm">Event Begin Spell</div>
                  <ArrowRight size={14} className="text-[#33C3F0] ml-2" />
                </div>
                
                {/* Check mana node */}
                <div className="flex items-center justify-center">
                  <div className="bg-[#4F2D67] rounded-md w-6 h-6 flex items-center justify-center">
                    <Square size={14} className="text-[#A976C3]" />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="ml-2 bg-[#252832] text-[#E0E0E0] font-mono text-xs p-2 rounded border border-[#3A3D4A]">
                    if (mana &gt;= 30)
                  </div>
                </div>
                
                {/* Branch lines */}
                <div className="flex justify-center relative h-6">
                  <div className="absolute top-0 bottom-0 w-px bg-[#A976C3]"></div>
                </div>
                <div className="grid grid-cols-2 h-6">
                  <div className="relative">
                    <div className="absolute top-0 left-0 h-px w-6 bg-[#3eb51f]"></div>
                    <div className="absolute top-0 left-6 h-full w-px bg-[#3eb51f]"></div>
                    <div className="absolute bottom-0 left-6 right-0 h-px bg-[#3eb51f]"></div>
                    <div className="absolute bottom-0 right-0 text-xs text-[#3eb51f]">True</div>
                  </div>
                  <div className="relative">
                    <div className="absolute top-0 right-0 h-px w-6 bg-[#b51f1f]"></div>
                    <div className="absolute top-0 right-6 h-full w-px bg-[#b51f1f]"></div>
                    <div className="absolute bottom-0 right-6 left-0 h-px bg-[#b51f1f]"></div>
                    <div className="absolute bottom-0 left-0 text-xs text-[#b51f1f]">False</div>
                  </div>
                </div>
                
                {/* True path */}
                <div className="flex items-center justify-center">
                  <div className="bg-[#2D6730] rounded-md w-6 h-6 flex items-center justify-center">
                    <Square size={14} className="text-[#3eb51f]" />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="ml-2 bg-[#252832] text-[#E0E0E0] font-mono text-xs p-2 rounded border border-[#3A3D4A] w-full">
                    createFireball(position, target, power=30);
                  </div>
                </div>
                
                <div className="flex justify-center relative h-6">
                  <div className="absolute top-0 bottom-0 w-px bg-[#3eb51f]"></div>
                </div>
                <div className="h-6"></div>
                
                <div className="flex items-center justify-center">
                  <div className="bg-[#2D6730] rounded-md w-6 h-6 flex items-center justify-center">
                    <Square size={14} className="text-[#3eb51f]" />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="ml-2 bg-[#252832] text-[#E0E0E0] font-mono text-xs p-2 rounded border border-[#3A3D4A] w-full">
                    depleateMana(30);
                  </div>
                </div>
                
                {/* False path */}
                <div className="flex items-center justify-center row-start-4 row-span-3 col-start-1">
                  <div className="relative h-full">
                    <div className="absolute right-3 top-6 bottom-0 w-px bg-[#b51f1f]"></div>
                    <div className="absolute top-20 right-3 h-px w-10 bg-[#b51f1f]"></div>
                    <div className="absolute top-20 right-10 w-px h-6 bg-[#b51f1f]"></div>
                    <CornerDownRight size={12} className="text-[#b51f1f] absolute right-10 top-[96px]" />
                  </div>
                </div>
                <div className="col-start-2 row-start-7">
                  <div className="flex items-center mt-2">
                    <div className="bg-[#673D2D] rounded-md w-6 h-6 flex items-center justify-center">
                      <Square size={14} className="text-[#C39076]" />
                    </div>
                    <div className="ml-2 bg-[#252832] text-[#E0E0E0] font-mono text-xs p-2 rounded border border-[#3A3D4A]">
                      showWarning("Not enough mana!");
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {educationalConcepts.map((concept, index) => (
                <div 
                  key={index} 
                  className="cosmic-card animate-magic-fade-in"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="flex items-start">
                    <concept.icon className="text-wizware-gold mt-1 mr-3 flex-shrink-0" size={24} />
                    <div className="flex-grow">
                      <h4 className="text-wizware-gold font-cinzel text-lg mb-2">{concept.title}</h4>
                      <p className="text-gray-300 mb-3 font-quicksand">{concept.description}</p>
                      
                      {/* UE5-style blueprints for code examples */}
                      <div className="bg-[#1a1c1f] border border-[#2a2c35] rounded-md p-3 overflow-x-auto">
                        <div className="font-mono text-xs text-[#E0E0E0] whitespace-pre leading-relaxed">
                          {concept.code.split('\n').map((line, i) => (
                            <div key={i} className="flex">
                              <span className="text-[#555] w-5 inline-block">{i+1}</span>
                              <span className="flex-1">{line}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 cosmic-card animate-magic-fade-in" style={{ animationDelay: '0.9s' }}>
              <h4 className="text-wizware-gold font-cinzel text-lg mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
                </svg>
                Skills that Transfer
              </h4>
              <p className="text-gray-300 font-quicksand">
                The programming concepts learned in our games directly transfer to real-world coding languages like JavaScript, Python, and C#, giving players valuable skills for potential careers in technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;
