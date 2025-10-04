import * as React from 'react';

export default function EducationAndExperience() {
  return (
    <>
      <section className="profile-education-experience pt-[40px]">
        <h2 className="page-title">
          <span>
            Education & Work Experience
          </span>
        </h2>
        <div className="work-education-timeline grid grid-flow-col grid-cols-3">
          <div>
            <h4 className="experience-title">EDUCATION</h4>
            <ul>
              <li>
                <h5>UX/UI DESIGN SCHOOL</h5>
                <p>Product Designer</p>
                <span>April 2024 - Present</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="experience-title">EXPERIENCE</h4>
            <ul>
              <li>
                <h5>UX/UI DESIGN SCHOOL</h5>
                <p>Product Designer</p>
                <span>April 2024 - Present</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="experience-title">PAST ROLES</h4>
            <ul>
              <li>
                <h5>UX/UI DESIGN SCHOOL</h5>
                <p>Product Designer</p>
                <span>April 2024 - Present</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
