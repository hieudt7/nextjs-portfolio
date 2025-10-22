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
    name: 'Reactjs',
    percentage: 92,
    icon: '🎨',
    description: 'UI/UX design and prototyping',
  },
  {
    id: 2,
    name: 'Nextjs',
    percentage: 80,
    icon: '💎',
    description: 'Design and prototyping tool',
  },
  {
    id: 3,
    name: 'Vuejs',
    percentage: 85,
    icon: '🎯',
    description: 'Adobe XD for design and prototyping',
  },
  {
    id: 4,
    name: 'Web Animation',
    percentage: 99,
    icon: '🌐',
    description: 'Content management system development',
  },
  {
    id: 5,
    name: 'Threejs',
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
