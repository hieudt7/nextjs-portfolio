import { ArrowLongDownRight } from '@mynaui/icons-react';
import Image from 'next/image';
import recentWork1 from 'public/assets/images/portfolio-3.webp';
import * as React from 'react';

export default function RecentWorks() {
  return (
    <>
      <section className="profile-recent-works pb-[90px] pt-[120px]" data-id="profile-recent-works">
        <div className="page-info mx-auto mb-[50px] max-w-[660px]">
          <h2 className="page-title">
            <span>
              My Recent Works
            </span>
          </h2>
        </div>
        <ul className="filter-list m-auto flex w-fit">
          <li className="active"><a href="#">All</a></li>
          <li><a href="#">Web Design</a></li>
          <li><a href="#">Web Development</a></li>
          <li><a href="#">Web Design</a></li>
        </ul>
        <ul className="recent-works-list grid grid-flow-col grid-cols-2 gap-[60px]">
          <li>
            <a href="#">
              <Image src={recentWork1} alt="Recent Work 1" />
              <div className="work-infor">
                <div className="content">
                  <h4>Garena</h4>
                  <p>Project was about game esport website</p>
                  <span className="icon">
                    <ArrowLongDownRight size={30} />
                  </span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <Image src={recentWork1} alt="Recent Work 1" />
              <div className="work-infor">
                <div className="content">
                  <h4>Garena</h4>
                  <p>Project was about game esport website</p>
                  <span className="icon">
                    <ArrowLongDownRight size={30} />
                  </span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
