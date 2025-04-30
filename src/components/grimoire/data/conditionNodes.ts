import { NodeRarity } from '../types/nodeTypes';

export interface ConditionNode {
  id: string;
  title: string;
  conditionType: string;
  comparisonValue: number;
  description: string;
  rarity: NodeRarity;
}

export const conditionNodes: ConditionNode[] = [
  {
    id: 'health-check',
    title: 'If Health Below',
    conditionType: 'HealthCheck',
    comparisonValue: 50.0,
    description: "Branches based on target's health percentage",
    rarity: NodeRarity.Common
  },
  {
    id: 'mana-check',
    title: 'If Mana Above',
    conditionType: 'ManaCheck',
    comparisonValue: 60.0,
    description: "Branches based on caster's mana",
    rarity: NodeRarity.Common
  },
  {
    id: 'distance-check',
    title: 'If Target Is Close',
    conditionType: 'DistanceCheck',
    comparisonValue: 10.0,
    description: 'Branches based on distance to target',
    rarity: NodeRarity.Uncommon
  },
  {
    id: 'elemental-check',
    title: 'If Vulnerable To Fire',
    conditionType: 'ElementalCheck',
    comparisonValue: 1.0,
    description: 'Branches based on elemental vulnerability',
    rarity: NodeRarity.Rare
  },
  {
    id: 'status-check',
    title: 'If Target Is Burning',
    conditionType: 'StatusEffectCheck',
    comparisonValue: 1.0,
    description: 'Checks if target has a specific status effect',
    rarity: NodeRarity.Uncommon
  },
  {
    id: 'random-chance',
    title: '25% Chance',
    conditionType: 'RandomChance',
    comparisonValue: 25.0,
    description: 'Random probability check',
    rarity: NodeRarity.Common
  },
  {
    id: 'enemy-count',
    title: 'If Multiple Enemies',
    conditionType: 'EnemyCountCheck',
    comparisonValue: 3.0,
    description: 'Checks number of nearby enemies',
    rarity: NodeRarity.Rare
  },
  {
    id: 'time-check',
    title: 'If Night Time',
    conditionType: 'TimeOfDayCheck',
    comparisonValue: 1.0,
    description: 'Checks current time of day',
    rarity: NodeRarity.Uncommon
  },
  {
    id: 'spell-power',
    title: 'If High Spell Power',
    conditionType: 'SpellPowerCheck',
    comparisonValue: 50.0,
    description: 'Checks caster\'s spell power',
    rarity: NodeRarity.Epic
  },
  {
    id: 'environment',
    title: 'If In Water',
    conditionType: 'EnvironmentCheck',
    comparisonValue: 2.0,
    description: 'Checks current environment',
    rarity: NodeRarity.Rare
  },
  {
    id: 'quantum-condition',
    title: 'Quantum Split',
    conditionType: 'QuantumCondition',
    comparisonValue: 0.75,
    description: 'Follows both paths with 75% effectiveness',
    rarity: NodeRarity.Legendary
  }
];
