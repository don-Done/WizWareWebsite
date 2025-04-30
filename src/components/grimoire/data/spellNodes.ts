
import { NodeRarity } from '../types/nodeTypes';

export type ElementType = 'Fire' | 'Ice' | 'Lightning' | 'Earth' | 'Void' | 'Light' | 'Wind' | 'Arcane';

export interface SpellNode {
  id: string;
  title: string;
  baseDamage: number;
  range: number;
  castTime: number;
  manaCost: number;
  elementType: ElementType;
  description?: string;
  rarity: NodeRarity;
  multiTarget?: number;
  statusEffect?: string;
  secondaryElement?: ElementType;
}

export const spellNodes: SpellNode[] = [
  {
    id: 'fireball',
    title: 'Fireball',
    baseDamage: 25,
    range: 15,
    castTime: 1.2,
    manaCost: 15,
    elementType: 'Fire',
    description: 'A fiery projectile that causes burn damage on impact. Effective against ice-based enemies.',
    rarity: NodeRarity.Common
  },
  {
    id: 'ice-spike',
    title: 'Ice Spike',
    baseDamage: 20,
    range: 25,
    castTime: 1.5,
    manaCost: 18,
    elementType: 'Ice',
    description: 'Long-range frost projectile that has a chance to slow enemy movement. Effective against fire-based enemies.',
    rarity: NodeRarity.Common
  },
  {
    id: 'lightning-bolt',
    title: 'Lightning Bolt',
    baseDamage: 18,
    range: 20,
    castTime: 0.5,
    manaCost: 22,
    elementType: 'Lightning',
    description: 'Quick casting electric spell that can chain between multiple targets. Effective against targets in water.',
    rarity: NodeRarity.Uncommon,
    multiTarget: 2
  },
  {
    id: 'earth-tremor',
    title: 'Earth Tremor',
    baseDamage: 30,
    range: 8,
    castTime: 2.0,
    manaCost: 25,
    elementType: 'Earth',
    description: 'Creates a localized earthquake that damages all enemies in range. Can knock targets off balance.',
    rarity: NodeRarity.Uncommon,
    statusEffect: 'Knockdown'
  },
  {
    id: 'void-orb',
    title: 'Void Orb',
    baseDamage: 45,
    range: 12,
    castTime: 2.5,
    manaCost: 40,
    elementType: 'Void',
    description: 'Summons a sphere of pure void energy with high damage potential. Drains life force from targets.',
    rarity: NodeRarity.Rare,
    statusEffect: 'LifeDrain'
  },
  {
    id: 'light-beam',
    title: 'Light Beam',
    baseDamage: -20,
    range: 18,
    castTime: 1.8,
    manaCost: 20,
    elementType: 'Light',
    description: 'Healing ray that mends allies and damages undead. Can reveal invisible enemies.',
    rarity: NodeRarity.Rare,
    statusEffect: 'Reveal'
  },
  {
    id: 'wind-gust',
    title: 'Wind Gust',
    baseDamage: 12,
    range: 15,
    castTime: 0.3,
    manaCost: 8,
    elementType: 'Wind',
    description: 'Fast-casting air blast that can push enemies back. Low damage but quick cooldown.',
    rarity: NodeRarity.Uncommon,
    statusEffect: 'Knockback'
  },
  {
    id: 'arcane-missile',
    title: 'Arcane Missile',
    baseDamage: 22,
    range: 22,
    castTime: 1.0,
    manaCost: 15,
    elementType: 'Arcane',
    description: 'Balanced magic projectile that bypasses basic resistances. Good all-purpose combat spell.',
    rarity: NodeRarity.Common
  },
  {
    id: 'flame-wave',
    title: 'Flame Wave',
    baseDamage: 30,
    range: 10,
    castTime: 1.5,
    manaCost: 18,
    elementType: 'Fire',
    description: 'Sends out a wave of fire in a wide arc. Effective for managing groups of close enemies.',
    rarity: NodeRarity.Epic,
    multiTarget: 5,
    statusEffect: 'Burning'
  },
  {
    id: 'frost-nova',
    title: 'Frost Nova',
    baseDamage: 36,
    range: 8,
    castTime: 1.7,
    manaCost: 22,
    elementType: 'Ice',
    description: 'Releases a burst of ice in all directions. Can freeze enemies temporarily.',
    rarity: NodeRarity.Epic,
    multiTarget: 6,
    statusEffect: 'Freeze'
  },
  {
    id: 'elemental-fusion',
    title: 'Elemental Fusion',
    baseDamage: 60,
    range: 18,
    castTime: 3.0,
    manaCost: 50,
    elementType: 'Fire',
    secondaryElement: 'Ice',
    description: 'Combines fire and ice to create steam clouds that damage and obscure vision',
    rarity: NodeRarity.Legendary,
    multiTarget: 8,
    statusEffect: 'SteamBlind'
  }
];
