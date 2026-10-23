import React from 'react';
import { QUALITY_PILLARS } from '../data/menuData';

export const QualityPromise: React.FC = () => {
  return (
    <section
      className="py-16 md:py-24 bg-surface-container-lowest dark:bg-[#121214] border-y border-outline-variant/30 dark:border-zinc-800/80"
      id="craft"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-red dark:text-red-400 uppercase tracking-widest">
            Our Culinary Standard
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary dark:text-white tracking-tight mt-1">
            The Fry Day Quality Promise
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant dark:text-zinc-400 mt-2">
            We don't cut corners. From locally sourced premium poultry to brioche buns baked before
            sunrise, we take casual dining seriously.
          </p>
        </div>

        {/* Bento Grid: Craft Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {QUALITY_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-surface dark:bg-[#1a1a1f] border border-outline-variant/30 dark:border-zinc-800 flex flex-col justify-between hover:border-brand-red/40 dark:hover:border-red-400/40 transition-all shadow-sm group text-left"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${pillar.accentClass}`}
              >
                <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-primary dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-on-surface-variant dark:text-zinc-400 leading-relaxed">
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
