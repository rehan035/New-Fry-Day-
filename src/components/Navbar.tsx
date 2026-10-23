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
    { href: '#about', label: 'About Us', id: 'about' },
    { href: '#craft', label: 'Quality Promise', id: 'craft' },
    { href: '#location', label: 'Location & Hours', id: 'location' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-surface/90 dark:bg-[#161619]/90 backdrop-blur-md text-primary dark:text-red-400 docked full-width top-0 sticky z-50 border-b border-primary-fixed dark:border-zinc-800 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto h-20">
        {/* Brand Logo */}
        <a
          className="flex items-center gap-3 group shrink-0 focus:outline-none"
          href="#"
          aria-label="Fry Days Home"
        >
          <img
            src="/assets/aistudio/fry_days_logo_small_c6ff3652.png"
            alt="Fry Days — Fries • Burgers • Wraps"
            className="h-12 md:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={
                  isActive
                    ? 'text-brand-red dark:text-red-400 font-bold border-b-2 border-brand-red dark:border-red-400 pb-1 text-sm tracking-wide transition-colors whitespace-nowrap'
                    : 'text-on-surface-variant dark:text-zinc-300 hover:text-brand-red dark:hover:text-red-400 transition-colors duration-200 text-sm tracking-wide whitespace-nowrap'
                }
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Trailing Actions & Theme Switcher */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Dark Mode Toggle Button */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle dark/light mode"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant dark:text-gold-400 bg-surface-container dark:bg-zinc-800 hover:bg-surface-container-high dark:hover:bg-zinc-700 transition-colors border border-outline-variant/40 dark:border-zinc-700 shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Order Bag Trigger Button */}
          <button
            type="button"
            onClick={onOpenCart}
            aria-label="Open order bag"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-surface-container dark:bg-zinc-800 hover:bg-surface-container-high dark:hover:bg-zinc-700 text-primary dark:text-white border border-outline-variant/40 dark:border-zinc-700 text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-sm whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-lg text-brand-red dark:text-red-400">
              shopping_bag
            </span>
            <span className="hidden lg:inline">Bag</span>
            <span className="px-1.5 py-0.5 text-[11px] font-extrabold rounded-full bg-brand-red text-white tabular-nums min-w-[20px] text-center leading-none">
              {cartCount}
            </span>
          </button>

          {/* Primary WhatsApp Button */}
          <a
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-brand-red to-brand-red-hover hover:from-brand-red-hover hover:to-red-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.02] shadow-md shadow-brand-red/25 active:scale-[0.99] whitespace-nowrap"
            href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Fry%20Day!%20I%20would%20like%20to%20view%20the%20specials%20and%20order.`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            <span>Order on WhatsApp</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile navigation menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 rounded-xl text-primary dark:text-red-400 hover:bg-surface-container dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Sub-Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-outline-variant/30 dark:border-zinc-800 bg-surface dark:bg-[#1a1a1d] px-6 py-4 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={handleNavClick}
              className="block py-2 text-on-surface-variant dark:text-zinc-300 hover:text-brand-red dark:hover:text-red-400 font-semibold text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            onClick={handleNavClick}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-brand-red text-white px-4 py-2.5 rounded-full font-semibold text-sm shadow-md"
            href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Fry%20Day!%20I%20would%20like%20to%20view%20the%20specials%20and%20order.`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            <span>Order on WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
};
