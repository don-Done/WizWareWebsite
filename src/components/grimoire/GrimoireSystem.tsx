
import { BookMarked } from 'lucide-react';
import { GrimoireCanvas } from './GrimoireCanvas';
import { NodePalette } from './NodePalette';

export const GrimoireSystem = () => 
  <div className="grimoire-section border-4 border-[#7f623b] rounded-xl p-8 mt-8 shadow-2xl shadow-purple-900/10"
      style={{ backgroundImage: 'url("src/assets/parchment.jpg")', backgroundRepeat: 'repeat' }}>
    <h5 className="text-wizware-purple font-cinzel text-4xl mb-6 flex items-center">
      <BookMarked className="mr-3 " size={28} />
      The Grimoire: Visual Spell-Crafting System
    </h5>
    
    <p className="text-gray-800 text-1xl text-center mb-6 font-quicksand">
      Create powerful magical spells using our intuitive node-based programming system. 
      Drag nodes onto the canvas and connect them to create complex spell behaviors and effects.
    </p>
    
    <div className="flex flex-col gap-4">
      <NodePalette />
      <GrimoireCanvas />
    </div>
  </div>
;
