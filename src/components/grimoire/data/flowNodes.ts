
import { NodeRarity } from '../types/nodeTypes';

export interface FlowNode {
  id: string;
  title: string;
  flowType: string;
  iterationCount: number;
  timeLimit: number;
  description: string;
  rarity: NodeRarity;
  conditionVariable?: string;
}

export const flowNodes: FlowNode[] = [
  {
    id: 'repeat-cast',
    title: 'Triple Cast',
    flowType: 'Repeat',
    iterationCount: 3,
    timeLimit: 0.0,
    description: 'Casts spell multiple times',
    rarity: NodeRarity.Common
  },
  {
    id: 'while-mana',
    title: 'While Mana Available',
    flowType: 'While',
    iterationCount: 0,
    timeLimit: 0.0,
    description: 'Continues until mana depleted',
    rarity: NodeRarity.Rare,
    conditionVariable: 'HasMana'
  },
  {
    id: 'for-each-enemy',
    title: 'For Each Enemy',
    flowType: 'ForEach',
    iterationCount: 0,
    timeLimit: 0.0,
    description: 'Performs action on each enemy in range',
    rarity: NodeRarity.Rare,
    conditionVariable: 'NearbyEnemies'
  },
  {
    id: 'delayed-effect',
    title: 'Delayed Effect',
    flowType: 'Delay',
    iterationCount: 0,
    timeLimit: 2.5,
    description: 'Waits before executing next node',
    rarity: NodeRarity.Uncommon
  },
  {
    id: 'pulsing-effect',
    title: 'Pulsing Damage',
    flowType: 'Repeat',
    iterationCount: 5,
    timeLimit: 10.0,
    description: 'Repeats an effect over time',
    rarity: NodeRarity.Uncommon
  },
  {
    id: 'while-in-range',
    title: 'While Target In Range',
    flowType: 'While',
    iterationCount: 0,
    timeLimit: 30.0,
    description: 'Continues while target is in range',
    rarity: NodeRarity.Rare,
    conditionVariable: 'TargetInRange'
  },
  {
    id: 'for-each-combo',
    title: 'For Each Combo Point',
    flowType: 'ForEach',
    iterationCount: 0,
    timeLimit: 0.0,
    description: 'Consumes combo points',
    rarity: NodeRarity.Rare,
    conditionVariable: 'ComboPoints'
  },
  {
    id: 'limited-duration',
    title: 'Limited Duration Effect',
    flowType: 'While',
    iterationCount: 0,
    timeLimit: 8.0,
    description: 'Executes for a set duration',
    rarity: NodeRarity.Uncommon,
    conditionVariable: 'DurationActive'
  },
  {
    id: 'channeled-spell',
    title: 'Channel Spell',
    flowType: 'While',
    iterationCount: 0,
    timeLimit: 15.0,
    description: 'Continues while player channels',
    rarity: NodeRarity.Epic,
    conditionVariable: 'IsChanneling'
  },
  {
    id: 'sequential-cast',
    title: 'Sequential Cast',
    flowType: 'Sequence',
    iterationCount: 0,
    timeLimit: 0.0,
    description: 'Performs actions in sequence',
    rarity: NodeRarity.Legendary
  },
  {
    id: 'time-manipulation',
    title: 'Time Warp',
    flowType: 'TimeWarp',
    iterationCount: 10,
    timeLimit: 5.0,
    description: 'Executes content at 2x-5x speed',
    rarity: NodeRarity.Legendary
  }
];
