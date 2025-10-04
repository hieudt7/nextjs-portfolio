import { useState, useMemo } from 'react';
import { recentWorksData, type RecentWork, type WorkCategory } from '@/types/recentWorks';

/**
 * Hook để tìm kiếm works theo text
 */
export const useWorkSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Search works based on search term
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) {
      return recentWorksData;
    }

    const term = searchTerm.toLowerCase();
    return recentWorksData.filter((work: RecentWork) =>
      work.title.toLowerCase().includes(term) ||
      work.description.toLowerCase().includes(term) ||
      work.category.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const hasResults = searchResults.length > 0;
  const isSearching = searchTerm.trim().length > 0;

  return {
    searchTerm,
    searchResults,
    hasResults,
    isSearching,
    handleSearchChange,
    clearSearch,
  };
};
