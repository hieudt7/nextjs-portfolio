import * as React from 'react';

export default function Achievement() {
  return (
    <>
      <section className="profile-achievement" data-id="profile-achievement">
        <div className="container mx-auto max-w-[1200px] px-4">
          <ul className="list-achievenment flex justify-between gap-[25px]">
          <li>
            <i className="fi fi-rr-trophy-star"></i>
            <span>14%</span>
            <p>Job achievements</p>
          </li>
          <li>
            <i className="fi fi-rr-briefcase"></i>
            <span>10+</span>
            <p>Years of Experience</p>
          </li>
          <li>
            <i className="fi fi-rr-apps"></i>
            <span>50+</span>
            <p>Project Completed</p>
          </li>
          <li>
            <i className="fi fi-rr-dashboard-monitor"></i>
            <span>40+</span>
            <p>Happy Clients</p>
          </li>
        </ul>
        </div>
      </section>
    </>
  );
}
