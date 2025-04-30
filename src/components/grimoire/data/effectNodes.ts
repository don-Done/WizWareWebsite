
import { NodeRarity } from '../types/nodeTypes';

export enum ElementType {
  Fire = 'Fire',
  Ice = 'Ice',
  Light = 'Light',
  Void = 'Void',
  Wind = 'Wind'
}

export enum EffectType {
  Damage = 'Damage',
  Heal = 'Heal',
  ApplyStatus = 'ApplyStatus',
  Teleport = 'Teleport',
  Knockback = 'Knockback',
  Shield = 'Shield',
  Summon = 'Summon',
  ManaDrain = 'ManaDrain',
  AreaEffect = 'AreaEffect'
}

export interface EffectNode {
  id: string;
  title: string;
  effectType: EffectType;
  effectValue: number;
  effectDuration: number;
  elementType: ElementType;
  description?: string;
  rarity: NodeRarity;
  radius?: number;
  penetratesObstacles?: boolean;
  isPersistentZone?: boolean;
}

export const effectNodes: EffectNode[] = [
  {
    id: 'damage-effect',
    title: 'Damage Effect',
    effectType: EffectType.Damage,
    effectValue: 25.0,
    effectDuration: 0.0,
    elementType: ElementType.Fire,
    description: 'Applies direct damage to the target',
    rarity: NodeRarity.Common
  },
  {
    id: 'healing-effect',
    title: 'Healing Effect',
    effectType: EffectType.Heal,
    effectValue: 20.0,
    effectDuration: 0.0,
    elementType: ElementType.Light,
    description: 'Restores health to the target',
    rarity: NodeRarity.Common
  },
  {
    id: 'burning-status',
    title: 'Apply Burning',
    effectType: EffectType.ApplyStatus,
    effectValue: 5.0,
    effectDuration: 5.0,
    elementType: ElementType.Fire,
    description: 'Applies damage over time',
    rarity: NodeRarity.Uncommon
  },
  {
    id: 'teleport',
    title: 'Teleport',
    effectType: EffectType.Teleport,
    effectValue: 0.0,
    effectDuration: 0.0,
    elementType: ElementType.Void,
    description: 'Moves target to hit location',
    rarity: NodeRarity.Rare
  },
  {
    id: 'knockback',
    title: 'Knockback',
    effectType: EffectType.Knockback,
    effectValue: 15.0,
    effectDuration: 0.0,
    elementType: ElementType.Wind,
    description: 'Pushes target away',
    rarity: NodeRarity.Uncommon
  },
  {
    id: 'shield',
    title: 'Protective Shield',
    effectType: EffectType.Shield,
    effectValue: 30.0,
    effectDuration: 10.0,
    elementType: ElementType.Light,
    description: 'Applies temporary protection',
    rarity: NodeRarity.Rare,
    radius: 2.0
  },
  {
    id: 'summon',
    title: 'Summon Minion',
    effectType: EffectType.Summon,
    effectValue: 1.0,
    effectDuration: 20.0,
    elementType: ElementType.Void,
    description: 'Creates a minion',
    rarity: NodeRarity.Epic,
    radius: 5.0,
    penetratesObstacles: true
  },
  {
    id: 'freeze',
    title: 'Freeze Target',
    effectType: EffectType.ApplyStatus,
    effectValue: 1.0,
    effectDuration: 3.0,
    elementType: ElementType.Ice,
    description: 'Immobilizes target',
    rarity: NodeRarity.Uncommon
  },
  {
    id: 'mana-drain',
    title: 'Mana Drain',
    effectType: EffectType.ManaDrain,
    effectValue: 15.0,
    effectDuration: 0.0,
    elementType: ElementType.Void,
    description: 'Steals mana from target',
    rarity: NodeRarity.Rare,
    radius: 2.0
  },
  {
    id: 'area-effect',
    title: 'Explosion',
    effectType: EffectType.AreaEffect,
    effectValue: 15.0,
    effectDuration: 0.0,
    elementType: ElementType.Fire,
    description: 'Damages all enemies in radius',
    rarity: NodeRarity.Epic,
    radius: 5.0,
    penetratesObstacles: true
  },
  {
    id: 'persistent-zone',
    title: 'Persistent Fire',
    effectType: EffectType.AreaEffect,
    effectValue: 10.0,
    effectDuration: 30.0,
    elementType: ElementType.Fire,
    description: 'Creates a zone that continues to apply effect',
    rarity: NodeRarity.Legendary,
    radius: 8.0,
    penetratesObstacles: true,
    isPersistentZone: true
  }
];
