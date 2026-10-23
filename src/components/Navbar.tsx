import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  cartCount: number;
  onOpenCart: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  cartCount,
  onOpenCart,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#menu', label: 'Menu', id: 'menu' },
    { href: '#craft', label: 'Quality Promise', id: 'craft' },
    { href: '#about', label: 'Our Story', id: 'about' },
    { href: '#location', label: 'Location & Hours', id: 'location' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-surface/95 dark:bg-[#121214]/95 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 dark:border-zinc-800/90 transition-colors duration-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 h-18 md:h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Logo */}
        <a
          href="#"
          className="flex items-center group shrink-0 focus:outline-none"
          aria-label="Fry Days Home"
        >
          <img
            src="/assets/aistudio/fry_days_logo_small_c6ff3652.png"
            alt="Fry Days — Fries • Burgers • Wraps"
            className="h-11 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-sm font-semibold tracking-tight transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  isActive
                    ? 'text-brand-red dark:text-red-400 border-brand-red dark:border-red-400'
                    : 'text-on-surface-variant dark:text-zinc-300 border-transparent hover:text-brand-red dark:hover:text-red-400'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-on-surface-variant dark:text-zinc-300 bg-surface-container dark:bg-zinc-800/90 hover:bg-surface-container-high dark:hover:bg-zinc-700 border border-outline-variant/40 dark:border-zinc-700 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Order Bag Button */}
          <button
            type="button"
            onClick={onOpenCart}
            aria-label="Open order bag"
            className="h-10 px-3.5 rounded-xl bg-surface-container dark:bg-zinc-800/90 hover:bg-surface-container-high dark:hover:bg-zinc-700 text-[#281715] dark:text-white border border-outline-variant/40 dark:border-zinc-700 text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <span className="material-symbols-outlined text-lg text-brand-red dark:text-red-400">
              shopping_bag
            </span>
            <span className="hidden lg:inline">Bag</span>
            <span className="px-1.5 py-0.5 text-[11px] font-extrabold rounded-md bg-brand-red text-white tabular-nums min-w-[20px] text-center leading-none">
              {cartCount}
            </span>
          </button>

          {/* Primary WhatsApp CTA */}
          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Fry%20Day!%20I%20would%20like%20to%20place%20an%20order.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-2 h-10 px-5 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs sm:text-sm font-bold transition-colors shadow-sm whitespace-nowrap shrink-0"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            <span>Order on WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-[#281715] dark:text-white bg-surface-container dark:bg-zinc-800/90 border border-outline-variant/40 dark:border-zinc-700 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-outline-variant/30 dark:border-zinc-800 bg-surface dark:bg-[#161619] px-4 sm:px-6 py-4 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={handleNavClick}
              className="flex items-center justify-between py-3 text-sm font-semibold text-[#281715] dark:text-zinc-200 hover:text-brand-red dark:hover:text-red-400 border-b border-outline-variant/20 dark:border-zinc-800/80 last:border-none"
            >
              <span>{link.label}</span>
              <span className="material-symbols-outlined text-base opacity-60">
                chevron_right
              </span>
            </a>
          ))}
          <div className="pt-3 grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="h-11 inline-flex items-center justify-center gap-2 rounded-xl bg-surface-container dark:bg-zinc-800 text-[#281715] dark:text-white border border-outline-variant/40 dark:border-zinc-700 text-xs font-bold cursor-pointer"
            >
              <span className="material-symbols-outlined text-base text-brand-red dark:text-red-400">
                shopping_bag
              </span>
              <span>Order Bag ({cartCount})</span>
            </button>
            <a
              onClick={handleNavClick}
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Fry%20Day!%20I%20would%20like%20to%20place%20an%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red text-white text-xs font-bold shadow-sm"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>WhatsApp Order</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
