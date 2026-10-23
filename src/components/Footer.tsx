import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

interface FooterProps {
  cartCount: number;
  cartSubtotal: number;
  onOpenCart: () => void;
}

export const Footer: React.FC<FooterProps> = ({ cartCount, cartSubtotal, onOpenCart }) => {
  return (
    <>
      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="md:hidden sticky bottom-0 z-40 bg-surface/95 dark:bg-[#161619]/95 backdrop-blur-md border-t border-outline-variant/40 dark:border-zinc-800 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between gap-3">
          {cartCount > 0 ? (
            <>
              <div className="text-left">
                <p className="text-[11px] font-bold text-brand-red dark:text-red-400">
                  {cartCount} {cartCount === 1 ? 'Item' : 'Items'} in Order Bag
                </p>
                <p className="text-sm font-display font-extrabold text-[#281715] dark:text-white tabular-nums">
                  Total: Rs. {cartSubtotal}
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenCart}
                className="h-10 px-5 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white font-bold text-xs inline-flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">shopping_bag</span>
                <span>View &amp; Checkout</span>
              </button>
            </>
          ) : (
            <>
              <div className="text-left">
                <p className="text-[11px] font-medium text-on-surface-variant dark:text-zinc-400">
                  W Canal Road · Open Daily
                </p>
                <p className="text-xs font-extrabold text-[#281715] dark:text-white tabular-nums">
                  Serving Hot Until 3:00 AM
                </p>
              </div>
              <a
                className="h-10 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-2 shadow-sm"
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Fry%20Day!%20I%20would%20like%20to%20place%20an%20order.`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>WhatsApp Order</span>
              </a>
            </>
          )}
        </div>
      </div>

      {/* DESKTOP FLOATING ACTION */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-3">
        {cartCount > 0 && (
          <button
            type="button"
            onClick={onOpenCart}
            className="h-12 px-5 rounded-full bg-brand-red hover:bg-brand-red-hover text-white shadow-xl flex items-center gap-2.5 transition-transform hover:scale-[1.02] border border-white/20 cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">shopping_bag</span>
            <span className="text-sm font-bold tabular-nums">
              Order Bag ({cartCount}) · Rs. {cartSubtotal}
            </span>
          </button>
        )}
        <a
          aria-label="Order on WhatsApp"
          className="h-12 px-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl flex items-center gap-2.5 transition-transform hover:scale-[1.02] border border-white/20"
          href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Fry%20Day!%20I%20would%20like%20to%20order%20food.`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="material-symbols-outlined text-xl">chat</span>
          <span className="text-sm font-bold">WhatsApp Order</span>
        </a>
      </div>

      {/* STRUCTURED 4-COLUMN RESTAURANT FOOTER */}
      <footer className="bg-[#160808] dark:bg-[#0c0c0e] text-white border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 text-left">
            {/* Col 1: Brand & Story */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-red flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-lg">lunch_dining</span>
                </div>
                <span className="text-2xl font-display font-extrabold tracking-tight text-white">
                  {RESTAURANT_INFO.name}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
                Faisalabad’s premier fast-casual dining destination. Freshly smashed prime beef
                burgers, 18-hour marinated crispy broast, and loaded hand-cut fries.
              </p>
            </div>

            {/* Col 2: Navigation */}
            <div className="lg:col-span-2 space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gold-400">
                Explore
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                <li>
                  <a href="#menu" className="hover:text-white transition-colors">
                    Artisan Menu
                  </a>
                </li>
                <li>
                  <a href="#craft" className="hover:text-white transition-colors">
                    Quality Promise
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#location" className="hover:text-white transition-colors">
                    Location &amp; Map
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Operating Hours */}
            <div className="lg:col-span-3 space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gold-400">
                Location &amp; Hours
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                W Canal Road, Jahan E Andalus,
                <br />
                Faisalabad, Punjab, Pakistan
              </p>
              <p className="text-xs sm:text-sm text-white font-semibold tabular-nums pt-1">
                Open Daily: 12:00 PM – 3:00 AM
              </p>
            </div>

            {/* Col 4: Direct Contact */}
            <div className="lg:col-span-3 space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gold-400">
                Order Direct
              </h3>
              <p className="text-sm font-bold text-white tabular-nums">
                {RESTAURANT_INFO.phone}
              </p>
              <div className="pt-1 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Fry%20Day!%20I%20would%20like%20to%20place%20an%20order.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold inline-flex items-center justify-center gap-1.5 w-fit transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
            <p>
              © {new Date().getFullYear()} Fry Day Gourmet Casual Dining, Faisalabad. All rights
              reserved.
            </p>
            <p>Dine-In · Outdoor Patio · Car-Hop · Delivery</p>
          </div>
        </div>
      </footer>
    </>
  );
};
