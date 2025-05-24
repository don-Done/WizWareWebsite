import { Handle, Position } from '@xyflow/react';
import { Zap } from 'lucide-react';
import { GrimoireNode, NodeDataPoint } from '../GrimoireNode';

export const ActionNode = () => (
  <div className="relative">
    <Handle type="target" position={Position.Top} className="w-3 h-3 bg-purple-500" />
    <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-purple-500" />
    
    <GrimoireNode
      title="Effect Node"
      icon={Zap}
      gradientFrom="#8E44AD"
      gradientTo="#6C3483"
      borderColor="purple-800"
      shadowColor="purple-500"
    >
      <NodeDataPoint color="blue" text="Target" value="enemy" />
      <NodeDataPoint color="yellow" text="Damage Type" value="fire" />
      <NodeDataPoint color="green" text="Base Damage" value="25" />
      <NodeDataPoint color="red" text="Mana Cost" value="15" />
      <NodeDataPoint color="purple" text="Cooldown" value="5s" />
    </GrimoireNode>
  </div>
);
