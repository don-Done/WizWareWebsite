import { useState, useCallback, ReactNode } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  Brain, 
  Code, 
  Gamepad, 
  Wand, 
  Zap, 
  Trophy, 
  CheckSquare, 
  Square,
  Circle,
  Book, 
  Star,
  Shield,
  Rocket,
  Castle,
  Skull,
  Crown,
  Binary,
  Cpu,
  Beaker, 
  Award,
} from 'lucide-react';
import ReactFlow, {
  Panel,
  Background, 
  Controls, 
  MiniMap, 
  useNodesState, 
  useEdgesState, 
  addEdge,
  Node,
  Edge,
  Handle,
  Position,
  MarkerType,
  NodeProps,
} from 'reactflow'; // Corrected import path
import 'reactflow/dist/style.css';
import Header from '@/components/Header'; // Assume Header component exists

// Define a type for the data property of your custom nodes
// Include properties expected by react-flow for nodes (even if not directly used in the custom node component)
interface CustomNodeData {
 label: string;
 description: string;
 position?: { x: number; y: number };
 type?: string;
 rarity?: string;
  // Add a new property for port definitions
  ports?: {
    [portName: string]: {
      type: 'input' | 'output';
      dataType: string; // e.g., 'signal', 'number', 'boolean'
      label?: string; // Add any other relevant port properties (e.g., label)
    };
  };
}

// Custom Node Types for the Spell Editor
const nodeColors = {
    magic: { bg: 'bg-red-900/20', border: 'border-red-500/40', text: 'text-red-400' },
    trigger: { bg: 'bg-green-900/20', border: 'border-green-500/40', text: 'text-green-400' },
    effect: { bg: 'bg-blue-900/20', border: 'border-blue-500/40', text: 'text-blue-400' },
    condition: { bg: 'bg-yellow-900/20', border: 'border-yellow-500/40', text: 'text-yellow-400' },
    variable: { bg: 'bg-purple-900/20', border: 'border-purple-500/40', text: 'text-purple-400' },
    flow: { bg: 'bg-cyan-900/20', border: 'border-cyan-500/40', text: 'text-cyan-400' },
  };

const CustomNode: React.FC<NodeProps<CustomNodeData & { type: keyof typeof nodeColors }>> = ({ data, type }) => {
  const nodeStyle = nodeColors[type] || nodeColors.magic;
  
  const isInput = (portType: string) => portType === 'input';

  // Calculate positions for handles based on the number of ports
  const inputPorts = Object.values(data.ports || {}).filter(port => port.type === 'input');
  const outputPorts = Object.values(data.ports || {}).filter(port => port.type === 'output');
  
  const inputHandlePosition = (index: number) => (index + 1) / (inputPorts.length + 1);
  const outputHandlePosition = (index: number) => (index + 1) / (outputPorts.length + 1);

  return (
    <div className={`p-4 rounded ${nodeStyle.bg} ${nodeStyle.border} shadow-lg min-w-32`}>
      <div className={`font-cinzel text-sm mb-1 ${nodeStyle.text}`}>{data.label}</div>
      <div className="text-gray-300 text-xs font-quicksand">{data.description}</div>
      {data.rarity && (
        <div className="mt-2 flex justify-end">
          <div className={`text-xs ${nodeStyle.text} font-cinzel`}>{data.rarity}</div>
        </div>
      )}

      {/* Dynamically render handles based on ports data */}
      {data.ports &&
        Object.entries(data.ports).map(([portName, port], index) => (
          <Handle
            key={portName}
            type={port.type === 'input' ? 'target' : 'source'}
            position={port.type === 'input' ? Position.Left : Position.Right}
            id={portName}
            style={{
              // Use calculated position for handles
              top: isInput(port.type)
                ? `${inputHandlePosition(inputPorts.indexOf(port)) * 100}%`
                : `${outputHandlePosition(outputPorts.indexOf(port)) * 100}%`,
              background: port.type === 'input' ? '#6EE7B7' : '#FCA5A5', // Example colors
              width: 10,
              height: 10,
              // Adjust left/right position slightly to align with node edge
              left: port.type === 'input' ? -5 : 'auto',
              right: port.type === 'output' ? -5 : 'auto',
            }}
            className="!w-3 !h-3" // Smaller handle size
          />
        ))}
    </div>
  );
};

// Customized node components for each node type
const MagicNode: React.FC<NodeProps<CustomNodeData>> = (props) => <CustomNode {...props} data={{ ...props.data, type: 'magic' }} />;
const TriggerNode: React.FC<NodeProps<CustomNodeData>> = (props) => <CustomNode {...props} data={{ ...props.data, type: 'trigger' }} />;
const EffectNode: React.FC<NodeProps<CustomNodeData>> = (props) => <CustomNode {...props} data={{ ...props.data, type: 'effect' }} />;
const ConditionNode: React.FC<NodeProps<CustomNodeData>> = (props) => <CustomNode {...props} data={{ ...props.data, type: 'condition' }} />;
const VariableNode: React.FC<NodeProps<CustomNodeData>> = (props) => <CustomNode {...props} data={{ ...props.data, type: 'variable' }} />;
const FlowNode: React.FC<NodeProps<CustomNodeData>> = (props) => <CustomNode {...props} data={{ ...props.data, type: 'flow' }} />;
// React Flow Spell Editor Component
const SpellEditor = () => {
  // Define node types
  const nodeTypes: { [key: string]: ReactNode } = {
    magic: MagicNode as ReactNode,
    trigger: TriggerNode as ReactNode,
    effect: EffectNode as ReactNode,
    condition: ConditionNode as ReactNode,
    variable: VariableNode as ReactNode,
    flow: FlowNode as ReactNode,
  };

  // Create initial nodes
  const initialNodes = [
    {
      id: '1',
      type: 'trigger',
      position: { x: 100, y: 100 },
      data: {
        label: 'On Cast Trigger',
        description: 'Activates when spell is cast',
        rarity: 'Common',
        ports: {
          output: { type: 'output', dataType: 'signal', label: 'Cast' },
        },
      },
    },
    {
      id: '2',
      type: 'magic',
      position: { x: 300, y: 100 },
      data: {
        label: 'Fire Magic',
        description: 'Creates explosive fire damage',
        rarity: 'Rare',
        ports: {
          input: { type: 'input', dataType: 'signal', label: 'Activate' },
          output: { type: 'output', dataType: 'signal', label: 'Completed' },
          damage: { type: 'output', dataType: 'number', label: 'Damage' }, // Example: Magic node outputs damage value
        },
      },
    },
    {
      id: '3',
      type: 'condition',
      position: { x: 300, y: 250 },
      data: {
        label: 'If Enemy HP < 50%',
        description: 'Checks if target is below half health',
        rarity: 'Uncommon',
        ports: {
          input: { type: 'input', dataType: 'signal', label: 'Check' },
          conditionTrue: { type: 'output', dataType: 'signal', label: 'True' }, // Output for true condition
          conditionFalse: { type: 'output', dataType: 'signal', label: 'False' }, // Output for false condition
        },
      },
    },
    {
      id: '4',
      type: 'effect',
      position: { x: 100, y: 400 },
      data: {
        label: 'Apply Burn Effect',
        description: 'Deals damage over time',
        rarity: 'Rare',
        ports: {
          input: { type: 'input', dataType: 'signal', label: 'Apply' },
          // Add input for damage value from Magic node
          damage: { type: 'input', dataType: 'number', label: 'Damage Amount' },
        },
      },
    },
    {
      id: '5',
      type: 'effect',
      position: { x: 500, y: 400 },
      data: { label: 'Explosion Effect', description: 'Creates a visual explosion', rarity: 'Rare' },
    },
    {
      id: '6',
      type: 'flow',
      position: { x: 500, y: 250 },
      data: {
        label: 'Repeat 3 Times',
        description: 'Loop execution for multiple applications',
        rarity: 'Rare',
        ports: {
          input: { type: 'input', dataType: 'signal', label: 'Start Loop' },
          output: { type: 'output', dataType: 'signal', label: 'Loop Completed' },
          iteration: { type: 'output', dataType: 'signal', label: 'On Iteration' }, // Add an output port that signals each iteration of the loop
        },
      },
    },
  ] as Node<CustomNodeData>[]; // Explicitly type initialNodes

  // Create initial edges (connections between nodes)
  const initialEdges = [
    {
      id: 'e1-2-cast', // Unique edge ID
      source: '1', // Source node id
      sourceHandle: 'output', // Correct sourceHandle for node 1
      target: '2', // Target node id
      targetHandle: 'input', // Correct targetHandle for node 2
      animated: true,
      style: { stroke: 'rgba(34, 197, 94, 0.6)', strokeWidth: 2 }, // Green for Trigger
      markerEnd: { type: MarkerType.ArrowClosed, color: 'rgba(34, 197, 94, 0.6)' },
    },
    {
      id: 'e2-4-damage',
      source: '2',
      sourceHandle: 'damage', // Correct sourceHandle for node 2's damage output
      target: '4',
      targetHandle: 'damage', // Connect to Effect node's damage input
      animated: true,
      style: { stroke: 'rgba(239, 68, 68, 0.6)', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: 'rgba(239, 68, 68, 0.6)' },
    },
    {
      id: 'e3-4',
      source: '3',
      sourceHandle: 'conditionTrue', // Correct sourceHandle for node 3's true condition output
      target: '4',
      targetHandle: 'input', // Effect node takes signal to apply
      animated: true,
      label: 'True',
      labelStyle: { fill: 'rgba(234, 179, 8, 0.9)', fontWeight: 700 },
      style: { stroke: 'rgba(234, 179, 8, 0.6)', strokeWidth: 2 }, // Yellow for Condition
      markerEnd: { type: MarkerType.ArrowClosed, color: 'rgba(234, 179, 8, 0.6)' },
    },
    {
      id: 'e3-6',
      source: '3',
      sourceHandle: 'conditionFalse', // Correct sourceHandle for node 3's false condition output
      target: '6',
      targetHandle: 'input', // Flow node takes signal to start loop
      animated: true,
      label: 'False',
      labelStyle: { fill: 'rgba(234, 179, 8, 0.9)', fontWeight: 700 },
      style: { stroke: 'rgba(234, 179, 8, 0.6)', strokeWidth: 2, strokeDasharray: '5,5' }, // Yellow for Condition
      markerEnd: { type: MarkerType.ArrowClosed, color: 'rgba(234, 179, 8, 0.6)' },
    },
    {
    id: 'e6-4-repeat',
    source: '6',
    sourceHandle: 'iteration', // Correct sourceHandle for node 6's iteration output
    target: '4',
    targetHandle: 'input', // Correct targetHandle for node 4's input
    animated: true,
    style: { stroke: 'rgba(6, 182, 212, 0.6)', strokeWidth: 2, strokeDasharray: '5,5'  },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'rgba(6, 182, 212, 0.6)' }, // Cyan for Flow
   },
   {
    id: 'e6-5-flow',
    source: '6', // Source node id (Flow)
    sourceHandle: 'output', // Correct sourceHandle for node 6's output (Loop Completed)
    target: '5',
    targetHandle: 'input', // Correct targetHandle for node 5's input
    animated: true,
    style: { stroke: 'rgba(6, 182, 212, 0.6)', strokeWidth: 2 }, // Cyan for Flow
    markerEnd: { type: MarkerType.ArrowClosed, color: 'rgba(6, 182, 212, 0.6)' },
   }
 ] as Edge<CustomNodeData>[]; // Explicitly type initialEdges

  // React Flow state
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => {
      setEdges((eds: Edge[]) => addEdge(params, eds)); // For now, allow all connections
    },
 [setEdges]
  );

  const flowStyles = {
    background: '#1E1E2E',
    width: '100%',
    height: 500,
  };

  return (
    <div style={flowStyles} className="rounded-lg border border-wizware-gold/30 overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls />
        <Background color="#4d4867" gap={12} />
        <MiniMap 
          nodeColor={(node) => {
            switch (node.type) {
              case 'magic': return 'rgba(239, 68, 68, 0.6)';
              case 'trigger': return 'rgba(34, 197, 94, 0.6)';
              case 'effect': return 'rgba(59, 130, 246, 0.6)';
              case 'condition': return 'rgba(234, 179, 8, 0.6)';
              case 'variable': return 'rgba(168, 85, 247, 0.6)';
              case 'flow': return 'rgba(6, 182, 212, 0.6)';
              default: return '#fff';
            }
          }}
          maskColor="rgba(0, 0, 0, 0.6)"
          style={{ background: '#1E1E2E' }}
        />
      </ReactFlow>
    </div>
  );
};

// Node Rarity Display Component
const NodeRarityDisplay = () => {
  const rarities = [
    {
      name: 'Common',
      color: 'white',
      connections: '1-2',
      scaling: '100%',
      capabilities: 'Standard functionality'
    },
    {
      name: 'Uncommon',
      color: 'green',
      connections: '2-3',
      scaling: '125%',
      capabilities: 'Quality-of-life improvements'
    },
    {
      name: 'Rare',
      color: 'blue',
      connections: '3-4',
      scaling: '150%',
      capabilities: 'Enhanced functional capabilities'
    },
    {
      name: 'Epic',
      color: 'purple',
      connections: '4-5',
      scaling: '200%',
      capabilities: 'Multiple advanced features'
    },
    {
      name: 'Legendary',
      color: 'orange/gold',
      connections: '5-6',
      scaling: '250%',
      capabilities: 'Unique game-changing abilities'
    }
  ];

  return (
    <div className="grid grid-cols-5 gap-2">
      {rarities.map((rarity, index) => (
        <div key={index} className="cosmic-card p-2 text-center">
          <h5 className={`font-cinzel text-sm mb-1 ${
            rarity.name === 'Common' ? 'text-white' :
            rarity.name === 'Uncommon' ? 'text-green-400' :
            rarity.name === 'Rare' ? 'text-blue-400' :
            rarity.name === 'Epic' ? 'text-purple-400' :
            'text-yellow-400'
          }`}>
            {rarity.name}
          </h5>
          <div className={`h-1 w-full rounded ${
            rarity.name === 'Common' ? 'bg-white/60' :
            rarity.name === 'Uncommon' ? 'bg-green-500/60' :
            rarity.name === 'Rare' ? 'bg-blue-500/60' :
            rarity.name === 'Epic' ? 'bg-purple-500/60' :
            'bg-yellow-500/60'
          }`}></div>
          <p className="text-gray-400 text-xs mt-1 font-quicksand">
            {rarity.scaling}
          </p>
        </div>
      ))}
    </div>
  );
};

// Educational Concept Mapping Component
const ConceptMapping = () => {
  const concepts = [
    {
      node: "Magic Nodes",
      concepts: ["Function calls", "Parameters", "Return values"]
    },
    {
      node: "Trigger Nodes",
      concepts: ["Event handlers", "Callbacks", "Event propagation"]
    },
    {
      node: "Effect Nodes",
      concepts: ["Function side effects", "State changes", "Output formatting"]
    },
    {
      node: "Condition Nodes",
      concepts: ["If-then-else logic", "Boolean operations", "Decision trees"]
    },
    {
      node: "Variable Nodes",
      concepts: ["Variables & data types", "Operations", "Memory management"]
    },
    {
      node: "Flow Nodes",
      concepts: ["Loops", "Iteration", "Control structures"]
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {concepts.map((item, index) => (
        <div key={index} className="cosmic-card p-4">
          <h5 className="text-wizware-teal font-cinzel text-lg mb-2">{item.node}</h5>
          <ul className="space-y-1 text-gray-300 font-quicksand">
            {item.concepts.map((concept, idx) => (
              <li key={idx} className="flex items-center">
                <Code className="text-wizware-teal mr-2 flex-shrink-0" size={16} />
                {concept}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// Full Game Page Component
const GamePage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="bg-wizware-black text-white min-h-screen cosmic-pattern">
      {/* Header - Same as Education Page */}
      <header className="py-16 relative overflow-hidden bg-gradient-to-b from-wizware-dark-black to-wizware-black sacred-geometry">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center animate-magic-fade-in">
            <h1 className="wizware-title text-5xl md:text-6xl lg:text-7xl mb-6">Grand Wizard Tournament</h1>
            <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto font-quicksand">
              An educational roguelike game that teaches programming through magical spell crafting
            </p>
            <div className="mt-8">
              <a 
                href="#game-details" 
                className="cosmic-button inline-flex items-center"
              >
                Enter the Tournament <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/images/sacred-geometry.svg')] bg-repeat opacity-5"></div>
        {/* Assuming Header is designed to be positioned absolutely or takes care of its own positioning */}
        {/* You might need to adjust z-index or positioning based on your Header component's styles */}
        <Header /> {/* Use the imported Header component */}
 <div className="pt-20"></div> {/* Add padding below the header */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-wizware-black to-transparent"></div>
      </header>

      {/* Navigation Tabs */}
      <div className="sticky top-0 bg-wizware-dark-black z-30 border-b border-wizware-gold/20 py-2">
        <div className="container mx-auto px-6">
          <nav className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'overview', icon: <Castle size={16} className="mr-1" />, label: 'Overview' },
              { id: 'gameplay', icon: <Gamepad size={16} className="mr-1" />, label: 'Gameplay' },
              { id: 'story', icon: <Book size={16} className="mr-1" />, label: 'Story' },
              { id: 'spell-editor', icon: <Wand size={16} className="mr-1" />, label: 'Spell Editor' },
              { id: 'technical', icon: <Code size={16} className="mr-1" />, label: 'Technical' },
              { id: 'features', icon: <Star size={16} className="mr-1" />, label: 'Features' },
            ].map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 font-quicksand flex items-center ${
                  activeSection === section.id
                    ? 'bg-wizware-gold text-wizware-black font-medium'
                    : 'bg-wizware-dark-black text-gray-300 border border-wizware-gold/20 hover:border-wizware-gold/40'
                }`}
              >
                {section.icon}
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content Section */}
      <main id="game-details" className="container mx-auto px-6 py-16">
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <section className="animate-magic-fade-in">
            <div className="max-w-6xl mx-auto">
              <h2 className="wizware-title text-3xl md:text-4xl mb-8 text-center">Game Overview</h2>
              
              <div className="cosmic-card mb-10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <img 
                      src="/images/gwt-screenshot.jpg" 
                      alt="Grand Wizard Tournament Gameplay" 
                      className="rounded-lg w-full h-auto magical-glow"
                      onError={(e) => {
                        // e.target.src = '/api/placeholder/600/400'; 
                        //target.alt = "Game Screenshot Placeholder";
                      }}
                    />
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-gray-300 mb-4 font-quicksand">
                      Grand Wizard Tournament is an educational roguelike game that teaches programming concepts through an engaging magical combat system. Players navigate procedurally generated rooms in a magical labyrinth, fighting enemies while learning fundamental programming concepts through an intuitive visual spell-crafting system.
                    </p>
                    <p className="text-gray-300 font-quicksand">
                      In the world of Grand Wizard Tournament, young wizards have become overly dependent on magical "Whispering Oracles" that provide spell solutions without teaching understanding. The Grand Wizard Council establishes the Tournament as a way to force wizards to rediscover fundamental magical knowledge by suppressing the Oracles within the labyrinth.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl text-wizware-gold font-cinzel mb-4">Core Game Loop</h3>
              <div className="cosmic-card mb-10">
                <ol className="space-y-2 font-quicksand text-gray-300">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 mr-3 bg-wizware-gold text-wizware-black rounded-full flex-shrink-0">1</span>
                    Navigate procedurally generated rooms
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 mr-3 bg-wizware-gold text-wizware-black rounded-full flex-shrink-0">2</span>
                    Collect spell components and items
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 mr-3 bg-wizware-gold text-wizware-black rounded-full flex-shrink-0">3</span>
                    Craft and modify spells using visual programming
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 mr-3 bg-wizware-gold text-wizware-black rounded-full flex-shrink-0">4</span>
                    Complete wave-specific objectives
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 mr-3 bg-wizware-gold text-wizware-black rounded-full flex-shrink-0">5</span>
                    Progress through 10 increasingly challenging waves
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 mr-3 bg-wizware-gold text-wizware-black rounded-full flex-shrink-0">6</span>
                    Compete for high scores and rankings
                  </li>
                </ol>
              </div>

              <h3 className="text-2xl text-wizware-gold font-cinzel mb-4">Unique Selling Proposition</h3>
              <div className="cosmic-card">
                <ul className="space-y-4 font-quicksand text-gray-300">
                  <li className="flex">
                    <Sparkles className="text-wizware-teal mr-3 flex-shrink-0" size={24} />
                    <span>Innovative visual spell-crafting system that teaches programming through gameplay</span>
                  </li>
                  <li className="flex">
                    <Zap className="text-wizware-teal mr-3 flex-shrink-0" size={24} />
                    <span>Procedurally generated labyrinth with moving/rotating rooms for infinite replayability</span>
                  </li>
                  <li className="flex">
                    <Brain className="text-wizware-teal mr-3 flex-shrink-0" size={24} />
                    <span>Educational content seamlessly integrated into fun gameplay</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl text-wizware-gold font-cinzel mt-10 mb-4">Target Audience</h3>
              <div className="cosmic-card">
                <ul className="space-y-4 font-quicksand text-gray-300">
                  <li className="flex">
                    <CheckSquare className="text-wizware-teal mr-3 flex-shrink-0" size={24} />
                    <span><strong>Primary:</strong> Students aged 12-25</span>
                  </li>
                  <li className="flex">
                    <CheckSquare className="text-wizware-teal mr-3 flex-shrink-0" size={24} />
                    <span><strong>Secondary:</strong> Coding educators and educational institutions</span>
                  </li>
                  <li className="flex">
                    <CheckSquare className="text-wizware-teal mr-3 flex-shrink-0" size={24} />
                    <span>Appeal to both casual and hardcore gamers</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Gameplay Section */}
        {activeSection === 'gameplay' && (
          <section className="animate-magic-fade-in">
            <div className="max-w-6xl mx-auto">
              <h2 className="wizware-title text-3xl md:text-4xl mb-8 text-center">Gameplay Mechanics</h2>
              
              <div className="cosmic-card mb-10">
                <h3 className="text-2xl text-wizware-gold font-cinzel mb-4">The Grimoire (Visual Spell-Crafting System)</h3>
                <p className="text-gray-300 mb-6 font-quicksand">
                  The heart of the game is its visual programming interface for creating spells. Players connect nodes to create spells with varying effects, complexity, and efficiency.
                </p>
                
                <h4 className="text-xl text-wizware-teal font-cinzel mb-3">Node Types</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="cosmic-card p-4">
                    <h5 className="text-wizware-teal font-cinzel text-lg mb-1">Magic Nodes</h5>
                    <p className="text-gray-400 text-sm font-quicksand">Core spell effects (fireball, ice blast, healing wave)</p>
                  </div>
                  <div className="cosmic-card p-4">
                    <h5 className="text-wizware-teal font-cinzel text-lg mb-1">Trigger Nodes</h5>
                    <p className="text-gray-400 text-sm font-quicksand">Event-based conditions (on cast, on hit, on enemy enter)</p>
                  </div>
                  <div className="cosmic-card p-4">
                    <h5 className="text-wizware-teal font-cinzel text-lg mb-1">Effect Nodes</h5>
                    <p className="text-gray-400 text-sm font-quicksand">Actions produced by spells (damage, teleport, knockback)</p>
                  </div>
                  <div className="cosmic-card p-4">
                    <h5 className="text-wizware-teal font-cinzel text-lg mb-1">Condition Nodes</h5>
                    <p className="text-gray-400 text-sm font-quicksand">Logic control (if/then statements)</p>
                  </div>
                  <div className="cosmic-card p-4">
                    <h5 className="text-wizware-teal font-cinzel text-lg mb-1">Variable Nodes</h5>
                    <p className="text-gray-400 text-sm font-quicksand">Data storage and manipulation</p>
                  </div>
                  <div className="cosmic-card p-4">
                    <h5 className="text-wizware-teal font-cinzel text-lg mb-1">Flow Nodes</h5>
                    <p className="text-gray-400 text-sm font-quicksand">Loops and branches (repeat, while, for each)</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl text-wizware-teal font-cinzel mb-3">Preview of the Spell Editor</h4>
                  <SpellEditor />
                  <p className="text-gray-400 italic text-sm text-center mt-2 font-quicksand">
                    Interactive spell node editor with drag-and-drop capabilities
                  </p>
                </div>
              </div>

              <h3 className="text-2xl text-wizware-gold font-cinzel mb-4">Programming Concepts Taught</h3>
              <div className="cosmic-card mb-10">
                <ConceptMapping />
              </div>

              <h3 className="text-2xl text-wizware-gold font-cinzel mb-4">Labyrinth Structure</h3>
              <div className="cosmic-card mb-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2">
                    <p className="text-gray-300 mb-4 font-quicksand">
                      Players navigate a complex, shifting maze with unique challenges in each room.
                    </p>
                    <ul className="space-y-2 font-quicksand text-gray-300">
                      <li className="flex items-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-wizware-teal text-wizware-black rounded-full text-xs flex-shrink-0">✓</span>
                        3x3x3 cubic grid (in multiplayer/online mode)
                      </li>
                      <li className="flex items-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-wizware-teal text-wizware-black rounded-full text-xs flex-shrink-0">✓</span>
                        Each room is a perfect cube with 2-6 doors
                      </li>
                      <li className="flex items-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-wizware-teal text-wizware-black rounded-full text-xs flex-shrink-0">✓</span>
                        Rooms can be swapped or entire planes rotated, altering the maze
                      </li>
                      <li className="flex items-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-wizware-teal text-wizware-black rounded-full text-xs flex-shrink-0">✓</span>
                        Room types: Combat, Empty, Treasure, Shop, Puzzle, Boss
                      </li>
                    </ul>
                  </div>
                  <div className="lg:w-1/2 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <div key={i} className="bg-wizware-dark-black border border-wizware-gold/20 rounded-sm"></div>
                        ))}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-wizware-teal/20 border border-wizware-teal rounded-sm animate-pulse"></div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-center text-wizware-gold font-cinzel">
                        Interactive<br />Labyrinth
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl text-wizware-gold font-cinzel mb-4">Wave System</h3>
              <div className="cosmic-card">
                <ul className="space-y-2 font-quicksand text-gray-300">
                  <li className="flex items-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-wizware-teal text-wizware-black rounded-full text-xs flex-shrink-0">✓</span>
                    10 progressive waves of increasing difficulty
                  </li>
                  <li className="flex items-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-wizware-teal text-wizware-black rounded-full text-xs flex-shrink-0">✓</span>
                    Each wave has specific objectives
                  </li>
                  <li className="flex items-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-wizware-teal text-wizware-black rounded-full text-xs flex-shrink-0">✓</span>
                    Enemy types evolve through the waves
                  </li>
                  <li className="flex items-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-wizware-teal text-wizware-black rounded-full text-xs flex-shrink-0">✓</span>
                    Final wave culminates in a boss fight
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Story Section */}
        {activeSection === 'story' && (
          <section className="animate-magic-fade-in">
            <div className="max-w-6xl mx-auto">
              <h2 className="wizware-title text-3xl md:text-4xl mb-8 text-center">Story & Setting</h2>
              
              <div className="cosmic-card mb-10">
                <h3 className="text-2xl text-wizware-gold font-cinzel mb-4">The Oracle Dilemma ✨</h3>
                <p className="text-gray-300 mb-4 font-quicksand">
                  In the world of Grand Wizard Tournament, young wizards have become overly dependent on magical "Whispering Oracles" that provide spell solutions without teaching understanding. The Grand Wizard Council establishes the Tournament as a way to force wizards to rediscover fundamental magical knowledge by suppressing the Oracles within the labyrinth.
                </p>
                
                <h4 className="text-xl text-wizware-teal font-cinzel mb-3">Key Story Elements 🔑</h4>
                <ul className="space-y-2 font-quicksand text-gray-300 mb-6">
                  <li className="flex items-start">
                    <span className="text-wizware-gold mr-2">🔮</span>
                    Whispering Oracles (crystal balls containing ancient spirits) represent AI tools
                  </li>
                  <li className="flex items-start">
                    <span className="text-wizware-gold mr-2">🧙‍♂️</span>
                    Grand Wizard Council wants to promote understanding, not just knowledge
                  </li>
                  <li className="flex items-start">
                    <span className="text-wizware-gold mr-2">🏆</span>
                    Tournament challenges wizards to rely on their own abilities
                  </li>
                  <li className="flex items-start">
                    <span className="text-wizware-gold mr-2">💡</span>
                    The narrative parallels modern concerns about AI tools replacing true understanding
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl text-wizware-gold font-cinzel mb-4">Main Characters 👤</h3>
              <div className="cosmic-card mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="text-wizware-teal font-cinzel text-lg flex items-center">
                      <span className="text-wizware-gold mr-2">👑</span>
                      Elder Archmage Thorne
                    </h4>
                    <p className="text-gray-300 font-quicksand">Leader of the Grand Wizard Council, concerned about Oracle dependence among students</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-wizware-teal font-cinzel text-lg flex items-center">
                      <span className="text-wizware-gold mr-2">✨</span>
                      Archmage Lyra
                    </h4>
                    <p className="text-gray-300 font-quicksand">Council member who helps develop the Tournament as a solution</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-wizware-teal font-cinzel text-lg flex items-center">
                      <span className="text-wizware-gold mr-2">🌟</span>
                      Elara Dawnbreak
                    </h4>
                    <p className="text-gray-300 font-quicksand">Student who discovered the first Oracle but recognizes their limitations</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-wizware-teal font-cinzel text-lg flex items-center">
                      <span className="text-wizware-gold mr-2">🧙</span>
                      Tournament Participants
                    </h4>
                    <p className="text-gray-300 font-quicksand">Player characters and rival wizards with varying reactions to the Tournament</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl text-wizware-gold font-cinzel mb-6 text-center">Story Chapters 📚</h3>
              
              <div className="cosmic-card mb-6">
                <h4 className="text-xl text-wizware-teal font-cinzel mb-3 flex items-center">
                  <span className="text-wizware-gold mr-2">📖</span>
                  The Oracle Dilemma
                </h4>
                <p className="text-gray-300 mb-4 font-quicksand">
                  In the hallowed halls of the Grand Wizard Council, Elder Archmage Thorne paced with growing concern. The ancient stone chamber, lined with bookshelves containing centuries of magical knowledge, felt oppressively quiet as the dozen Grand Wizards watched him with matching expressions of worry.
                </p>
                <p className="text-gray-300 mb-4 font-quicksand">
                  "They rely on these orbs for everything," Thorne said, his voice echoing against the vaulted ceiling. "A first-year student conjured a level seven transmutation yesterday. Perfect execution. No understanding whatsoever of the magical principles involved."
                </p>
                <p className="text-gray-300 mb-4 font-quicksand">
                  Archmage Lyra, her silver hair gleaming in the enchanted lamplight, held up one of the crystalline orbs. Inside, a wisp of luminous fog swirled—a Whispering Oracle, the latest obsession among young wizards.
                </p>
                <p className="text-gray-300 mb-4 font-quicksand">
                  "I asked it to explain how it crafts the spells," she said. "It produced a flawless explanation of the magical theory—better than many of our textbooks. The students simply ask, and the Oracle delivers not just the spell, but the knowledge."
                </p>
                <p className="text-gray-300 mb-4 font-quicksand">
                  "Knowledge without understanding," countered Thorne. "When that same student was asked to modify the spell to account for the presence of water, he was completely lost. He had to consult the Oracle again. These young wizards are becoming mere vessels for the Oracles' magic, not practitioners in their own right."
                </p>
                <p className="text-gray-300 mb-0 font-quicksand">
                  Thorne stopped his pacing suddenly, a rare smile crossing his weathered face. "Then we create situations where the Oracles cannot help them."
                </p>
              </div>
              
              <div className="cosmic-card mb-6">
                <h4 className="text-xl text-wizware-teal font-cinzel mb-3 flex items-center">
                  <span className="text-wizware-gold mr-2">📜</span>
                  The Tournament Declaration
                </h4>
                <p className="text-gray-300 mb-4 font-quicksand">
                  The Amphitheater of Arcana was filled to capacity as students from all wizard academies gathered, their excited chatter filling the air with a constant buzz. Rumors had been spreading for weeks about a major announcement from the Grand Council.
                </p>
                <p className="text-gray-300 mb-4 font-quicksand">
                  "Young wizards of the realm," Thorne began, his voice magically amplified. "For generations, the path to magical mastery has remained unchanged. Study, practice, fail, and try again. This is how understanding is forged—through effort and determination."
                </p>
                <p className="text-gray-300 mb-4 font-quicksand">
                  "The discovery of the Whispering Oracles has changed how you learn. These ancient spirits offer knowledge freely, crafting spells of remarkable complexity at your command. This is a gift, but also a danger."
                </p>
                <p className="text-gray-300 mb-0 font-quicksand">
                  "True mastery comes not from having answers provided, but from discovering them yourself. Therefore, the Grand Council announces the establishment of The Grand Wizard Tournament—a series of trials designed to test not merely your ability to cast spells, but your understanding of magical principles."
                </p>
              </div>
              
              <div className="cosmic-card mb-6">
                <h4 className="text-xl text-wizware-teal font-cinzel mb-3 flex items-center">
                  <span className="text-wizware-gold mr-2">⚔️</span>
                  The Resistance
                </h4>
                <p className="text-gray-300 mb-4 font-quicksand">
                  The announcement sparked immediate controversy. In dormitories and common rooms across the academies, heated debates raged.
                </p>
                <p className="text-gray-300 mb-4 font-quicksand">
                  "It's outrageous," declared Marcus Vell, a third-year wizard from the Academy of Elemental Harmony. His Oracle—customized with a gold filigree case—floated beside him as he addressed the crowded common room. "They fear what they don't understand. These Oracles represent the future of magic."
                </p>
                <p className="text-gray-300 mb-4 font-quicksand">
                  But not all were convinced. Elara Dawnbreak—the very student who had discovered the first Oracle—sat quietly in the corner, her expression troubled.
                </p>
                <p className="text-gray-300 mb-0 font-quicksand">
                  "The Oracles are incredible tools," she finally said, her voice cutting through the debate. "But Archmage Thorne isn't entirely wrong. I've noticed how my own spellcasting has changed. I ask rather than create. I execute rather than understand."
                </p>
              </div>
              
              <div className="cosmic-card mb-6">
                <h4 className="text-xl text-wizware-teal font-cinzel mb-3 flex items-center">
                  <span className="text-wizware-gold mr-2">🔥</span>
                  First Trials
                </h4>
                <p className="text-gray-300 mb-4 font-quicksand">
                  The day of the first Tournament arrived with a mixture of excitement and apprehension. Hundreds of students gathered at the entrance to the Grand Labyrinth—a massive structure that seemed to shift and change even as they watched.
                </p>
                <p className="text-gray-300 mb-4 font-quicksand">
                  The massive doors swung open, revealing a shimmering barrier beyond which lay the first chamber. As the initial groups stepped through, their Oracles immediately went dark—the swirling mists inside becoming still and unresponsive.
                </p>
                <p className="text-gray-300 mb-4 font-quicksand">
                  One such student was Tomas Wrenhaven, a quiet second-year who had always been middle-of-the-pack in his classes. As his team encountered a room filled with elemental guardians, his teammates panicked without their Oracles to provide perfect counterspells.
                </p>
                <p className="text-gray-300 mb-0 font-quicksand">
                  "Wait," Tomas said, observing the pattern of the guardians' movements. "Remember the Principle of Elemental Opposition? We don't need complex spells—just the basics applied correctly."
                </p>
              </div>
              
              <div className="cosmic-card">
                <h4 className="text-xl text-wizware-teal font-cinzel mb-3 flex items-center">
                  <span className="text-wizware-gold mr-2">⚖️</span>
                  The New Balance
                </h4>
                <p className="text-gray-300 mb-4 font-quicksand">
                  As the Tournament progressed through subsequent waves, an interesting phenomenon emerged. Students began forming study groups not just to share Oracle knowledge, but to strengthen their foundational understanding.
                </p>
                <p className="text-gray-300 mb-4 font-quicksand">
                  Libraries that had grown quiet in the age of Oracles were once again filled with wizards poring over ancient texts. But rather than abandoning their Oracles, they were using them differently—asking not for complete spells but for clarification on principles, then working through applications themselves.
                </p>
                <p className="text-gray-300 mb-0 font-quicksand">
                  In time, a new generation of wizards emerged—one that balanced the wisdom of tradition with the efficiency of innovation. They crafted spells of unprecedented complexity not by simply asking Oracles, but by understanding magic deeply enough to push its boundaries.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Spell Editor Section */}
        {activeSection === 'spell-editor' && (
          <section className="animate-magic-fade-in">
            <div className="max-w-6xl mx-auto">
              <h2 className="wizware-title text-3xl md:text-4xl mb-8 text-center">Visual Spell-Crafting System</h2>
              
              <div className="cosmic-card mb-10">
                <h3 className="text-2xl text-wizware-gold font-cinzel mb-4">Interactive Spell Editor</h3>
                <p className="text-gray-300 mb-6 font-quicksand">
                  The Grimoire is the core gameplay and educational mechanic, transforming abstract programming concepts into tangible magical components. Create powerful spells by connecting different types of nodes.
                </p>
                
                <div className="mb-8">
                  <SpellEditor />
                  <p className="text-gray-400 italic text-sm text-center mt-2 font-quicksand">
                    Interactive Grimoire Spell Editor - drag nodes, create connections, and see your spell take shape
                  </p>
                </div>

                <h4 className="text-xl text-wizware-teal font-cinzel mb-3">Node Connection System</h4>
                <p className="text-gray-300 mb-4 font-quicksand">
                  Nodes connect through a directed graph system with input and output ports that enforce logical connection rules between node types. The execution follows signal propagation from trigger nodes through the connected network.
                </p>
                
                <h4 className="text-xl text-wizware-teal font-cinzel mb-3">Execution Flow</h4>
                <ul className="space-y-2 text-gray-300 font-quicksand pl-6 list-disc mb-6">
                  <li>Signal flow begins at Trigger nodes (green)</li>
                  <li>Travels through connected Magic nodes (red)</li>
                  <li>Conditional branches at Condition nodes (yellow)</li>
                  <li>Creates effects through Effect nodes (blue)</li>
                  <li>Stores and manipulates data with Variable nodes (purple)</li>
                  <li>Controls repetition with Flow nodes (cyan)</li>
                </ul>
              </div>

              <h3 className="text-2xl text-wizware-gold font-cinzel mb-4">Node Types in Detail</h3>
              <div className="cosmic-card mb-10">
                <div className="space-y-6">
                  <div className="border-b border-wizware-gold/20 pb-4">
                    <h4 className="text-xl text-wizware-teal font-cinzel mb-2">Magic Nodes</h4>
                    <p className="text-gray-300 mb-2 font-quicksand">
                      Magic nodes represent the core spell effects and serve as the primary "function" of a spell.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                      <div className="cosmic-card p-2">
                        <h5 className="text-wizware-gold text-sm font-cinzel">Functionality</h5>
                        <ul className="text-gray-400 text-xs font-quicksand pl-4 list-disc">
                          <li>Define base spell effect (fire, ice, lightning)</li>
                          <li>Determine damage values and element types</li>
                          <li>Control spell range and area of effect</li>
                          <li>Manage mana costs and cast times</li>
                        </ul>
                      </div>
                      <div className="cosmic-card p-2">
                        <h5 className="text-wizware-gold text-sm font-cinzel">Educational Concept</h5>
                        <ul className="text-gray-400 text-xs font-quicksand pl-4 list-disc">
                          <li>Function calls</li>
                          <li>Function parameters</li>
                          <li>Return values</li>
                          <li>Types and type conversion</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-b border-wizware-gold/20 pb-4">
                    <h4 className="text-xl text-wizware-teal font-cinzel mb-2">Trigger Nodes</h4>
                    <p className="text-gray-300 mb-2 font-quicksand">
                      Trigger nodes determine when spells activate, functioning as event handlers in programming.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                      <div className="cosmic-card p-2">
                        <h5 className="text-wizware-gold text-sm font-cinzel">Functionality</h5>
                        <ul className="text-gray-400 text-xs font-quicksand pl-4 list-disc">
                          <li>Define conditions for spell activation</li>
                          <li>React to game events (hits, health thresholds)</li>
                          <li>Control spell timing and responsiveness</li>
                          <li>Manage cooldowns and charge systems</li>
                        </ul>
                      </div>
                      <div className="cosmic-card p-2">
                        <h5 className="text-wizware-gold text-sm font-cinzel">Educational Concept</h5>
                        <ul className="text-gray-400 text-xs font-quicksand pl-4 list-disc">
                          <li>Event handling</li>
                          <li>Event listeners</li>
                          <li>Callbacks</li>
                          <li>Timing and delays</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-b border-wizware-gold/20 pb-4">
                    <h4 className="text-xl text-wizware-teal font-cinzel mb-2">Effect Nodes</h4>
                    <p className="text-gray-300 mb-2 font-quicksand">
                      Effect nodes produce specific outcomes like damage, healing, or environmental effects.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                      <div className="cosmic-card p-2">
                        <h5 className="text-wizware-gold text-sm font-cinzel">Functionality</h5>
                        <ul className="text-gray-400 text-xs font-quicksand pl-4 list-disc">
                          <li>Apply specific effects to targets</li>
                          <li>Create status effects and persistent zones</li>
                          <li>Generate visual and audio effects</li>
                          <li>Control effect duration and intensity</li>
                        </ul>
                      </div>
                      <div className="cosmic-card p-2">
                        <h5 className="text-wizware-gold text-sm font-cinzel">Educational Concept</h5>
                        <ul className="text-gray-400 text-xs font-quicksand pl-4 list-disc">
                          <li>Function side effects</li>
                          <li>State changes</li>
                          <li>Output formatting</li>
                          <li>Data persistence</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-b border-wizware-gold/20 pb-4">
                    <h4 className="text-xl text-wizware-teal font-cinzel mb-2">Condition Nodes</h4>
                    <p className="text-gray-300 mb-2 font-quicksand">
                      Condition nodes create branching logic based on specific checks.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                      <div className="cosmic-card p-2">
                        <h5 className="text-wizware-gold text-sm font-cinzel">Functionality</h5>
                        <ul className="text-gray-400 text-xs font-quicksand pl-4 list-disc">
                          <li>Evaluate conditions and direct spell flow</li>
                          <li>Compare values and states</li>
                          <li>Create branching paths in spells</li>
                          <li>Handle complex logical operations</li>
                        </ul>
                      </div>
                      <div className="cosmic-card p-2">
                        <h5 className="text-wizware-gold text-sm font-cinzel">Educational Concept</h5>
                        <ul className="text-gray-400 text-xs font-quicksand pl-4 list-disc">
                          <li>If-then-else logic</li>
                          <li>Boolean operations</li>
                          <li>Comparison operators</li>
                          <li>Decision trees</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-b border-wizware-gold/20 pb-4">
                    <h4 className="text-xl text-wizware-teal font-cinzel mb-2">Variable Nodes</h4>
                    <p className="text-gray-300 mb-2 font-quicksand">
                      Variable nodes store and manipulate data values.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                      <div className="cosmic-card p-2">
                        <h5 className="text-wizware-gold text-sm font-cinzel">Functionality</h5>
                        <ul className="text-gray-400 text-xs font-quicksand pl-4 list-disc">
                          <li>Store and retrieve data values</li>
                          <li>Perform mathematical operations</li>
                          <li>Track changes in values</li>
                          <li>Create and manage data persistence</li>
                        </ul>
                      </div>
                      <div className="cosmic-card p-2">
                        <h5 className="text-wizware-gold text-sm font-cinzel">Educational Concept</h5>
                        <ul className="text-gray-400 text-xs font-quicksand pl-4 list-disc">
                          <li>Variables and data types</li>
                          <li>Basic arithmetic operations</li>
                          <li>Memory and state management</li>
                          <li>Data structures</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl text-wizware-teal font-cinzel mb-2">Flow Nodes</h4>
                    <p className="text-gray-300 mb-2 font-quicksand">
                      Flow nodes control execution sequence with loops and delays.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                      <div className="cosmic-card p-2">
                        <h5 className="text-wizware-gold text-sm font-cinzel">Functionality</h5>
                        <ul className="text-gray-400 text-xs font-quicksand pl-4 list-disc">
                          <li>Control the flow of execution</li>
                          <li>Create loops and iterations</li>
                          <li>Manage timing and delays</li>
                          <li>Enable parallel execution paths</li>
                        </ul>
                      </div>
                      <div className="cosmic-card p-2">
                        <h5 className="text-wizware-gold text-sm font-cinzel">Educational Concept</h5>
                        <ul className="text-gray-400 text-xs font-quicksand pl-4 list-disc">
                          <li>Loops (for, while)</li>
                          <li>Iteration and sequence</li>
                          <li>Time management in code</li>
                          <li>Parallel vs. sequential execution</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl text-wizware-gold font-cinzel mb-4">Rarity Framework</h3>
              <div className="cosmic-card">
                <p className="text-gray-300 mb-6 font-quicksand">
                  The node system utilizes five rarity tiers that progressively unlock greater capabilities, creating both gameplay progression and educational scaffolding.
                </p>
                
                <NodeRarityDisplay />
                
                <h4 className="text-xl text-wizware-teal font-cinzel mt-6 mb-3">Rarity-Specific Capabilities</h4>
                <p className="text-gray-300 mb-4 font-quicksand">
                  Each node type gains additional capabilities at higher rarities, creating a natural progression system that aligns with educational goals and gameplay depth:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="cosmic-card p-3">
                    <h5 className="text-wizware-gold font-cinzel text-base mb-2">Magic Nodes</h5>
                    <ul className="text-gray-400 text-xs font-quicksand pl-4 list-disc">
                      <li><span className="text-white">Common:</span> Single target, basic damage</li>
                      <li><span className="text-green-400">Uncommon:</span> Increased damage, small AoE</li>
                      <li><span className="text-blue-400">Rare:</span> Element combinations, status effects</li>
                      <li><span className="text-purple-400">Epic:</span> Multi-targeting, persistent effects</li>
                      <li><span className="text-yellow-400">Legendary:</span> Dual-element casting, environment alteration</li>
                    </ul>
                  </div>
                  
                  <div className="cosmic-card p-3">
                    <h5 className="text-wizware-gold font-cinzel text-base mb-2">Trigger Nodes</h5>
                    <ul className="text-gray-400 text-xs font-quicksand pl-4 list-disc">
                      <li><span className="text-white">Common:</span> Basic triggers with long cooldowns</li>
                      <li><span className="text-green-400">Uncommon:</span> Reduced cooldowns, basic filtering</li>
                      <li><span className="text-blue-400">Rare:</span> Charge-based system (2-3 charges)</li>
                      <li><span className="text-purple-400">Epic:</span> Complex event detection, short cooldowns</li>
                      <li><span className="text-yellow-400">Legendary:</span> No cooldowns, predictive triggering</li>
                    </ul>
                  </div>
                  
                  <div className="cosmic-card p-3">
                    <h5 className="text-wizware-gold font-cinzel text-base mb-2">Condition Nodes</h5>
                    <ul className="text-gray-400 text-xs font-quicksand pl-4 list-disc">
                      <li><span className="text-white">Common:</span> Simple if-then branching</li>
                      <li><span className="text-green-400">Uncommon:</span> If-else branching with enhanced comparison</li>
                      <li><span className="text-blue-400">Rare:</span> Multiple condition evaluation, AND/OR logic</li>
                      <li><span className="text-purple-400">Epic:</span> Complex condition trees, dynamic evaluation</li>
                      <li><span className="text-yellow-400">Legendary:</span> Quantum conditioning (both paths execute)</li>
                    </ul>
                  </div>
                  
                  <div className="cosmic-card p-3">
                    <h5 className="text-wizware-gold font-cinzel text-base mb-2">Flow Nodes</h5>
                    <ul className="text-gray-400 text-xs font-quicksand pl-4 list-disc">
                      <li><span className="text-white">Common:</span> Limited iterations (max 3)</li>
                      <li><span className="text-green-400">Uncommon:</span> More iterations (max 5), basic control</li>
                      <li><span className="text-blue-400">Rare:</span> Advanced iterations (max 10), nested loops</li>
                      <li><span className="text-purple-400">Epic:</span> Many iterations (max 20), dynamic iteration control</li>
                      <li><span className="text-yellow-400">Legendary:</span> Unlimited iterations, parallel execution paths</li>
                    </ul>
                  </div>
                </div>
                
                <h4 className="text-xl text-wizware-teal font-cinzel mt-6 mb-3">Node Acquisition Methods</h4>
                <p className="text-gray-300 mb-4 font-quicksand">
                  Nodes can be acquired through multiple gameplay systems:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="cosmic-card p-3">
                    <h5 className="text-wizware-gold font-cinzel text-base mb-2">Exploration & Combat</h5>
                    <ul className="text-gray-400 text-xs font-quicksand pl-4 list-disc">
                      <li>Hidden in treasure chests throughout the labyrinth</li>
                      <li>Defeated enemies occasionally drop nodes</li>
                      <li>Special vendor shops sell nodes of varying rarities</li>
                    </ul>
                  </div>
                  
                  <div className="cosmic-card p-3">
                    <h5 className="text-wizware-gold font-cinzel text-base mb-2">Crafting & Achievements</h5>
                    <ul className="text-gray-400 text-xs font-quicksand pl-4 list-disc">
                      <li>Combine similar nodes to upgrade to higher rarities</li>
                      <li>Educational milestones unlock guaranteed nodes</li>
                      <li>End-of-wave rewards include appropriate progression nodes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Technical Section */}
        {activeSection === 'technical' && (
          <section className="animate-magic-fade-in">
            <div className="max-w-6xl mx-auto">
              <h2 className="wizware-title text-3xl md:text-4xl mb-8 text-center">Technical Implementation</h2>
              
              <div className="cosmic-card mb-10">
                <h3 className="text-2xl text-wizware-gold font-cinzel mb-4">Core Framework</h3>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <ul className="space-y-2 font-quicksand text-gray-300">
                      <li className="flex items-center">
                        <Binary className="text-wizware-teal mr-3 flex-shrink-0" size={20} />
                        Built with Unreal Engine
                      </li>
                      <li className="flex items-center">
                        <Code className="text-wizware-teal mr-3 flex-shrink-0" size={20} />
                        C++ codebase with 30+ custom classes
                      </li>
                      <li className="flex items-center">
                        <Cpu className="text-wizware-teal mr-3 flex-shrink-0" size={20} />
                        Custom visual node editor system
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-wizware-dark-black rounded p-3 border border-wizware-gold/20">
                      <p className="text-xs font-mono text-gray-300 mb-2">// Core interface for all node types</p>
                      <p className="text-xs font-mono text-wizware-teal">class UGWTSpellNode : public UObject</p>
                      <p className="text-xs font-mono text-gray-300">{'{'}</p>
                      <p className="text-xs font-mono text-gray-300 ml-4">GENERATED_BODY()</p>
                      <p className="text-xs font-mono text-gray-300 ml-4">// Node identity properties</p>
                      <p className="text-xs font-mono text-gray-300 ml-4">UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Node")</p>
                      <p className="text-xs font-mono text-gray-300 ml-4">FGuid NodeID;</p>
                      <p className="text-xs font-mono text-gray-300 ml-4">// And many more properties and methods</p>
                      <p className="text-xs font-mono text-gray-300">{'}'}</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl text-wizware-gold font-cinzel mb-4">Key Systems</h3>
              <div className="cosmic-card mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-wizware-teal font-cinzel text-lg mb-2">1. Spell System</h4>
                    <ul className="space-y-1 font-quicksand text-gray-300 pl-6 list-disc">
                      <li>UGWTSpellNode - Base class for all spell nodes</li>
                      <li>UGWTSpell - Complete spell composed of nodes</li>
                      <li>UGWTGrimoire - Manages player's spell collection</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-wizware-teal font-cinzel text-lg mb-2">2. Character System</h4>
                    <ul className="space-y-1 font-quicksand text-gray-300 pl-6 list-disc">
                      <li>AGWTCharacter - Base character class</li>
                      <li>AGWTPlayerCharacter - Player implementation</li>
                      <li>AGWTEnemyCharacter - Enemy implementation</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-wizware-teal font-cinzel text-lg mb-2">3. Level Generation</h4>
                    <ul className="space-y-1 font-quicksand text-gray-300 pl-6 list-disc">
                      <li>AGWTLevelGenerator - Procedural labyrinth creation</li>
                      <li>AGWTRoom - Individual room implementation</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-wizware-teal font-cinzel text-lg mb-2">4. UI System</h4>
                    <ul className="space-y-1 font-quicksand text-gray-300 pl-6 list-disc">
                      <li>UGWTHUDWidget - Gameplay interface</li>
                      <li>UGWTSpellEditorWidget - Visual programming interface</li>
                      <li>UGWTMiniMapWidget - Labyrinth navigation</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-wizware-teal font-cinzel text-lg mb-2">5. Educational System</h4>
                    <ul className="space-y-1 font-quicksand text-gray-300 pl-6 list-disc">
                      <li>UGWTEducationalTracker - Monitors concept understanding</li>
                      <li>UGWTTutorialManager - Manages tutorial sequences</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl text-wizware-gold font-cinzel mb-4">Enums and Data Types</h3>
              <div className="cosmic-card mb-10">
                <p className="text-gray-300 mb-4 font-quicksand">
                  Extensive type system including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="cosmic-card p-3">
                    <code className="text-wizware-teal font-mono text-sm">EGWTElementType</code>
                    <p className="text-gray-400 text-xs font-quicksand mt-1">(Fire, Ice, Lightning, etc.)</p>
                  </div>
                  <div className="cosmic-card p-3">
                    <code className="text-wizware-teal font-mono text-sm">EGWTRoomType</code>
                    <p className="text-gray-400 text-xs font-quicksand mt-1">(Combat, Treasure, Shop, etc.)</p>
                  </div>
                  <div className="cosmic-card p-3">
                    <code className="text-wizware-teal font-mono text-sm">EGWTStatusEffectType</code>
                    <p className="text-gray-400 text-xs font-quicksand mt-1">(Burning, Frozen, etc.)</p>
                  </div>
                  <div className="cosmic-card p-3">
                    <code className="text-wizware-teal font-mono text-sm">EGWTSpellComponentType</code>
                    <p className="text-gray-400 text-xs font-quicksand mt-1">(Magic, Trigger, Effect, etc.)</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl text-wizware-gold font-cinzel mb-4">Performance Optimization</h3>
              <div className="cosmic-card">
                <h4 className="text-xl text-wizware-teal font-cinzel mb-3">Design Principles</h4>
                <ul className="space-y-2 font-quicksand text-gray-300 mb-6">
                  <li className="flex items-center">
                    <CheckSquare className="text-wizware-teal mr-3 flex-shrink-0" size={20} />
                    Maintain a smooth and consistent frame rate
                  </li>
                  <li className="flex items-center">
                    <CheckSquare className="text-wizware-teal mr-3 flex-shrink-0" size={20} />
                    Optimize resource utilization across various hardware configurations
                  </li>
                  <li className="flex items-center">
                    <CheckSquare className="text-wizware-teal mr-3 flex-shrink-0" size={20} />
                    Ensure a seamless player experience
                  </li>
                </ul>
                
                <h4 className="text-xl text-wizware-teal font-cinzel mb-3">Key Features</h4>
                <ul className="space-y-2 font-quicksand text-gray-300">
                  <li className="flex items-start">
                    <CheckSquare className="text-wizware-teal mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>
                      <strong className="text-wizware-teal">Asset Streaming and Prioritization:</strong> Ensures that only necessary resources are loaded and rendered at any given time.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="text-wizware-teal mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>
                      <strong className="text-wizware-teal">Particle System Optimization:</strong> Visual effects associated with spells are carefully optimized for performance.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="text-wizware-teal mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>
                      <strong className="text-wizware-teal">Pathfinding and AI Optimizations:</strong> Intelligent enemy behaviors with minimal computational overhead.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        {activeSection === 'features' && (
          <section className="animate-magic-fade-in">
            <div className="max-w-6xl mx-auto">
              <h2 className="wizware-title text-3xl md:text-4xl mb-8 text-center">Game Systems</h2>
              
              <div className="cosmic-card mb-10">
                <h3 className="text-2xl text-wizware-gold font-cinzel mb-4">Item System</h3>
                <div className="space-y-4">
                  <div className="cosmic-card p-4">
                    <h4 className="text-wizware-teal font-cinzel text-lg mb-2 flex items-center">
                      <Wand className="mr-2 text-wizware-gold" size={20} />
                      Spell Components
                    </h4>
                    <p className="text-gray-300 font-quicksand">Unlock new node types and elements</p>
                  </div>
                  
                  <div className="cosmic-card p-4">
                    <h4 className="text-wizware-teal font-cinzel text-lg mb-2 flex items-center">
                      <Shield className="mr-2 text-wizware-gold" size={20} />
                      Equipment
                    </h4>
                    <ul className="space-y-1 font-quicksand text-gray-300 pl-6 list-disc">
                      <li>Wands: Affect spell power and critical chance</li>
                      <li>Hats: Improve spell range and mana efficiency</li>
                      <li>Robes: Provide elemental resistances and status effect duration</li>
                    </ul>
                  </div>
                  
                  <div className="cosmic-card p-4">
                    <h4 className="text-wizware-teal font-cinzel text-lg mb-2 flex items-center">
                      <Beaker className="mr-2 text-wizware-gold" size={20} />
                      Consumables
                    </h4>
                    <p className="text-gray-300 font-quicksand">Potions, scrolls, gems for temporary or permanent effects</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl text-wizware-gold font-cinzel mb-4">Enemy Types</h3>
              <div className="cosmic-card mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="cosmic-card p-4">
                    <h4 className="text-wizware-teal font-cinzel text-lg mb-2 flex items-center">
                      <Skull className="mr-2 text-wizware-gold" size={20} />
                      Early Waves
                    </h4>
                    <ul className="space-y-1 font-quicksand text-gray-300 pl-6 list-disc">
                      <li>Goblins</li>
                      <li>Rats</li>
                      <li>Slimes</li>
                    </ul>
                  </div>
                  
                  <div className="cosmic-card p-4">
                    <h4 className="text-wizware-teal font-cinzel text-lg mb-2 flex items-center">
                      <Skull className="mr-2 text-wizware-gold" size={20} />
                      Mid Waves
                    </h4>
                    <ul className="space-y-1 font-quicksand text-gray-300 pl-6 list-disc">
                      <li>Skeletons</li>
                      <li>Dark Wizards</li>
                      <li>Mimics</li>
                    </ul>
                  </div>
                  
                  <div className="cosmic-card p-4">
                    <h4 className="text-wizware-teal font-cinzel text-lg mb-2 flex items-center">
                      <Skull className="mr-2 text-wizware-gold" size={20} />
                      Late Waves
                    </h4>
                    <ul className="space-y-1 font-quicksand text-gray-300 pl-6 list-disc">
                      <li>Elite versions of previous enemies</li>
                      <li>Special variants with unique abilities</li>
                    </ul>
                  </div>
                  
                  <div className="cosmic-card p-4">
                    <h4 className="text-wizware-teal font-cinzel text-lg mb-2 flex items-center">
                      <Crown className="mr-2 text-wizware-gold" size={20} />
                      Boss Wave
                    </h4>
                    <ul className="space-y-1 font-quicksand text-gray-300 pl-6 list-disc">
                      <li>Powerful unique enemies</li>
                      <li>Multi-phase challenges</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl text-wizware-gold font-cinzel mb-4">Progression Systems</h3>
              <div className="cosmic-card mb-10">
                <ul className="space-y-4 font-quicksand text-gray-300">
                  <li className="flex items-start">
                    <Trophy className="text-wizware-teal mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <span className="font-semibold text-wizware-teal">Player Level:</span>
                      <span className="ml-2">Experience from objectives, enemies, puzzles, and spell creation</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Wand className="text-wizware-teal mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <span className="font-semibold text-wizware-teal">Spell Unlocks:</span>
                      <span className="ml-2">New components, elements, and modifiers</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-wizware-teal mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <span className="font-semibold text-wizware-teal">Ranking System:</span>
                      <span className="ml-2">Competitive ladder from Bronze to Grandmaster</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl text-wizware-gold font-cinzel mb-4">Educational Elements</h3>
              <div className="cosmic-card mb-10">
                <h4 className="text-xl text-wizware-teal font-cinzel mb-3">Educational Tracking</h4>
                <p className="text-gray-300 mb-4 font-quicksand">
                  The game monitors players' understanding of programming concepts:
                </p>
                <ul className="space-y-2 font-quicksand text-gray-300 mb-6">
                  <li className="flex items-center">
                    <CheckSquare className="text-wizware-teal mr-3 flex-shrink-0" size={20} />
                    Tracks complexity of created spells
                  </li>
                  <li className="flex items-center">
                    <CheckSquare className="text-wizware-teal mr-3 flex-shrink-0" size={20} />
                    Analyzes use of different node types
                  </li>
                  <li className="flex items-center">
                    <CheckSquare className="text-wizware-teal mr-3 flex-shrink-0" size={20} />
                    Provides feedback on programming concept mastery
                  </li>
                  <li className="flex items-center">
                    <CheckSquare className="text-wizware-teal mr-3 flex-shrink-0" size={20} />
                    Suggests improvements and new challenges
                  </li>
                </ul>
                
                <h4 className="text-xl text-wizware-teal font-cinzel mb-3">Tutorial System</h4>
                <ul className="space-y-2 font-quicksand text-gray-300">
                  <li className="flex items-center">
                    <CheckSquare className="text-wizware-teal mr-3 flex-shrink-0" size={20} />
                    Interactive tutorials introduce spell creation basics
                  </li>
                  <li className="flex items-center">
                    <CheckSquare className="text-wizware-teal mr-3 flex-shrink-0" size={20} />
                    Guided challenges to learn specific concepts
                  </li>
                  <li className="flex items-center">
                    <CheckSquare className="text-wizware-teal mr-3 flex-shrink-0" size={20} />
                    Progressive difficulty matching educational growth
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl text-wizware-gold font-cinzel mb-4">Business Model & Development</h3>
              <div className="cosmic-card">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl text-wizware-teal font-cinzel mb-3">Revenue Projections</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr>
                            <th className="py-2 px-2 text-left font-cinzel text-wizware-gold text-sm border-b border-wizware-gold/20">Year</th>
                            <th className="py-2 px-2 text-left font-cinzel text-wizware-gold text-sm border-b border-wizware-gold/20">Revenue (M$)</th>
                            <th className="py-2 px-2 text-left font-cinzel text-wizware-gold text-sm border-b border-wizware-gold/20">Copies (M)</th>
                          </tr>
                        </thead>
                        <tbody className="font-quicksand text-gray-300 text-sm">
                          <tr>
                            <td className="py-2 px-2 border-b border-wizware-gold/10">2025</td>
                            <td className="py-2 px-2 border-b border-wizware-gold/10">1</td>
                            <td className="py-2 px-2 border-b border-wizware-gold/10">0.2</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2 border-b border-wizware-gold/10">2026</td>
                            <td className="py-2 px-2 border-b border-wizware-gold/10">3.75-7.5</td>
                            <td className="py-2 px-2 border-b border-wizware-gold/10">0.75</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2 border-b border-wizware-gold/10">2027</td>
                            <td className="py-2 px-2 border-b border-wizware-gold/10">7.5-22.5</td>
                            <td className="py-2 px-2 border-b border-wizware-gold/10">1.5</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl text-wizware-teal font-cinzel mb-3">Development Timeline</h4>
                    <p className="text-gray-300 text-sm font-quicksand mb-2">Currently in early development with planned release in 8-12 months:</p>
                    <ul className="space-y-1 font-quicksand text-gray-300 text-sm pl-5 list-disc">
                      <li><span className="text-wizware-teal">Phase 1 (Current):</span> Core systems development</li>
                      <li><span className="text-wizware-teal">Phase 2:</span> Content development and expansion</li>
                      <li><span className="text-wizware-teal">Phase 3:</span> Polish, optimization, and balancing</li>
                      <li><span className="text-wizware-teal">Phase 4:</span> Release preparation and marketing</li>
                    </ul>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h4 className="text-xl text-wizware-teal font-cinzel mb-3">Growth Strategies</h4>
                    <ul className="space-y-2 font-quicksand text-gray-300">
                      <li className="flex items-center">
                        <Rocket className="text-wizware-teal mr-3 flex-shrink-0" size={20} />
                        Strategic partnerships with educational platforms
                      </li>
                      <li className="flex items-center">
                        <Rocket className="text-wizware-teal mr-3 flex-shrink-0" size={20} />
                        Humble Bundle collaborations
                      </li>
                      <li className="flex items-center">
                        <Rocket className="text-wizware-teal mr-3 flex-shrink-0" size={20} />
                        Epic Games Store timed exclusivity
                      </li>
                      <li className="flex items-center">
                        <Rocket className="text-wizware-teal mr-3 flex-shrink-0" size={20} />
                        Educational institution licensing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-t from-wizware-dark-black to-wizware-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/sacred-geometry.svg')] bg-repeat opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h2 className="wizware-title text-4xl md:text-5xl mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8 font-quicksand">
              Join the Grand Wizard Tournament and discover the magic of programming through immersive gameplay
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#" 
                className="cosmic-button inline-flex items-center"
              >
                Join the Waitlist <ExternalLink size={16} className="ml-2" />
              </a>
              <a 
                href="#" 
                className="cosmic-button-outline inline-flex items-center"
              >
                Learn More <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GamePage;