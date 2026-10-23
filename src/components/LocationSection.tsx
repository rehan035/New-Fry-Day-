import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/menuData';
import { SafeImage } from './SafeImage';

export const LocationSection: React.FC = () => {
  const [showInteractiveMap, setShowInteractiveMap] = useState(false);

  return (
    <section
      className="py-16 md:py-24 bg-surface-container-low/70 dark:bg-[#121214] border-t border-outline-variant/30 dark:border-zinc-800"
      id="location"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-red dark:text-red-400 uppercase tracking-widest">
            Find Our Diner
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary dark:text-white tracking-tight mt-1">
            Location &amp; Operating Hours
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant dark:text-zinc-400 mt-2">
            Conveniently located on the main artery of Faisalabad. Dine-in, curbside pickup, and
            rapid takeaway available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          {/* Left: Verified Contact Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-surface-container-lowest dark:bg-[#1a1a1f] p-8 rounded-3xl border border-outline-variant/30 dark:border-zinc-800 shadow-sm">
            <div className="space-y-6">
              {/* Address Unit */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red dark:text-red-400 shrink-0 mt-1">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-primary dark:text-white">
                    Physical Address
                  </h3>
                  <p className="text-sm text-on-surface-variant dark:text-zinc-300 mt-1 leading-snug">
                    W Canal Road, Jahan E Andalus,
                    <br />
                    Faisalabad, Punjab, Pakistan
                  </p>
                  <span className="inline-block mt-2 text-xs font-bold text-gold-600 dark:text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full">
                    Ample Customer Parking Available
                  </span>
                </div>
              </div>

              {/* Operating Hours Unit */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0 mt-1">
                  <span className="material-symbols-outlined text-xl">
                    nest_clock_farsight_analog
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-primary dark:text-white">
                    Kitchen Hours
                  </h3>
                  <p className="text-sm text-on-surface-variant dark:text-zinc-300 mt-1">
                    <span className="font-bold text-primary dark:text-white">
                      Monday – Sunday:
                    </span>
                    <br />
                    12:00 PM – 3:00 AM (Daily)
                  </p>
                  <p className="text-xs text-brand-red dark:text-red-400 mt-1 font-medium">
                    Late night dine-in, takeaway &amp; WhatsApp delivery.
                  </p>
                </div>
              </div>

              {/* WhatsApp & Direct Calling */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-1">
                  <span className="material-symbols-outlined text-xl">phone_in_talk</span>
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-primary dark:text-white">
                    Contact &amp; Ordering
                  </h3>
                  <p className="text-base font-bold text-primary dark:text-white mt-1 tabular-nums">
                    {RESTAURANT_INFO.phone}
                  </p>
                  <p className="text-xs text-on-surface-variant dark:text-zinc-400">
                    Instant customer desk &amp; reservation inquiries
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons Group */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-outline-variant/30 dark:border-zinc-800">
              <a
                className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white py-3 px-4 rounded-xl text-xs font-bold transition-colors shadow-md shadow-brand-red/20"
                href={RESTAURANT_INFO.mapsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-lg">map</span>
                <span>Get Directions</span>
              </a>
              <a
                className="flex-1 inline-flex items-center justify-center gap-2 border border-brand-red/40 dark:border-zinc-700 text-brand-red dark:text-red-400 hover:bg-surface-container dark:hover:bg-zinc-800 py-3 px-4 rounded-xl text-xs font-bold transition-colors"
                href="tel:+923261180202"
              >
                <span className="material-symbols-outlined text-lg">call</span>
                <span>Call Restaurant</span>
              </a>
            </div>
          </div>

          {/* Right: Map Card & Google Review Anchor */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Visual Map Interface */}
            <div className="relative w-full h-80 lg:flex-1 rounded-3xl overflow-hidden border border-outline-variant/30 dark:border-zinc-800 bg-surface-container dark:bg-zinc-800 shadow-inner">
              {showInteractiveMap ? (
                <iframe
                  title="Fry Day W Canal Road Faisalabad Map"
                  src="https://www.google.com/maps?q=Fry+Day+W+Canal+Road+Jahan+E+Andalus+Faisalabad&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <SafeImage
                  className="w-full h-full object-cover"
                  alt="A clean modern cartographic map overview showing West Canal Road, Jahan E Andalus neighborhood in Faisalabad"
                  src={RESTAURANT_INFO.mapPreviewImage}
                  fallbackTitle="W Canal Road, Faisalabad"
                  fallbackIcon="map"
                />
              )}

              <div className="absolute top-4 left-4 bg-surface/90 dark:bg-zinc-900/90 backdrop-blur-md p-3 rounded-2xl border border-outline-variant/30 dark:border-zinc-700 shadow-md flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-brand-red text-white flex items-center justify-center font-black text-xs">
                  FD
                </div>
                <div>
                  <p className="text-xs font-bold text-primary dark:text-white">
                    Fry Day Restaurant
                  </p>
                  <p className="text-[11px] text-on-surface-variant dark:text-zinc-400">
                    W Canal Road, Faisalabad
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowInteractiveMap((prev) => !prev)}
                className="absolute bottom-4 right-4 bg-surface/90 dark:bg-zinc-900/90 backdrop-blur-md px-3.5 py-2 rounded-full border border-outline-variant/40 dark:border-zinc-700 text-xs font-bold text-primary dark:text-white shadow-md hover:bg-brand-red hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base">
                  {showInteractiveMap ? 'image' : 'explore'}
                </span>
                <span>{showInteractiveMap ? 'Illustrated Map' : 'Interactive Live Map'}</span>
              </button>
            </div>

            {/* Verified Google Review Callout */}
            <div className="bg-surface-container-lowest dark:bg-[#1a1a1f] p-6 rounded-3xl border border-outline-variant/30 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined material-symbols-filled text-2xl">
                    rate_review
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-gold-500 mb-1">
                    <span className="material-symbols-outlined material-symbols-filled text-base">
                      star
                    </span>
                    <span className="material-symbols-outlined material-symbols-filled text-base">
                      star
                    </span>
                    <span className="material-symbols-outlined material-symbols-filled text-base">
                      star
                    </span>
                    <span className="material-symbols-outlined material-symbols-filled text-base">
                      star
                    </span>
                    <span className="material-symbols-outlined material-symbols-filled text-base">
                      star
                    </span>
                    <span className="text-xs font-bold text-primary dark:text-white ml-1">
                      4.9 / 5.0
                    </span>
                  </div>
                  <h4 className="text-sm font-display font-bold text-primary dark:text-white">
                    Loved your Fry Day experience?
                  </h4>
                  <p className="text-xs text-on-surface-variant dark:text-zinc-400">
                    Share your feedback on Google Maps &amp; help us grow our local community.
                  </p>
                </div>
              </div>
              <a
                className="w-full sm:w-auto text-center whitespace-nowrap px-5 py-2.5 rounded-full bg-surface-container dark:bg-zinc-800 hover:bg-brand-red hover:text-white dark:hover:bg-brand-red dark:hover:text-white border border-outline-variant/30 dark:border-zinc-700 text-primary dark:text-zinc-200 font-bold text-xs transition-colors"
                href={RESTAURANT_INFO.mapsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Review on Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
