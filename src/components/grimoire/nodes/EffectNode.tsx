
import React from 'react';
import { Zap } from 'lucide-react';
import { GrimoireNode, NodeDataPoint } from '../GrimoireNode';
import { GrimoireNodeType, NodeRarity } from '../types/nodeTypes';

export const EffectNode = ({ data }: { data: { title: string; effectType: string; effectValue: number; effectDuration: number; elementType: string; description: string; rarity: NodeRarity; radius?: number; } }) => {
  return (
    <div className="relative">
      <GrimoireNode
        title={data.title || "Effect Node"}
        icon={Zap}
        gradientFrom="#8E44AD"
        gradientTo="#6C3483"
        borderColor="purple-800"
        shadowColor="purple-500"
        rarity={data.rarity || NodeRarity.Common}
        nodeType={GrimoireNodeType.Effect}
      >
        <NodeDataPoint color="purple" text="Effect Type" value={data.effectType} />
        <NodeDataPoint color="blue" text="Element" value={data.elementType} />
        <NodeDataPoint color="green" text="Power" value={data.effectValue?.toString()} />
        <NodeDataPoint color="orange" text="Duration" value={`${data.effectDuration}s`} />
        {data.radius && <NodeDataPoint color="yellow" text="Radius" value={`${data.radius}m`} />}
        <div className="mt-3 border-t border-gray-700 pt-2 text-gray-300 text-xs">
          {data.description}
        </div>
      </GrimoireNode>
    </div>
  );
};

// For backward compatibility with the nodeTypes mapping
export const ActionNode = EffectNode;
