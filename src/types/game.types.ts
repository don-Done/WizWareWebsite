
import { LucideIcon } from 'lucide-react';

export interface GameFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Game {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  featured?: boolean;
  features?: GameFeature[];
}
