import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/menuData';
import { SafeImage } from './SafeImage';

export const AboutSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<'exterior' | 'interior'>('exterior');

  return (
    <section className="py-16 md:py-24 bg-surface dark:bg-[#161619]" id="about">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Visual Column with Exterior / Interior Switcher */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-outline-variant/30 dark:border-zinc-800 aspect-[16/10] bg-surface-container dark:bg-zinc-800 relative">
              <SafeImage
                className="w-full h-full object-cover transition-all duration-300"
                alt={
                  activePhoto === 'exterior'
                    ? 'Fry Day Restaurant Building on West Canal Road, Jahan E Andalus, Faisalabad'
                    : 'Interior view of Fry Day gourmet fast-casual burger diner in Faisalabad'
                }
                src={
                  activePhoto === 'exterior'
                    ? RESTAURANT_INFO.exteriorImage
                    : RESTAURANT_INFO.interiorImage
                }
                fallbackTitle="Fry Day Restaurant Faisalabad"
              />

              {/* Photo View Switcher */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                <div className="bg-black/75 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 text-left">
                  <p className="text-xs font-bold text-white">
                    {activePhoto === 'exterior'
                      ? 'W Canal Road Flagship Building'
                      : 'Open Grill & Dining Room'}
                  </p>
                  <p className="text-[11px] text-zinc-300">
                    Jahan E Andalus, Faisalabad
                  </p>
                </div>

                <div className="bg-black/75 backdrop-blur-md p-1 rounded-xl border border-white/15 flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => setActivePhoto('exterior')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      activePhoto === 'exterior'
                        ? 'bg-brand-red text-white'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Exterior
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePhoto('interior')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      activePhoto === 'interior'
                        ? 'bg-brand-red text-white'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Interior
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red dark:text-red-400 mb-2">
                About Fry Day Faisalabad
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#281715] dark:text-white tracking-tight leading-[1.15]">
                Faisalabad's Premier Fast-Casual Landmark
              </h2>
            </div>

            <p className="text-sm sm:text-base text-on-surface-variant dark:text-zinc-300 leading-relaxed">
              Situated right on bustling W Canal Road in Jahan E Andalus, Fry Day was built to
              elevate the local dining landscape in Faisalabad. From our recognizable warm brick
              facade with signature red columns to our spotless open kitchen, we serve honest,
              slow-crafted fast food made with real butter brioche and fresh prime meats.
            </p>

            <p className="text-sm sm:text-base text-on-surface-variant dark:text-zinc-300 leading-relaxed">
              Whether you are dropping by for a late-night burger run with friends, enjoying outdoor
              patio seating with family, or pulling up for rapid car-hop service, our kitchen serves
              fresh off the grill until 3:00 AM every night.
            </p>

            {/* Aligned Key Facts Row */}
            <div className="w-full pt-2 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="p-4 rounded-xl bg-surface-container-lowest dark:bg-[#1c1c21] border border-outline-variant/30 dark:border-zinc-800">
                <p className="text-xs text-on-surface-variant dark:text-zinc-400">Open Daily</p>
                <p className="text-base sm:text-lg font-display font-extrabold text-[#281715] dark:text-white mt-0.5 tabular-nums">
                  12 PM – 3 AM
                </p>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-lowest dark:bg-[#1c1c21] border border-outline-variant/30 dark:border-zinc-800">
                <p className="text-xs text-on-surface-variant dark:text-zinc-400">Quality</p>
                <p className="text-base sm:text-lg font-display font-extrabold text-[#281715] dark:text-white mt-0.5">
                  100% Halal
                </p>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-lowest dark:bg-[#1c1c21] border border-outline-variant/30 dark:border-zinc-800">
                <p className="text-xs text-on-surface-variant dark:text-zinc-400">Guest Rating</p>
                <p className="text-base sm:text-lg font-display font-extrabold text-brand-red dark:text-red-400 mt-0.5 tabular-nums">
                  4.9 / 5.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
