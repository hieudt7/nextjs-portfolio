import * as React from 'react';

export default function Footer() {
  return (
    <footer className="footer-custom relative bg-[#2d1854] pb-8 pt-24 text-center">
      <div className="flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-10">
          {/* Thay thế bằng logo của bạn */}
          <span className="flex size-24 items-center justify-center rounded-full bg-white">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35" cy="35" r="32" stroke="#2d1854" strokeWidth="6" />
              <path d="M25 35C25 29.4772 29.4772 25 35 25C40.5228 25 45 29.4772 45 35C45 40.5228 40.5228 45 35 45" stroke="#2d1854" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </span>
        </div>
        {/* Menu */}
        <nav className="mb-8">
          <ul className="footer-menu flex flex-wrap justify-center gap-8 text-xl font-bold text-white">
            <li>
              <a href="#services" className="transition-colors hover:text-purple-300">
                Services
                <span className="text-purple-300">.</span>
              </a>
            </li>
            <li>
              <a href="#works" className="transition-colors hover:text-purple-300">
                Works
                <span className="text-purple-300">.</span>
              </a>
            </li>
            <li>
              <a href="#skills" className="transition-colors hover:text-purple-300">
                Skills
                <span className="text-purple-300">.</span>
              </a>
            </li>
            <li>
              <a href="#experience" className="transition-colors hover:text-purple-300">
                Experience
                <span className="text-purple-300">.</span>
              </a>
            </li>
            <li>
              <a href="#blog" className="transition-colors hover:text-purple-300">
                Blog
                <span className="text-purple-300">.</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* Copyright */}
        <div className="text-lg font-medium text-purple-300">
          © 2024 All Rights Reserved by
          {' '}
          <span className="font-bold">ThemeJunction</span>
        </div>
      </div>
      {/* Scroll to top button */}
      <button
        className="scroll-to-top fixed bottom-8 right-8 flex size-14 items-center justify-center rounded-full border-2 border-purple-300 bg-[#2d1854] text-purple-300 shadow-lg transition-colors hover:bg-purple-300 hover:text-[#2d1854]"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
