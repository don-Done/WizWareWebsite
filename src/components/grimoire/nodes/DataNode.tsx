
import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { Database } from 'lucide-react';
import { GrimoireNode, NodeDataPoint } from '../GrimoireNode';

export const DataNode = () => (
  <div className="relative">
    <Handle type="target" position={Position.Top} className="w-3 h-3 bg-yellow-500" />
    <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-yellow-500" />
    
    <GrimoireNode
      title="Data Node"
      icon={Database}
      gradientFrom="#F1C40F"
      gradientTo="#D4AC0D"
      borderColor="yellow-800"
      shadowColor="yellow-500"
    >
      <NodeDataPoint color="yellow" text="Variable" value="damageMultiplier" />
      <NodeDataPoint color="blue" text="Type" value="float" />
      <NodeDataPoint color="green" text="Value" value="1.5" />
      <NodeDataPoint color="purple" text="Scope" value="local" />
      <NodeDataPoint color="gray" text="Persist after cast" value="no" />
    </GrimoireNode>
  </div>
);
