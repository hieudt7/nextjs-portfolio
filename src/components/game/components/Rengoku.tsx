import type { Character } from '../types';
import { useAOS } from '@/libs/aos';
import Image from 'next/image';

type RengokuProps = {
  character: Character;
  isClient: boolean;
};

const Rengoku = ({ character, isClient }: RengokuProps) => {
  useAOS();

  return (
    <div className="game-character relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-red-900">
      {/* Animated particles background */}
      <div className="pointer-events-none absolute inset-0">
        {isClient && Array.from({ length: 30 }).map((_, index) => (
          <div
            key={`particle-${index}`}
            className="absolute size-1 animate-float rounded-full bg-orange-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
        {/* Fallback static particles for testing */}
        {!isClient && (
          <div className="absolute left-10 top-10 size-2 animate-float rounded-full bg-orange-400/50" />
        )}
      </div>
      {/* Main Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-100px)] items-center px-8">
        {/* Left Column */}
        <div className="flex-1 space-y-8">
          {/* Character Name */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="mb-2 text-7xl font-bold tracking-wider text-white">
              {character.name}
            </h2>
            <p className="text-xl tracking-[0.5em] text-white/60">{character.title}</p>
          </div>

          {/* Description */}
          <p className="max-w-xl leading-relaxed text-white/80" data-aos="fade-up" data-aos-delay="200">
            {character.description}
          </p>

          {/* Stats */}
          <div className="flex gap-8" data-aos="fade-up" data-aos-delay="300">
            <div>
              <div className="text-4xl font-bold text-white">{character.stats.pwr}</div>
              <div className="text-xs tracking-widest text-white/60">PWR</div>
            </div>
            <div className="h-16 w-px bg-white/20" />
            <div>
              <div className="text-4xl font-bold text-white">{character.stats.atk}</div>
              <div className="text-xs tracking-widest text-white/60">ATK</div>
            </div>
            <div className="h-16 w-px bg-white/20" />
            <div>
              <div className="text-4xl font-bold text-white">{character.stats.def}</div>
              <div className="text-xs tracking-widest text-white/60">DEF</div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="flex gap-6">
            {/* Ultimate Skill Card */}
            <div className="ultimate-skill-card" data-aos="fade-up" data-aos-delay="400">
              <div className="card-content">
                <div className="image-section">
                  <Image
                    src="/assets/games/Rengoku-utilmate.png"
                    alt="Ultimate Skill"
                    width={320}
                    height={180}
                    className="size-full object-cover"
                  />
                </div>
                <div className="info-section">
                  <h3 className="skill-name">
                    {character.ultimateSkill.name}
                  </h3>
                  <p className="skill-type">
                    ULTIMATE SKILL
                  </p>
                  <div className="skill-bonus">
                    <svg className="bonus-icon" viewBox="0 0 20 20">
                      <path d="M13 7H7v6h6V7z" />
                    </svg>
                    {character.ultimateSkill.bonus}
                  </div>
                </div>
              </div>
            </div>

            {/* Technique Card */}
            <div className="group relative w-60 overflow-hidden rounded-lg bg-gradient-to-br from-red-950/80 to-orange-950/80 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="500">
              <div className="p-6">
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-red-500/20">
                  <div className="size-6 rounded-full border-2 border-red-400" />
                </div>
                <h3 className="mb-1 text-sm font-bold tracking-wider text-red-400">
                  {character.technique.name}
                </h3>
                <p className="mb-4 text-xs tracking-widest text-white/60">
                  TECHNIQUE
                </p>
                <div className="flex items-center gap-2 text-sm text-white">
                  <svg
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  {character.technique.skillCount}
                  {' '}
                  SKILLS
                  <svg
                    className="ml-auto size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Weapon Card */}
            <div className="group relative w-60 overflow-hidden rounded-lg bg-gradient-to-br from-red-900/60 to-orange-900/60 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="600">
              <div className="flex size-full items-center justify-center p-6">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="h-20 w-2 rounded-full bg-gradient-to-b from-gray-300 to-red-400" />
                  </div>
                  <h3 className="mb-1 text-lg font-bold tracking-wide text-white">
                    {character.weapon.name}
                  </h3>
                  <p className="text-xs tracking-widest text-white/60">
                    {character.weapon.type}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Character Image */}
        <div className="relative flex-1">
          <div className="relative">
            {/* Character image */}
            <div className="group relative h-[600px] w-[500px]" data-aos="fade-left" data-aos-delay="200">
              {/* Circular backdrop */}
              <div className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-500/30 to-red-600/30 blur-3xl transition-all duration-500 group-hover:from-orange-500/50 group-hover:to-red-600/50" />
              <div className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border-4 border-orange-500/20 border-t-orange-500/60" />

              {/* Fire layer at bottom - Always visible */}
              <div className="absolute inset-x-0 -bottom-20 z-20 h-64">
                {/* Fire image overlay */}
                <div className="absolute inset-x-0 bottom-0 h-full overflow-hidden">
                  <Image
                    src="/assets/games/fire2.png"
                    alt="Fire effect"
                    width={500}
                    height={300}
                    className="fire-wave-animation size-full object-cover opacity-80 mix-blend-screen"
                  />
                </div>
              </div>

              {/* Fire layer 2 - Always visible with fade animation */}
              <div className="pointer-events-none absolute inset-x-0 z-30 h-80" style={{ bottom: '-80px' }}>
                {/* Fire image with fade animation */}
                <div className="absolute bottom-0 h-full" style={{ left: '50%', right: '0' }}>
                  <Image
                    src="/assets/games/fire2.png"
                    alt="Fire effect 2"
                    width={500}
                    height={350}
                    className="fire-fade-animation size-full scale-110 -scale-x-100 object-cover mix-blend-screen"
                  />
                </div>
              </div>

              {/* Character image */}
              {character.image
                ? (
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                      <Image
                        src={character.image}
                        alt={character.name}
                        width={400}
                        height={500}
                        className="object-contain drop-shadow-2xl transition-all duration-300 group-hover:drop-shadow-[0_0_30px_rgba(251,146,60,0.8)]"
                        priority
                      />
                    </div>
                  )
                : (
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mb-4 text-9xl">🎮</div>
                        <p className="text-sm text-white/60">Character Image Here</p>
                      </div>
                    </div>
                  )}
            </div>

            {/* Abilities sidebar */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-4" data-aos="fade-left" data-aos-delay="400">
              <div className="mb-6 text-xs font-bold tracking-widest text-white/60">
                ABILITY
              </div>
              {character.abilities.slice(0, 5).map((ability, index) => (
                <div
                  key={`ability-${index}`}
                  className="group relative flex size-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:w-56 hover:justify-start hover:px-4"
                  data-aos="fade-left"
                  data-aos-delay={500 + index * 100}
                >
                  <svg className="size-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L2 7l8 5 8-5-8-5zM2 17l8 5 8-5M2 12l8 5 8-5" />
                  </svg>
                  <span className="ml-3 hidden text-sm text-white group-hover:inline">
                    {ability}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rengoku;
