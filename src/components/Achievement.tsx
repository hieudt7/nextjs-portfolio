'use client';

import { useAOS } from '@/libs/aos';
import * as React from 'react';

export default function Achievement() {
  useAOS();

  return (
    <>
      <section id="achievement" className="profile-achievement py-[45px]" data-id="profile-achievement">
        <div className="container mx-auto max-w-[1200px] px-4">
          <ul className="list-achievenment flex justify-between gap-[25px]">
            <li data-aos="fade-up" data-aos-delay="0">
              <i className="fi fi-rr-trophy-star"></i>
              <span>70%</span>
              <p>Job achievements</p>
            </li>
            <li data-aos="fade-up" data-aos-delay="100">
              <i className="fi fi-rr-briefcase"></i>
              <span>10+</span>
              <p>Years of Experience</p>
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              <i className="fi fi-rr-apps"></i>
              <span>50+</span>
              <p>Project Completed</p>
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              <i className="fi fi-rr-dashboard-monitor"></i>
              <span>10+</span>
              <p>Happy Clients</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
