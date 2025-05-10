
import { Wand2, BookOpen, Code, BrainCircuit } from 'lucide-react';
import { Game } from '../types/game.types';

export const gameData: Game[] = [
  {
    id: 1,
    title: "Grand Wizard Tournament",
    description: "Master the art of spell crafting in this immersive educational game that teaches programming concepts through magic.",
    category: "Educational RPG",
    image: "/lovable-uploads/19543d65-880e-429b-9518-0f1bfef35a44.png",
    link: "#",
    featured: true,
    features: [
      {
        icon: Wand2,
        title: "Visual Programming",
        description: "Learn programming concepts through an intuitive visual interface"
      },
      {
        icon: BookOpen,
        title: "Spell Crafting",
        description: "Create and customize magical spells using programming logic"
      },
      {
        icon: Code,
        title: "Real Coding Skills",
        description: "Master fundamental programming concepts through gameplay"
      },
      {
        icon: BrainCircuit,
        title: "Problem Solving",
        description: "Develop critical thinking and algorithmic reasoning"
      }
    ]
  },
];

export const categories = ['Grand Wizard Tournament', 'coming soon'];
