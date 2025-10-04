import { ArrowLongDownRight } from '@mynaui/icons-react';

export type QualityService = {
  id: number;
  number: string;
  title: string;
  description: string;
  icon?: React.ComponentType<{ size?: number }>;
};

export const qualityServicesData: QualityService[] = [
  {
    id: 1,
    number: '01',
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces using modern technologies like React, Next.js, and TypeScript.',
    icon: ArrowLongDownRight,
  },
  {
    id: 4,
    number: '02',
    title: '3D Developer',
    description: 'Creating immersive and interactive 3D web experiences using Three.js to bring dynamic and engaging visual content to life.',
    icon: ArrowLongDownRight,
  },
  {
    id: 2,
    number: '03',
    title: 'Web Design',
    description: 'We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.',
    icon: ArrowLongDownRight,
  },
  {
    id: 3,
    number: '04',
    title: 'UI/UX Design',
    description: 'Crafting intuitive and visually appealing user interfaces that enhance user engagement and satisfaction.',
    icon: ArrowLongDownRight,
  },
];
