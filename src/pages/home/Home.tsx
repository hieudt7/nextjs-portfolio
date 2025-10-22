'use client';

import Achievement from '@/components/Achievement';
import Banner from '@/components/Banner';
import Contact from '@/components/Contact';
import EducationAndExperience from '@/components/EducationExperience';
import QualityServices from '@/components/QualityServices';
import RecentWorksSlider from '@/components/RecentWorksSlider';
import ScrollHandler from '@/components/ScrollHandler';
import Skills from '@/components/Skills';

const HomePage = () => {
  return (
    <>
      <ScrollHandler />
      <Banner />
      <Achievement />
      <QualityServices />
      <RecentWorksSlider />
      <EducationAndExperience />
      <Skills />
      <Contact />
    </>
  );
};

export default HomePage;
