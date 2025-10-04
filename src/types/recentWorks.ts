import { ArrowLongDownRight } from '@mynaui/icons-react';

export type WorkCategory = 'All' | 'Web Design' | 'Web Development' | 'UI/UX Design' | '3D Design';

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
  'Web Design',
  'Web Development',
  'UI/UX Design',
  '3D Design',
];

export const recentWorksData: RecentWork[] = [
  {
    id: 1,
    title: 'Garena',
    description: 'Project was about game esport website with interactive features and real-time updates',
    image: '/assets/images/portfolio-3.webp',
    category: 'Web Development',
    link: '#',
    icon: ArrowLongDownRight,
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'Modern e-commerce website with advanced filtering and payment integration',
    image: '/assets/images/portfolio-3.webp',
    category: 'Web Development',
    link: '#',
    icon: ArrowLongDownRight,
  },
  {
    id: 3,
    title: 'Brand Identity Design',
    description: 'Complete brand identity package including logo, business cards, and marketing materials',
    image: '/assets/images/portfolio-3.webp',
    category: 'Web Design',
    link: '#',
    icon: ArrowLongDownRight,
  },
  {
    id: 4,
    title: 'Mobile App UI',
    description: 'User interface design for mobile application with focus on user experience',
    image: '/assets/images/portfolio-3.webp',
    category: 'UI/UX Design',
    link: '#',
    icon: ArrowLongDownRight,
  },
  {
    id: 5,
    title: '3D Product Visualization',
    description: 'Interactive 3D product showcase using Three.js for enhanced customer experience',
    image: '/assets/images/portfolio-3.webp',
    category: '3D Design',
    link: '#',
    icon: ArrowLongDownRight,
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'Personal portfolio website with modern design and smooth animations',
    image: '/assets/images/portfolio-3.webp',
    category: 'Web Development',
    link: '#',
    icon: ArrowLongDownRight,
  },
  {
    id: 7,
    title: 'Restaurant Website',
    description: 'Beautiful restaurant website with online menu and reservation system',
    image: '/assets/images/portfolio-3.webp',
    category: 'Web Design',
    link: '#',
    icon: ArrowLongDownRight,
  },
  {
    id: 8,
    title: 'Dashboard Interface',
    description: 'Admin dashboard design with data visualization and user management',
    image: '/assets/images/portfolio-3.webp',
    category: 'UI/UX Design',
    link: '#',
    icon: ArrowLongDownRight,
  },
];
