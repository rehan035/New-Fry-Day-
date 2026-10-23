import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/menuData';
import { SafeImage } from './SafeImage';

export const AboutSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<'interior' | 'exterior'>('interior');

  return (
    <section className="py-16 md:py-24 bg-surface dark:bg-[#161619]" id="about">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-outline-variant/30 dark:border-zinc-800 aspect-[4/3] bg-surface-container dark:bg-zinc-800 relative">
              <SafeImage
                className="w-full h-full object-cover"
                alt={
                  activePhoto === 'interior'
                    ? 'Interior view of a modern gourmet fast-casual burger diner in Faisalabad with emerald deep forest green tile walls, warm ambient filament pendant lights, polished wood tables, and stainless steel open grill station.'
                    : 'Fry Day Restaurant Building on West Canal Road, Jahan E Andalus, Faisalabad'
                }
                src={
                  activePhoto === 'interior'
                    ? RESTAURANT_INFO.interiorImage
                    : RESTAURANT_INFO.exteriorImage
                }
                fallbackTitle="Fry Day Faisalabad"
              />

              {/* Subtle Interior / Exterior Switcher */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md p-1 rounded-full border border-white/15 flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setActivePhoto('interior')}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold transition-colors cursor-pointer ${
                    activePhoto === 'interior'
                      ? 'bg-brand-red text-white'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  Interior
                </button>
                <button
                  type="button"
                  onClick={() => setActivePhoto('exterior')}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold transition-colors cursor-pointer ${
                    activePhoto === 'exterior'
                      ? 'bg-brand-red text-white'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  Exterior
                </button>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-brand-red to-brand-red-hover text-white p-6 rounded-2xl hidden sm:block max-w-xs shadow-xl border border-white/20 text-left">
              <span className="text-2xl font-display font-black text-gold-400">100% Halal</span>
              <p className="text-xs text-white/90 mt-1 leading-relaxed">
                Locally sourced, freshly prepared upon every single guest order.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            <div className="inline-flex items-center gap-2 text-brand-red dark:text-red-400">
              <span className="material-symbols-outlined text-lg">store</span>
              <span className="text-xs font-bold uppercase tracking-widest">
                About Fry Day Faisalabad
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary dark:text-white tracking-tight">
              Crafting Faisalabad's Premier Fast-Food Landmark
            </h2>

            <p className="text-sm md:text-base text-on-surface-variant dark:text-zinc-300 leading-relaxed">
              Situated right on bustling W Canal Road in Jahan E Andalus, Fry Day was conceived to
              elevate the local dining landscape. We saw a need for premium quality fast food that
              doesn’t compromise on authenticity, real butter brioche, or fresh prime meats.
            </p>

            <p className="text-sm md:text-base text-on-surface-variant dark:text-zinc-300 leading-relaxed">
              Whether you are dropping by for a midnight craving with friends, enjoying a cozy
              family dinner, or grabbing piping hot takeaway, our doors are open until 3 AM every
              single night of the week.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6">
              <div className="border-l-4 border-brand-red pl-4">
                <span className="text-xl font-display font-black text-primary dark:text-white">
                  Late Nights
                </span>
                <p className="text-xs text-on-surface-variant dark:text-zinc-400">
                  Serving till 3:00 AM daily
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-4">
                <span className="text-xl font-display font-black text-primary dark:text-white">
                  Jahan E Andalus
                </span>
                <p className="text-xs text-on-surface-variant dark:text-zinc-400">
                  Prime Canal Road Address
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
