'use client';

import { useScrollStore } from '@/stores/scrollStore';
import { useEffect } from 'react';

const ScrollHandler = () => {
  const shouldScrollToWorks = useScrollStore(state => state.shouldScrollToWorks);
  const setShouldScrollToWorks = useScrollStore(state => state.setShouldScrollToWorks);

  useEffect(() => {
    if (shouldScrollToWorks) {
      // Wait a bit for the page to render
      setTimeout(() => {
        const workSection = document.getElementById('works');
        if (workSection) {
          const headerHeight = 80; // Same as Header component
          const targetPosition = workSection.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }
        setTimeout(() => {
          // Reset state after scroll
          setShouldScrollToWorks(false);
        }, 500);
      }, 300);
    }
  }, [shouldScrollToWorks, setShouldScrollToWorks]);

  return null;
};

export default ScrollHandler;
