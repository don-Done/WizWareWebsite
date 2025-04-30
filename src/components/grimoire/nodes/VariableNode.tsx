
import React from 'react';
import { Database } from 'lucide-react';
import { GrimoireNode, NodeDataPoint } from '../GrimoireNode';
import { GrimoireNodeType, NodeRarity, VariableType, VariableOperation } from '../types/nodeTypes';

export const VariableNode = ({ data }: { data: { title: string; variableName: string; variableType: VariableType; defaultValue: any; operation: VariableOperation; description: string; rarity: NodeRarity; } }) => {
  return (
    <div className="relative">
      <GrimoireNode
        title={data.title || "Variable Node"}
        icon={Database}
        gradientFrom="#F1C40F"
        gradientTo="#D4AC0D"
        borderColor="yellow-800"
        shadowColor="yellow-500"
        rarity={data.rarity || NodeRarity.Common}
        nodeType={GrimoireNodeType.Variable}
      >
        <NodeDataPoint color="yellow" text="Variable Name" value={data.variableName} />
        <NodeDataPoint color="blue" text="Type" value={data.variableType} />
        <NodeDataPoint color="green" text="Default Value" value={data.defaultValue?.toString()} />
        <NodeDataPoint color="purple" text="Operation" value={data.operation} />
        <div className="mt-3 border-t border-gray-700 pt-2 text-gray-300 text-xs">
          {data.description}
        </div>
      </GrimoireNode>
    </div>
  );
};

// For backward compatibility with the nodeTypes mapping
export const DataNode = VariableNode;
