
import React from 'react';
import { Puzzle } from 'lucide-react';
import { GrimoireNode, NodeDataPoint } from '../GrimoireNode';
import { GrimoireNodeType, NodeRarity } from '../types/nodeTypes';

export const ConditionNode = ({ data }: { data: { title: string; conditionType: string; comparisonValue: number; description: string; rarity: NodeRarity; } }) => {
  return (
    <div className="relative">
      <GrimoireNode
        title={data.title || "Condition Node"}
        icon={Puzzle}
        gradientFrom="#2ECC71"
        gradientTo="#27AE60"
        borderColor="green-800"
        shadowColor="green-500"
        rarity={data.rarity || NodeRarity.Common}
        nodeType={GrimoireNodeType.Condition}
      >
        <NodeDataPoint color="blue" text="Condition Type" value={data.conditionType} />
        <NodeDataPoint color="yellow" text="Comparison Value" value={data.comparisonValue?.toString()} />
        <div className="flex items-center ml-4 text-xs text-gray-400">
          <span className="mr-2">IF</span>
          <span className="bg-gray-800 px-1 rounded">Target.{data.conditionType}</span>
          <span className="mx-1">{data.conditionType === 'HealthCheck' ? '<' : '>'}</span>
          <span className="bg-gray-800 px-1 rounded">{data.comparisonValue}%</span>
        </div>
        <div className="mt-3 border-t border-gray-700 pt-2 text-gray-300 text-xs">
          {data.description}
        </div>
      </GrimoireNode>
    </div>
  );
};

// For backward compatibility with the nodeTypes mapping
export const LogicNode = ConditionNode;
