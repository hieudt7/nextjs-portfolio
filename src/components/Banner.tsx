'use client';

import { useAOS } from '@/libs/aos';
import { BrandFacebook, BrandGithub, BrandLinkedin, Download } from '@mynaui/icons-react';
import Image from 'next/image';
import * as React from 'react';
import heroImg from '/public/assets/images/hero_img_2.png';

export default function Banner() {
  useAOS();

  return (
    <>
      <section id="banner" className="profile-summary py-[80px]" data-id="profile-summary">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="grid grid-flow-col grid-cols-2">
            <div>
              <h4 className="summary-name" data-aos="fade-right" data-aos-delay="0">I am Hans</h4>
              <h3 className="summary-role" data-aos="fade-right" data-aos-delay="100">Front End Developer</h3>
              <p className="summary-description" data-aos="fade-right" data-aos-delay="200"> break down complex user experience problems to create integrity focussed solutions that connect billions of people</p>
              <div className="flex items-center gap-6" data-aos="fade-up" data-aos-delay="300">
                <div>
                  <a className="btn-download-cv flex gap-2">
                    <span>
                      Download CV
                    </span>
                    <Download />
                  </a>
                </div>
                <ul className="social-icons flex gap-6">
                  <li>
                    <a href="#"><BrandFacebook /></a>
                  </li>
                  <li>
                    <a href="#"><BrandGithub /></a>
                  </li>
                  <li>
                    <a href="#"><BrandLinkedin /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="hero-image-box text-center" data-aos="fade-left" data-aos-delay="200">
                {/* <img src="/assets/images/hero_img_1.webp" alt="profile" /> */}
                <Image src={heroImg} alt="profile" />
              </div>
            </div>
          </div>
        </div>
        <div className="hi-text-animation">
          <span>
            <svg viewBox="0 0 1320 300">
              <text x="50%" y="50%" textAnchor="middle" className="animate-stroke">
                HI
                {' '}
              </text>
            </svg>
          </span>
        </div>
      </section>
    </>
  );
}
