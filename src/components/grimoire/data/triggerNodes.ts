
import { NodeRarity } from '../types/nodeTypes';

interface TriggerNode {
  id: string;
  title: string;
  triggerType: string;
  triggerValue: number;
  description: string;
  rarity: NodeRarity;
  cooldown: number;
  charges?: number;
  triggerRadius?: number;
  isRetroactive?: boolean;
}

export const triggerNodes: TriggerNode[] = [
  {
    id: 'oncast',
    title: 'On Spell Cast',
    triggerType: 'OnCast',
    triggerValue: 0,
    description: 'Activates immediately when spell is cast',
    rarity: NodeRarity.Common,
    cooldown: 5.0
  },
  {
    id: 'onhit',
    title: 'On Enemy Hit',
    triggerType: 'OnHit',
    triggerValue: 0,
    description: 'Activates when spell hits an enemy',
    rarity: NodeRarity.Common,
    cooldown: 5.0
  },
  {
    id: 'onenemyenter',
    title: 'On Enemy Enter Range',
    triggerType: 'OnEnemyEnter',
    triggerValue: 5,
    description: 'Activates when enemy enters a 5m radius',
    rarity: NodeRarity.Uncommon,
    cooldown: 3.0
  },
  {
    id: 'onlowhealth',
    title: 'On Low Health',
    triggerType: 'OnHealthBelow',
    triggerValue: 30,
    description: 'Activates when health drops below 30%',
    rarity: NodeRarity.Uncommon,
    cooldown: 3.0
  },
  {
    id: 'onhighmana',
    title: 'When Mana is Full',
    triggerType: 'OnManaAbove',
    triggerValue: 90,
    description: 'Activates when mana is above 90%',
    rarity: NodeRarity.Rare,
    cooldown: 2.0,
    charges: 1
  },
  {
    id: 'ontimer',
    title: 'After Delay',
    triggerType: 'OnTimerExpired',
    triggerValue: 3,
    description: 'Activates after a 3 second delay',
    rarity: NodeRarity.Rare,
    cooldown: 2.0,
    charges: 1
  },
  {
    id: 'ondamage',
    title: 'When Damaged',
    triggerType: 'OnDamageTaken',
    triggerValue: 0,
    description: 'Activates when caster takes damage',
    rarity: NodeRarity.Epic,
    cooldown: 1.0,
    charges: 2,
    triggerRadius: 7.5
  },
  {
    id: 'oncriticalhealth',
    title: 'Emergency Trigger',
    triggerType: 'OnHealthBelow',
    triggerValue: 15,
    description: 'Activates when health drops below 15%',
    rarity: NodeRarity.Epic,
    cooldown: 1.0,
    charges: 2,
    triggerRadius: 7.5
  },
  {
    id: 'onkill',
    title: 'On Kill',
    triggerType: 'OnEnemyDeath',
    triggerValue: 0,
    description: 'Activates when an enemy is defeated',
    rarity: NodeRarity.Rare,
    cooldown: 2.0,
    charges: 1
  },
  {
    id: 'onreflect',
    title: 'On Spell Reflect',
    triggerType: 'OnSpellReflect',
    triggerValue: 0,
    description: 'Activates when spell is reflected',
    rarity: NodeRarity.Legendary,
    cooldown: 0.0,
    isRetroactive: true
  }
];
