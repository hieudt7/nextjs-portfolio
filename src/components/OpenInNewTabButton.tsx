'use client';

import { usePathname } from 'next/navigation';

const OpenInNewTabButton = () => {
  const pathname = usePathname();

  // Map routes to their iframe URLs
  const routeToUrl: Record<string, string> = {
    '/cosmetic': 'https://vera-nourish.vercel.app/',
    '/japan': 'https://botanistofficial.com/',
    '/nutrition': 'https://more-nutrition.webflow.io/',
    '/future': 'https://www.futurethree.studio/',
    '/ux': 'https://uxintace.com/',
    '/skphoe': 'https://skphoebe.com/',
    '/dengi': 'https://denqid.com/',
    '/bombon': 'https://bombon.rs/',
  };

  // Get URL based on current pathname
  const getUrlForRoute = () => {
    // Remove locale prefix if present (e.g., /fr/cosmetic -> /cosmetic)
    const cleanPath = pathname?.replace(/^\/[a-z]{2}(\/|$)/, '/');
    return routeToUrl[cleanPath || ''] || routeToUrl[pathname || ''];
  };

  const handleOpenInNewTab = () => {
    const url = getUrlForRoute();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      type="button"
      onClick={handleOpenInNewTab}
      className="group fixed bottom-8 right-28 z-50 flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50"
      title="Open in New Tab"
    >
      {/* Ring Animation */}
      <span className="ring-animation absolute inset-0 rounded-full border-4 border-blue-400 opacity-75" />
      <span
        className="ring-animation absolute inset-0 rounded-full border-4 border-cyan-400 opacity-75"
        style={{ animationDelay: '0.5s' }}
      />

      {/* External Link Icon */}
      <svg
        className="size-6 transition-transform duration-300 group-hover:rotate-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </button>
  );
};

export default OpenInNewTabButton;
