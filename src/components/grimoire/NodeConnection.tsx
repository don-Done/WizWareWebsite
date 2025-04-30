import React from 'react';
import { Target, Zap, Database, Puzzle } from 'lucide-react';

export const NodeConnection = () => (
  <div className="relative w-full h-[400px] bg-black/30 rounded-xl p-6 border border-gray-800">
    <div className="absolute top-[50px] left-[50px]">
      <div className="bg-[#E74C3C] text-white rounded-md overflow-hidden w-[180px] shadow-lg border border-red-800">
        <div className="p-2 font-medium text-base flex items-center border-b border-red-800">
          <Target className="mr-2" size={18} />
          <span>Event: On Cast</span>
        </div>
      </div>
    </div>
    
    <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <path d="M140,80 C180,80 180,180 220,180" stroke="#E74C3C" strokeWidth="3" fill="none" />
      <path d="M340,180 C380,180 380,280 420,280" stroke="#8E44AD" strokeWidth="3" fill="none" />
      <path d="M340,180 C380,180 400,80 440,80" stroke="#2ECC71" strokeWidth="3" fill="none" />
    </svg>
    
    <div className="absolute top-[150px] left-[220px]">
      <div className="bg-[#8E44AD] text-white rounded-md overflow-hidden w-[180px] shadow-lg border border-purple-800">
        <div className="p-2 font-medium text-base flex items-center border-b border-purple-800">
          <Zap className="mr-2" size={18} />
          <span>Action: Area Effect</span>
        </div>
      </div>
    </div>
    
    <div className="absolute top-[250px] left-[420px]">
      <div className="bg-[#F1C40F] text-white rounded-md overflow-hidden w-[180px] shadow-lg border border-yellow-800">
        <div className="p-2 font-medium text-base flex items-center border-b border-yellow-800">
          <Database className="mr-2" size={18} />
          <span>Data: Damage +15</span>
        </div>
      </div>
    </div>
    
    <div className="absolute top-[50px] left-[440px]">
      <div className="bg-[#2ECC71] text-white rounded-md overflow-hidden w-[180px] shadow-lg border border-green-800">
        <div className="p-2 font-medium text-base flex items-center border-b border-green-800">
          <Puzzle className="mr-2" size={18} />
          <span>Logic: If Enemy</span>
        </div>
      </div>
    </div>
  </div>
);
