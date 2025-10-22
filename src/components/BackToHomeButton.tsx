'use client';

import { useScrollStore } from '@/stores/scrollStore';
import { useRouter } from 'next/navigation';

type BackToHomeButtonProps = {
  locale: string;
};

const BackToHomeButton = ({ locale }: BackToHomeButtonProps) => {
  const router = useRouter();
  const setShouldScrollToWorks = useScrollStore(state => state.setShouldScrollToWorks);

  const handleBackToHome = () => {
    // Set global state to trigger scroll
    setShouldScrollToWorks(true);

    // Navigate to home
    router.push(`/${locale}`);
  };

  return (
    <button
      type="button"
      onClick={handleBackToHome}
      className="back-to-home-button group fixed bottom-8 right-8 z-50 flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-purple-500/50"
    >
      {/* Ring Animation */}
      <span className="ring-animation absolute inset-0 rounded-full border-4 border-purple-400 opacity-75" />
      <span
        className="ring-animation absolute inset-0 rounded-full border-4 border-pink-400 opacity-75"
        style={{ animationDelay: '0.5s' }}
      />

      {/* Arrow Icon */}
      <svg
        className="size-6 transition-transform duration-300 group-hover:-translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </button>
  );
};

export default BackToHomeButton;
