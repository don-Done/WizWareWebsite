
import React from 'react';
import { GitBranch } from 'lucide-react';
import { GrimoireNode, NodeDataPoint } from '../GrimoireNode';
import { GrimoireNodeType, NodeRarity } from '../types/nodeTypes';

export const FlowNode = ({ data }: { data: { title: string; flowType: string; iterationCount: number; timeLimit: number; description: string; rarity: NodeRarity; conditionVariable?: string; } }) => {
  return (
    <div className="relative">
      <GrimoireNode
        title={data.title || "Flow Node"}
        icon={GitBranch}
        gradientFrom="#1ABC9C"
        gradientTo="#16A085"
        borderColor="teal-800"
        shadowColor="teal-500"
        rarity={data.rarity || NodeRarity.Common}
        nodeType={GrimoireNodeType.Flow}
      >
        <NodeDataPoint color="teal" text="Flow Type" value={data.flowType} />
        {data.iterationCount > 0 && <NodeDataPoint color="blue" text="Iterations" value={data.iterationCount.toString()} />}
        {data.timeLimit > 0 && <NodeDataPoint color="orange" text="Time Limit" value={`${data.timeLimit}s`} />}
        {data.conditionVariable && <NodeDataPoint color="yellow" text="Condition" value={data.conditionVariable} />}
        <div className="mt-3 border-t border-gray-700 pt-2 text-gray-300 text-xs">
          {data.description}
        </div>
      </GrimoireNode>
    </div>
  );
};
