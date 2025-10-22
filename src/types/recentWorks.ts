import { ArrowLongDownRight } from '@mynaui/icons-react';

export type WorkCategory = 'All' | 'Web Development' | 'Web Design' | 'UI/UX Design' | '3D Developer';

export type RecentWork = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: WorkCategory;
  link?: string;
  icon?: React.ComponentType<{ size?: number }>;
};

export const workCategories: WorkCategory[] = [
  'All',
  'Web Development',
  'Web Design',
  'UI/UX Design',
  '3D Developer',
];

export const recentWorksData: RecentWork[] = [
  {
    id: 1,
    title: 'Garena',
    description: 'Project was about game esport website with interactive features and real-time updates',
    image: '/assets/category/game2.png',
    category: 'Web Development',
    link: '/game',
    icon: ArrowLongDownRight,
  },
  {
    id: 2,
    title: 'Garena web game',
    description: 'Project was about game esport website with interactive features and real-time updates',
    image: '/assets/category/garena.png',
    category: 'Web Development',
    link: '/garena',
    icon: ArrowLongDownRight,
  },
  {
    id: 21,
    title: 'E-commerce Platform',
    description: 'Modern e-commerce website with advanced filtering and payment integration',
    image: '/assets/category/japan.png',
    category: 'Web Development',
    link: '/japan',
    icon: ArrowLongDownRight,
  },
  {
    id: 3,
    title: 'Brand Identity Design',
    description: 'Complete brand identity package including logo, business cards, and marketing materials',
    image: '/assets/category/cosmetic.png',
    category: 'Web Design',
    link: '/cosmetic',
    icon: ArrowLongDownRight,
  },
  {
    id: 4,
    title: 'UX/UI Designer',
    description: 'User interface design for mobile application with focus on user experience',
    image: '/assets/category/ux.png',
    category: 'UI/UX Design',
    link: '/ux',
    icon: ArrowLongDownRight,
  },
  {
    id: 5,
    title: '3D Product Visualization',
    description: 'Interactive 3D product showcase using Three.js for enhanced customer experience',
    image: '/assets/category/future.png',
    category: '3D Developer',
    link: '/future',
    icon: ArrowLongDownRight,
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'Personal portfolio website with modern design and smooth animations',
    image: '/assets/category/skphoe.png',
    category: 'Web Development',
    link: '/skphoe',
    icon: ArrowLongDownRight,
  },
  {
    id: 9,
    title: 'Branch Website',
    description: 'Personal portfolio website with modern design and smooth animations',
    image: '/assets/category/nutrion.png',
    category: 'Web Development',
    link: '/nutrition',
    icon: ArrowLongDownRight,
  },
  {
    id: 7,
    title: 'Brand Identity Website',
    description: 'Beautiful restaurant website with online menu and reservation system',
    image: '/assets/category/dengi.png',
    category: 'Web Design',
    link: '/dengi',
    icon: ArrowLongDownRight,
  },
  {
    id: 8,
    title: 'Ecomerce website',
    description: 'Modern e-commerce website with advanced filtering and payment integration',
    image: '/assets/category/bombon.png',
    category: 'UI/UX Design',
    link: '/bombon',
    icon: ArrowLongDownRight,
  },
];
