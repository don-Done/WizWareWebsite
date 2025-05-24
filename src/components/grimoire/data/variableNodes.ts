import { NodeRarity, VariableType, VariableOperation } from '../types/nodeTypes';

export interface VariableNode {
  id: string;
  title: string;
  variableName: string;
  variableType: VariableType;
  defaultValue: number | boolean | number[] | null; // Based on VariableType enum usage below
  operation: VariableOperation;
  description: string;
  rarity: NodeRarity;
}

export const variableNodes: VariableNode[] = [
  {
    id: 'damage-multiplier',
    title: 'Damage Multiplier',
    variableName: 'DamageMultiplier',
    variableType: VariableType.Float,
    defaultValue: 1.5,
    operation: VariableOperation.Write,
    description: 'Stores a multiplier for damage calculations',
    rarity: NodeRarity.Common
  },
  {
    id: 'target-health',
    title: 'Get Target Health',
    variableName: 'TargetHealth',
    variableType: VariableType.Float,
    defaultValue: 100.0,
    operation: VariableOperation.Read,
    description: 'Reads target\'s health percentage',
    rarity: NodeRarity.Epic
  },
  {
    id: 'hit-counter',
    title: 'Hit Counter',
    variableName: 'HitCount',
    variableType: VariableType.Int,
    defaultValue: 0,
    operation: VariableOperation.Add,
    description: 'Counts the number of hits',
    rarity: NodeRarity.Uncommon
  },
  {
    id: 'is-critical',
    title: 'Is Critical Hit',
    variableName: 'IsCritical',
    variableType: VariableType.Bool,
    defaultValue: false,
    operation: VariableOperation.Write,
    description: 'Boolean flag for critical hits',
    rarity: NodeRarity.Common
  },
  {
    id: 'target-position',
    title: 'Target Position',
    variableName: 'TargetPos',
    variableType: VariableType.Vector,
    defaultValue: [0, 0, 0],
    operation: VariableOperation.Read,
    description: 'Stores location for targeting',
    rarity: NodeRarity.Rare
  },
  {
    id: 'spell-cooldown',
    title: 'Spell Cooldown',
    variableName: 'Cooldown',
    variableType: VariableType.Float,
    defaultValue: 5.0,
    operation: VariableOperation.Multiply,
    description: 'Adjusts spell cooldown time',
    rarity: NodeRarity.Uncommon
  },
  {
    id: 'mana-cost',
    title: 'Adjust Mana Cost',
    variableName: 'ManaCost',
    variableType: VariableType.Float,
    defaultValue: 0.8,
    operation: VariableOperation.Multiply,
    description: 'Modifies spell mana cost',
    rarity: NodeRarity.Rare
  },
  {
    id: 'current-target',
    title: 'Current Target',
    variableName: 'CurrentTarget',
    variableType: VariableType.Target,
    defaultValue: null,
    operation: VariableOperation.Write,
    description: 'Stores reference to target actor',
    rarity: NodeRarity.Uncommon
  },
  {
    id: 'spell-range',
    title: 'Extend Range',
    variableName: 'SpellRange',
    variableType: VariableType.Float,
    defaultValue: 5.0,
    operation: VariableOperation.Add,
    description: 'Modifies spell\'s effective range',
    rarity: NodeRarity.Rare
  },
  {
    id: 'combo-points',
    title: 'Combo Points',
    variableName: 'ComboPoints',
    variableType: VariableType.Int,
    defaultValue: 0,
    operation: VariableOperation.Add,
    description: 'Tracks combo system',
    rarity: NodeRarity.Epic
  },
  {
    id: 'memory-variable',
    title: 'Memory Variable',
    variableName: 'MemoryVar',
    variableType: VariableType.Any,
    defaultValue: null,
    operation: VariableOperation.Store,
    description: 'Retains values between spell casts',
    rarity: NodeRarity.Legendary
  }
];
