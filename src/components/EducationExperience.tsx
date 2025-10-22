'use client';

import { useAOS } from '@/libs/aos';
import { educationData, experienceData, pastRolesData } from '@/types/educationExperience';
import * as React from 'react';

export default function EducationAndExperience() {
  useAOS();

  return (
    <>
      <section id="resume" className="profile-education-experience pb-[90px] pt-[120px]" data-id="profile-education-experience">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="page-info mx-auto mb-[50px] max-w-[660px]">
            <h2 className="page-title white-title" data-aos="fade-up" data-aos-delay="0">
              <span>
                Education & Work Experience
              </span>
            </h2>
          </div>

          <div className="work-education-timeline">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* EDUCATION COLUMN */}
              <div className="education-column" data-aos="fade-right" data-aos-delay="100">
                <h4 className="column-title mb-6 text-left text-sm font-bold uppercase tracking-wider text-[#8750f7]">
                  EDUCATION
                </h4>
                <div className="column-content space-y-6">
                  {educationData.map((item, index) => (
                    <div key={item.id} className="entry-item" data-aos="fade-up" data-aos-delay={200 + index * 100}>
                      <div className="entry-content">
                        <h5 className="entry-title text-lg font-bold text-white">
                          {item.degree}
                        </h5>
                        <p className="entry-subtitle text-sm text-gray-300">
                          {item.institution}
                        </p>
                        <span className="entry-period text-xs text-gray-400">
                          {item.period}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* EXPERIENCE COLUMN */}
              <div className="experience-column" data-aos="fade-up" data-aos-delay="100">
                <h4 className="column-title mb-6 text-left text-sm font-bold uppercase tracking-wider text-[#8750f7]">
                  EXPERIENCE
                </h4>
                <div className="column-content space-y-6">
                  {experienceData.map((item, index) => (
                    <div key={item.id} className="entry-item" data-aos="fade-up" data-aos-delay={200 + index * 100}>
                      <div className="entry-content">
                        <h5 className="entry-title text-lg font-bold text-white">
                          {item.company}
                        </h5>
                        <p className="entry-subtitle text-sm text-gray-300">
                          {item.position}
                        </p>
                        <span className="entry-period text-xs text-gray-400">
                          {item.period}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PAST ROLES COLUMN */}
              <div className="past-roles-column" data-aos="fade-left" data-aos-delay="100">
                <h4 className="column-title mb-6 text-left text-sm font-bold uppercase tracking-wider text-[#8750f7]">
                  PAST ROLES
                </h4>
                <div className="column-content space-y-6">
                  {pastRolesData.map((item, index) => (
                    <div key={item.id} className="entry-item" data-aos="fade-up" data-aos-delay={200 + index * 100}>
                      <div className="entry-content">
                        <h5 className="entry-title text-lg font-bold text-white">
                          {item.company}
                        </h5>
                        <p className="entry-subtitle text-sm text-gray-300">
                          {item.position}
                        </p>
                        <span className="entry-period text-xs text-gray-400">
                          {item.period}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
