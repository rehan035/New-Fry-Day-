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
                <p className="text-[10px] uppercase font-bold text-brand-red dark:text-red-400">
                  {cartCount} {cartCount === 1 ? 'Item' : 'Items'} in Bag
                </p>
                <p className="text-xs font-extrabold text-primary dark:text-white tabular-nums">
                  Total: Rs. {cartSubtotal}
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenCart}
                className="flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-md active:scale-95 transition-transform cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">shopping_bag</span>
                <span>Checkout Order</span>
              </button>
            </>
          ) : (
            <>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-on-surface-variant dark:text-zinc-400">
                  Craving Fast Casual?
                </p>
                <p className="text-xs font-extrabold text-primary dark:text-white">
                  Serving Warm Till 3 AM
                </p>
              </div>
              <a
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-md active:scale-95 transition-transform"
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Fry%20Day!%20I%20would%20like%20to%20place%20an%20order.`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Quick WhatsApp</span>
              </a>
            </>
          )}
        </div>
      </div>

      {/* FLOATING WHATSAPP ACTION BUTTON */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-3">
        {cartCount > 0 && (
          <button
            type="button"
            onClick={onOpenCart}
            className="flex items-center gap-2.5 bg-brand-red hover:bg-brand-red-hover text-white px-5 py-3 rounded-full shadow-2xl transition-all duration-200 hover:scale-105 border-2 border-white/40 dark:border-zinc-700 cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">shopping_bag</span>
            <span className="text-sm font-bold tabular-nums">
              Bag ({cartCount}) · Rs. {cartSubtotal}
            </span>
          </button>
        )}
        <a
          aria-label="Order on WhatsApp"
          className="flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-5 py-3 rounded-full shadow-2xl hover:from-emerald-500 hover:to-emerald-600 transition-all duration-200 hover:scale-105 group border-2 border-white/40 dark:border-zinc-700"
          href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Fry%20Day!%20I%20would%20like%20to%20order%20food.`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="material-symbols-outlined text-2xl text-emerald-200">chat</span>
          <span className="text-sm font-bold tracking-wide">WhatsApp Order</span>
        </a>
      </div>

      {/* FOOTER (Shared Component Anchor) */}
      <footer className="bg-[#1f0808] dark:bg-[#0c0c0e] text-white docked full-width border-t border-brand-red/30 dark:border-zinc-800 transition-colors">
        <div className="w-full px-6 md:px-12 py-12 md:py-16 max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Footer Brand Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/assets/aistudio/fry_days_logo_small_c6ff3652.png"
              alt="Fry Days Logo"
              className="h-12 w-auto object-contain"
            />
            <p className="text-xs text-zinc-400 max-w-sm mt-2 leading-relaxed">
              © 2025 Fry Day Gourmet Casual Dining. W Canal Road, Jahan E Andalus, Faisalabad. All
              rights reserved.
            </p>
          </div>

          {/* Links Cluster */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              className="text-xs text-zinc-300 hover:text-gold-400 transition-colors"
              href="#menu"
            >
              Menu
            </a>
            <a
              className="text-xs text-zinc-300 hover:text-gold-400 transition-colors"
              href="#about"
            >
              About Us
            </a>
            <a
              className="text-xs text-zinc-300 hover:text-gold-400 transition-colors"
              href="#craft"
            >
              Quality Promise
            </a>
            <a
              className="text-xs text-zinc-300 hover:text-gold-400 transition-colors"
              href="#location"
            >
              Location &amp; Hours
            </a>
            <a
              className="text-xs text-zinc-300 hover:text-gold-400 transition-colors"
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Support
            </a>
            <a
              className="text-xs text-zinc-300 hover:text-gold-400 transition-colors"
              href={RESTAURANT_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps Directions
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
