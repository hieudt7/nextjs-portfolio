export type EducationItem = {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description?: string;
};

export type ExperienceItem = {
  id: number;
  position: string;
  company: string;
  period: string;
  description?: string;
  type: 'current' | 'past';
};

export const educationData: EducationItem[] = [
  {
    id: 1,
    degree: 'BA IN DESIGN',
    institution: 'Product Designer',
    period: 'January 2024 - Present',
    description: 'Comprehensive design education focusing on user experience and visual design principles.',
  },
  {
    id: 2,
    degree: 'UX/UI DESIGN SCHOOL',
    institution: 'Product Designer',
    period: 'April 2024 - Present',
    description: 'Specialized training in user interface and user experience design methodologies.',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    position: 'Product Designer',
    company: 'LION PARCEL',
    period: 'February 2024 - Present',
    description: 'Leading design initiatives for e-commerce logistics platform.',
    type: 'current',
  },
  {
    id: 2,
    position: 'Product Designer',
    company: 'ENVER STUDIO',
    period: 'May 2024 - Present',
    description: 'Creating innovative digital experiences for creative agency clients.',
    type: 'current',
  },
  {
    id: 3,
    position: 'Product Designer',
    company: 'TOKO DISTRIBUTOR',
    period: 'March 2024 - Present',
    description: 'Designing user-centered solutions for distribution management systems.',
    type: 'current',
  },
  {
    id: 4,
    position: 'Product Designer',
    company: 'SAKOO',
    period: 'June 2024 - Present',
    description: 'Developing design systems and user interfaces for tech startup.',
    type: 'current',
  },
];

export const pastRolesData: ExperienceItem[] = [
  {
    id: 1,
    position: 'Product Designer',
    company: 'LION PARCEL',
    period: 'February 2023 - January 2024',
    description: 'Junior designer role focusing on UI/UX improvements.',
    type: 'past',
  },
  {
    id: 2,
    position: 'Product Designer',
    company: 'ENVER STUDIO',
    period: 'May 2023 - April 2024',
    description: 'Freelance designer working on various client projects.',
    type: 'past',
  },
  {
    id: 3,
    position: 'Product Designer',
    company: 'TOKO DISTRIBUTOR',
    period: 'March 2023 - February 2024',
    description: 'Contract designer for warehouse management system redesign.',
    type: 'past',
  },
];
