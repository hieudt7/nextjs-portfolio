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
    id: 2,
    degree: 'FPT University',
    institution: 'Software Engineer',
    period: '2010 - 2014',
    description: 'Specialized training in user interface and user experience design methodologies.',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 2,
    position: 'Senior Front-end Developer',
    company: 'TechVify',
    period: 'January 2025 – Present',
    description: 'Creating innovative digital experiences for creative agency clients.',
    type: 'current',
  },
  {
    id: 1,
    position: 'Senior Frontend 3D',
    company: 'Podium',
    period: 'January 2022 – January 2025',
    description: 'Leading design initiatives for e-commerce logistics platform.',
    type: 'current',
  },
  {
    id: 3,
    position: 'Middle Front-end Developer',
    company: 'Garena Esport Game',
    period: 'March 2019 – December 2021',
    description: 'Designing user-centered solutions for distribution management systems.',
    type: 'current',
  },
  {
    id: 4,
    position: 'Front-end Developer',
    company: 'MiraScan',
    period: 'April 2017 – March 2019',
    description: 'Developing design systems and user interfaces for tech startup.',
    type: 'current',
  },
  {
    id: 5,
    position: 'Front-end Developer',
    company: 'Vingroup',
    period: 'May 2016 – March 2017',
    description: 'Developing design systems and user interfaces for tech startup.',
    type: 'current',
  },
  {
    id: 6,
    position: 'Front-end Developer',
    company: 'FPT Software',
    period: '2014 – April 2016',
    description: 'Developing design systems and user interfaces for tech startup.',
    type: 'current',
  },
];

export const pastRolesData: ExperienceItem[] = [
  {
    id: 1,
    position: 'Tech leader',
    company: 'Podium',
    period: 'January 2025 – Present',
    description: 'Junior designer role focusing on UI/UX improvements.',
    type: 'past',
  },
  {
    id: 2,
    position: 'FE Team Leader',
    company: 'MiraScan',
    period: 'April 2017 – March 2019',
    description: 'Freelance designer working on various client projects.',
    type: 'past',
  },
  {
    id: 3,
    position: 'Senior Frontend Developer',
    company: 'Garena Esport Game',
    period: 'March 2021 - Present',
    description: 'Contract designer for warehouse management system redesign.',
    type: 'past',
  },
];
