import React from 'react';
import { MENU_ITEMS, MenuItem, RESTAURANT_INFO } from '../data/menuData';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onSelectDish: (item: MenuItem) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectDish }) => {
  const heroSpecialtyItem = MENU_ITEMS[0];

  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 border-b border-outline-variant/20 dark:border-zinc-800/80">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-red/10 dark:bg-brand-red/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-gold-500/10 dark:bg-gold-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* City Distinction Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container dark:bg-zinc-800/80 border border-brand-red/30 dark:border-red-500/30 text-brand-red dark:text-red-300 shadow-sm">
              <span className="material-symbols-outlined material-symbols-filled text-base text-gold-500">
                stars
              </span>
              <span className="text-xs uppercase tracking-wider font-bold">
                Faisalabad's Favorite Gourmet Fast-Food
              </span>
            </div>

            {/* Bold Typography Anchor */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#281715] dark:text-white tracking-tight leading-[1.08]">
              YOUR CRAVINGS. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-red-hover to-gold-600 dark:from-red-400 dark:via-red-500 dark:to-gold-400 underline decoration-gold-500 decoration-wavy decoration-2 underline-offset-8">
                YOUR FRY DAY.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-on-surface-variant dark:text-zinc-300 max-w-xl leading-relaxed">
              Redefining fast casual dining on W Canal Road. Unapologetically juicy smashed beef
              patties, crispy double-fried chicken, and loaded hand-cut golden fries crafted fresh
              every minute.
            </p>

            {/* Primary CTA Cluster */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-red to-brand-red-hover hover:from-brand-red-hover hover:to-red-800 text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-brand-red/25 hover:shadow-brand-red/40 transition-all duration-200 hover:scale-[1.02]"
                href="#menu"
              >
                <span className="material-symbols-outlined text-xl">restaurant_menu</span>
                <span>Explore Our Menu</span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-brand-red text-brand-red dark:text-red-400 dark:border-red-400 hover:bg-brand-red hover:text-white dark:hover:bg-red-500 dark:hover:text-white px-7 py-3.5 rounded-full font-bold transition-all duration-200"
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Fry%20Day!%20I'd%20like%20to%20order%20now.`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-xl">chat</span>
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Operational Proof Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-4">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-surface-container dark:bg-[#1a1a1e] border border-outline-variant/40 dark:border-zinc-800 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0">
                  <span className="material-symbols-outlined text-2xl">schedule</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs uppercase font-medium text-on-surface-variant dark:text-zinc-400">
                    Open Daily
                  </span>
                  <span className="text-sm font-bold text-primary dark:text-white whitespace-nowrap">
                    12 PM - 3 AM
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-surface-container dark:bg-[#1a1a1e] border border-outline-variant/40 dark:border-zinc-800 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red dark:text-red-400 shrink-0">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs uppercase font-medium text-on-surface-variant dark:text-zinc-400">
                    Canal Road
                  </span>
                  <span className="text-sm font-bold text-primary dark:text-white whitespace-nowrap">
                    Jahan E Andalus
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-surface-container dark:bg-[#1a1a1e] border border-outline-variant/40 dark:border-zinc-800 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <span className="material-symbols-outlined text-2xl">check_circle</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs uppercase font-medium text-on-surface-variant dark:text-zinc-400">
                    Quality Tag
                  </span>
                  <span className="text-sm font-bold text-primary dark:text-white whitespace-nowrap">
                    100% Fresh To Order
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Column / Visual Montage */}
          <div className="lg:col-span-5 relative">
            <div
              onClick={() => onSelectDish(heroSpecialtyItem)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onSelectDish(heroSpecialtyItem);
              }}
              aria-label="Customize Double Smash Melt"
              className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/60 dark:border-zinc-700 bg-surface-container-high aspect-square md:aspect-[4/5] group cursor-pointer"
            >
              <SafeImage
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Gourmet double smash burger on a freshly baked artisanal brioche bun with glistening melted cheddar cheese, crisp lettuce, red onions, and house special sauce"
                src={RESTAURANT_INFO.heroImage}
                fallbackTitle="Double Smash Melt"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              {/* Overlaid Diner Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-surface/90 dark:bg-zinc-900/90 backdrop-blur-md border border-white/40 dark:border-zinc-700 flex items-center justify-between gap-3 shadow-xl text-left">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold-600 dark:text-gold-400 font-bold">
                    Specialty of the House
                  </p>
                  <h4 className="text-lg font-display font-extrabold text-primary dark:text-white">
                    Double Smash Melt
                  </h4>
                  <p className="text-xs text-on-surface-variant dark:text-zinc-300">
                    Pure prime beef &amp; butter toasted brioche
                  </p>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-white font-extrabold text-sm shadow-md whitespace-nowrap">
                  Rs. 890
                </span>
              </div>
            </div>

            {/* Decorative Stamp */}
            <div className="hidden sm:flex absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-tr from-brand-red to-red-600 text-white p-2 items-center justify-center text-center shadow-xl border-4 border-surface dark:border-[#121214] rotate-12">
              <span className="text-xs font-black tracking-wider leading-tight">
                CRAFTED
                <br />
                DAILY IN
                <br />
                FSD
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
