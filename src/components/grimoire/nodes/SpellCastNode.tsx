
import React from 'react';
import { Sparkles } from 'lucide-react';
import { GrimoireNode, NodeDataPoint } from '../GrimoireNode';
import { GrimoireNodeType, NodeRarity } from '../types/nodeTypes';
import { ElementType } from '../types/nodeTypes';

interface SpellNodeData {
  title: string;
  rarity?: NodeRarity;
  elementType: ElementType;
  baseDamage: number;
  range: number;
  castTime: number;
  manaCost: number;
  multiTarget?: boolean;
  statusEffect?: string;
  secondaryElement?: ElementType;
  description: string;
}

export const SpellNode = ({ data }: { data: SpellNodeData }) => {
  return (
    <div className="w-full relative">
      <GrimoireNode
        title={`Magic Node: ${data.title}`}
        icon={Sparkles}
        gradientFrom="#FF9500"
        gradientTo="#FF5E3A"
        borderColor="orange-800"
        shadowColor="orange-500"
        rarity={data.rarity || NodeRarity.Common}
        nodeType={GrimoireNodeType.Spell} // This would depend on the actual type
      >
        <NodeDataPoint color="yellow" text="Element Type" value={data.elementType} />
        <NodeDataPoint color="red" text="Base Damage" value={data.baseDamage.toString()} />
        <NodeDataPoint color="blue" text="Range" value={`${data.range}m`} />
        <NodeDataPoint color="green" text="Cast Time" value={`${data.castTime}s`} />
        <NodeDataPoint color="purple" text="Mana Cost" value={data.manaCost.toString()} />
        {data.multiTarget && (
          <NodeDataPoint color="teal" text="Multi Target" value={data.multiTarget.toString()} />
        )}
        {data.statusEffect && (
          <NodeDataPoint color="orange" text="Status Effect" value={data.statusEffect} />
        )}
        {data.secondaryElement && (
          <NodeDataPoint color="gray" text="Secondary Element" value={data.secondaryElement} />
        )}
        <div className="mt-3 border-t border-gray-700 pt-2 text-gray-300 text-xs">
          {data.description}
        </div>
      </GrimoireNode>
    </div>
  );
};

export const SpellCastNode = ({ data }: { data: SpellNodeData }) => {
  // For default nodes that don't come from the palette
  if (!data.elementType) {
    return (
      <div className="relative w-full">
        <GrimoireNode
          title="Magic Node: Fireball"
          icon={Sparkles}
          gradientFrom="#FF9500"
          gradientTo="#FF5E3A"
          borderColor="orange-800"
          shadowColor="orange-500"
          rarity={NodeRarity.Common}
          nodeType={GrimoireNodeType.Trigger}
        >
          <NodeDataPoint color="yellow" text="Spell Type" value="projectile" />
          <NodeDataPoint color="red" text="Base Damage" value="50" />
          <NodeDataPoint color="blue" text="Range" value="30m" />
          <NodeDataPoint color="purple" text="Mana Cost" value="25" />
        </GrimoireNode>
      </div>
    );
  }
  
  return <SpellNode data={data} />;
};
