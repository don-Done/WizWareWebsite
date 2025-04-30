import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { LucideIcon, X } from 'lucide-react';
import { GrimoireNodeType, NODE_CONNECTION_POINTS, NodeRarity, NODE_RARITY_DATA } from './types/nodeTypes';
import { cn } from '@/lib/utils';

interface GrimoireNodeProps {
  title: string;
  icon: LucideIcon;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  shadowColor: string;
  children: React.ReactNode;
  rarity?: NodeRarity;
  nodeType?: GrimoireNodeType;
  onDelete?: () => void;
}

export const GrimoireNode = ({
  title,
  icon: Icon,
  gradientFrom,
  gradientTo,
  borderColor,
  shadowColor,
  children,
  rarity = NodeRarity.Common,
  nodeType,
  onDelete,
}: GrimoireNodeProps) => {
  const rarityData = NODE_RARITY_DATA[rarity];
  const connectionColor = nodeType ? NODE_CONNECTION_POINTS[nodeType].color : 'bg-gray-500';
  
  return (
    <div 
      className={cn(
        "bg-gradient-to-br rounded-lg overflow-hidden mb-4 shadow-lg relative",
        getRarityGlow(rarity)
      )}
      style={{ 
        backgroundImage: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`,
        borderColor: `var(--${borderColor})`,
        borderWidth: '1px',
        boxShadow: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px var(--${borderColor})`,
      }}
    >
      <div 
        className="p-3 font-medium text-base flex items-center border-b relative"
        style={{ borderColor: `var(--${borderColor})` }}
      >
        <Icon className="mr-2" size={18} />
        <span>{title}</span>
        <span className={`ml-auto text-xs uppercase font-bold ${getRarityColor(rarity)}`}>
          {rarity}
        </span>
        <button 
          onClick={onDelete}
          className="ml-2 p-1 rounded-full hover:bg-black/10 transition-colors"
        >
          <X size={14} className="text-gray-400 hover:text-gray-100" />
        </button>
      </div>

      <div className="bg-[#111] text-sm p-4 space-y-3 relative">
        {children}
        
        {/* Input connection points */}
        <div className="absolute -left-1.5 top-0 h-full flex flex-col justify-evenly">
          {Array.from({ length: rarityData.inputSlots }).map((_, i) => (
            <Handle
              key={`input-${i}`}
              type="target"
              position={Position.Left}
              id={`input-${i}`}
              className={cn(
                "w-3 h-3 !left-0 rounded-full border-2",
                connectionColor
              )}
            />
          ))}
        </div>
        
        {/* Output connection points */}
        <div className="absolute -right-1.5 top-0 h-full flex flex-col justify-evenly">
          {Array.from({ length: rarityData.outputSlots }).map((_, i) => (
            <Handle
              key={`output-${i}`}
              type="source"
              position={Position.Right}
              id={`output-${i}`}
              className={cn(
                "w-3 h-3 !right-0 rounded-full border-2",
                connectionColor
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function getRarityGlow(rarity: NodeRarity): string {
  switch(rarity) {
    case NodeRarity.Common:
      return 'ring-1 ring-white/20';
    case NodeRarity.Uncommon:
      return 'ring-1 ring-green-500/30';
    case NodeRarity.Rare:
      return 'ring-1 ring-blue-500/30';
    case NodeRarity.Epic:
      return 'ring-1 ring-purple-500/30';
    case NodeRarity.Legendary:
      return 'ring-1 ring-orange-500/30';
    default:
      return '';
  }
}

function getRarityColor(rarity: NodeRarity): string {
  switch(rarity) {
    case NodeRarity.Common:
      return 'text-gray-400';
    case NodeRarity.Uncommon:
      return 'text-green-400';
    case NodeRarity.Rare:
      return 'text-blue-400';
    case NodeRarity.Epic:
      return 'text-purple-400';
    case NodeRarity.Legendary:
      return 'text-amber-400';
    default:
      return 'text-gray-400';
  }
}

export const NodeDataPoint = ({ color, text, value }: { color: string; text: string; value?: string }) => (
  <div className="flex items-center">
    <div className={`w-3 h-3 rounded-full mr-2`} style={{ backgroundColor: getColorValue(color) }}></div>
    <span style={{ color: getColorValue(color, true) }}>{text}</span>
    {value && <span className="ml-2 bg-gray-800 px-2 py-0.5 rounded text-gray-300 text-xs">{value}</span>}
  </div>
);

function getColorValue(color: string, isText: boolean = false): string {
  const colorMap: Record<string, { bg: string, text: string }> = {
    red: { bg: '#E74C3C', text: '#F5B7B1' },
    blue: { bg: '#3498DB', text: '#AED6F1' },
    green: { bg: '#2ECC71', text: '#ABEBC6' },
    yellow: { bg: '#F1C40F', text: '#F9E79F' },
    purple: { bg: '#9B59B6', text: '#D7BDE2' },
    orange: { bg: '#E67E22', text: '#F5CBA7' },
    teal: { bg: '#1ABC9C', text: '#A3E4D7' },
    gray: { bg: '#95A5A6', text: '#D7DBDD' }
  };

  return isText 
    ? (colorMap[color]?.text || '#FFFFFF')  
    : (colorMap[color]?.bg || '#CCCCCC');
}
