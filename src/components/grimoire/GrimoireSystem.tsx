
import React from 'react';
import { BookMarked } from 'lucide-react';
import { GrimoireCanvas } from './GrimoireCanvas';
import { NodePalette } from './NodePalette';

export const GrimoireSystem = () => (
  <div className="bg-[#0D1117] border-2 border-[#30363D] rounded-xl p-8 mt-8 shadow-2xl shadow-purple-900/10">
    <h5 className="text-wizware-gold font-cinzel text-2xl mb-6 flex items-center">
      <BookMarked className="mr-3" size={24} />
      The Grimoire: Visual Spell-Crafting System
    </h5>
    
    <p className="text-gray-300 mb-6 font-quicksand">
      Create powerful magical spells using our intuitive node-based programming system. 
      Drag nodes onto the canvas and connect them to create complex spell behaviors and effects.
    </p>
    
    <div className="flex flex-col gap-4">
      <NodePalette />
      <GrimoireCanvas />
    </div>
  </div>
);
