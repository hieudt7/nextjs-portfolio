export type Skill = {
  id: number;
  name: string;
  percentage: number;
  icon?: string;
  description?: string;
};

export const skillsData: Skill[] = [
  {
    id: 1,
    name: 'Figma',
    percentage: 92,
    icon: '🎨',
    description: 'UI/UX design and prototyping',
  },
  {
    id: 2,
    name: 'Sketch',
    percentage: 80,
    icon: '💎',
    description: 'Design and prototyping tool',
  },
  {
    id: 3,
    name: 'XD',
    percentage: 85,
    icon: '🎯',
    description: 'Adobe XD for design and prototyping',
  },
  {
    id: 4,
    name: 'WordPress',
    percentage: 99,
    icon: '🌐',
    description: 'Content management system development',
  },
  {
    id: 5,
    name: 'React',
    percentage: 89,
    icon: '⚛️',
    description: 'Modern React development',
  },
  {
    id: 6,
    name: 'JavaScript',
    percentage: 93,
    icon: '🟨',
    description: 'Advanced JavaScript programming',
  },
];
