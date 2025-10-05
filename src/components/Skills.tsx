import { skillsData } from '@/types/skills';
import * as React from 'react';

export default function Skills() {
  return (
    <>
      <section id="skills" className="profile-skills pb-[90px] pt-[120px]" data-id="profile-skills">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="page-info mx-auto mb-[50px] max-w-[660px]">
            <h2 className="page-title">
              <span>
                My Skills
              </span>
            </h2>
          </div>
          <p className="description mx-auto mb-[60px] max-w-[660px] text-center text-[16px] leading-[24px] text-[#2a1454]">
            We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
          </p>
          <div className="skills-container">
            <div className="skills-grid">
              {skillsData.map(skill => (
                <div key={skill.id} className="skill-card">
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <div className="skill-percentage">
                    {skill.percentage}
                    %
                  </div>
                  <div className="skill-name">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
