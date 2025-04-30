
import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Position,
  useReactFlow,
  Node,
  Edge,
  ReactFlowProvider,
  ConnectionMode,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Import all node components
import { EventNode } from './nodes/EventNode';
import { EffectNode } from './nodes/EffectNode';
import { ConditionNode } from './nodes/ConditionNode';
import { VariableNode } from './nodes/VariableNode';
import { FlowNode } from './nodes/FlowNode';
import { SpellNode, SpellCastNode } from './nodes/SpellCastNode';

// Import edge components
import { ManaEdge } from './edges/ManaEdge';

const nodeTypes = {
  eventNode: EventNode,
  effectNode: EffectNode,
  conditionNode: ConditionNode,
  variableNode: VariableNode,
  flowNode: FlowNode,
  spellNode: SpellNode,
  spellCastNode: SpellCastNode,
};

const edgeTypes = {
  manaEdge: ManaEdge,
};

const snapGrid: [number, number] = [20, 20];

const FlowCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const reactFlowInstance = useReactFlow();

  const onConnect = useCallback((params: Connection) => {
    setEdges((eds) => addEdge({ 
      ...params, 
      type: 'manaEdge',
      animated: true,
      style: { stroke: '#9F7AEA', strokeWidth: 2 }
    }, eds));
  }, [setEdges]);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onNodeDelete = useCallback((nodeId: string) => {
    setNodes((nds) => nds.filter((node) => node.id !== nodeId));
    setEdges((eds) => eds.filter(
      (edge) => edge.source !== nodeId && edge.target !== nodeId
    ));
  }, [setNodes, setEdges]);

  const onDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();

    const type = event.dataTransfer.getData('application/reactflow');
    const nodeData = JSON.parse(event.dataTransfer.getData('nodeData'));

    const reactFlowBounds = document.querySelector('.react-flow')?.getBoundingClientRect();
    
    if (!reactFlowBounds) return;

    const position = {
      x: event.clientX - reactFlowBounds.left - 150,
      y: event.clientY - reactFlowBounds.top - 100,
    };

    const newNode = {
      id: `${type}-${nodeData.id}-${Date.now()}`,
      type: type,
      position,
      data: { ...nodeData, onDelete: () => onNodeDelete(`${type}-${nodeData.id}-${Date.now()}`) },
    };

    setNodes((nds) => [...nds, newNode]);
  }, [setNodes, onNodeDelete]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onDragOver={onDragOver}
      onDrop={onDrop}
      fitView
      snapToGrid
      snapGrid={snapGrid}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      defaultEdgeOptions={{
        type: 'manaEdge',
        style: { strokeWidth: 2 },
        animated: true
      }}
      connectionMode={ConnectionMode.Loose}
      defaultViewport={{ x: 0, y: 0, zoom: 1 }}
      style={{ backgroundColor: "#0D1117" }}
    >
      <MiniMap 
        nodeClassName={(node) => {
          switch (node.type) {
            case 'spellNode':
            case 'spellCastNode':
              return 'bg-purple-500';
            case 'eventNode':
              return 'bg-red-500';
            case 'effectNode':
              return 'bg-purple-500';
            case 'conditionNode':
              return 'bg-green-500';
            case 'variableNode':
              return 'bg-yellow-500';
            case 'flowNode':
              return 'bg-teal-500';
            default:
              return 'bg-gray-500';
          }
        }}
        maskColor="rgba(0, 0, 0, 0.2)"
      />
      <Controls />
      <Background gap={24} />
    </ReactFlow>
  );
};

export const GrimoireCanvas = () => (
  <div className="relative h-[600px] w-full bg-[#0D1117] border-2 border-[#30363D] rounded-xl overflow-hidden">
    <ReactFlowProvider>
      <FlowCanvas />
    </ReactFlowProvider>
  </div>
);
