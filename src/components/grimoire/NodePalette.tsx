
import React from 'react';
import { 
  Flame, Snowflake, Zap, Mountain, CircleDot, Sun, Wind, Sparkles, Bell,
  Shield, Skull, GitBranch, Database, SplitSquareVertical, Target
} from 'lucide-react';
import { spellNodes } from './data/spellNodes';
import { triggerNodes } from './data/triggerNodes';
import { effectNodes } from './data/effectNodes';
import { conditionNodes } from './data/conditionNodes';
import { variableNodes } from './data/variableNodes';
import { flowNodes } from './data/flowNodes';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';

const elementIcons = {
  Fire: Flame,
  Ice: Snowflake,
  Lightning: Zap,
  Earth: Mountain,
  Void: CircleDot,
  Light: Sun,
  Wind: Wind,
  Arcane: Sparkles,
};

export const NodePalette = () => {
  const onDragStart = (event: React.DragEvent, nodeType: string, nodeData: any) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('nodeData', JSON.stringify(nodeData));
    
    // Show a toast to indicate dragging
    toast({
      title: "Drag and Drop",
      description: `Drag the ${nodeData.title} node to the canvas`,
      duration: 2000
    });
  };

  return (
    <div className="bg-[#1A1D23] p-4 rounded-lg shadow-lg w-full mb-4">
      <Tabs defaultValue="spells" className="w-full">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="spells" className="flex-1">Spell Nodes</TabsTrigger>
          <TabsTrigger value="triggers" className="flex-1">Trigger Nodes</TabsTrigger>
          <TabsTrigger value="effects" className="flex-1">Effect Nodes</TabsTrigger>
          <TabsTrigger value="conditions" className="flex-1">Condition Nodes</TabsTrigger>
          <TabsTrigger value="variables" className="flex-1">Variable Nodes</TabsTrigger>
          <TabsTrigger value="flows" className="flex-1">Flow Nodes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="spells">
          <div className="grid grid-cols-4 gap-4">
            {spellNodes.map((spell) => {
              const Icon = elementIcons[spell.elementType as keyof typeof elementIcons] || Sparkles;
              return (
                <div
                  key={spell.id}
                  className="flex flex-col gap-1 p-2 bg-[#2A2D35] rounded cursor-move hover:bg-[#3A3D45] transition-colors"
                  draggable
                  onDragStart={(e) => onDragStart(e, 'spellNode', spell)}
                >
                  <div className="flex items-center gap-2">
                    <Icon size={16} className="text-wizware-gold" />
                    <span className="text-gray-200 text-sm font-semibold">{spell.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="triggers">
          <div className="grid grid-cols-4 gap-4">
            {triggerNodes.map((trigger) => (
              <div
                key={trigger.id}
                className="flex flex-col gap-1 p-2 bg-[#2A2D35] rounded cursor-move hover:bg-[#3A3D45] transition-colors"
                draggable
                onDragStart={(e) => onDragStart(e, 'triggerNode', trigger)}
              >
                <div className="flex items-center gap-2">
                  <Bell size={16} className="text-red-400" />
                  <span className="text-gray-200 text-sm font-semibold">{trigger.title}</span>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="effects">
          <div className="grid grid-cols-4 gap-4">
            {effectNodes.map((effect) => {
              const Icon = effect.elementType === 'Light' ? Shield :
                         effect.effectType === 'Damage' ? Skull :
                         elementIcons[effect.elementType as keyof typeof elementIcons] || Sparkles;
              
              return (
                <div
                  key={effect.id}
                  className="flex flex-col gap-1 p-2 bg-[#2A2D35] rounded cursor-move hover:bg-[#3A3D45] transition-colors"
                  draggable
                  onDragStart={(e) => onDragStart(e, 'effectNode', effect)}
                >
                  <div className="flex items-center gap-2">
                    <Icon size={16} className="text-purple-400" />
                    <span className="text-gray-200 text-sm font-semibold">{effect.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="conditions">
          <div className="grid grid-cols-4 gap-4">
            {conditionNodes.map((condition) => (
              <div
                key={condition.id}
                className="flex flex-col gap-1 p-2 bg-[#2A2D35] rounded cursor-move hover:bg-[#3A3D45] transition-colors"
                draggable
                onDragStart={(e) => onDragStart(e, 'conditionNode', condition)}
              >
                <div className="flex items-center gap-2">
                  <SplitSquareVertical size={16} className="text-green-400" />
                  <span className="text-gray-200 text-sm font-semibold">{condition.title}</span>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="variables">
          <div className="grid grid-cols-4 gap-4">
            {variableNodes.map((variable) => (
              <div
                key={variable.id}
                className="flex flex-col gap-1 p-2 bg-[#2A2D35] rounded cursor-move hover:bg-[#3A3D45] transition-colors"
                draggable
                onDragStart={(e) => onDragStart(e, 'variableNode', variable)}
              >
                <div className="flex items-center gap-2">
                  <Database size={16} className="text-yellow-400" />
                  <span className="text-gray-200 text-sm font-semibold">{variable.title}</span>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="flows">
          <div className="grid grid-cols-4 gap-4">
            {flowNodes.map((flow) => (
              <div
                key={flow.id}
                className="flex flex-col gap-1 p-2 bg-[#2A2D35] rounded cursor-move hover:bg-[#3A3D45] transition-colors"
                draggable
                onDragStart={(e) => onDragStart(e, 'flowNode', flow)}
              >
                <div className="flex items-center gap-2">
                  <GitBranch size={16} className="text-blue-400" />
                  <span className="text-gray-200 text-sm font-semibold">{flow.title}</span>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
