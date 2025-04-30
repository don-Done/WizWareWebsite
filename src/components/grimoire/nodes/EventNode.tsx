
import React from 'react';
import { Target } from 'lucide-react';
import { GrimoireNode, NodeDataPoint } from '../GrimoireNode';
import { GrimoireNodeType, NodeRarity } from '../types/nodeTypes';

export const EventNode = ({ data }: { data: { title: string; triggerType: string; triggerValue: number; description: string; rarity: NodeRarity; cooldown: number; charges?: number; } }) => {
  return (
    <div className="relative">
      <GrimoireNode
        title={data.title || "Trigger Node"}
        icon={Target}
        gradientFrom="#E74C3C"
        gradientTo="#C0392B"
        borderColor="red-800"
        shadowColor="red-500"
        rarity={data.rarity || NodeRarity.Common}
        nodeType={GrimoireNodeType.Trigger}
      >
        <NodeDataPoint color="blue" text="Trigger Type" value={data.triggerType} />
        <NodeDataPoint color="yellow" text="Trigger Value" value={data.triggerValue.toString()} />
        {data.cooldown !== undefined && (
          <NodeDataPoint color="orange" text="Cooldown" value={`${data.cooldown}s`} />
        )}
        {data.charges !== undefined && (
          <NodeDataPoint color="purple" text="Charges" value={data.charges.toString()} />
        )}
        <div className="mt-3 border-t border-gray-700 pt-2 text-gray-300 text-xs">
          {data.description}
        </div>
      </GrimoireNode>
    </div>
  );
};
