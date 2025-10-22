'use client';

import { useEffect, useState } from 'react';
import { Rengoku, Shinazugawa, Tomioka } from './components';
import { characters } from './data';

const GamePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const currentChar = characters[currentIndex];

  if (!currentChar) {
    return null;
  }

  const previousCharacter = () => {
    setCurrentIndex(
      previous => (previous - 1 + characters.length) % characters.length,
    );
  };

  // Render character component based on current character
  const renderCharacter = () => {
    switch (currentChar.title) {
      case 'TOMIOKA':
        return <Tomioka character={currentChar} isClient={isClient} />;
      case 'SHINAZUGAWA':
        return <Shinazugawa character={currentChar} isClient={isClient} />;
      case 'RENGOKU':
      default:
        return <Rengoku character={currentChar} isClient={isClient} />;
    }
  };

  return (
    <div className="relative">
      {/* Navigation Header */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-black/20 px-8 py-4 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={previousCharacter}
            className="text-white/60 transition-colors hover:text-white"
          >
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <div className="size-8 animate-spin-slow rounded-full border-2 border-white border-t-transparent" />
            <h1 className="text-xl font-bold tracking-wider text-white">{currentChar.role}</h1>
          </div>
        </div>

        <nav className="flex gap-12">
          {characters.map((char, index) => (
            <button
              type="button"
              key={char.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative text-sm tracking-widest transition-all ${
                index === currentIndex
                  ? 'font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {char.title}
              {index === currentIndex && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              )}
            </button>
          ))}
        </nav>

        <div className="text-sm tracking-widest text-white/40">
          {currentChar.name.charAt(0)}
          {currentChar.title.charAt(0)}
        </div>
      </header>

      {/* Character Component */}
      {renderCharacter()}
    </div>
  );
};

export default GamePage;
