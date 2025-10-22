import type { Character } from './types';

export const characters: Character[] = [
  {
    id: '1',
    name: 'KYOJURO',
    title: 'RENGOKU',
    role: 'HASHIRA',
    description:
      'Kyojuro was greatly enthusiastic in regard to his duties as a Hashira, and often came across as cheerfully eccentric. He was amiable, pure of heart and boasted extraordinary technique and swordsmanship stemming from strict practice and discipline.',
    stats: {
      pwr: 8420,
      atk: 9210,
      def: 7790,
    },
    abilities: [
      'Stamina & Endurance',
      'Enhanced Strength',
      'Enhanced Speed',
      'Indomitable Will',
      'Tactical Intellect',
    ],
    ultimateSkill: {
      name: 'RENGOKU',
      bonus: '+ATK x5',
    },
    technique: {
      name: 'FIRE BREATHING',
      skillCount: 9,
    },
    weapon: {
      name: 'NICHIRIN',
      type: 'KATANA',
    },
    image: '/assets/games/Rengoku.png',
  },
  {
    id: '2',
    name: 'GIYU',
    title: 'TOMIOKA',
    role: 'HASHIRA',
    description:
      'Giyu is a serious and stoic individual who has a strong sense of justice. He is reserved and rarely speaks, making him appear aloof and distant. Despite this, he deeply cares for his comrades.',
    stats: {
      pwr: 8650,
      atk: 8900,
      def: 8200,
    },
    abilities: [
      'Water Breathing Master',
      'Enhanced Reflexes',
      'Strategic Mind',
      'Silent Movement',
      'Dead Calm',
    ],
    ultimateSkill: {
      name: 'DEAD CALM',
      bonus: '+DEF x4',
    },
    technique: {
      name: 'WATER BREATHING',
      skillCount: 11,
    },
    weapon: {
      name: 'NICHIRIN',
      type: 'KATANA',
    },
    image: '/assets/games/Tomioka2.png',
  },
  {
    id: '3',
    name: 'SANEMI',
    title: 'SHINAZUGAWA',
    role: 'HASHIRA',
    description:
      'Sanemi is abrasive, hot-blooded, and stubborn, often impulsive and quick to lash out. He is extremely aggressive and believes that the weak should be weeded out. Despite his rough exterior, he deeply cares for his comrades.',
    stats: {
      pwr: 9100,
      atk: 9500,
      def: 7600,
    },
    abilities: [
      'Wind Breathing Master',
      'Marechi Blood',
      'Immense Speed',
      'Battle Instinct',
      'Pain Resistance',
    ],
    ultimateSkill: {
      name: 'WIND STORM',
      bonus: '+ATK x6',
    },
    technique: {
      name: 'WIND BREATHING',
      skillCount: 8,
    },
    weapon: {
      name: 'NICHIRIN',
      type: 'KATANA',
    },
    image: '/assets/games/Shinazugawa.png',
  },
];
