import { ArrowLongDownRight } from '@mynaui/icons-react';
import * as React from 'react';

export default function QualityServices() {
  return (
    <>
      <section className="profile-quality-services" data-id="profile-quality-services">
        <div className="page-info mx-auto mb-[50px] max-w-[660px]">
          <h2 className="page-title">
            <span>
              My Quality Services
            </span>
          </h2>
          <p className="page-description">
            We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
          </p>
        </div>
        <ul className="quality-services-list">
          <li className="flex items-center justify-between gap-[20px] border-b border-[#dddddd] p-8">
            <span className="number">01</span>
            <h5 className="title">Web Design</h5>
            <p className="description">
              We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
            </p>
            <span className="icon">
              <ArrowLongDownRight size={26} />
            </span>
          </li>
        </ul>
      </section>
    </>
  );
}
