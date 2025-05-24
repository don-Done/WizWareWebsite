
export enum GrimoireNodeType {
  Trigger = 'triggerNode',
  Effect = 'effectNode',
  Condition = 'conditionNode',
  Variable = 'variableNode',
  Flow = 'flowNode'
  spell = 'spellnode'
}

export enum NodeRarity {
  Common = 'common',
  Uncommon = 'uncommon',
  Rare = 'rare',
  Epic = 'epic',
  Legendary = 'legendary'
}

export enum VariableType {
  Float = 'float',
  Int = 'int',
  Bool = 'bool',
  Vector = 'vector',
  Target = 'target',
  Any = 'any' 
}

export enum VariableOperation {
  Write = 'write',
  Read = 'read',
  Add = 'add',
  Multiply = 'multiply',
  Store = 'store'  
}

export interface NodeConnectionPoint {
  type: GrimoireNodeType;
  label: string;
  color: string;
}

export const NODE_CONNECTION_POINTS: Record<GrimoireNodeType, NodeConnectionPoint> = {
  [GrimoireNodeType.Trigger]: {
    type: GrimoireNodeType.Trigger,
    label: 'Event',
    color: 'bg-red-500'
  },
  [GrimoireNodeType.Effect]: {
    type: GrimoireNodeType.Effect,
    label: 'Effect',
    color: 'bg-purple-500'
  },
  [GrimoireNodeType.Condition]: {
    type: GrimoireNodeType.Condition,
    label: 'Condition',
    color: 'bg-green-500'
  },
  [GrimoireNodeType.Variable]: {
    type: GrimoireNodeType.Variable,
    label: 'Data',
    color: 'bg-yellow-500'
  },
  [GrimoireNodeType.Flow]: {
    type: GrimoireNodeType.Flow,
    label: 'Flow',
    color: 'bg-blue-500'
  },
  [GrimoireNodeType.Spell]: { // <--- Add this block
    type: GrimoireNodeType.Spell,
    label: 'Spell',
    color: 'bg-purple-500' // Use a color consistent with your design
  },
};

export interface NodeRarityData {
  connectionSlots: number;
  effectScaling: number;
  uniqueFeatures: string[];
  inputSlots: number;
  outputSlots: number;
}

export const NODE_RARITY_DATA: Record<NodeRarity, NodeRarityData> = {
  [NodeRarity.Common]: {
    connectionSlots: 2,
    effectScaling: 1.0,
    uniqueFeatures: ['Basic functionality'],
    inputSlots: 1,
    outputSlots: 1
  },
  [NodeRarity.Uncommon]: {
    connectionSlots: 3,
    effectScaling: 1.25,
    uniqueFeatures: ['One minor additional property'],
    inputSlots: 2,
    outputSlots: 1
  },
  [NodeRarity.Rare]: {
    connectionSlots: 4,
    effectScaling: 1.5,
    uniqueFeatures: ['One major additional property'],
    inputSlots: 2,
    outputSlots: 2
  },
  [NodeRarity.Epic]: {
    connectionSlots: 5,
    effectScaling: 2.0,
    uniqueFeatures: ['Two additional properties'],
    inputSlots: 3,
    outputSlots: 2
  },
  [NodeRarity.Legendary]: {
    connectionSlots: 6,
    effectScaling: 2.5,
    uniqueFeatures: ['Unique game-changing effect'],
    inputSlots: 3,
    outputSlots: 3
  }
};
