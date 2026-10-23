import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/menuData';
import { SafeImage } from './SafeImage';

export const LocationSection: React.FC = () => {
  const [showInteractiveMap, setShowInteractiveMap] = useState(true);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard?.writeText(RESTAURANT_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section
      className="py-16 md:py-24 bg-surface-container-low/70 dark:bg-[#121214] border-t border-outline-variant/30 dark:border-zinc-800"
      id="location"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Consistent Left-Aligned Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 text-left">
          <div>
            <p className="text-xs font-bold text-brand-red dark:text-red-400 uppercase tracking-[0.14em] mb-2">
              Visit Or Order Direct
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#281715] dark:text-white tracking-tight leading-[1.15]">
              Location &amp; Operating Hours
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant dark:text-zinc-400 mt-2 max-w-xl">
              Conveniently located on main W Canal Road in Jahan E Andalus, Faisalabad. Dine-in,
              outdoor patio seating, car-hop service, and rapid delivery available.
            </p>
          </div>

          <a
            href={RESTAURANT_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 px-4 rounded-xl bg-surface-container-lowest dark:bg-[#1a1a1f] hover:bg-brand-red hover:text-white text-[#281715] dark:text-white border border-outline-variant/40 dark:border-zinc-700 text-xs font-bold inline-flex items-center gap-2 transition-colors self-start sm:self-auto shrink-0 shadow-sm"
          >
            <span className="material-symbols-outlined text-base">open_in_new</span>
            <span>Open in Google Maps</span>
          </a>
        </div>

        {/* 2-Column Equal Height Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          {/* Left: Verified Contact Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-surface-container-lowest dark:bg-[#1a1a1f] p-6 sm:p-8 rounded-2xl border border-outline-variant/30 dark:border-zinc-800 shadow-sm">
            <div className="space-y-6">
              {/* Address Unit */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red dark:text-red-400 shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-[#281715] dark:text-white">
                    Restaurant Address
                  </h3>
                  <p className="text-sm text-on-surface-variant dark:text-zinc-300 mt-1 leading-relaxed">
                    W Canal Road, Jahan E Andalus,
                    <br />
                    Faisalabad, Punjab, Pakistan
                  </p>
                  <p className="text-xs font-semibold text-gold-600 dark:text-gold-400 mt-2">
                    Ample Customer &amp; Car-Hop Parking Available
                  </p>
                </div>
              </div>

              {/* Operating Hours Unit */}
              <div className="flex items-start gap-4 pt-5 border-t border-outline-variant/25 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-xl">schedule</span>
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-[#281715] dark:text-white">
                    Kitchen &amp; Dining Hours
                  </h3>
                  <p className="text-sm text-on-surface-variant dark:text-zinc-300 mt-1 tabular-nums">
                    <strong className="text-[#281715] dark:text-white">Monday – Sunday:</strong>{' '}
                    12:00 PM – 3:00 AM
                  </p>
                  <p className="text-xs text-on-surface-variant dark:text-zinc-400 mt-1">
                    Late-night dine-in, takeaway &amp; WhatsApp delivery
                  </p>
                </div>
              </div>

              {/* Direct Order Desk */}
              <div className="flex items-start gap-4 pt-5 border-t border-outline-variant/25 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-xl">phone_in_talk</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-display font-bold text-[#281715] dark:text-white">
                    Direct Order &amp; Reservation Desk
                  </h3>
                  <div className="flex items-center gap-2.5 mt-1">
                    <a
                      href="tel:+923261180202"
                      className="text-base font-bold text-brand-red dark:text-red-400 hover:underline tabular-nums"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyPhone}
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-surface-container dark:bg-zinc-800 text-on-surface-variant dark:text-zinc-300 hover:text-brand-red transition-colors cursor-pointer"
                    >
                      {copiedPhone ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <p className="text-xs text-on-surface-variant dark:text-zinc-400 mt-1">
                    Fast WhatsApp dispatch &amp; family table inquiries
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-outline-variant/30 dark:border-zinc-800">
              <a
                className="h-11 inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white px-4 rounded-xl text-xs font-bold transition-colors shadow-sm"
                href={RESTAURANT_INFO.mapsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-lg">directions</span>
                <span>Get Directions</span>
              </a>
              <a
                className="h-11 inline-flex items-center justify-center gap-2 border border-outline-variant/50 dark:border-zinc-700 text-[#281715] dark:text-white hover:bg-surface-container dark:hover:bg-zinc-800 px-4 rounded-xl text-xs font-bold transition-colors"
                href="tel:+923261180202"
              >
                <span className="material-symbols-outlined text-lg text-brand-red dark:text-red-400">
                  call
                </span>
                <span>Call Restaurant</span>
              </a>
            </div>
          </div>

          {/* Right: Map Card & Google Review Anchor */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Map Container */}
            <div className="relative w-full h-80 lg:flex-1 min-h-[280px] rounded-2xl overflow-hidden border border-outline-variant/30 dark:border-zinc-800 bg-surface-container dark:bg-zinc-800 shadow-sm">
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
                  alt="Map overview showing West Canal Road, Jahan E Andalus neighborhood in Faisalabad"
                  src={RESTAURANT_INFO.mapPreviewImage}
                  fallbackTitle="W Canal Road, Faisalabad Map"
                  fallbackIcon="map"
                />
              )}

              {/* Map Mode Toggle */}
              <button
                type="button"
                onClick={() => setShowInteractiveMap((prev) => !prev)}
                className="absolute bottom-3.5 right-3.5 bg-surface/95 dark:bg-zinc-900/95 backdrop-blur-md h-9 px-3.5 rounded-xl border border-outline-variant/40 dark:border-zinc-700 text-xs font-bold text-[#281715] dark:text-white shadow-md hover:bg-brand-red hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base">
                  {showInteractiveMap ? 'image' : 'map'}
                </span>
                <span>{showInteractiveMap ? 'Illustrated Map' : 'Live Google Map'}</span>
              </button>
            </div>

            {/* Verified Google Review Callout */}
            <div className="bg-surface-container-lowest dark:bg-[#1a1a1f] p-6 rounded-2xl border border-outline-variant/30 dark:border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined material-symbols-filled text-2xl">
                    star
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-sm font-extrabold text-[#281715] dark:text-white tabular-nums">
                      4.9 / 5.0 Rating
                    </span>
                    <span className="text-xs text-on-surface-variant dark:text-zinc-400">
                      · Google Reviews
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface-variant dark:text-zinc-400">
                    Visited Fry Day on W Canal Road? Share your experience with fellow food lovers.
                  </p>
                </div>
              </div>

              <a
                className="w-full sm:w-auto h-10 px-5 rounded-xl bg-surface-container dark:bg-zinc-800 hover:bg-brand-red hover:text-white dark:hover:bg-brand-red dark:hover:text-white border border-outline-variant/30 dark:border-zinc-700 text-[#281715] dark:text-zinc-200 font-bold text-xs inline-flex items-center justify-center transition-colors whitespace-nowrap shrink-0"
                href={RESTAURANT_INFO.mapsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Write a Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
