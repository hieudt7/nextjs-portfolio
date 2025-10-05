import { useGradientHover } from '@/hooks/useGradientHover';
import { qualityServicesData } from '@/types/qualityServices';
import * as React from 'react';

export default function QualityServices() {
  const { containerRef, gradientRef } = useGradientHover({
    gradientColor: 'linear-gradient(260deg, var(--tj-theme-secondary) 0%, var(--tj-theme-primary) 100%)',
    activeColor: 'rgba(255, 255, 255, 0.1)',
  });

  return (
    <>
      <section className="profile-quality-services" data-id="profile-quality-services">
        <div className="container mx-auto max-w-[1200px] px-4">
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
          <ul
            ref={containerRef as React.RefObject<HTMLUListElement>}
            className="quality-services-list relative overflow-hidden"
            style={{ position: 'relative' }}
          >
            {/* Gradient overlay duy nhất cho toàn bộ UL */}
            <div
              ref={gradientRef}
              className="pointer-events-none absolute transition-all duration-500 ease-out"
              style={{
                background: 'linear-gradient(260deg, var(--tj-theme-secondary) 0%, var(--tj-theme-primary) 100%)',
                opacity: 1,
                visibility: 'visible',
                width: '100%',
                height: '80px', // Default height, sẽ được cập nhật bởi JavaScript
                top: '0px',
                left: '0px',
                zIndex: 1,
              }}
            />
            {qualityServicesData.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <li
                  key={service.id}
                  className="quality-service-item relative flex cursor-pointer items-center justify-between gap-[20px] border-b border-[#dddddd] p-8 transition-all duration-300 ease-out"
                  data-index={index}
                  style={{ position: 'relative', zIndex: 2 }}
                >
                  <span className="number min-w-[60px] shrink-0 text-[20px] font-bold leading-[30px] text-[#8750f7] transition-all duration-300 ease-out">
                    {service.number}
                  </span>

                  <h5 className="title min-w-0 flex-1 text-[36px] font-bold leading-[36px] text-[#8750f7] transition-all duration-300 ease-out">
                    {service.title}
                  </h5>

                  <p className="description min-w-0 flex-1 text-[16px] font-normal leading-[24px] text-[#2a1454] transition-all duration-300 ease-out">
                    {service.description}
                  </p>

                  <span className="icon flex min-w-[30px] shrink-0 items-center justify-center text-[#8750f7] transition-all duration-300 ease-out">
                    {IconComponent && <IconComponent size={26} />}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
