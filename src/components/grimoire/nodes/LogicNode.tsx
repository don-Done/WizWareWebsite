
import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { Puzzle } from 'lucide-react';
import { GrimoireNode, NodeDataPoint } from '../GrimoireNode';

export const LogicNode = () => (
  <div className="relative">
    <Handle type="target" position={Position.Top} className="w-3 h-3 bg-green-500" />
    <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-green-500" />
    
    <GrimoireNode
      title="Condition Node"
      icon={Puzzle}
      gradientFrom="#2ECC71"
      gradientTo="#27AE60"
      borderColor="green-800"
      shadowColor="green-500"
    >
      <NodeDataPoint color="blue" text="Condition" />
      <div className="flex items-center ml-4 text-xs text-gray-400">
        <span className="mr-2">IF</span>
        <span className="bg-gray-800 px-1 rounded">Target.Health</span>
        <span className="mx-1">&lt;</span>
        <span className="bg-gray-800 px-1 rounded">30%</span>
      </div>
      <NodeDataPoint color="green" text="True Branch" value="Cast Heal" />
      <NodeDataPoint color="red" text="False Branch" value="Cast Attack" />
    </GrimoireNode>
  </div>
);
