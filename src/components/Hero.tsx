import React from 'react';
import { MENU_ITEMS, MenuItem, RESTAURANT_INFO } from '../data/menuData';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onSelectDish: (item: MenuItem) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectDish }) => {
  const heroSpecialtyItem = MENU_ITEMS[0]; // Classic Smash Double

  return (
    <section className="relative bg-background dark:bg-[#121214] text-on-surface dark:text-white overflow-hidden border-b border-outline-variant/25 dark:border-zinc-800 transition-colors duration-300">
      {/* Main Hero Content Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 lg:py-20 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Tagline, Headline, Description & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-brand-red dark:text-red-400 mb-3">
              W Canal Road · Jahan E Andalus · Faisalabad
            </p>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-extrabold text-[#281715] dark:text-white tracking-tight leading-[1.08] max-w-xl"
              style={{ textWrap: 'balance' }}
            >
              Gourmet Smashed Burgers, Crispy Broast &amp; Loaded Fries.
            </h1>

            <p className="text-base sm:text-lg text-on-surface-variant dark:text-zinc-300 max-w-xl leading-relaxed mt-4 font-normal">
              Faisalabad’s landmark destination for fast-casual dining. Hand-smashed prime beef
              patties on butter-toasted brioche, 18-hour buttermilk fried chicken, and signature
              wraps prepared fresh to order until 3:00 AM.
            </p>

            {/* Primary Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mt-7 w-full sm:w-auto">
              <a
                href="#menu"
                className="h-12 px-7 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white font-bold text-sm inline-flex items-center justify-center gap-2.5 shadow-md shadow-brand-red/20 transition-colors whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-xl">restaurant_menu</span>
                <span>Explore Full Menu</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Fry%20Days!%20I'd%20like%20to%20place%20an%20order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-7 rounded-xl bg-surface-container dark:bg-zinc-800 hover:bg-surface-container-high dark:hover:bg-zinc-700 text-[#281715] dark:text-white border border-outline-variant/40 dark:border-zinc-700 font-bold text-sm inline-flex items-center justify-center gap-2.5 transition-colors whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-xl text-emerald-600 dark:text-emerald-400">
                  chat
                </span>
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Featured Burger Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div
              onClick={() => onSelectDish(heroSpecialtyItem)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onSelectDish(heroSpecialtyItem);
              }}
              aria-label="Customize Classic Smash Double"
              className="relative rounded-2xl overflow-hidden shadow-xl border border-outline-variant/30 dark:border-zinc-800 bg-surface-container-high dark:bg-zinc-900 aspect-[4/3] sm:aspect-[5/4] group cursor-pointer"
            >
              <SafeImage
                src={RESTAURANT_INFO.heroImage}
                alt={heroSpecialtyItem.alt}
                fallbackTitle={heroSpecialtyItem.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface/95 dark:bg-zinc-900/95 backdrop-blur-md border border-outline-variant/30 dark:border-zinc-700 flex items-center justify-between gap-3 shadow-lg text-left">
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400">
                    Specialty of the House
                  </p>
                  <h2 className="text-base sm:text-lg font-display font-extrabold text-[#281715] dark:text-white truncate">
                    {heroSpecialtyItem.name}
                  </h2>
                  <p className="text-xs text-on-surface-variant dark:text-zinc-300 truncate">
                    Double prime beef, aged cheddar &amp; butter brioche
                  </p>
                </div>
                <span className="px-3.5 py-1.5 rounded-lg bg-brand-red text-white font-extrabold text-sm shadow-sm whitespace-nowrap tabular-nums shrink-0">
                  Rs. {heroSpecialtyItem.price}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Full-Width Operational Bar */}
        <div className="mt-10 pt-6 border-t border-outline-variant/30 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0">
              <span className="material-symbols-outlined text-xl">schedule</span>
            </div>
            <div>
              <p className="text-xs font-medium text-on-surface-variant dark:text-zinc-400">
                Operating Hours
              </p>
              <p className="text-sm font-bold text-[#281715] dark:text-white tabular-nums">
                Open Daily · 12:00 PM – 3:00 AM
              </p>
            </div>
          </div>

          <a href="#location" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red dark:text-red-400 shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-xl">location_on</span>
            </div>
            <div>
              <p className="text-xs font-medium text-on-surface-variant dark:text-zinc-400">
                Dine-In, Car-Hop &amp; Takeaway
              </p>
              <p className="text-sm font-bold text-[#281715] dark:text-white group-hover:text-brand-red dark:group-hover:text-red-400 transition-colors">
                W Canal Road, Jahan E Andalus
              </p>
            </div>
          </a>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <span className="material-symbols-outlined text-xl">verified</span>
            </div>
            <div>
              <p className="text-xs font-medium text-on-surface-variant dark:text-zinc-400">
                Culinary Standard
              </p>
              <p className="text-sm font-bold text-[#281715] dark:text-white">
                100% Fresh Halal · Made to Order
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
