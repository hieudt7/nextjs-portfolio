import { type RecentWork, recentWorksData, type WorkCategory } from '@/types/recentWorks';
import { useMemo, useState } from 'react';

/**
 * Hook để quản lý filter works theo category và search
 */
export const useWorkFilter = (searchResults?: RecentWork[]) => {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>('All');

  // Use search results if provided, otherwise use all works
  const worksToFilter = searchResults || recentWorksData;

  // Filter works based on active category
  const filteredWorks = useMemo(() => {
    if (activeCategory === 'All') {
      return worksToFilter;
    }
    return worksToFilter.filter((work: RecentWork) => work.category === activeCategory);
  }, [activeCategory, worksToFilter]);

  // Get count of works for each category (based on filtered works)
  const categoryCounts = useMemo(() => {
    const counts: Record<WorkCategory, number> = {
      'All': worksToFilter.length,
      'Web Development': 0,
      'Web Design': 0,
      'UI/UX Design': 0,
      '3D Developer': 0,
    };

    worksToFilter.forEach((work) => {
      if (work.category in counts) {
        counts[work.category]++;
      }
    });

    return counts;
  }, [worksToFilter]);

  // Get unique categories from filtered data
  const availableCategories = useMemo(() => {
    const categories = new Set(worksToFilter.map(work => work.category));
    return ['All', ...Array.from(categories)] as WorkCategory[];
  }, [worksToFilter]);

  const handleCategoryChange = (category: WorkCategory) => {
    setActiveCategory(category);
  };

  const resetFilter = () => {
    setActiveCategory('All');
  };

  return {
    activeCategory,
    filteredWorks,
    categoryCounts,
    availableCategories,
    handleCategoryChange,
    resetFilter,
  };
};
