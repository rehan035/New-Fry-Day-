import React from 'react';
import { QUALITY_PILLARS } from '../data/menuData';

export const QualityPromise: React.FC = () => {
  return (
    <section
      className="py-16 md:py-24 bg-surface-container-lowest dark:bg-[#121214] border-y border-outline-variant/30 dark:border-zinc-800/80"
      id="craft"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Consistent Left-Aligned Editorial Header */}
        <div className="max-w-2xl mb-12 text-left">
          <p className="text-xs font-bold text-brand-red dark:text-red-400 uppercase tracking-[0.14em] mb-2">
            Our Culinary Standard
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#281715] dark:text-white tracking-tight leading-[1.15]">
            The Fry Day Quality Promise
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant dark:text-zinc-400 mt-2 leading-relaxed">
            We don't cut corners. From locally sourced premium poultry to brioche buns baked before
            sunrise, every step in our kitchen is engineered for honest flavor.
          </p>
        </div>

        {/* 4-Column Craft Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {QUALITY_PILLARS.map((pillar, index) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-surface dark:bg-[#1a1a1f] border border-outline-variant/30 dark:border-zinc-800 flex flex-col justify-between hover:border-brand-red/40 dark:hover:border-red-400/40 transition-colors shadow-sm text-left"
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${pillar.accentClass}`}
                >
                  <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
                </div>
                <span className="text-xs font-mono font-bold text-on-surface-variant/50 dark:text-zinc-500 tabular-nums">
                  0{index + 1}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-display font-bold text-[#281715] dark:text-white mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant dark:text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
