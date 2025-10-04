'use client';

import Achievement from '@/components/Achievement';
import Banner from '@/components/Banner';
import Contact from '@/components/Contact';
import EducationAndExperience from '@/components/EducationExperience';
import QualityServices from '@/components/QualityServices';
import RecentWorksSlider from '@/components/RecentWorksSlider';
import Skills from '@/components/Skills';

const HomePage = () => {
  return (
    <>
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
