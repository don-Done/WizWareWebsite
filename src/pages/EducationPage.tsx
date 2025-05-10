import React, { useState, useEffect, useRef } from 'react';
import { Book, BrainCircuit, Award, PieChart, Star, X, Menu, ArrowRight, Sparkles } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import Header from '../components/Header';

// Define types for the concept data
interface Example {
  name: string;
  skillLevel: number;
}

interface ConceptData {
  id: string;
  name: string;
  description: string;
  mastery: number;
  usageCount: number;
  dependencies: string[];
  examples: Example[];
  codeEquivalent: string;
  nextConcepts: string[];
  reflection: string;
}

// Educational tracking data with node types and programming concepts
const conceptData: ConceptData[] = [
  {
    id: 'magic',
    name: 'Magic Nodes',
    description: 'Core spell effects and functionality (Functions)',
    mastery: 0.85,
    usageCount: 104,
    dependencies: [],
    examples: [
      { name: 'Fireball casting', skillLevel: 0.9 },
      { name: 'Ice barrier creation', skillLevel: 0.8 },
      { name: 'Lightning chain generation', skillLevel: 0.75 }
    ],
    codeEquivalent: 'function castFireball(power, range) { /* spell effect */ }',
    nextConcepts: ['Multi-element casting', 'Environmental interactions', 'Persistent effects'],
    reflection: 'Your mastery of Magic nodes shows true wizardry. You effectively harness core elements but could explore more complex parameter passing. Experiment with spells that modify the environment for more strategic advantages.'
  },
  {
    id: 'trigger',
    name: 'Trigger Nodes',
    description: 'Event detection and spell activation (Event handlers)',
    mastery: 0.7,
    usageCount: 45,
    dependencies: [],
    examples: [
      { name: 'On Cast activation', skillLevel: 0.9 },
      { name: 'On Hit response', skillLevel: 0.7 },
      { name: 'Enemy proximity detection', skillLevel: 0.6 }
    ],
    codeEquivalent: 'onEnemyEnter.AddListener(CastShieldSpell);',
    nextConcepts: ['Timer-based triggers', 'Health threshold events', 'Multi-condition triggers'],
    reflection: 'Your mastery of Trigger nodes is advancing well. You effectively use basic triggers but could expand into more reactive magic. Explore OnManaAbove and OnTimerExpired triggers to create more autonomous spell systems.'
  },
  {
    id: 'effect',
    name: 'Effect Nodes',
    description: 'Result production and action execution (Outputs)',
    mastery: 0.65,
    usageCount: 92,
    dependencies: ['magic', 'condition'],
    examples: [
      { name: 'Damage application', skillLevel: 0.8 },
      { name: 'Status effect application', skillLevel: 0.7 },
      { name: 'Teleportation', skillLevel: 0.5 }
    ],
    codeEquivalent: 'target.ApplyDamage(15.0f, ElementType.Fire);',
    nextConcepts: ['Area effects', 'Persistent zones', 'Multi-target chaining'],
    reflection: 'Your Effect nodes show solid versatility. You excel with direct damage effects but could explore spatial manipulation further. Practice creating teleportation and knockback effects to expand your magical arsenal.'
  },
  {
    id: 'condition',
    name: 'Condition Nodes',
    description: 'Branch control and decision points (Conditional logic)',
    mastery: 0.8,
    usageCount: 62,
    dependencies: ['variable'],
    examples: [
      { name: 'Health threshold checks', skillLevel: 0.85 },
      { name: 'Elemental weakness targeting', skillLevel: 0.75 },
      { name: 'Range-based targeting', skillLevel: 0.8 }
    ],
    codeEquivalent: 'if (targetHealth < 50.0f) { /* cast healing */ }',
    nextConcepts: ['AND/OR logic combinations', 'Multiple branch paths', 'Quantum conditioning'],
    reflection: 'Your Condition nodes show strong fundamentals. You excel at health-based decisions but could improve targeting multiple conditions simultaneously. Practice creating spells with nested conditions for more sophisticated magic.'
  },
  {
    id: 'variable',
    name: 'Variable Nodes',
    description: 'Data management and memory (Variables/state)',
    mastery: 0.95,
    usageCount: 87,
    dependencies: [],
    examples: [
      { name: 'Damage calculation', skillLevel: 0.9 },
      { name: 'Mana management', skillLevel: 0.85 },
      { name: 'Effect duration', skillLevel: 0.8 }
    ],
    codeEquivalent: 'float damage = 25.5f * GetRarityScaleFactor();',
    nextConcepts: ['Variable history tracking', 'Complex data structures', 'Persistent memory'],
    reflection: 'Your mastery of Variable nodes is exemplary. You effectively store and manipulate spell parameters, allowing for dynamic and responsive magic. Focus next on variable history tracking to create more adaptive spells.'
  },
  {
    id: 'flow',
    name: 'Flow Nodes',
    description: 'Execution control and repetition (Loops/control flow)',
    mastery: 0.5,
    usageCount: 28,
    dependencies: ['variable', 'condition'],
    examples: [
      { name: 'Sustained damage over time', skillLevel: 0.6 },
      { name: 'Multi-target effects', skillLevel: 0.5 },
      { name: 'Pulsing auras', skillLevel: 0.4 }
    ],
    codeEquivalent: 'for (int i = 0; i < iterations; i++) { /* cast effect */ }',
    nextConcepts: ['Dynamic iteration control', 'Conditional loops', 'Parallel execution'],
    reflection: 'Your understanding of Flow nodes is developing. You can create basic sustained effects but should practice conditional iteration. Try creating spells that repeat based on available resources or target conditions.'
  },
  {
    id: 'rarity',
    name: 'Rarity Progression',
    description: 'Mastering node tier upgrades and enhanced functionality',
    mastery: 0.60,
    usageCount: 42,
    dependencies: ['magic', 'effect'],
    examples: [
      { name: 'Uncommon node crafting', skillLevel: 0.8 },
      { name: 'Rare node acquisition', skillLevel: 0.6 },
      { name: 'Epic node utilization', skillLevel: 0.4 }
    ],
    codeEquivalent: 'float scalingFactor = GetRarityScaleFactor(); // Common to Legendary',
    nextConcepts: ['Material farming strategies', 'Epic upgrade paths', 'Legendary crafting'],
    reflection: 'You have demonstrated good understanding of the rarity system and how it enhances node functionality. Focus on gathering the special materials needed for Epic and Legendary upgrades, particularly Boss Fragments and Essence of Knowledge.'
  },
  {
    id: 'modular',
    name: 'Modular Spellcrafting',
    description: 'Creating reusable spell components (Function modularization)',
    mastery: 0.4,
    usageCount: 17,
    dependencies: ['variable', 'effect', 'condition'],
    examples: [
      { name: 'Reusable damage calculation', skillLevel: 0.5 },
      { name: 'Standardized status effects', skillLevel: 0.4 },
      { name: 'Template-based spells', skillLevel: 0.3 }
    ],
    codeEquivalent: 'function calculateDamage(baseDamage, resistance) { return baseDamage * (1 - resistance); }',
    nextConcepts: ['Component libraries', 'Spell inheritance', 'Parameter customization'],
    reflection: 'Your modular spellcrafting is developing. You are beginning to create reusable components but need more practice with parameter customization. Start building a personal library of spell components you can mix and match.'
  }
];

// Helper functions
const getMasteryLevelName = (mastery: number): string => {
  if (mastery >= 0.9) return 'Archmage';
  if (mastery >= 0.7) return 'Master Wizard';
  if (mastery >= 0.5) return 'Journeyman';
  if (mastery >= 0.3) return 'Apprentice';
  return 'Novice';
};

const getMasteryColor = (mastery: number): string => {
  if (mastery >= 0.9) return 'bg-purple-600';
  if (mastery >= 0.7) return 'bg-blue-600';
  if (mastery >= 0.4) return 'bg-green-600';
  if (mastery >= 0.3) return 'bg-yellow-600';
  return 'bg-gray-400';
};

const getStarRating = (mastery: number): number => {
  if (mastery >= 0.9) return 5;
  if (mastery >= 0.7) return 4;
  if (mastery >= 0.5) return 3;
  if (mastery >= 0.3) return 2;
  if (mastery >= 0.1) return 1;
  return 0;
};

// Define the radar chart data type
interface RadarDataItem {
  subject: string;
  mastery: number;
  fullMark: number;
}

const getRadarData = (): RadarDataItem[] => {
  return conceptData.map((concept) => ({
    subject: concept.name,
    mastery: concept.mastery * 100,
    fullMark: 100
  }));
};

// Get skill level color
const getSkillLevelColor = (skillLevel: number): string => {
  if (skillLevel >= 0.9) return 'text-purple-400';
  if (skillLevel >= 0.7) return 'text-blue-400';
  if (skillLevel >= 0.5) return 'text-green-400';
  if (skillLevel >= 0.3) return 'text-yellow-400';
  return 'text-gray-400';
};

const EducationalProgressUI: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<ConceptData>(conceptData[0]);
  const [viewMode, setViewMode] = useState<'list' | 'tree' | 'stats'>('list');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <div className="relative flex flex-col w-full h-full bg-black text-gray-100 font-sans">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Content container - starts after header height */}
      <div className="flex flex-col w-full" style={{ marginTop: '65px' }}>
        {/* Tabs bar - visible on smaller screens, positioned below header */}
        <div className="w-full bg-black px-4 py-3 border-b border-yellow-400">
          <p className="text-center text-gray-300">Tracking your visual spellcrafting mastery</p>
          <div className="flex justify-center mt-2 space-x-2">
            <button
              className={`px-4 py-2 rounded flex items-center transition-all duration-200 hover:bg-purple-700 focus:outline-none ${viewMode === 'tree' ? 'bg-purple-700' : 'bg-purple-800'}`}
              onClick={() => setViewMode('tree')}
            >
              <BrainCircuit size={18} className="mr-2" />
              Spell Knowledge
            </button>
            <button
              className={`px-4 py-2 rounded flex items-center transition-all duration-200 hover:bg-purple-700 focus:outline-none ${viewMode === 'list' ? 'bg-purple-700' : 'bg-purple-800'}`}
              onClick={() => setViewMode('list')}
            >
              <Book size={18} className="mr-2" />
              Node Library
            </button>
            <button
              className={`px-4 py-2 rounded flex items-center transition-all duration-200 hover:bg-purple-700 focus:outline-none ${viewMode === 'stats' ? 'bg-purple-700' : 'bg-purple-800'}`}
              onClick={() => setViewMode('stats')}
            >
              <PieChart size={18} className="mr-2" />
              Wizarding Stats
            </button>
          </div>
        </div>

        {/* Main content flex container */}
        <div className="flex flex-1 relative">
          {/* Sidebar */}
          <div
            ref={sidebarRef}
            className={`fixed top-[120px] bottom-0 left-0 w-64 p-4 overflow-y-auto bg-black-900 border-r border-yellow-400 transition-transform duration-300 z-40 
                       ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:top-0`}
          >
            <h2 className="text-lg font-bold mb-2 text-yellow-400">Spell Node Types</h2>
            <ul className="space-y-1">
              {conceptData.map((concept) => (
                <li key={concept.id}>
                  <button
                    className={`w-full text-left px-3 py-2 rounded flex items-center transition-colors duration-200 hover:bg-purple-800 focus:outline-none ${selectedConcept.id === concept.id ? "bg-purple-800" : ""}`}
                    onClick={() => setSelectedConcept(concept)}
                  >
                    <div className={`w-2 h-2 rounded-full mr-2 ${getMasteryColor(concept.mastery)}`} />
                    <span>{concept.name}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h2 className="text-lg font-bold mb-2 text-yellow-400">Areas for Study</h2>
              <ul className="space-y-1">
                {conceptData.filter((concept) => concept.mastery < 0.5).map((concept) => (
                  <li key={concept.id} className="text-sm text-gray-400">{concept.name}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main content area - expands to fill available space */}
          <div className="flex-1 p-6 overflow-y-auto bg-black-900 md:pl-6 md:pr-6 min-h-screen w-full">
            {/* Hamburger menu for small screens */}
            <button
              className="md:hidden fixed top-[80px] left-4 z-50 p-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overall Spellcrafting Mastery header */}
            <div className="mb-6 text-yellow-400 w-full">
              <h2 className="text-lg font-bold mb-2">Overall Spellcrafting Mastery</h2>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full ${getMasteryColor(conceptData.reduce((sum, concept) => sum + concept.mastery, 0) / conceptData.length)}`}
                  style={{ width: `${(conceptData.reduce((sum, concept) => sum + concept.mastery, 0) / conceptData.length) * 100}%` }}
                ></div>
              </div>
              <p className="text-right text-sm mt-1 text-purple-300">
                {Math.round((conceptData.reduce((sum, concept) => sum + concept.mastery, 0) / conceptData.length) * 100)}%
              </p>
            </div>
            
            {viewMode === 'tree' && (
              <div className="knowledge-tree w-full">
                <h2 className="text-xl font-bold mb-4 text-purple-400">Spellcrafting Radar</h2>
                <div className="relative h-96 border-4 border-yellow-400 rounded-full p-4 overflow-hidden bg-brown-900">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={getRadarData()}>
                      <PolarGrid stroke="#6b7280" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#e5e7eb', fontSize: 14 }} />
                      <Radar name="Mastery" dataKey="mastery" stroke="#a855f7" fill="#a855f7" fillOpacity={0.6} />
                    </RadarChart>
                  </ResponsiveContainer>
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                    <defs>
                      <pattern id="decorative-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="2" fill="#eab308" />
                      </pattern>
                    </defs>
                    <circle cx="50%" cy="50%" r="95%" stroke="none" fill="url(#decorative-pattern)" opacity="0.2" />
                  </svg>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Selected Node Type: {selectedConcept.name}</h3>
                  <div className="p-4 rounded-lg bg-black-800 border border-purple-500">
                    <p className="mb-3 text-gray-300">{selectedConcept.description}</p>
                    <div className="flex items-center mb-3">
                      <div className="mr-2 text-gray-300">Mastery:</div>
                      <div className="flex-1 h-3 rounded-full overflow-hidden bg-black-700">
                        <div
                          className={`h-full ${getMasteryColor(selectedConcept.mastery)}`}
                          style={{ width: `${selectedConcept.mastery * 100}%` }}
                        ></div>
                      </div>
                      <div className="ml-2 text-gray-300">{getMasteryLevelName(selectedConcept.mastery)}</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-yellow-400 font-semibold mb-1">Arcane Proficiency:</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={i < getStarRating(selectedConcept.mastery) ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="p-3 mb-4 rounded bg-black-900 border border-purple-700">
                      <h4 className="font-semibold text-yellow-400 mb-2">Master's Assessment:</h4>
                      <p className="text-gray-300">{selectedConcept.reflection}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="p-3 rounded bg-black-900 border border-purple-700">
                        <h4 className="font-semibold text-yellow-400 mb-2">Practical Applications:</h4>
                        <ul className="space-y-2">
                          {selectedConcept.examples.map((example, index) => (
                            <li key={index} className="flex items-center">
                              <span className="text-gray-300">{example.name}</span>
                              <div className="ml-auto flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={12}
                                    className={i < Math.round(example.skillLevel * 5) ? `${getSkillLevelColor(example.skillLevel)} fill-current` : "text-gray-600"}
                                  />
                                ))}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-3 rounded bg-black-900 border border-purple-700">
                        <h4 className="font-semibold text-yellow-400 mb-2">Coding Equivalent:</h4>
                        <div className="p-2 rounded font-mono text-sm bg-purple-900 text-yellow-400 border border-purple-800">
                          {selectedConcept.codeEquivalent}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 rounded bg-black-900 border border-purple-700">
                      <h4 className="font-semibold text-yellow-400 mb-2">Advanced Techniques to Study:</h4>
                      <ul className="space-y-1">
                        {selectedConcept.nextConcepts.map((concept, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <ArrowRight size={14} className="mr-2 text-purple-400" />
                            {concept}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {viewMode === 'list' && (
              <div className="concept-list w-full">
                <h2 className="text-xl font-bold mb-4 text-purple-400">Spellcrafting Node Compendium</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  {conceptData.map((concept) => (
                    <div
                      key={concept.id}
                      className={`p-4 rounded-lg border-2 hover:border-purple-500 transition-all duration-200 cursor-pointer ${selectedConcept.id === concept.id ? 'border-purple-500' : 'border-gray-700'}`}
                      style={{ backgroundColor: "#1e1e2e" }}
                      onClick={() => setSelectedConcept(concept)}
                    >
                      <div className="flex justify-between items-center text-white">
                        <h3 className="text-lg font-semibold text-purple-300">{concept.name}</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < getStarRating(concept.mastery) ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-gray-400">{concept.description}</div>
                      
                      <div className="mt-3 border-t border-gray-700 pt-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-black-500">Magical Proficiency:</span>
                          <span className="text-purple-300">{getMasteryLevelName(concept.mastery)}</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-700 rounded-full mt-1">
                          <div
                            className={`h-1.5 rounded-full ${getMasteryColor(concept.mastery)}`}
                            style={{ width: `${concept.mastery * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="mt-3 text-xs text-gray-400">
                        <div className="flex items-center">
                          <Sparkles size={12} className="mr-1 text-yellow-400" />
                          <span>Practice next: {concept.nextConcepts[0]}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {viewMode === 'stats' && (
              <div className="stats-view w-full">
                <h2 className="text-xl font-bold mb-4 text-purple-400">Arcane Statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-gray-800 border border-purple-700">
                    <div className="text-3xl font-bold text-yellow-400 mb-1">{conceptData.filter(c => c.mastery > 0.7).length}</div>
                    <div className="text-gray-400">Advanced Node Mastery</div>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-800 border border-purple-700">
                    <div className="text-3xl font-bold text-yellow-400 mb-1">{conceptData.reduce((sum, concept) => sum + concept.usageCount, 0)}</div>
                    <div className="text-gray-400">Spells Cast</div>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-800 border border-purple-700">
                    <div className="text-3xl font-bold text-yellow-400 mb-1">
                      {Math.round((conceptData.reduce((sum, concept) => sum + concept.mastery, 0) / conceptData.length) * 100)}%
                    </div>
                    <div className="text-gray-400">Overall Wizardry</div>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-white-800 border border-purple-700">
                  <h3 className="font-semibold text-purple-400 mb-3">Tournament Achievements</h3>
                  <div className="space-y-3">
                    <div className="flex items-center p-2 rounded bg-gray-900 border border-purple-900">
                      <Award size={20} className="mr-3 text-yellow-400" />
                      <div>
                        <div className="font-medium text-gray-200">Variable Virtuoso</div>
                        <div className="text-sm text-gray-400">Mastered variable manipulation in spellcrafting</div>
                      </div>
                    </div>
                    <div className="flex items-center p-2 rounded bg-gray-900 border border-purple-900">
                      <Award size={20} className="mr-3 text-blue-400" />
                      <div>
                        <div className="font-medium text-gray-200">Conditional Caster</div>
                        <div className="text-sm text-gray-400">Created 10 spells with complex conditional logic</div>
                      </div>
                    </div>
                    <div className="flex items-center p-2 rounded bg-gray-900 border border-purple-900">
                      <Award size={20} className="mr-3 text-purple-400" />
                      <div>
                        <div className="font-medium text-gray-200">Elemental Adept</div>
                        <div className="text-sm text-gray-400">Successfully utilized all elemental Magic nodes</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 rounded-lg bg-black border border-purple-700">
                  <h3 className="font-semibold text-purple-400 mb-3">Node Mastery Ratings</h3>
                  <div className="space-y-3">
                    {conceptData.map((concept) => (
                      <div key={concept.id} className="flex items-center justify-between p-2 rounded bg-gray-900">
                        <span className="text-gray-300">{concept.name}</span>
                        <div className="flex items-center">
                          <span className="mr-2 text-gray-400">{(concept.mastery * 100).toFixed(0)}%</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={i < getStarRating(concept.mastery) ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 p-4 rounded-lg bg-black border border-purple-700">
                  <h3 className="font-semibold text-purple-400 mb-3">Rarity Collection</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-2 rounded bg-gray-900 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-gray-400 mr-2"></div>
                      <span className="text-gray-300">Common: 24 nodes</span>
                    </div>
                    <div className="p-2 rounded bg-gray-900 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-gray-300">Uncommon: 18 nodes</span>
                    </div>
                    <div className="p-2 rounded bg-gray-900 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-gray-300">Rare: 12 nodes</span>
                    </div>
                    <div className="p-2 rounded bg-gray-900 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-gray-300">Epic: 6 nodes</span>
                    </div>
                    <div className="p-2 rounded bg-gray-900 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span className="text-gray-300">Legendary: 2 nodes</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalProgressUI;