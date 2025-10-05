'use client';

import { useWorkFilter } from '@/hooks/useWorkFilter';
import { workCategories } from '@/types/recentWorks';
import Image from 'next/image';
import * as React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

/**
 * RecentWorks component với Swiper slider - 2 items mỗi slide
 */
export default function RecentWorksSlider() {
  // Filter functionality
  const {
    activeCategory,
    filteredWorks,
    categoryCounts,
    handleCategoryChange,
  } = useWorkFilter();

  // Chia works thành chunks 2 items mỗi slide
  const worksChunks = React.useMemo(() => {
    const chunks = [];
    for (let index = 0; index < filteredWorks.length; index += 2) {
      chunks.push(filteredWorks.slice(index, index + 2));
    }
    return chunks;
  }, [filteredWorks]);

  return (
    <>
      <section className="profile-recent-works pb-[90px] pt-[120px]" data-id="profile-recent-works">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="page-info mx-auto mb-[50px] max-w-[660px]">
            <h2 className="page-title">
              <span>
                My Recent Works
              </span>
            </h2>
          </div>

          <ul className="filter-list m-auto flex w-fit">
          {workCategories.map(category => (
            <li key={category} className={activeCategory === category ? 'active' : ''}>
              <button
                type="button"
                onClick={() => handleCategoryChange(category)}
                className="cursor-pointer transition-all duration-300 hover:opacity-80"
              >
                {category}
                <span className="ml-2 text-xs opacity-70">
                  (
                  {categoryCounts[category]}
                  )
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* Swiper Slider */}
        {filteredWorks.length > 0
          ? (
              <div className="mx-auto max-w-[1200px] px-4">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={60}
                  slidesPerView={1}
                  pagination={{
                    el: '.swiper-pagination-custom',
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet-custom',
                    bulletActiveClass: 'swiper-pagination-bullet-active-custom',
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 1,
                    },
                    1024: {
                      slidesPerView: 1,
                    },
                  }}
                  className="recent-works-swiper"
                >
                  {worksChunks.map((chunk, slideIndex) => {
                    const firstWorkId = chunk[0]?.id || slideIndex;
                    return (
                      <SwiperSlide key={`slide-${firstWorkId}`}>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                          {chunk.map((work) => {
                            const IconComponent = work.icon;
                            return (
                              <div key={work.id} className="recent-work-item">
                                <a href={work.link}>
                                  <Image src={work.image} alt={work.title} width={600} height={400} />
                                  <div className="work-infor">
                                    <div className="content">
                                      <h4>{work.title}</h4>
                                      <p>{work.description}</p>
                                      <span className="icon">
                                        {IconComponent && <IconComponent size={30} />}
                                      </span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            );
                          })}
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>

                {/* Custom Pagination */}
                <div className="swiper-pagination-custom"></div>
              </div>
            )
          : (
              <div className="mx-auto max-w-md text-center">
                <div className="rounded-lg bg-gray-50 p-8">
                  <div className="mb-4 text-6xl">🔍</div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-700">
                    No works found
                  </h3>
                  <p className="text-sm text-gray-500">
                    No works available in this category
                  </p>
                  {activeCategory !== 'All' && (
                    <button
                      type="button"
                      onClick={() => handleCategoryChange('All')}
                      className="mt-4 rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
                    >
                      Show all works
                    </button>
                  )}
                </div>
              </div>
            )}
        </div>
      </section>
    </>
  );
}
