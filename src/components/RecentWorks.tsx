import { useWorkFilter } from '@/hooks/useWorkFilter';
import { useWorkSearch } from '@/hooks/useWorkSearch';

import { workCategories } from '@/types/recentWorks';
import Image from 'next/image';
import * as React from 'react';

export default function RecentWorks() {
  // Search functionality
  const {
    searchTerm,
    searchResults,
    isSearching,
    clearSearch,
  } = useWorkSearch();

  // Filter functionality (based on search results)
  const {
    activeCategory,
    filteredWorks,
    categoryCounts,
    handleCategoryChange,
  } = useWorkFilter(searchResults);

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
        <ul className="filter-list m-auto mb-[45px] flex w-fit">
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
        {/* Results */}
        {filteredWorks.length > 0
          ? (
              <ul className="recent-works-list">
                {filteredWorks.map((work) => {
                  const IconComponent = work.icon;
                  return (
                    <li key={work.id}>
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
                    </li>
                  );
                })}
              </ul>
            )
          : (
              <div className="mx-auto max-w-md text-center">
                <div className="rounded-lg bg-gray-50 p-8">
                  <div className="mb-4 text-6xl">🔍</div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-700">
                    No works found
                  </h3>
                  <p className="text-sm text-gray-500">
                    {isSearching
                      ? (
                          <>
                            No works match your search for "
                            <span className="font-medium">{searchTerm}</span>
                            "
                          </>
                        )
                      : (
                          'No works available in this category'
                        )}
                  </p>
                  {(isSearching || activeCategory !== 'All') && (
                    <button
                      type="button"
                      onClick={() => {
                        clearSearch();
                        handleCategoryChange('All');
                      }}
                      className="mt-4 rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
                    >
                      Clear filters
                    </button>
                  )}
                </div>
              </div>
            )}
      </section>
    </>
  );
}
